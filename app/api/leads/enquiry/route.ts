import { persistLead } from "@/lib/leads/persist";
import { enquiryLeadSchema } from "@/lib/leads/schemas";
import { leadServerError, leadSuccess, leadValidationError } from "@/lib/leads/api-response";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = enquiryLeadSchema.safeParse(json);
    if (!parsed.success) return leadValidationError(parsed.error);

    const payload = {
      ...parsed.data,
      email: parsed.data.email || undefined,
    };
    const { leadId } = await persistLead("enquiry", payload);

    return leadSuccess(
      "Thank you. Our team will reach out with suitable options for your requirements.",
      leadId,
    );
  } catch {
    return leadServerError();
  }
}
