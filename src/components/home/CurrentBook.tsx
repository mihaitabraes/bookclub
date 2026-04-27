import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Book } from "@/types";

export default function CurrentBook({ book }: { book: Book }) {
  return (
    <section className="flex flex-col sm:flex-row gap-10 items-start">
      {/* Book cover with ornamental frame */}
      <div className="shrink-0 relative group">
        {/* Outer glow on hover */}
        <div className="absolute -inset-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-gold-600/30 to-transparent blur-md" />

        {book.cover_url ? (
          <Image
            src={book.cover_url}
            alt={`Cover of ${book.title}`}
            width={160}
            height={240}
            className="relative rounded-sm shadow-2xl shadow-black/70 ring-1 ring-ink-500 group-hover:ring-gold-600 transition-all duration-300"
          />
        ) : (
          <div className="w-40 h-60 rounded-sm bg-ink-700 ring-1 ring-ink-500 flex items-center justify-center">
            <span className="font-cinzel text-[0.6rem] tracking-widest text-dust uppercase text-center px-3">
              No Cover
            </span>
          </div>
        )}
      </div>

      {/* Book details */}
      <div className="flex flex-col gap-4 pt-1">
        {/* Label */}
        <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-gold-400">
          Currently Reading
        </p>

        {/* Title + author */}
        <div>
          <h2 className="font-cormorant font-semibold text-4xl text-parchment-50 leading-tight">
            {book.title}
          </h2>
          <p className="font-cormorant italic text-xl text-parchment-300 mt-1">
            {book.author}
          </p>
        </div>

        {/* Thin gold rule */}
        <div className="h-px w-16 bg-gold-600" />

        {book.description && (
          <p className="font-cormorant text-lg text-parchment-200 leading-relaxed max-w-prose">
            {book.description}
          </p>
        )}

        <div className="mt-2">
          <Button href="/book">
            View Reactions &amp; Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
