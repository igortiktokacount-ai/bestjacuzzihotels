import { Hotel } from "@/data/cities";

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

const rankLabel = ["#1 Pick", "#2", "#3", "#4", "#5", "#6", "#7", "#8"];

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
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          {/* Rank badge */}
          <div
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ background: index === 0 ? "linear-gradient(135deg, #B8965A, #D4AF7A)" : "#1B2B48" }}
          >
            {index === 0 ? "★1" : `#${index + 1}`}
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
              {hotel.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={hotel.rating} />
              <span className="text-xs text-gray-400">{hotel.neighborhood}</span>
            </div>
          </div>
        </div>
        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap" style={{ background: "linear-gradient(135deg, #B8965A, #D4AF7A)" }}>
          {hotel.priceRange}/night
        </span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4 pl-13" style={{ paddingLeft: "52px" }}>
        {hotel.description}
      </p>

      <div className="flex items-center justify-between pl-13" style={{ paddingLeft: "52px" }}>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{cityName}</span>
        </div>
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
  );
}
