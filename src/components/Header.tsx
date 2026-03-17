import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BJ</span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            BestJacuzziHotels
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Cities
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
