import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Find Hotels with Private
            <br />
            <span className="text-blue-200">Jacuzzi & Whirlpool Rooms</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Discover the best hotels with in-room jacuzzi tubs across America's
            top cities. Compare prices, read reviews, and book your perfect
            romantic getaway.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Explore Jacuzzi Hotels by City
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We&apos;ve curated the best hotels with private jacuzzi rooms in 12
          popular US cities. Click a city to see our top picks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Search
              </h3>
              <p className="text-gray-600">
                Pick your city and browse our curated list of the best hotels
                with private jacuzzi and whirlpool rooms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Compare
              </h3>
              <p className="text-gray-600">
                Compare ratings, price ranges, neighborhoods, and amenities to
                find the perfect jacuzzi suite for your trip.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Book
              </h3>
              <p className="text-gray-600">
                Click through to Booking.com to check real-time availability and
                secure the best price for your jacuzzi hotel room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Why Book a Hotel with a Jacuzzi in Room?
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
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
