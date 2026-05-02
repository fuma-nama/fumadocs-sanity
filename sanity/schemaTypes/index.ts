import { type SchemaTypeDefinition } from "sanity";
import { docsType } from "./docsType";
import { blockContent, callout, card, cards } from "./base";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, callout, card, cards, docsType],
};
