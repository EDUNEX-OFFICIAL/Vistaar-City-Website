/**
 * Persist baked Nephele sprites in IndexedDB so soft reloads skip re-bake.
 * Bump CACHE_VERSION when filter params or bake sizes change.
 */
import type { CloudQuality } from "@/lib/clouds/nephele-field";

export const CLOUD_CACHE_VERSION = 5;

const DB_NAME = "vistar-cloud-sprites";
const STORE = "bitmaps";

type CacheRecord = {
  key: string;
  blob: Blob;
  width: number;
  height: number;
  savedAt: number;
};

function cacheKey(quality: CloudQuality, cloudId: string) {
  return `v${CLOUD_CACHE_VERSION}:${quality}:${cloudId}`;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onerror = () => reject(req.error ?? new Error("idb-open-failed"));
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "key" });
      }
    };
    req.onsuccess = () => resolve(req.result);
  });
}

async function bitmapToBlob(bitmap: ImageBitmap): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas-2d-unavailable");
  ctx.drawImage(bitmap, 0, 0);
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("toBlob-failed"))),
      "image/webp",
      0.92,
    );
  });
}

export async function readCloudCache(quality: CloudQuality, cloudId: string): Promise<ImageBitmap | null> {
  try {
    const db = await openDb();
    const key = cacheKey(quality, cloudId);
    const record = await new Promise<CacheRecord | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result as CacheRecord | undefined);
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (!record?.blob) return null;
    return await createImageBitmap(record.blob);
  } catch {
    return null;
  }
}

export async function writeCloudCache(quality: CloudQuality, cloudId: string, bitmap: ImageBitmap): Promise<void> {
  try {
    const blob = await bitmapToBlob(bitmap);
    const db = await openDb();
    const record: CacheRecord = {
      key: cacheKey(quality, cloudId),
      blob,
      width: bitmap.width,
      height: bitmap.height,
      savedAt: Date.now(),
    };
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(STORE).put(record);
    });
    db.close();
  } catch {
    /* cache is best-effort */
  }
}
