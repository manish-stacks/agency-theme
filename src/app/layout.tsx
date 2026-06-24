import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/anim/SmoothScroll";
import { ScrollProgress } from "@/components/anim/ScrollProgress";
import { SITE } from "@/lib/seo";
import { offices, contact } from "@/data/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.legalName}: Office Interior Design | Office Renovation`, template: `%s — ${SITE.legalName}` },
  description: SITE.description,
  keywords: ["interior design", "office renovation", "design and build", "office fit-out", "Singapore interior", "retail fit-out", "industrial fit-out"],
  authors: [{ name: SITE.legalName }],
  openGraph: { type: "website", url: SITE.url, siteName: SITE.legalName, title: `${SITE.legalName}: Office Interior Design`, description: SITE.description },
  twitter: { card: "summary_large_image", title: SITE.legalName, description: SITE.tagline },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  description: SITE.description,
  email: contact.email,
  address: offices.map((o) => ({ "@type": "PostalAddress", addressCountry: o.country, streetAddress: o.address })),
  sameAs: contact.socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
