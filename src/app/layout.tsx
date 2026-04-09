import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo CMAT — Common Management Admission Test Prep",
  description:
    "Free CMAT practice for Quantitative, Logical Reasoning, Language, and GK with AI analytics.",
  metadataBase: new URL("https://cmat.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#4F46E5" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
