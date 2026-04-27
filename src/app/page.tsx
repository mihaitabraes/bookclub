import CurrentBook from "@/components/home/CurrentBook";
import MeetingInfo from "@/components/home/MeetingInfo";
import ReadingProgress from "@/components/home/ReadingProgress";
import type { Book } from "@/types";

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
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">

      {/* ── Hero ── */}
      <div className="text-center flex flex-col items-center gap-4">
        <p className="font-cinzel text-[0.6rem] tracking-[0.4em] uppercase text-gold-500">
          Est. 2026
        </p>
        <h1 className="font-cinzel text-5xl sm:text-6xl tracking-[0.12em] uppercase text-parchment-50">
          Late Chapter
        </h1>
        {/* Ornamental rule under title */}
        <div className="ornament w-64 text-gold-500">✦</div>
        <p className="font-cormorant italic text-xl text-parchment-300 mt-1">
          Reading in the margins of a full day
        </p>
      </div>

      {/* ── Current book ── */}
      <CurrentBook book={CURRENT_BOOK} />

      {/* ── Ornamental section divider ── */}
      <div className="ornament text-gold-600">❧</div>

      {/* ── Meeting + progress cards ── */}
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
