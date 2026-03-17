import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog - Jacuzzi Hotel Tips & Guides",
  description:
    "Expert guides on finding the best hotels with jacuzzi rooms. Booking tips, city guides, price comparisons, and everything you need for the perfect jacuzzi hotel stay.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jacuzzi Hotel Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert guides, booking tips, and everything you need to find the
            perfect hotel with a private jacuzzi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-blue-600 font-medium text-sm group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
