"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 bg-fd-secondary text-fd-secondary-foreground text-sm border rounded-full px-4 py-2"
    >
      Disable Draft Mode
    </a>
  );
}
