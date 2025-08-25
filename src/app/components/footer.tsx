export default function Footer({ fixed = false }: { fixed?: boolean }) {
  return (
    <footer
      className={`text-white p-6 flex flex-col items-center space-y-6 text-center ${
        fixed ? "fixed bottom-0 left-0 w-full z-50 bg-black" : ""
      }`}
    >
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Swaleha Jasmine. All rights reserved.
      </p>
    </footer>
  );
}
