import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

import "./globals.css";

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

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Western Bridge | الجسر الغربي | ويسترن بريدج",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Western Bridge (الجسر الغربي / ويسترن بريدج) provides international consulting, preparation, qualification, healthcare, education, business development and institutional cooperation.",

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
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

  openGraph: {
    title:
      "Western Bridge | الجسر الغربي | ويسترن بريدج",

    description:
      "International consulting, preparation, qualification, healthcare, education, business development and institutional cooperation.",

    url: SITE_URL,
    siteName: SITE_NAME,

    type: "website",
    locale: "en_US",

    images: [
      {
        url: "/images/brandenburg-gate.jpg",
        alt: "Western Bridge international consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Western Bridge | الجسر الغربي | ويسترن بريدج",

    description:
      "International consulting, preparation, qualification, healthcare, education, business development and institutional cooperation.",

    images: ["/images/brandenburg-gate.jpg"],
  },

  verification: googleVerification
    ? {
        google: googleVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansArabic.variable}`}
    >
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}