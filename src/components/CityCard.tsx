import Link from "next/link";
import { City } from "@/data/cities";

const cityColors: Record<string, string> = {
  "new-york-city-ny": "from-blue-600 to-indigo-700",
  "las-vegas-nv": "from-amber-500 to-red-600",
  "chicago-il": "from-sky-600 to-blue-700",
  "los-angeles-ca": "from-orange-500 to-pink-600",
  "miami-fl": "from-teal-400 to-cyan-600",
  "nashville-tn": "from-yellow-500 to-amber-600",
  "san-antonio-tx": "from-red-500 to-rose-700",
  "orlando-fl": "from-purple-500 to-indigo-600",
  "denver-co": "from-emerald-500 to-teal-700",
  "seattle-wa": "from-green-600 to-emerald-700",
  "atlanta-ga": "from-rose-500 to-red-600",
  "new-orleans-la": "from-violet-500 to-purple-700",
};

export default function CityCard({ city }: { city: City }) {
  const gradient = cityColors[city.slug] || "from-blue-600 to-indigo-700";

  return (
    <Link
      href={`/hotels-with-jacuzzi-in-${city.slug}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`bg-gradient-to-br ${gradient} h-40 flex items-end p-5 relative`}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white">{city.name}</h3>
          <p className="text-white/80 text-sm">{city.state}</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600">
          {city.hotels.length} jacuzzi hotels reviewed
        </p>
        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-1 inline-block">
          View hotels &rarr;
        </span>
      </div>
    </Link>
  );
}
