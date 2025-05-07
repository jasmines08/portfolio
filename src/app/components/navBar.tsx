"use client";

import Link from "next/link";
import Line from "./line";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-xl font-sans font-thin italic ${
      isActive ? "underline" : "hover:underline"
    }
      decoration-[1px] underline-offset-4`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-3 z-10">
        {/* Left-Icons */}
        <div className="flex items-center gap-3">
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
        <div className="flex justify-around flex-1">
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
        <div className="flex items-center gap-3">
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
      <Line />
    </div>
  );
}
