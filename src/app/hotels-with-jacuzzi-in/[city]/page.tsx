import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import HotelCard from "@/components/HotelCard";

interface PageProps {
  params: Promise<{ city: string }>;
}

function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: `Best Jacuzzi Hotels in ${city.name}`,
    description: city.metaDescription,
    url: `https://bestjacuzzihotels.com/hotels-with-jacuzzi-in-${city.slug}`,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressRegion: city.state,
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>
              {city.name}, {city.state}
            </span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Best Hotels with Jacuzzi in Room in {city.name}, {city.state} (2026)
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl">{city.intro}</p>
        </div>
      </section>

      {/* Hotel List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Top {city.hotels.length} Jacuzzi Hotels in {city.name}
        </h2>
        <div className="space-y-6">
          {city.hotels.map((hotel, index) => (
            <HotelCard
              key={hotel.name}
              hotel={hotel}
              cityName={city.name}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About Jacuzzi Hotels in {city.name}
          </h2>
          <div className="space-y-6">
            {city.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Explore More Cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherCities.map((c) => (
            <Link
              key={c.slug}
              href={`/hotels-with-jacuzzi-in/${c.slug}`}
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
            >
              <div className="font-semibold text-gray-900 text-sm">
                {c.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">{c.state}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
