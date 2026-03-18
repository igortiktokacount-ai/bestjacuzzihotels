import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog - Jacuzzi Hotel Tips & Guides | BestJacuzziHotels",
  description:
    "Expert guides on finding the best hotels with jacuzzi rooms. Booking tips, city guides, price comparisons, and everything you need for the perfect jacuzzi hotel stay.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1B2B48, #2D4A7A)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-medium mb-4" style={{ color: "#D4AF7A" }}>
            Expert Guides
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Jacuzzi Hotel Blog
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Booking tips, city guides, and everything you need to find the perfect hotel with a private jacuzzi.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #B8965A, #D4AF7A)" }} />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#B8965A" }}>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span style={{ color: "#D4AF7A" }}>·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h2
                  className="text-lg font-bold mb-3 leading-snug transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-sm font-semibold gap-1 transition-all" style={{ color: "#B8965A" }}>
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
