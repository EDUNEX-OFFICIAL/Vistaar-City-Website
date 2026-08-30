"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLeadSubmit } from "@/hooks/use-lead-submit";
import LeadFormFeedback, {
  FieldError,
  FormLabel,
  FormSubmitButton,
  fieldErrorId,
  formControlClass,
  formPanelTitleClass,
  formSelectClass,
  formTextareaClass,
} from "@/components/forms/LeadFormFeedback";
import { sectionPad } from "@/lib/section-styles";
import type { FormEvent } from "react";

const LOCATIONS = ["Patna Region", "Muzaffarpur", "Raxaul"] as const;
const PLOT_REQUIREMENTS = [
  "Under 1000 sq.ft.",
  "1000 - 1500 sq.ft.",
  "Above 1500 sq.ft.",
  "Not sure yet",
] as const;

export default function ContactEnquirySection() {
  const enquiry = useLeadSubmit("/api/leads/enquiry");

  async function handleEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const ok = await enquiry.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email") || undefined,
      location: data.get("location"),
      plotRequirement: data.get("plotRequirement"),
      message: data.get("message") || undefined,
    });
    if (ok) form.reset();
  }

  return (
    <section className={`bg-ivory ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 font-serif text-3xl font-semibold text-forest-900 sm:mb-4 sm:text-4xl">
              How To Reach Us
            </h2>
            <p className="mb-8 text-base font-light text-charcoal/70 sm:mb-12 sm:text-lg">
              Call, WhatsApp, or send an enquiry — our team will help with project details and next steps.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-ivory text-forest-900 shadow-sm">
                  <MapPin className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-charcoal">Corporate Office</h4>
                  <p className="text-xs leading-relaxed text-charcoal/70">
                    Vistar City Headquarters
                    <br />
                    Patna, Bihar, India
                    <br />
                    (Placeholder Address)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-ivory text-forest-900 shadow-sm">
                  <Phone className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-charcoal">Contact Numbers</h4>
                  <p className="text-xs leading-relaxed text-charcoal/70">
                    <a href="tel:+919905006838" className="hover:text-forest-900">
                      Call: +91 99050 06838
                    </a>
                    <br />
                    <a
                      href="https://wa.me/919905006838"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-forest-900"
                    >
                      WhatsApp: +91 99050 06838
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-ivory text-forest-900 shadow-sm">
                  <Mail className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-charcoal">Email Address</h4>
                  <p className="text-xs leading-relaxed text-charcoal/70">
                    <a href="mailto:info@vistarcity.com" className="hover:text-forest-900">
                      info@vistarcity.com
                    </a>
                    <br />
                    <a href="mailto:sales@vistarcity.com" className="hover:text-forest-900">
                      sales@vistarcity.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-sand-200 bg-ivory p-5 shadow-sm sm:p-8">
            <h3 className={formPanelTitleClass}>Send an Enquiry</h3>
            {enquiry.status === "success" ? (
              <LeadFormFeedback
                status={enquiry.status}
                message={enquiry.message}
                successTitle="Enquiry received"
              />
            ) : (
              <form className="space-y-4" onSubmit={handleEnquiry} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="eq-name">Name</FormLabel>
                    <input
                      id="eq-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-invalid={!!enquiry.fieldErrors.name}
                      aria-describedby={enquiry.fieldErrors.name ? fieldErrorId("eq-name") : undefined}
                      className={formControlClass(!!enquiry.fieldErrors.name)}
                    />
                    <FieldError id={fieldErrorId("eq-name")} message={enquiry.fieldErrors.name} />
                  </div>
                  <div>
                    <FormLabel htmlFor="eq-phone">Phone</FormLabel>
                    <input
                      id="eq-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      aria-invalid={!!enquiry.fieldErrors.phone}
                      aria-describedby={enquiry.fieldErrors.phone ? fieldErrorId("eq-phone") : undefined}
                      className={formControlClass(!!enquiry.fieldErrors.phone)}
                    />
                    <FieldError id={fieldErrorId("eq-phone")} message={enquiry.fieldErrors.phone} />
                  </div>
                </div>
                <div>
                  <FormLabel htmlFor="eq-email">Email (optional)</FormLabel>
                  <input
                    id="eq-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!enquiry.fieldErrors.email}
                    aria-describedby={enquiry.fieldErrors.email ? fieldErrorId("eq-email") : undefined}
                    className={formControlClass(!!enquiry.fieldErrors.email)}
                  />
                  <FieldError id={fieldErrorId("eq-email")} message={enquiry.fieldErrors.email} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <FormLabel htmlFor="eq-location">Location</FormLabel>
                    <select
                      id="eq-location"
                      name="location"
                      required
                      defaultValue=""
                      aria-invalid={!!enquiry.fieldErrors.location}
                      aria-describedby={enquiry.fieldErrors.location ? fieldErrorId("eq-location") : undefined}
                      className={formSelectClass(!!enquiry.fieldErrors.location)}
                    >
                      <option value="" disabled>
                        Preferred location
                      </option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <FieldError id={fieldErrorId("eq-location")} message={enquiry.fieldErrors.location} />
                  </div>
                  <div>
                    <FormLabel htmlFor="eq-size">Plot requirement</FormLabel>
                    <select
                      id="eq-size"
                      name="plotRequirement"
                      required
                      defaultValue=""
                      aria-invalid={!!enquiry.fieldErrors.plotRequirement}
                      aria-describedby={
                        enquiry.fieldErrors.plotRequirement ? fieldErrorId("eq-size") : undefined
                      }
                      className={formSelectClass(!!enquiry.fieldErrors.plotRequirement)}
                    >
                      <option value="" disabled>
                        Plot requirement
                      </option>
                      {PLOT_REQUIREMENTS.map((req) => (
                        <option key={req} value={req}>
                          {req}
                        </option>
                      ))}
                    </select>
                    <FieldError id={fieldErrorId("eq-size")} message={enquiry.fieldErrors.plotRequirement} />
                  </div>
                </div>
                <div>
                  <FormLabel htmlFor="eq-message">Message (optional)</FormLabel>
                  <textarea id="eq-message" name="message" rows={4} className={formTextareaClass(false)} />
                </div>
                {enquiry.status === "error" && (
                  <LeadFormFeedback status={enquiry.status} message={enquiry.message} />
                )}
                <FormSubmitButton isSubmitting={enquiry.isSubmitting}>Send Enquiry</FormSubmitButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
