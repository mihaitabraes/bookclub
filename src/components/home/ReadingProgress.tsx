interface ReadingProgressProps {
  currentChapter: number;
  totalChapters: number;
}

export default function ReadingProgress({
  currentChapter,
  totalChapters,
}: ReadingProgressProps) {
  const percent = Math.round((currentChapter / totalChapters) * 100);

  return (
    <div className="card-victorian p-6 flex flex-col gap-3">
      <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-gold-400">
        Reading Progress
      </p>

      <div>
        <p className="font-cormorant font-semibold text-2xl text-parchment-50">
          Chapter {currentChapter}
          <span className="font-normal text-lg text-dust ml-2">of {totalChapters}</span>
        </p>
        <p className="font-cormorant italic text-parchment-300 mt-0.5">
          {percent}% through the book
        </p>
      </div>

      {/* Progress bar with gold shimmer */}
      <div className="mt-2 h-1 rounded-full bg-ink-600 overflow-hidden">
        <div
          className="h-full rounded-full relative overflow-hidden"
          style={{ width: `${percent}%` }}
        >
          {/* Base fill */}
          <div className="absolute inset-0 bg-linear-to-r from-gold-600 to-gold-400" />
          {/* Shimmer sweep */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-200/40 to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
