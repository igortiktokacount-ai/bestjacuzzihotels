import Image from "next/image";
import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=800&fit=crop&q=85"
          alt="Luxury hotel jacuzzi room"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(to bottom, rgba(27,43,72,0.75), rgba(27,43,72,0.85))"}} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm font-medium mb-4" style={{color: "#D4AF7A"}}>
            The Ultimate Guide
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{fontFamily: "var(--font-playfair)"}}>
            Hotels with Private<br />
            <em className="font-normal" style={{color: "#D4AF7A"}}>Jacuzzi &amp; Whirlpool</em> Rooms
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Expertly curated jacuzzi suite hotels across America&apos;s most romantic destinations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#cities" className="px-8 py-4 text-white font-semibold rounded-full text-lg transition-all hover:scale-105" style={{background: "linear-gradient(135deg, #B8965A, #D4AF7A)"}}>
              Explore Cities →
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="text-white py-4" style={{background: "#1B2B48"}}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span style={{color: "#D4AF7A"}}>★★★★★</span>
            <span className="text-white/80">96 Hotels Reviewed</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{color: "#D4AF7A"}}>◆</span>
            <span className="text-white/80">12 Top US Cities</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{color: "#D4AF7A"}}>✓</span>
            <span className="text-white/80">Updated March 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{color: "#D4AF7A"}}>♥</span>
            <span className="text-white/80">Perfect for Couples</span>
          </div>
        </div>
      </div>

      {/* City Grid */}
      <section id="cities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-sm font-medium mb-3" style={{color: "#B8965A"}}>Destinations</p>
          <h2 className="text-4xl font-bold mb-4" style={{fontFamily: "var(--font-playfair)", color: "#1B2B48"}}>
            Explore Jacuzzi Hotels by City
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We&apos;ve handpicked the finest hotels with private jacuzzi rooms across 12 of America&apos;s top travel destinations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{background: "#1B2B48"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12" style={{fontFamily: "var(--font-playfair)"}}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: "rgba(184,150,90,0.15)"}}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#D4AF7A"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Search
              </h3>
              <p className="text-white/70">
                Pick your city and browse our curated list of the best hotels
                with private jacuzzi and whirlpool rooms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: "rgba(184,150,90,0.15)"}}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#D4AF7A"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Compare
              </h3>
              <p className="text-white/70">
                Compare ratings, price ranges, neighborhoods, and amenities to
                find the perfect jacuzzi suite for your trip.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: "rgba(184,150,90,0.15)"}}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#D4AF7A"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Book
              </h3>
              <p className="text-white/70">
                Click through to Booking.com to check real-time availability and
                secure the best price for your jacuzzi hotel room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-6" style={{fontFamily: "var(--font-playfair)", color: "#1B2B48"}}>
          Why Book a Hotel with a Jacuzzi in Room?
        </h2>
        <div className="max-w-3xl mx-auto space-y-4" style={{color: "#4A5568"}}>
          <p>
            A hotel room with a private jacuzzi or whirlpool tub transforms an
            ordinary trip into a memorable escape. Whether you&apos;re planning a
            romantic anniversary getaway, a relaxing solo retreat, or a fun
            weekend with friends, in-room jacuzzi suites offer the ultimate in
            comfort and privacy.
          </p>
          <p>
            At BestJacuzziHotels.com, we research and review the top hotels with
            private jacuzzi rooms in America&apos;s most popular travel
            destinations. Our curated lists feature real hotels with verified
            jacuzzi amenities, realistic price ranges, and honest descriptions to
            help you make the best booking decision.
          </p>
        </div>
      </section>
    </>
  );
}
