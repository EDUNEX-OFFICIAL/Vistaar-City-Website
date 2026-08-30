"use client";

import { CheckCircle2 } from "lucide-react";
import { type FormEvent } from "react";
import { useLeadSubmit } from "@/hooks/use-lead-submit";
import LeadFormFeedback, {
  FieldError,
  FormLabel,
  FormSubmitButton,
  fieldErrorId,
  formControlClass,
  formPanelClass,
  formPanelTitleClass,
  formSelectClass,
  formTextareaClass,
} from "@/components/forms/LeadFormFeedback";

export default function PartnerProgramSection() {
  const partner = useLeadSubmit("/api/leads/partner");

  const benefits = [
    "Access to our property product portfolio",
    "Sales, marketing, and project information support",
    "Dedicated relationship and lead assistance",
    "Training and resources for partners",
  ];

  async function handlePartner(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const ok = await partner.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      city: data.get("city"),
      experience: data.get("experience"),
      partnerType: data.get("partnerType"),
      message: data.get("message") || undefined,
      consent: data.get("consent") === "on" ? true : undefined,
    });
    if (ok) form.reset();
  }

  return (
    <section id="partner-program" className="header-overlap relative border-b border-forest-800 bg-forest-900 py-12 text-ivory md:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden />
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-gold sm:mb-4">
              Partner Program
            </span>
            <h2 className="mb-4 font-serif text-3xl font-semibold leading-tight text-ivory sm:mb-6 sm:text-4xl md:text-5xl">
              Grow With Vistar City
            </h2>
            <p className="mb-6 text-base font-light leading-relaxed text-ivory/90 sm:mb-8 sm:text-lg">
              Vistar City provides an opportunity for property sales professionals, independent agents and referral
              partners to work with the company&apos;s plotted developments.
            </p>

            <ul className="mb-10 space-y-4 text-sm">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="font-medium text-ivory/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="max-w-md text-[10px] italic leading-relaxed text-ivory/50">
              Commissions and incentives are subject to company policy and applicable terms. We do not make guaranteed
              income claims.
            </p>
          </div>

          <div id="become-a-partner-form" className={formPanelClass}>
            <h3 className={formPanelTitleClass}>Apply to Partner</h3>
            {partner.status === "success" ? (
              <LeadFormFeedback
                status={partner.status}
                message={partner.message}
                successTitle="Application received"
              />
            ) : (
              <form className="space-y-4" onSubmit={handlePartner} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="pt-name">Full name</FormLabel>
                    <input
                      id="pt-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-invalid={!!partner.fieldErrors.name}
                      aria-describedby={
                        partner.fieldErrors.name ? fieldErrorId("pt-name") : undefined
                      }
                      className={formControlClass(!!partner.fieldErrors.name)}
                    />
                    <FieldError id={fieldErrorId("pt-name")} message={partner.fieldErrors.name} />
                  </div>
                  <div>
                    <FormLabel htmlFor="pt-phone">Mobile</FormLabel>
                    <input
                      id="pt-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      aria-invalid={!!partner.fieldErrors.phone}
                      aria-describedby={
                        partner.fieldErrors.phone ? fieldErrorId("pt-phone") : undefined
                      }
                      className={formControlClass(!!partner.fieldErrors.phone)}
                    />
                    <FieldError id={fieldErrorId("pt-phone")} message={partner.fieldErrors.phone} />
                  </div>
                </div>
                <div>
                  <FormLabel htmlFor="pt-email">Email</FormLabel>
                  <input
                    id="pt-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-invalid={!!partner.fieldErrors.email}
                    aria-describedby={partner.fieldErrors.email ? fieldErrorId("pt-email") : undefined}
                    className={formControlClass(!!partner.fieldErrors.email)}
                  />
                  <FieldError id={fieldErrorId("pt-email")} message={partner.fieldErrors.email} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="pt-city">City</FormLabel>
                    <input
                      id="pt-city"
                      name="city"
                      type="text"
                      required
                      aria-invalid={!!partner.fieldErrors.city}
                      aria-describedby={partner.fieldErrors.city ? fieldErrorId("pt-city") : undefined}
                      className={formControlClass(!!partner.fieldErrors.city)}
                    />
                    <FieldError id={fieldErrorId("pt-city")} message={partner.fieldErrors.city} />
                  </div>
                  <div>
                    <FormLabel htmlFor="pt-exp">Experience</FormLabel>
                    <select
                      id="pt-exp"
                      name="experience"
                      required
                      defaultValue=""
                      aria-invalid={!!partner.fieldErrors.experience}
                      aria-describedby={
                        partner.fieldErrors.experience ? fieldErrorId("pt-exp") : undefined
                      }
                      className={formSelectClass(!!partner.fieldErrors.experience)}
                    >
                      <option value="" disabled>
                        Real estate experience
                      </option>
                      <option>Beginner</option>
                      <option>1-3 Years</option>
                      <option>3+ Years</option>
                    </select>
                    <FieldError id={fieldErrorId("pt-exp")} message={partner.fieldErrors.experience} />
                  </div>
                </div>
                <div>
                  <FormLabel htmlFor="pt-type">Partner type</FormLabel>
                  <select
                    id="pt-type"
                    name="partnerType"
                    required
                    defaultValue=""
                    aria-invalid={!!partner.fieldErrors.partnerType}
                    aria-describedby={
                      partner.fieldErrors.partnerType ? fieldErrorId("pt-type") : undefined
                    }
                    className={formSelectClass(!!partner.fieldErrors.partnerType)}
                  >
                    <option value="" disabled>
                      Partner type
                    </option>
                    <option>Independent Agent</option>
                    <option>Referral Partner</option>
                    <option>Property Consultant</option>
                    <option>Other</option>
                  </select>
                  <FieldError id={fieldErrorId("pt-type")} message={partner.fieldErrors.partnerType} />
                </div>
                <div>
                  <FormLabel htmlFor="pt-msg">About you (optional)</FormLabel>
                  <textarea
                    id="pt-msg"
                    name="message"
                    rows={3}
                    className={formTextareaClass(false)}
                  />
                </div>
                <label className="group mt-2 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    aria-invalid={!!partner.fieldErrors.consent}
                    aria-describedby={
                      partner.fieldErrors.consent ? fieldErrorId("pt-consent") : undefined
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-sand-200 text-forest-900 focus-visible:ring-2 focus-visible:ring-forest-900"
                  />
                  <span className="text-[10px] leading-relaxed text-charcoal/70 transition-colors group-hover:text-charcoal">
                    I agree to be contacted by the Vistar City team regarding the partner program and accept the terms
                    of application.
                  </span>
                </label>
                <FieldError id={fieldErrorId("pt-consent")} message={partner.fieldErrors.consent} />
                {partner.status === "error" && (
                  <LeadFormFeedback status={partner.status} message={partner.message} />
                )}
                <FormSubmitButton isSubmitting={partner.isSubmitting} submittingLabel="Sending application…">
                  Apply As Partner
                </FormSubmitButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
