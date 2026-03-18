"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-playfair" style={{ color: "#1B2B48" }}>
            BestJacuzziHotels
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full" style={{ color: "#1B2B48" }}>
            Cities
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full" style={{ color: "#1B2B48" }}>
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8965A] after:transition-all after:duration-300 hover:after:w-full" style={{ color: "#1B2B48" }}>
            About
          </Link>
          <a
            href="/#cities"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md"
            style={{ background: "linear-gradient(135deg, #B8965A, #D4AF7A)" }}
          >
            Find Hotels
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-[#1B2B48] mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(0, 8px)" : "" }} />
          <div className="w-6 h-0.5 bg-[#1B2B48] mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-[#1B2B48] transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(0, -8px)" : "" }} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium py-2" style={{ color: "#1B2B48" }} onClick={() => setMenuOpen(false)}>Cities</Link>
          <Link href="/blog" className="text-sm font-medium py-2" style={{ color: "#1B2B48" }} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="text-sm font-medium py-2" style={{ color: "#1B2B48" }} onClick={() => setMenuOpen(false)}>About</Link>
          <a
            href="/#cities"
            className="px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #B8965A, #D4AF7A)" }}
            onClick={() => setMenuOpen(false)}
          >
            Find Hotels →
          </a>
        </div>
      )}
    </header>
  );
}
