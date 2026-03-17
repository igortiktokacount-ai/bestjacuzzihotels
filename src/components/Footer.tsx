import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background: "#0F1E35"}} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white" style={{fontFamily: "var(--font-playfair)"}}>
                BestJacuzziHotels
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping travelers find the best hotels with private jacuzzi and
              whirlpool rooms across the United States.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF7A] transition-colors">
                  All Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Top Cities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hotels-with-jacuzzi-in/new-york-city-ny"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  New York City
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels-with-jacuzzi-in/las-vegas-nv"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  Las Vegas
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels-with-jacuzzi-in/miami-fl"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels-with-jacuzzi-in/nashville-tn"
                  className="hover:text-[#D4AF7A] transition-colors"
                >
                  Nashville
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} BestJacuzziHotels.com. All rights
            reserved.
          </p>
          <p className="mt-2 text-xs">
            This site contains affiliate links. We may earn a commission when you
            book through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
