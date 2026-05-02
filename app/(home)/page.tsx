import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Fumadocs</h1>
      <p className="text-sm text-fd-muted-foreground mb-6">
        An example to use Fumadocs with Sanity, fork it to edit.
      </p>
      <div className="flex flex-row gap-2 items-center text-fd-muted-foreground justify-center">
        <Link
          href="/docs"
          className="text-fd-primary-foreground bg-fd-primary rounded-full font-medium text-sm px-4 py-3 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          Open Docs
        </Link>
        <Link
          href="/studio"
          className="text-fd-secondary-foreground bg-fd-secondary rounded-full font-medium text-sm px-4 py-3 transition-colors hover:bg-fd-accent"
        >
          Open Editor
        </Link>
      </div>
    </main>
  );
}
