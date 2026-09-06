import type { Metadata } from "next";
import "./globals.css";
import { andika } from "@/core/libs/fonts";

const siteUrl = "https://kanyapat-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kanyapat Wittayamanitkul — Software Engineer",
    template: "%s · Kanyapat Wittayamanitkul",
  },
  description:
    "Portfolio of Kanyapat Wittayamanitkul, a software engineer building CMS platforms, RESTful APIs, and production web applications.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Next.js",
    "Golang",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Kanyapat Wittayamanitkul" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kanyapat Wittayamanitkul",
    title: "Kanyapat Wittayamanitkul — Software Engineer",
    description:
      "Software engineer building CMS platforms, RESTful APIs, and production web applications.",
    images: [{ url: "/images/profile.png", width: 2520, height: 2248 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanyapat Wittayamanitkul — Software Engineer",
    description:
      "Software engineer building CMS platforms, RESTful APIs, and production web applications.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${andika.className} antialiased`}>{children}</body>
    </html>
  );
}
