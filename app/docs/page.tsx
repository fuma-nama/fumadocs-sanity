import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { getSource } from "@/lib/source";

export default async function Page() {
  const source = await getSource();

  return (
    <DocsPage>
      <DocsTitle>Pages</DocsTitle>
      <DocsDescription>View the latest pages</DocsDescription>
      <Cards>
        {source.getPages().map((page) => (
          <Card key={page.url} title={page.data.title} href={page.url} />
        ))}
      </Cards>
    </DocsPage>
  );
}
