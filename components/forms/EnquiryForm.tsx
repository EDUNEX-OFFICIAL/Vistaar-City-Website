"use client";

import type { FormEvent } from "react";
import { useRef } from "react";
import { featuredProjects } from "@/lib/catalog";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { useLeadSubmit } from "@/hooks/use-lead-submit";
import LeadFormFeedback, {
  FieldError,
  FormLabel,
  FormSubmitButton,
  fieldErrorId,
  formControlClass,
  formTextareaClass,
} from "@/components/forms/LeadFormFeedback";

export default function EnquiryForm() {
  const form = useLeadSubmit("/api/leads/enquiry");
  const started = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const slug = String(data.get("project") ?? "");
    const project = featuredProjects.find((item) => item.slug === slug);
    trackEvent(analyticsEvents.formSubmit, { form: "enquiry" });
    const ok = await form.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email") || undefined,
      location: project?.formLocation,
      projectRef: project?.name,
      message: data.get("message") || undefined,
    });
    if (ok) event.currentTarget.reset();
  }

  if (form.status === "success") {
    return <LeadFormFeedback status={form.status} message={form.message} successTitle="Message received" />;
  }

  return (
    <form
      className="space-y-5"
      onSubmit={onSubmit}
      onFocus={() => {
        if (started.current) return;
        started.current = true;
        trackEvent(analyticsEvents.formStart, { form: "enquiry" });
      }}
      noValidate
    >
      <LeadFormFeedback status={form.status} message={form.message} />
      <div>
        <FormLabel htmlFor="enquiry-name">Name</FormLabel>
        <input id="enquiry-name" name="name" required autoComplete="name" className={formControlClass(!!form.fieldErrors.name)} aria-invalid={!!form.fieldErrors.name} aria-describedby={form.fieldErrors.name ? fieldErrorId("enquiry-name") : undefined} />
        <FieldError id={fieldErrorId("enquiry-name")} message={form.fieldErrors.name} />
      </div>
      <div>
        <FormLabel htmlFor="enquiry-phone">Phone</FormLabel>
        <input id="enquiry-phone" name="phone" required autoComplete="tel" inputMode="tel" className={formControlClass(!!form.fieldErrors.phone)} aria-invalid={!!form.fieldErrors.phone} />
        <FieldError message={form.fieldErrors.phone} />
      </div>
      <div>
        <FormLabel htmlFor="enquiry-email">Email (optional)</FormLabel>
        <input id="enquiry-email" name="email" type="email" autoComplete="email" className={formControlClass(!!form.fieldErrors.email)} />
        <FieldError message={form.fieldErrors.email} />
      </div>
      <div>
        <FormLabel htmlFor="enquiry-project">Preferred project</FormLabel>
        <select id="enquiry-project" name="project" className={formControlClass(false)} defaultValue="">
          <option value="">Select a project</option>
          {featuredProjects.map((project) => (
            <option key={project.slug} value={project.slug}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <FormLabel htmlFor="enquiry-message">Message (optional)</FormLabel>
        <textarea id="enquiry-message" name="message" rows={4} className={formTextareaClass(!!form.fieldErrors.message)} />
        <FieldError message={form.fieldErrors.message} />
      </div>
      <FormSubmitButton isSubmitting={form.isSubmitting}>Send a message</FormSubmitButton>
    </form>
  );
}
