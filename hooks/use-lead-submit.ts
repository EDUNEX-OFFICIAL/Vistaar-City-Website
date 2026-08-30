"use client";

import { useCallback, useState } from "react";
import type { LeadErrorResponse, LeadSubmitResponse } from "@/lib/leads/types";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useLeadSubmit(endpoint: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const reset = useCallback(() => {
    setStatus("idle");
    setMessage(null);
    setFieldErrors({});
  }, []);

  const submit = useCallback(
    async (data: Record<string, unknown>) => {
      setStatus("submitting");
      setMessage(null);
      setFieldErrors({});

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = (await res.json()) as LeadSubmitResponse | LeadErrorResponse;

        if (!res.ok || !json.success) {
          const err = json as LeadErrorResponse;
          if (err.details) {
            const mapped: Record<string, string> = {};
            for (const [key, msgs] of Object.entries(err.details)) {
              mapped[key] = msgs[0] ?? "Invalid value";
            }
            setFieldErrors(mapped);
          }
          setMessage(err.error ?? "Something went wrong. Please try again.");
          setStatus("error");
          return false;
        }

        setMessage(json.message);
        setStatus("success");
        return true;
      } catch {
        setMessage("Something went wrong. Please try again or call us directly.");
        setStatus("error");
        return false;
      }
    },
    [endpoint],
  );

  return { submit, status, message, fieldErrors, reset, isSubmitting: status === "submitting" };
}
