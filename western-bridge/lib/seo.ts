import type { Metadata } from "next";

export const SITE_NAME =
  "Western Bridge";

export const SITE_ALTERNATE_NAMES = [
  "WesternBridge",
  "الجسر الغربي",
  "ويسترن بريدج",
];

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.westernbridge.de"
).replace(/\/+$/, "");

export type SiteLocale =
  | "de"
  | "en"
  | "ar";

export const DEFAULT_LOCALE: SiteLocale =
  "de";

export const SEO_IMAGE =
  "/images/seo/western-bridge-og.jpg";

const localeConfig = {
  de: {
    prefix: "",
    openGraphLocale: "de_DE",
  },

  en: {
    prefix: "/en",
    openGraphLocale: "en_GB",
  },

  ar: {
    prefix: "/ar",
    openGraphLocale: "ar_AR",
  },
} satisfies Record<
  SiteLocale,
  {
    prefix: string;
    openGraphLocale: string;
  }
>;


/* ========================================
   URL Helpers
======================================== */

export function absoluteUrl(
  path = "/"
) {
  if (
    path === "/" ||
    path === ""
  ) {
    return `${SITE_URL}/`;
  }

  const normalizedPath =
    path.startsWith("/")
      ? path
      : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
}


export function localizedPath(
  locale: SiteLocale,
  path = "/"
) {
  const prefix =
    localeConfig[locale].prefix;

  const normalizedPath =
    path === "/"
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;

  const result =
    `${prefix}${normalizedPath}`;

  return result || "/";
}


export function localizedUrl(
  locale: SiteLocale,
  path = "/"
) {
  return absoluteUrl(
    localizedPath(
      locale,
      path
    )
  );
}


/* ========================================
   Alternate Languages
======================================== */

export function createLanguageAlternates(
  path = "/"
) {
  return {
    de:
      localizedUrl(
        "de",
        path
      ),

    en:
      localizedUrl(
        "en",
        path
      ),

    ar:
      localizedUrl(
        "ar",
        path
      ),

    "x-default":
      localizedUrl(
        DEFAULT_LOCALE,
        path
      ),
  };
}


/* ========================================
   Page Metadata
======================================== */

type CreatePageMetadataOptions = {
  locale: SiteLocale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  locale,
  title,
  description,
  path = "/",
  image = SEO_IMAGE,
  imageAlt = SITE_NAME,
  noIndex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonicalUrl =
    localizedUrl(
      locale,
      path
    );

  const imageUrl =
    absoluteUrl(image);

  const alternateLocales =
    Object.entries(
      localeConfig
    )
      .filter(
        ([code]) =>
          code !== locale
      )
      .map(
        ([, config]) =>
          config.openGraphLocale
      );

  return {
    title: {
      absolute:
        title,
    },

    description,

    alternates: {
      canonical:
        canonicalUrl,

      languages:
        createLanguageAlternates(
          path
        ),
    },

    openGraph: {
      type:
        "website",

      siteName:
        SITE_NAME,

      title,

      description,

      url:
        canonicalUrl,

      locale:
        localeConfig[locale]
          .openGraphLocale,

      alternateLocale:
        alternateLocales,

      images: [
        {
          url:
            imageUrl,

          width:
            1200,

          height:
            630,

          alt:
            imageAlt,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [
        imageUrl,
      ],
    },

    robots: {
      index:
        !noIndex,

      follow:
        !noIndex,

      googleBot: {
        index:
          !noIndex,

        follow:
          !noIndex,

        "max-image-preview":
          "large",

        "max-snippet":
          -1,

        "max-video-preview":
          -1,
      },
    },
  };
}