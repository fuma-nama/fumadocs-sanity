import { createFromSource } from "fumadocs-core/search/server";
import { getSource } from "@/lib/source";

export const { GET } = createFromSource(getSource);
