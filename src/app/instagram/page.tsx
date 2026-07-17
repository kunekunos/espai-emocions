import { redirect } from "next/navigation";

export default function InstagramEntryPage() {
  redirect(
    "/?utm_source=instagram&utm_medium=organic_social&utm_campaign=profile&utm_content=entreemociones",
  );
}
