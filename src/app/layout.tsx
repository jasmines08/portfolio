import NavBar from "./components/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "Swaleha Jasmine – Portfolio",
  description: "Developer portfolio built with Next.js and TypeScript.",
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
