import NavBar from "./components/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";

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
        url: "https://https://swaleha-jasmine-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swaleha Jasmine — Software Developer",
    description:
      "I build thoughtful, user-centric software with a designer’s eye. See what makes me unique.",
    images: ["https://your-domain.vercel.app/og-image.jpg"],
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
      </body>
    </html>
  );
}
