import { redirect } from "next/navigation";

export default function YouTubeEntryPage() {
  redirect(
    "/?utm_source=youtube&utm_medium=organic_video&utm_campaign=channel&utm_content=description",
  );
}
