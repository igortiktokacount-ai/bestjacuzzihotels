import Image from "next/image";
import Link from "next/link";
import { City } from "@/data/cities";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/hotels-with-jacuzzi-in/${city.slug}`}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-56">
        <Image
          src={city.photo}
          alt={`Hotels with jacuzzi in ${city.name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
        <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: "linear-gradient(to right, #B8965A, #D4AF7A)"}} />
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="text-2xl font-bold text-white leading-tight" style={{fontFamily: "var(--font-playfair)"}}>{city.name}</h3>
          <p className="text-white/70 text-sm mt-1">{city.state} · {city.hotels.length} hotels</p>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between" style={{background: "#FAFAF8", borderTop: "1px solid #E8E4DD"}}>
        <span className="text-sm text-gray-500">From <strong className="text-gray-800">${city.hotels[0]?.priceRange?.split("–")[0] || "$150"}</strong>/night</span>
        <span className="text-sm font-semibold transition-all group-hover:translate-x-1 duration-200 inline-block" style={{color: "#B8965A"}}>View hotels →</span>
      </div>
    </Link>
  );
}
