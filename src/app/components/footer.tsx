export default function Footer({ fixed = false }: { fixed?: boolean }) {
  return (
    <footer
      className={`text-white pb-6 flex flex-col items-center space-y-6 text-center ${
        fixed ? "fixed bottom-0 left-0 w-full z-50 bg-black" : ""
      }`}
    >
      {/* Icons: visible only on phone screens */}
      <div className="flex items-center gap-3 sm:hidden">
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
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Swaleha Jasmine. All rights reserved.
      </p>
    </footer>
  );
}
