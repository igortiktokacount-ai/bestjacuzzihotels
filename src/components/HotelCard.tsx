import { Hotel } from "@/data/cities";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
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
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cityName)}+jacuzzi+room&aid=AFFILIATE_ID`;

  const bgColors = [
    "bg-blue-50",
    "bg-indigo-50",
    "bg-sky-50",
    "bg-cyan-50",
    "bg-teal-50",
    "bg-blue-50",
    "bg-indigo-50",
    "bg-sky-50",
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div
          className={`${bgColors[index % bgColors.length]} sm:w-48 h-32 sm:h-auto flex items-center justify-center shrink-0`}
        >
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-600/30">
              #{index + 1}
            </div>
            <div className="text-xs text-blue-600/50 mt-1">
              {hotel.neighborhood}
            </div>
          </div>
        </div>
        <div className="p-5 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
              {hotel.priceRange}/night
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={hotel.rating} />
            <span className="text-xs text-gray-500">
              {hotel.neighborhood}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {hotel.description}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Check Availability
            <svg
              className="w-4 h-4 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
