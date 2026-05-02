import { defineQuery } from "next-sanity";

export const DOCS_QUERY = defineQuery(`*[_type == "docs"]{
  _id, title, slug
}`);
