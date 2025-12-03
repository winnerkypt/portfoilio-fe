import type { Metadata } from "next";
import "./globals.css";
import { andika } from "@/core/libs/fonts";

export const metadata: Metadata = {
  title: "Kanyapat Portfolio",
  description: "Kanyapat Portfolio Website - Software Engineer",
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
