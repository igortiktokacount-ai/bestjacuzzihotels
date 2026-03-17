import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-playfair" style={{ color: "#1B2B48" }}>
            BestJacuzziHotels
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full"
            style={{ color: "#1B2B48" }}
          >
            Cities
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full"
            style={{ color: "#1B2B48" }}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full"
            style={{ color: "#1B2B48" }}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
