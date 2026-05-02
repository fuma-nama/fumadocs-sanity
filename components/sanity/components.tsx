"use client";
import {
  PortableText,
  type PortableTextProps,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { baseBlocks, baseComponents, baseMarks } from "./base";

function Image({ value, isInline }: { value: any; isInline: boolean }) {
  const dimensions = getImageDimensions(value);

  return (
    <img
      src={urlFor(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: dimensions.aspectRatio,
      }}
    />
  );
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    ...baseBlocks,
  },
  marks: {
    ...baseMarks,
  },
  types: {
    ...baseComponents,
    image: Image,
  },
};

export function CustomPortableText(props: PortableTextProps) {
  return <PortableText {...props} components={{ ...components, ...props.components }} />;
}
