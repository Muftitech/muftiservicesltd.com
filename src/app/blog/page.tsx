import Link from "next/link";

const posts = [
  {
    title: "How Technology Is Transforming Businesses in Africa",
    excerpt:
      "Discover how software, artificial intelligence, fintech and digital transformation are helping African businesses grow.",
    category: "Digital Transformation",
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    title: "The Future of Artificial Intelligence in Africa",
    excerpt:
      "Explore how AI can improve business operations, public services, education and digital innovation across Africa.",
    category: "Artificial Intelligence",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "A modern website builds trust, strengthens your brand and helps customers discover your business online.",
    category: "Web Development",
    date: "August 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <Link
            href="/"
            className="text-sm font-semibold text-green-400 hover:text-green-300"
          >
            ← Back to Mufti Services Limited
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
              MUFTI INSIGHTS
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Technology,
              <span className="block text-green-400">
                Innovation & Digital Future
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Insights, ideas and practical knowledge about technology,
              artificial intelligence, fintech, software development and
              digital transformation in Africa.
            </p>
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">
          <span className="font-bold uppercase tracking-widest text-green-700">
            Latest Articles
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Explore Our Insights
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Practical technology insights from Mufti Services Limited.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-green-700 via-emerald-600 to-slate-900">
                <span className="text-6xl">💡</span>
              </div>

              <div className="p-7">

                <span className="text-sm font-bold text-green-700">
                  {post.category}
                </span>

                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 group-hover:text-green-700">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <button
                  className="mt-6 font-bold text-green-700 transition hover:text-green-900"
                >
                  Read Article →
                </button>

              </div>
            </article>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-600 px-8 py-14 text-center text-white md:px-16">

          <h2 className="text-3xl font-black md:text-4xl">
            Stay Ahead With Technology
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-50">
            Follow Mufti Services Limited for technology insights,
            innovation updates and digital transformation ideas.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-bold text-green-700 transition hover:scale-105"
          >
            Contact Mufti Services
          </Link>

        </div>

      </section>

    </main>
  );
}
