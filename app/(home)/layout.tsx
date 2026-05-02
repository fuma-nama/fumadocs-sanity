import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Live } from "@/components/live";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions({
        links: [
          {
            text: "Documentation",
            url: "/docs",
            active: "nested-url",
          },
        ],
      })}
    >
      <Live />
      {children}
    </HomeLayout>
  );
}
