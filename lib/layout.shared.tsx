import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions<T extends BaseLayoutProps>(props: Partial<T> = {}): Partial<T> {
  return {
    ...props,
    nav: {
      title: "Fumadocs Sanity",
      ...props.nav,
    },
    githubUrl: "https://github.com/fuma-nama/fumadocs-sanity",
  };
}
