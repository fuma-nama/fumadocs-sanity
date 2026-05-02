import { DocsPage, DocsBody, DocsDescription, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getSource } from "@/lib/source";
import { client } from "@/sanity/lib/client";
import { DOCS_QUERY } from "@/sanity/lib/queries";
import { CustomPortableText } from "@/components/sanity/components";

export default async function Page(props: PageProps<"/docs/[...slug]">) {
  const params = await props.params;
  const source = await getSource();
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const { renderToc, body } = await page.data.load();
  console.log(body);

  return (
    <DocsPage toc={renderToc({ render: (body) => <CustomPortableText value={body} /> })}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <CustomPortableText value={body!} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const data = await client.fetch(DOCS_QUERY);

  return data.map((v) => ({
    slug: v.slug?.current?.split("/") ?? [],
  }));
}

export async function generateMetadata(props: PageProps<"/docs/[...slug]">) {
  const source = await getSource();
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
