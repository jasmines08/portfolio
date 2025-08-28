"use client";

import Link from "next/link";
import Line from "./line";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-base sm:text-xl font-sans font-thin italic ${
      isActive ? "underline" : "hover:underline"
    } decoration-[1px] underline-offset-4`;
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        !isHomePage ? "bg-[#191919]" : ""
      }`}
    >
      <nav
        className="flex items-center justify-between md:px-6 py-3 z-10
        flex-col gap-2 sm:flex-row sm:gap-0"
      >
        {/* Left-Icons */}
        <div className="hidden sm:flex items-center gap-3 mb-2 sm:mb-0">
          <a
            href="https://www.linkedin.com/in/swalehajasmine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="mailto:jasmineswaleha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/mail.png" alt="Email" className="w-8 h-8" />
          </a>
        </div>

        {/* Middle Links */}
        <div className="flex justify-around flex-1 w-full sm:w-auto">
          <Link href="/left-brain">
            <span className={linkClass("/left-brain")}>Left Brain</span>
          </Link>
          {isHomePage ? (
            <Link href="/combination">
              <span className={linkClass("/combination")}>Combination</span>
            </Link>
          ) : (
            <Link href="/">
              <span className={linkClass("/")}>Home</span>
            </Link>
          )}
          <Link href="/right-brain">
            <span className={linkClass("/right-brain")}>Right Brain</span>
          </Link>
        </div>

        {/* Right-Icons */}
        <div className="hidden sm:flex items-center gap-3 mt-2 sm:mt-0">
          <a
            href="https://www.redbubble.com/people/8lettering/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/redbubble.png" alt="Redbubble" className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/8lettering/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </nav>
      <div className="px-2 md:px-6">
        <Line />
      </div>
    </div>
  );
}
