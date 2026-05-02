import { dynamicLoader } from "fumadocs-core/source/dynamic";
import { createSanitySource } from "@fumadocs/sanity";
import { sanityFetch } from "../sanity/lib/live";
import type { Docs } from "../sanity/types";
import { draftMode } from "next/headers";

const source = dynamicLoader(
  createSanitySource<Docs>({
    sanityFetch,
    docType: "docs",
  }),
  {
    baseUrl: "/docs",
  },
);

export async function getSource() {
  const { isEnabled } = await draftMode();

  if (isEnabled) source.revalidate();
  return source.get();
}
