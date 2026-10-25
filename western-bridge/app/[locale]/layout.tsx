import type { Metadata } from "next";

import {
  Inter,
  Noto_Sans_Arabic,
} from "next/font/google";

import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Western Bridge",
    template: "%s | Western Bridge",
  },

  description:
    "International consulting, preparation, qualification, business development, healthcare, education and institutional cooperation.",
};

type LocaleLayoutProps = {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${inter.variable} ${notoSansArabic.variable}`}
    >
      <body
        className={
          isArabic
            ? "arabic-site"
            : "western-site"
        }
      >
        <NextIntlClientProvider>
          <Navbar />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}