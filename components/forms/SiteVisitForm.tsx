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

export default function SiteVisitForm({ defaultProject }: { defaultProject?: string }) {
  const form = useLeadSubmit("/api/leads/site-visit");
  const known = featuredProjects.some((project) => project.slug === defaultProject);
  const started = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const slug = String(data.get("project") ?? "");
    const project = featuredProjects.find((item) => item.slug === slug);
    trackEvent(analyticsEvents.formSubmit, { form: "site-visit" });
    const ok = await form.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email") || undefined,
      location: project?.formLocation,
      preferredDate: data.get("preferredDate") || undefined,
      projectRef: project?.name,
      message: data.get("message") || undefined,
    });
    if (ok) event.currentTarget.reset();
  }

  if (form.status === "success") {
    return <LeadFormFeedback status={form.status} message={form.message} successTitle="Request received" />;
  }

  return (
    <form
      className="space-y-5"
      onSubmit={onSubmit}
      onFocus={() => {
        if (started.current) return;
        started.current = true;
        trackEvent(analyticsEvents.formStart, { form: "site-visit" });
      }}
      noValidate
    >
      <LeadFormFeedback status={form.status} message={form.message} />
      <div>
        <FormLabel htmlFor="visit-name">Name</FormLabel>
        <input id="visit-name" name="name" required autoComplete="name" className={formControlClass(!!form.fieldErrors.name)} aria-invalid={!!form.fieldErrors.name} aria-describedby={form.fieldErrors.name ? fieldErrorId("visit-name") : undefined} />
        <FieldError id={fieldErrorId("visit-name")} message={form.fieldErrors.name} />
      </div>
      <div>
        <FormLabel htmlFor="visit-phone">Phone</FormLabel>
        <input id="visit-phone" name="phone" required autoComplete="tel" inputMode="tel" className={formControlClass(!!form.fieldErrors.phone)} aria-invalid={!!form.fieldErrors.phone} aria-describedby={form.fieldErrors.phone ? fieldErrorId("visit-phone") : undefined} />
        <FieldError id={fieldErrorId("visit-phone")} message={form.fieldErrors.phone} />
      </div>
      <div>
        <FormLabel htmlFor="visit-email">Email (optional)</FormLabel>
        <input id="visit-email" name="email" type="email" autoComplete="email" className={formControlClass(!!form.fieldErrors.email)} aria-invalid={!!form.fieldErrors.email} />
        <FieldError message={form.fieldErrors.email} />
      </div>
      <div>
        <FormLabel htmlFor="visit-project">Preferred project</FormLabel>
        <select id="visit-project" name="project" defaultValue={known ? defaultProject : ""} className={formControlClass(false)}>
          <option value="">Select a project</option>
          {featuredProjects.map((project) => (
            <option key={project.slug} value={project.slug}>
              {project.name} — {project.location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <FormLabel htmlFor="visit-date">Preferred visit date</FormLabel>
        <input id="visit-date" name="preferredDate" type="date" className={formControlClass(false)} />
      </div>
      <div>
        <FormLabel htmlFor="visit-message">Message (optional)</FormLabel>
        <textarea id="visit-message" name="message" rows={4} className={formTextareaClass(false)} />
      </div>
      <FormSubmitButton isSubmitting={form.isSubmitting}>Request a Site Visit</FormSubmitButton>
      <p className="text-[13px] text-muted">This is a request, not a confirmed booking.</p>
    </form>
  );
}
