import Image from "next/image";
import { Hotel } from "@/data/cities";

// All photos manually verified to show hotel rooms / bathrooms / bathtubs
const hotelPhotos = [
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=300&h=200&fit=crop&q=80", // elegant bathtub spa
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop&q=80", // luxury bathroom glass shower
  "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=300&h=200&fit=crop&q=80", // modern hotel room city view
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=200&fit=crop&q=80",   // white spa bathroom
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop&q=80", // modern hotel room
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300&h=200&fit=crop&q=80", // stylish hotel bedroom
  "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=300&h=200&fit=crop&q=80", // spacious hotel room
  "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=300&h=200&fit=crop&q=80", // luxury hotel lounge
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#B8965A]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HotelCard({
  hotel,
  cityName,
  index,
}: {
  hotel: Hotel;
  cityName: string;
  index: number;
}) {
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(hotel.name + " " + cityName)}&aid=AFFILIATE_ID`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col sm:flex-row">
        {/* Photo */}
        <div className="relative sm:w-48 h-36 sm:h-auto shrink-0">
          <Image
            src={hotelPhotos[index % hotelPhotos.length]}
            alt={`${hotel.name} jacuzzi room`}
            fill
            className="object-cover"
            unoptimized
          />
          {index === 0 && (
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, #B8965A, #D4AF7A)" }}>
              #1 Pick
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
              {hotel.name}
            </h3>
            <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #B8965A, #D4AF7A)" }}>
              {hotel.priceRange}/night
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={hotel.rating} />
            <span className="text-xs text-gray-400">{hotel.neighborhood}</span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {hotel.description}
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1B2B48, #2D4A7A)" }}
          >
            Check Availability
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
