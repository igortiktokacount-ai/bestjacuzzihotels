import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BestJacuzziHotels.com — our mission to help travelers find the best hotels with private jacuzzi and whirlpool rooms across the United States.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1B2B48, #2D4A7A)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About <em className="font-normal" style={{ color: "#D4AF7A" }}>BestJacuzziHotels</em>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Helping travelers find the perfect jacuzzi hotel room across America&apos;s top destinations.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
            Our Mission
          </h2>
          <div className="w-12 h-0.5 mb-4" style={{ background: "#B8965A" }} />
          <p className="text-gray-600 leading-relaxed">
            BestJacuzziHotels.com was created with one simple mission: to help
            travelers find the best hotels with private jacuzzi and whirlpool rooms
            across America&apos;s top destinations. We know how frustrating it can be to search for hotels with in-room
            jacuzzi tubs. Major booking sites don&apos;t always make it easy to filter
            for this specific amenity. That&apos;s why we&apos;ve done the research for you —
            curating the best jacuzzi suite hotels in each city, complete with
            real hotel names, accurate price ranges, neighborhood details, and
            honest descriptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
            What We Cover
          </h2>
          <div className="w-12 h-0.5 mb-4" style={{ background: "#B8965A" }} />
          <p className="text-gray-600 leading-relaxed">
            We currently cover 30 major US cities, with plans to expand. For each
            city, we research and review the top 8 hotels known for their jacuzzi,
            whirlpool, or deep soaking tub in-room experiences. Our reviews include
            details about the specific room types that offer these amenities, the
            neighborhoods they&apos;re located in, and realistic nightly price ranges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
            How We Make Money
          </h2>
          <div className="w-12 h-0.5 mb-4" style={{ background: "#B8965A" }} />
          <p className="text-gray-600 leading-relaxed">
            BestJacuzziHotels.com is an affiliate website. When you click through
            to Booking.com from our site and make a reservation, we may earn a
            small commission at no extra cost to you. This helps us keep the site
            running and continue researching new hotels and destinations. Our
            recommendations are based on genuine research and are not influenced by
            commission rates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
            Contact Us
          </h2>
          <div className="w-12 h-0.5 mb-4" style={{ background: "#B8965A" }} />
          <p className="text-gray-600 leading-relaxed">
            Have a question, suggestion, or want to recommend a hotel? We&apos;d love
            to hear from you. Reach out to us at{" "}
            <span className="font-medium" style={{ color: "#B8965A" }}>
              hello@bestjacuzzihotels.com
            </span>.
          </p>
        </section>
      </div>
    </>
  );
}
