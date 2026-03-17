import Image from "next/image";
import Link from "next/link";
import { City } from "@/data/cities";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/hotels-with-jacuzzi-in/${city.slug}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={city.photo}
          alt={`Hotels with jacuzzi in ${city.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{city.name}</h3>
          <p className="text-white/80 text-sm">{city.state}</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600">
          {city.hotels.length} jacuzzi hotels reviewed
        </p>
        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-1 inline-block">
          View hotels →
        </span>
      </div>
    </Link>
  );
}
