import Link from "next/link";
import { artifacts } from "@/data/artifacts";

export default function Artifacts() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-black tracking-tight">Artifacts</h1>
        <p className="mt-3 text-white/60">Media from the Morte-verse</p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((a) => (
            <li key={a.slug} className="group rounded-2xl border border-white/10 p-5 hover:bg-white/5 transition">
              <div className="text-xs uppercase tracking-wider text-white/40">{a.medium}</div>
              <h3 className="mt-2 text-xl font-semibold">{a.title}</h3>
              <div className="text-sm text-white/40">{new Date(a.date).toDateString()}</div>
              {a.blurb && <p className="mt-3 text-white/70">{a.blurb}</p>}
              <div className="mt-4 flex gap-3">
                <Link href={`/artifacts/${a.slug}`} className="text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white">Details</Link>
                {a.href && <a href={a.href} className="text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white">Open</a>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
