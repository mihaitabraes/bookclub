import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

export default function CurrentBook({ book }: { book: Book }) {
  return (
    <section className="flex flex-col sm:flex-row gap-8 items-start">
      {/* Book cover */}
      <div className="shrink-0">
        {book.cover_url ? (
          <Image
            src={book.cover_url}
            alt={`Cover of ${book.title}`}
            width={160}
            height={240}
            className="rounded shadow-lg shadow-black/50"
          />
        ) : (
          // Placeholder when no cover is available
          <div className="w-40 h-60 rounded bg-navy-700 flex items-center justify-center">
            <span className="text-muted text-xs text-center px-3">No cover</span>
          </div>
        )}
      </div>

      {/* Book details */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm uppercase tracking-widest text-amber-400 mb-1">
            Currently Reading
          </p>
          <h2 className="font-(family-name:--font-playfair) text-3xl text-cream-50 leading-tight">
            {book.title}
          </h2>
          <p className="text-cream-300 mt-1">{book.author}</p>
        </div>

        {book.description && (
          <p className="text-cream-200 leading-relaxed max-w-prose text-sm">
            {book.description}
          </p>
        )}

        <Link
          href="/book"
          className="mt-2 self-start text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
        >
          View reactions &amp; reviews →
        </Link>
      </div>
    </section>
  );
}
