export type Artifact = {
  slug: string;
  title: string;
  date: string;
  medium: string;
  blurb?: string;
  href?: string;
};

export const artifacts: Artifact[] = [
  {
    slug: "first-breath-after",
    title: "FIRST BREATH AFTER",
    date: "2025-11-06",
    medium: "audio+visual",
    blurb: "Single-take guitar texture stitched with night static.",
    href: "#"
  },
  {
    slug: "broken-light",
    title: "BROKEN LIGHT",
    date: "2025-11-10",
    medium: "visual",
    blurb: "Flicker studies from a dying ballast.",
    href: "#"
  }
];
