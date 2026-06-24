import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description: "Bring your office vision to life — connect with the Atrium Design & Build team for an integrated interior fit-out across the Asia Pacific.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get In Touch" title={"Bring your vision\nto life with us."} description="Tell us about your space and what you'd like to achieve. We'll be in touch within two working days." />
      <ContactForm />
    </>
  );
}
