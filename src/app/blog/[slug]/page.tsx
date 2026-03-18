import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-12 text-white" style={{ background: "linear-gradient(135deg, #1B2B48, #2D4A7A)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-5 flex items-center gap-2" style={{ color: "rgba(255,255,255,0.55)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Article</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            {post!.title}
          </h1>
          <div className="flex items-center gap-3 text-sm" style={{ color: "#D4AF7A" }}>
            <time dateTime={post!.date}>
              {new Date(post!.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>·</span>
            <span>{post!.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <style dangerouslySetInnerHTML={{ __html: `.blog-prose a { color: #B8965A !important; text-decoration: underline; } .blog-prose a:hover { color: #96793E !important; }` }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="blog-prose prose prose-lg max-w-none
            prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-relaxed
            prose-li:my-1
            prose-ul:my-4"
          style={{
            "--tw-prose-body": "#4A5568",
            "--tw-prose-headings": "#1B2B48",
            "--tw-prose-links": "#B8965A",
            "--tw-prose-bold": "#1B2B48",
            "--tw-prose-bullets": "#B8965A",
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: post!.content }}
        />
      </article>

      {/* More Articles */}
      {otherPosts.length > 0 && (
        <section className="py-12" style={{ background: "#F8F5F0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", color: "#1B2B48" }}>
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #B8965A, #D4AF7A)" }} />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm leading-snug mb-2 transition-colors" style={{ color: "#1B2B48", fontFamily: "var(--font-playfair)" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs" style={{ color: "#B8965A" }}>{p.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
