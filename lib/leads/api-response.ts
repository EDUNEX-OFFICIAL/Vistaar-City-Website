import { NextResponse } from "next/server";
import type { ZodError } from "zod";
import type { LeadErrorResponse, LeadSubmitResponse } from "./types";

export function leadSuccess(message: string, leadId: string) {
  const body: LeadSubmitResponse = { success: true, message, leadId };
  return NextResponse.json(body, { status: 200 });
}

export function leadValidationError(error: ZodError) {
  const details: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form";
    if (!details[key]) details[key] = [];
    details[key].push(issue.message);
  }
  const body: LeadErrorResponse = {
    success: false,
    error: "Please check the form and try again.",
    details,
  };
  return NextResponse.json(body, { status: 400 });
}

export function leadServerError() {
  const body: LeadErrorResponse = {
    success: false,
    error: "Something went wrong. Please try again or call us directly.",
  };
  return NextResponse.json(body, { status: 500 });
}
