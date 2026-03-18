import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srivari Foundation — Dedicated to Dharma Prachara & Srinivasa Kalyana",
  description:
    "Srivari Foundation is a spiritual non-profit dedicated to Srinivasa Kalyana Mahothsavam, Dharma Prachara, Karnataka Haridasa Sahithya, and devotional outreach across India.",
  icons: {
    icon: "/srivari-logo.png",
    apple: "/srivari-logo.png",
  },
  keywords: [
    "Srivari Foundation",
    "Srinivasa Kalyana",
    "Dharma Prachara",
    "Haridasa Sahithya",
    "spiritual non-profit",
    "devotional programs",
  ],
  openGraph: {
    title: "Srivari Foundation — Dharma Prachara & Srinivasa Kalyana",
    description:
      "A spiritual non-profit dedicated to Srinivasa Kalyana Mahothsavam and devotional outreach across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
