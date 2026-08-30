import type { LeadSource } from "./types";

/**
 * Lead persistence layer — stub mode until dedicated VPS DB or ERP vistaar tenant.
 * Swap this module when DATABASE_URL is ready; API routes stay unchanged.
 */
export async function persistLead(
  source: LeadSource,
  _payload: Record<string, unknown>,
): Promise<{ leadId: string }> {
  void source;
  void _payload;
  return { leadId: `stub-${Date.now()}` };
}
