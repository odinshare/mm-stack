import Link from "next/link";

const posts = [
  {
    slug: "first-release",
    title: "Release 001: FIRST BREATH AFTER",
    date: "2025-11-06",
    summary: "Guitar + static + the ballast that wouldn’t die."
  }
] as const;

export default function Journal() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-black tracking-tight">Journal</h1>
        <ul className="mt-10 space-y-8">
          {posts.map(p => (
            <li key={p.slug} className="border-b border-white/10 pb-6">
              <Link href={`/journal/${p.slug}`} className="text-2xl font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white">
                {p.title}
              </Link>
              <div className="text-sm text-white/40 mt-1">{new Date(p.date).toDateString()}</div>
              <p className="mt-2 text-white/70">{p.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
