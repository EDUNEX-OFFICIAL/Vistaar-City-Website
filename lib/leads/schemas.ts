import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(10, "Enter a valid mobile number")
  .max(15, "Enter a valid mobile number")
  .regex(/^[\d\s+\-()]+$/, "Enter a valid mobile number");

const locationSchema = z.enum(["Patna Region", "Muzaffarpur", "Raxaul"], {
  message: "Select a location",
});

const optionalEmailSchema = z.preprocess(
  (val) => (val === "" || val === undefined || val === null ? undefined : val),
  z.string().email("Enter a valid email").optional(),
);

export const siteVisitLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  phone: phoneSchema,
  location: locationSchema,
  preferredDate: z.string().trim().optional(),
  projectRef: z.string().trim().max(200).optional(),
});

export const enquiryLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  phone: phoneSchema,
  email: optionalEmailSchema,
  location: locationSchema,
  plotRequirement: z.enum(
    ["Under 1000 sq.ft.", "1000 - 1500 sq.ft.", "Above 1500 sq.ft.", "Not sure yet"],
    { message: "Select a plot requirement" },
  ),
  message: z.string().trim().max(2000).optional(),
  projectRef: z.string().trim().max(200).optional(),
});

export const partnerLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  phone: phoneSchema,
  email: z.string().trim().email("Enter a valid email"),
  city: z.string().trim().min(2, "Enter your city").max(120),
  experience: z.enum(["Beginner", "1-3 Years", "3+ Years"], {
    message: "Select your experience",
  }),
  partnerType: z.enum(
    ["Independent Agent", "Referral Partner", "Property Consultant", "Other"],
    { message: "Select a partner type" },
  ),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, { message: "Consent is required" }),
});

export type SiteVisitLeadInput = z.infer<typeof siteVisitLeadSchema>;
export type EnquiryLeadInput = z.infer<typeof enquiryLeadSchema>;
export type PartnerLeadInput = z.infer<typeof partnerLeadSchema>;
