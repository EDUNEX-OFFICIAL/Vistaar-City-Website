"use client";

import type { FormEvent } from "react";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { useLeadSubmit } from "@/hooks/use-lead-submit";
import LeadFormFeedback, {
  FieldError,
  FormLabel,
  FormSubmitButton,
  formControlClass,
  formTextareaClass,
} from "@/components/forms/LeadFormFeedback";

const experience = ["Beginner", "1-3 Years", "3+ Years"] as const;
const partnerTypes = ["Independent Agent", "Referral Partner", "Property Consultant", "Other"] as const;

export default function PartnerForm() {
  const form = useLeadSubmit("/api/leads/partner");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    trackEvent(analyticsEvents.formSubmit, { form: "partner" });
    const ok = await form.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      city: data.get("city"),
      experience: data.get("experience"),
      partnerType: data.get("partnerType"),
      message: data.get("message") || undefined,
      consent: data.get("consent") === "on" ? true : undefined,
    });
    if (ok) event.currentTarget.reset();
  }

  if (form.status === "success") {
    return (
      <LeadFormFeedback
        status={form.status}
        message={form.message}
        successTitle="Application received"
      />
    );
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <LeadFormFeedback status={form.status} message={form.message} />
      <div>
        <FormLabel htmlFor="partner-name">Name</FormLabel>
        <input id="partner-name" name="name" required autoComplete="name" className={formControlClass(!!form.fieldErrors.name)} />
        <FieldError message={form.fieldErrors.name} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FormLabel htmlFor="partner-phone">Phone</FormLabel>
          <input id="partner-phone" name="phone" required autoComplete="tel" className={formControlClass(!!form.fieldErrors.phone)} />
          <FieldError message={form.fieldErrors.phone} />
        </div>
        <div>
          <FormLabel htmlFor="partner-email">Email</FormLabel>
          <input id="partner-email" name="email" type="email" required autoComplete="email" className={formControlClass(!!form.fieldErrors.email)} />
          <FieldError message={form.fieldErrors.email} />
        </div>
      </div>
      <div>
        <FormLabel htmlFor="partner-city">City</FormLabel>
        <input id="partner-city" name="city" required className={formControlClass(!!form.fieldErrors.city)} />
        <FieldError message={form.fieldErrors.city} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FormLabel htmlFor="partner-experience">Experience</FormLabel>
          <select id="partner-experience" name="experience" required defaultValue="" className={formControlClass(!!form.fieldErrors.experience)}>
            <option value="" disabled>
              Select
            </option>
            {experience.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <FieldError message={form.fieldErrors.experience} />
        </div>
        <div>
          <FormLabel htmlFor="partner-type">Partner type</FormLabel>
          <select id="partner-type" name="partnerType" required defaultValue="" className={formControlClass(!!form.fieldErrors.partnerType)}>
            <option value="" disabled>
              Select
            </option>
            {partnerTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <FieldError message={form.fieldErrors.partnerType} />
        </div>
      </div>
      <div>
        <FormLabel htmlFor="partner-message">Message (optional)</FormLabel>
        <textarea id="partner-message" name="message" rows={4} className={formTextareaClass(false)} />
      </div>
      <label className="flex items-start gap-3 text-sm text-charcoal">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4" required />
        <span>I agree to be contacted about the partner programme. This is not an income guarantee.</span>
      </label>
      <FieldError message={form.fieldErrors.consent} />
      <FormSubmitButton isSubmitting={form.isSubmitting}>Apply to partner</FormSubmitButton>
    </form>
  );
}
