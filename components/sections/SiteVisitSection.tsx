"use client";

import Image from "next/image";
import { Calendar, User, MapPin, Phone } from "lucide-react";
import { brandImages } from "@/lib/brand-images";
import { useLeadSubmit } from "@/hooks/use-lead-submit";
import LeadFormFeedback, {
  FieldError,
  FormLabel,
  FormSubmitButton,
  fieldClass,
  fieldErrorId,
  formPanelTitleClass,
} from "@/components/forms/LeadFormFeedback";
import { sectionPad } from "@/lib/section-styles";
import type { FormEvent } from "react";

const LOCATIONS = ["Patna Region", "Muzaffarpur", "Raxaul"] as const;

export default function SiteVisitSection() {
  const siteVisit = useLeadSubmit("/api/leads/site-visit");

  async function handleSiteVisit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const ok = await siteVisit.submit({
      name: data.get("name"),
      phone: data.get("phone"),
      location: data.get("location"),
      preferredDate: data.get("preferredDate") || undefined,
    });
    if (ok) form.reset();
  }

  return (
    <section className={`border-b border-sand-200 bg-ivory ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-light leading-relaxed text-charcoal/80 sm:mb-8 sm:text-lg">
              Visit the project, understand the surroundings, and explore your options with our team on the ground.
              Share a few details and we will confirm a suitable time.
            </p>

            <div className="rounded-sm border border-sand-200 bg-sand-100 p-5 shadow-sm sm:p-8">
              <h2 className={formPanelTitleClass}>Request a Visit</h2>
              {siteVisit.status === "success" ? (
                <LeadFormFeedback
                  status={siteVisit.status}
                  message={siteVisit.message}
                  successTitle="Site visit request received"
                />
              ) : (
                <form className="space-y-4" onSubmit={handleSiteVisit} noValidate>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <FormLabel htmlFor="sv-name">Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" aria-hidden />
                        <input
                          id="sv-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Full Name"
                          aria-invalid={!!siteVisit.fieldErrors.name}
                          aria-describedby={siteVisit.fieldErrors.name ? fieldErrorId("sv-name") : undefined}
                          className={fieldClass(!!siteVisit.fieldErrors.name)}
                        />
                      </div>
                      <FieldError id={fieldErrorId("sv-name")} message={siteVisit.fieldErrors.name} />
                    </div>
                    <div>
                      <FormLabel htmlFor="sv-phone">Phone</FormLabel>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" aria-hidden />
                        <input
                          id="sv-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="Mobile Number"
                          aria-invalid={!!siteVisit.fieldErrors.phone}
                          aria-describedby={siteVisit.fieldErrors.phone ? fieldErrorId("sv-phone") : undefined}
                          className={fieldClass(!!siteVisit.fieldErrors.phone)}
                        />
                      </div>
                      <FieldError id={fieldErrorId("sv-phone")} message={siteVisit.fieldErrors.phone} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <FormLabel htmlFor="sv-location">Location</FormLabel>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" aria-hidden />
                        <select
                          id="sv-location"
                          name="location"
                          required
                          defaultValue=""
                          aria-invalid={!!siteVisit.fieldErrors.location}
                          aria-describedby={siteVisit.fieldErrors.location ? fieldErrorId("sv-location") : undefined}
                          className={fieldClass(!!siteVisit.fieldErrors.location)}
                        >
                          <option value="" disabled>
                            Select Location
                          </option>
                          {LOCATIONS.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>
                      <FieldError id={fieldErrorId("sv-location")} message={siteVisit.fieldErrors.location} />
                    </div>
                    <div>
                      <FormLabel htmlFor="sv-date">Preferred date</FormLabel>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" aria-hidden />
                        <input id="sv-date" name="preferredDate" type="date" className={fieldClass(false)} />
                      </div>
                    </div>
                  </div>
                  {siteVisit.status === "error" && (
                    <LeadFormFeedback status={siteVisit.status} message={siteVisit.message} />
                  )}
                  <FormSubmitButton isSubmitting={siteVisit.isSubmitting}>Request Site Visit</FormSubmitButton>
                </form>
              )}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-sand-200 shadow-sm sm:aspect-[3/4] lg:aspect-[2/3] lg:max-h-[600px]">
            <Image
              src={brandImages.siteVisit}
              alt="Family visiting a residential plot"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
