export type LeadSource = "site-visit" | "enquiry" | "partner";

export type SiteVisitLead = {
  name: string;
  phone: string;
  location: string;
  preferredDate?: string;
  projectRef?: string;
};

export type EnquiryLead = {
  name: string;
  phone: string;
  email?: string;
  location: string;
  plotRequirement: string;
  message?: string;
  projectRef?: string;
};

export type PartnerLead = {
  name: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  partnerType: string;
  message?: string;
  consent: true;
};

export type LeadPayload = SiteVisitLead | EnquiryLead | PartnerLead;

export type LeadSubmitResponse = {
  success: true;
  message: string;
  leadId: string;
};

export type LeadErrorResponse = {
  success: false;
  error: string;
  details?: Record<string, string[]>;
};
