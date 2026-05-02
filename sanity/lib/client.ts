import { createClient } from "next-sanity";
import "@/sanity/types";

import { apiVersion, dataset, projectId } from "../env";

const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: { enabled: true, studioUrl: process.env.STUDIO_URL ?? `${base}/studio` },
});
