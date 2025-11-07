import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date:  { type: "date", required: true },
    summary: { type: "string" },
    tags: { type: "list", of: { type: "string" } }
  }
}));
export const Artifact = defineDocumentType(() => ({
  name: "Artifact",
  filePathPattern: `artifacts/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date:  { type: "date", required: true },
    medium:{ type: "string", required: true },
    lore:  { type: "string" }
  }
}));

export const makeContent = (contentDir: string) =>
  makeSource({ contentDirPath: contentDir, documentTypes: [Post, Artifact] });
