import type { Metadata } from "next";

export const SITE = {
  name: "Atrium",
  legalName: "Atrium Design & Build",
  url: "https://atrium-designbuild.example",
  description:
    "Atrium Design & Build is an integrated interior design and build firm in Singapore, delivering office, industrial and retail fit-out across the Asia Pacific.",
  tagline: "Where workspaces become living spaces.",
  email: "enquiry@atrium-db.example",
  phone: "+65 6000 0000",
};

export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} — ${SITE.legalName}`,
      description,
      siteName: SITE.legalName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.legalName}`,
      description,
    },
  };
}
