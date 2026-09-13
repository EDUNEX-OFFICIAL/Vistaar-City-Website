"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

type LeadFormFeedbackProps = {
  status: "idle" | "submitting" | "success" | "error";
  message: string | null;
  successTitle?: string;
};

export const formLabelClass = "mb-1.5 block text-sm font-medium text-forest-950";

const controlBase =
  "w-full rounded-sm border bg-sand-100 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

export function formControlClass(hasError: boolean, withIcon = false) {
  const pad = withIcon ? "pl-10 pr-4 py-2.5" : "px-4 py-3";
  return hasError
    ? `${controlBase} ${pad} border-error focus:border-error focus-visible:ring-error/40`
    : `${controlBase} ${pad} border-sand-200 focus:border-forest-900 focus-visible:ring-forest-900`;
}

export const formSelectClass = (hasError: boolean) =>
  `${formControlClass(hasError)} cursor-pointer appearance-none text-charcoal/80`;

export const formTextareaClass = (hasError: boolean) => formControlClass(hasError);

export const formSubmitClass =
  "min-h-12 w-full rounded-md bg-forest-800 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-forest-900 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

export function FormLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={formLabelClass}>
      {children}
    </label>
  );
}

export function FormSubmitButton({
  isSubmitting,
  children,
  submittingLabel = "Sending…",
}: {
  isSubmitting: boolean;
  children: ReactNode;
  submittingLabel?: string;
}) {
  return (
    <button type="submit" disabled={isSubmitting} className={formSubmitClass}>
      {isSubmitting ? submittingLabel : children}
    </button>
  );
}

/** @deprecated Use formControlClass(hasError, true) */
export function fieldClass(hasError: boolean) {
  return formControlClass(hasError, true);
}

export function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-xs text-error" role="alert">
      {message}
    </p>
  );
}

export function fieldErrorId(fieldId: string) {
  return `${fieldId}-err`;
}

export default function LeadFormFeedback({
  status,
  message,
  successTitle = "Request received",
}: LeadFormFeedbackProps) {
  if (status === "success" && message) {
    return (
      <div
        className="rounded-sm border border-forest-900/20 bg-forest-900/5 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-forest-800" aria-hidden />
        <h4 className="mb-2 font-serif text-lg font-semibold text-forest-900">{successTitle}</h4>
        <p className="text-sm text-charcoal/80">{message}</p>
        <p className="mt-3 text-xs text-charcoal/60">
          Need help sooner? Call{" "}
          <a href="tel:+919905006838" className="font-semibold text-forest-800 hover:text-forest-900">
            +91 99050 06838
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "error" && message) {
    return (
      <div
        className="rounded-sm border border-error/30 bg-error/5 p-4 text-sm text-error"
        role="alert"
        aria-live="assertive"
      >
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{message}</span>
        </div>
      </div>
    );
  }

  return null;
}

export const formPanelClass =
  "rounded-sm border border-sand-200 bg-ivory p-5 shadow-sm sm:p-8";

export const formPanelTitleClass = "mb-6 font-serif text-xl font-semibold text-forest-900";
