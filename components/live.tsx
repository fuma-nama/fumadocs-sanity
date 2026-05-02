import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "./live.client";
import { refresh, revalidateTag } from "next/cache";

export async function Live() {
  return (
    <>
      <SanityLive
        revalidateSyncTags={async (tags) => {
          "use server";
          for (const t of tags) revalidateTag(t, "max");
          refresh();
        }}
      />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
