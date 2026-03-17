import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BestJacuzziHotels.com — our mission to help travelers find the best hotels with private jacuzzi and whirlpool rooms across the United States.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="prose prose-lg prose-gray max-w-none space-y-6">
        <p className="text-gray-600 leading-relaxed">
          BestJacuzziHotels.com was created with one simple mission: to help
          travelers find the best hotels with private jacuzzi and whirlpool rooms
          across America's top destinations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We know how frustrating it can be to search for hotels with in-room
          jacuzzi tubs. Major booking sites don't always make it easy to filter
          for this specific amenity. That's why we've done the research for you —
          curating the best jacuzzi suite hotels in each city, complete with
          real hotel names, accurate price ranges, neighborhood details, and
          honest descriptions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          What We Cover
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We currently cover 12 major US cities, with plans to expand. For each
          city, we research and review the top 8 hotels known for their jacuzzi,
          whirlpool, or deep soaking tub in-room experiences. Our reviews include
          details about the specific room types that offer these amenities, the
          neighborhoods they're located in, and realistic nightly price ranges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          How We Make Money
        </h2>
        <p className="text-gray-600 leading-relaxed">
          BestJacuzziHotels.com is an affiliate website. When you click through
          to Booking.com from our site and make a reservation, we may earn a
          small commission at no extra cost to you. This helps us keep the site
          running and continue researching new hotels and destinations. Our
          recommendations are based on genuine research and are not influenced by
          commission rates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Have a question, suggestion, or want to recommend a hotel? We'd love
          to hear from you. Reach out to us at{" "}
          <span className="text-blue-600 font-medium">
            hello@bestjacuzzihotels.com
          </span>
          .
        </p>
      </div>
    </div>
  );
}
