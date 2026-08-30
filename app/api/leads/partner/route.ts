import { persistLead } from "@/lib/leads/persist";
import { partnerLeadSchema } from "@/lib/leads/schemas";
import { leadServerError, leadSuccess, leadValidationError } from "@/lib/leads/api-response";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = partnerLeadSchema.safeParse(json);
    if (!parsed.success) return leadValidationError(parsed.error);

    const { leadId } = await persistLead("partner", parsed.data);

    return leadSuccess(
      "Thank you. Our partnerships team will review your application and contact you soon.",
      leadId,
    );
  } catch {
    return leadServerError();
  }
}
