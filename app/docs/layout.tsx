import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";
import { Live } from "@/components/live";
import { getSource } from "@/lib/source";

export default async function Layout({ children }: { children: ReactNode }) {
  const source = await getSource();

  return (
    <>
      <Live />
      <DocsLayout tree={source.getPageTree()} {...baseOptions<DocsLayoutProps>()}>
        {children}
      </DocsLayout>
    </>
  );
}
