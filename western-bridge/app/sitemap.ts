import type { MetadataRoute } from "next";

import {
  localizedUrl,
  type SiteLocale,
} from "@/lib/seo";

type SitemapPage = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

const locales: SiteLocale[] = [
  "de",
  "en",
  "ar",
];

const pages: SitemapPage[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },

  {
    path: "/individuals",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/businesses",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/medical",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/education",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/germany",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.7,
  },

  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },

  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
  },

  {
    path: "/disclaimer",
    changeFrequency: "yearly",
    priority: 0.3,
  },

  {
    path: "/cookie-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: localizedUrl(
        locale,
        page.path
      ),

      changeFrequency:
        page.changeFrequency,

      priority:
        page.priority,

      alternates: {
        languages: {
          de:
            localizedUrl(
              "de",
              page.path
            ),

          en:
            localizedUrl(
              "en",
              page.path
            ),

          ar:
            localizedUrl(
              "ar",
              page.path
            ),

          "x-default":
            localizedUrl(
              "de",
              page.path
            ),
        },
      },
    }))
  );
}