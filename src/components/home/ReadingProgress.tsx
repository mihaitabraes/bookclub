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
    <section className="bg-navy-800 rounded-lg p-6 border border-navy-700">
      <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">
        Reading Progress
      </p>
      <p className="font-(family-name:--font-playfair) text-2xl text-cream-50">
        Chapter {currentChapter}{" "}
        <span className="text-muted text-lg font-normal">of {totalChapters}</span>
      </p>

      {/* Progress bar */}
      <div className="mt-4 h-1.5 rounded-full bg-navy-600 overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-muted text-xs mt-2">{percent}% through the book</p>
    </section>
  );
}
