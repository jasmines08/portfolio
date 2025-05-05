import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swaleha Jasmine – Portfolio",
  description: "Developer portfolio built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
