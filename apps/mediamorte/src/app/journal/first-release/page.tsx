// Server wrapper for the client MDX component.
// Keeps metadata on the server and avoids MDX client/runtime conflicts.
export const metadata = {
  title: "Release 001: FIRST BREATH AFTER",
  description: "Guitar, night-static, and a dying light.",
};

import FirstReleaseClient from "@/components/mdx/FirstReleaseClient";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 prose prose-invert">
        <FirstReleaseClient />
      </div>
    </main>
  );
}
