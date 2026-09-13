import {
  CLOUD_FIELD,
  MOBILE_CLOUD_FIELD,
  MOBILE_CLOUD_FIELD_LOW,
  type CloudQuality,
  type CloudSpec,
} from "@/lib/clouds/nephele-field";

type NetworkInformation = {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
};

export type CloudProfile = {
  quality: CloudQuality;
  field: readonly CloudSpec[];
};

const LOW_IDS = ["sL", "sR", "sT", "c0", "c4"] as const;
const MID_IDS = ["sL", "sR", "sT", "c0", "c1", "c2", "c4", "c6"] as const;

function fieldByIds(ids: readonly string[]) {
  return CLOUD_FIELD.filter((cloud) => ids.includes(cloud.id));
}

function getConnection(): NetworkInformation | null {
  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  };
  return nav.connection || nav.mozConnection || nav.webkitConnection || null;
}

/** Mbps from already-downloaded page assets — no extra request. */
function mbpsFromResourceTiming(): number | null {
  if (typeof performance === "undefined") return null;
  const samples: number[] = [];
  for (const entry of performance.getEntriesByType("resource") as PerformanceResourceTiming[]) {
    const bytes = entry.transferSize;
    const ms = entry.responseEnd - entry.responseStart;
    if (bytes >= 12_000 && ms >= 8) {
      samples.push((bytes * 8) / (ms / 1000) / 1e6);
    }
  }
  if (!samples.length) return null;
  samples.sort((a, b) => a - b);
  return samples[Math.floor(samples.length / 2)];
}

export function pickCloudProfile(): CloudProfile {
  const conn = getConnection();
  const saveData = conn?.saveData === true;
  const type = conn?.effectiveType;
  const downlink = typeof conn?.downlink === "number" && conn.downlink > 0 ? conn.downlink : null;
  const rtt = typeof conn?.rtt === "number" ? conn.rtt : null;
  const measured = mbpsFromResourceTiming();
  const speed = measured ?? downlink;
  const desktop = window.matchMedia("(min-width: 768px)").matches;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

  if (!desktop) {
    if (saveData || type === "slow-2g" || type === "2g" || (speed != null && speed < 1.2)) {
      return { quality: "low", field: MOBILE_CLOUD_FIELD_LOW };
    }
    if (type === "3g" || (rtt != null && rtt > 350) || (speed != null && speed < 4)) {
      return { quality: "mid", field: MOBILE_CLOUD_FIELD };
    }
    return { quality: "high", field: MOBILE_CLOUD_FIELD };
  }

  if (saveData || type === "slow-2g" || type === "2g") {
    return { quality: "low", field: fieldByIds(LOW_IDS) };
  }

  if (type === "3g" || (rtt != null && rtt > 400) || (speed != null && speed < 1.5)) {
    return { quality: "mid", field: fieldByIds(MID_IDS) };
  }

  const ultra =
    window.innerWidth >= 1440 &&
    memory >= 8 &&
    (speed == null || speed >= 8) &&
    type !== "3g";

  if (ultra) {
    return { quality: "ultra", field: CLOUD_FIELD };
  }

  if (type === "4g" || speed == null || speed >= 5) {
    return { quality: "high", field: CLOUD_FIELD };
  }

  return { quality: "mid", field: fieldByIds(MID_IDS) };
}
