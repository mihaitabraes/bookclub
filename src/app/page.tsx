import CurrentBook from "@/components/home/CurrentBook";
import MeetingInfo from "@/components/home/MeetingInfo";
import ReadingProgress from "@/components/home/ReadingProgress";
import type { Book } from "@/types";

/*
  HOME PAGE — static hardcoded data for now (Step 2 of build order).
  Once Supabase is connected (Step 3) we'll replace this with real DB queries.
  Because this is a Server Component (no "use client"), the data fetching
  will eventually happen here on the server — fast, no loading spinners.
*/

const CURRENT_BOOK: Book = {
  id: "1",
  title: "Demon Copperhead",
  author: "Barbara Kingsolver",
  open_library_id: null,
  cover_url: "https://covers.openlibrary.org/b/id/12547191-L.jpg",
  description:
    "A modern retelling of David Copperfield set in the mountains of southern Appalachia. A boy born to a teenaged single mother in a trailer, in a state known for its breathtaking poverty and the flood of painkillers that hit it harder than most anywhere else.",
  total_chapters: 37,
  current_chapter: 14,
  status: "current",
  created_at: new Date().toISOString(),
};

const NEXT_MEETING = new Date("2026-05-10T19:30:00");
const MEETING_LOCATION = "Mihaita's place";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">

      {/* Hero tagline */}
      <div className="text-center">
        <h1 className="font-(family-name:--font-playfair) text-5xl text-cream-50 leading-tight">
          Late Chapter
        </h1>
        <p className="text-muted mt-3 text-lg italic">
          Reading in the margins of a full day
        </p>
      </div>

      {/* Current book */}
      <CurrentBook book={CURRENT_BOOK} />

      {/* Meeting + progress — side by side on wider screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <MeetingInfo date={NEXT_MEETING} location={MEETING_LOCATION} />
        <ReadingProgress
          currentChapter={CURRENT_BOOK.current_chapter!}
          totalChapters={CURRENT_BOOK.total_chapters!}
        />
      </div>

    </div>
  );
}
