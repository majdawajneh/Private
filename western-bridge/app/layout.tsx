import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: {
    default: "Western Bridge",
    template: "%s | Western Bridge",
  },

  description:
    "Western Bridge provides consulting, qualification, training, business development, and international pathway guidance with a strong focus on Germany and Europe.",

  keywords: [
    "Western Bridge",
    "Germany",
    "Business Consulting",
    "Medical Professionals",
    "German Language",
    "Professional Qualification",
    "International Opportunities",
    "Business Development",
  ],

  authors: [{ name: "Western Bridge" }],
  creator: "Western Bridge",

  openGraph: {
    title: "Western Bridge",
    description:
      "Connecting people, professionals, and businesses with international pathways and opportunities.",
    type: "website",
    locale: "en_US",
    siteName: "Western Bridge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoArabic.variable}`}
    >
      
      <body><Navbar />{children}<Footer/></body>
    </html>
  );
}