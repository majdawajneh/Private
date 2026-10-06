import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Arabic,
} from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Western Bridge",
    template: "%s | Western Bridge",
  },

  description:
    "International consulting, preparation, qualification, business development, healthcare, education, and institutional cooperation.",
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