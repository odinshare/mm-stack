import { artifacts } from "@/data/artifacts";

type Props = { params: { slug: string } };

export default function ArtifactDetail({ params }: Props) {
  const item = artifacts.find(a => a.slug === params.slug);
  if (!item) return <div className="p-10 text-white">Not found.</div>;
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-xs uppercase tracking-wider text-white/40">{item.medium}</div>
        <h1 className="mt-2 text-4xl font-black">{item.title}</h1>
        <div className="text-sm text-white/40">{new Date(item.date).toDateString()}</div>
        {item.blurb && <p className="mt-6 text-white/80">{item.blurb}</p>}
        {item.href && <a className="mt-6 inline-block underline" href={item.href}>Open external</a>}
      </div>
    </main>
  );
}
