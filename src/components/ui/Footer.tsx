export default function Footer() {
  return (
    <footer className="relative mt-auto bg-ink-950 border-t border-ink-600">
      {/* Gold gradient line at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-600 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center gap-4">
        {/* Ornamental divider */}
        <div className="ornament w-48 text-gold-600">✦</div>

        <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-dust">
          Late Chapter Book Club
        </p>
        <p className="font-cormorant italic text-sm text-dust">
          Reading in the margins of a full day
        </p>
      </div>
    </footer>
  );
}
