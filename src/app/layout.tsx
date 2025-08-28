import NavBar from "./components/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Swaleha Jasmine – Full-Stack Developer",
  description: "Portfolio built with Next.js, TypeScript and TailwindCSS.",
  openGraph: {
    title: "Swaleha Jasmine – Full-Stack Developer",
    description: "Portfolio built with Next.js, TypeScript and TailwindCSS.",
    url: "https://swaleha-jasmine-portfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://swaleha-jasmine-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swaleha Jasmine – Full-Stack Developer",
    description: "Portfolio built with Next.js, TypeScript and TailwindCSS.",
    images: ["https://swaleha-jasmine-portfolio.vercel.app/og-image.png"],
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${rubik.variable}`}>
      <body>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
