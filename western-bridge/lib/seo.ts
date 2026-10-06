import type { Metadata } from "next";

export const SITE_NAME = "Western Bridge";

export const SITE_ALTERNATE_NAMES = [
  "WesternBridge",
  "الجسر الغربي",
  "ويسترن بريدج",
];

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://western-bridge.majdmahmoud003.workers.dev"
).replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return `${SITE_URL}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/services-hero-international.jpg",
}: CreatePageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",

      images: [
        {
          url: imageUrl,
          alt: `${title} - Western Bridge`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}