import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Enquire",
  description: "Contact Vistar City for plotted development options across Patna, Muzaffarpur and Raxaul.",
  path: "/plots",
  index: false,
});

/** Client policy 2C — no public plot inventory; send visitors to enquiry form. */
export default function PlotsPage() {
  redirect("/contact");
}
