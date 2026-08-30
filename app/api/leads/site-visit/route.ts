import { persistLead } from "@/lib/leads/persist";
import { siteVisitLeadSchema } from "@/lib/leads/schemas";
import { leadServerError, leadSuccess, leadValidationError } from "@/lib/leads/api-response";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = siteVisitLeadSchema.safeParse(json);
    if (!parsed.success) return leadValidationError(parsed.error);

    const { leadId } = await persistLead("site-visit", parsed.data);

    return leadSuccess(
      "Thank you. Our team will contact you shortly to confirm your site visit.",
      leadId,
    );
  } catch {
    return leadServerError();
  }
}
