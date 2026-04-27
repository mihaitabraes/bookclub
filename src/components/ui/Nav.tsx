import Link from "next/link";

export default function Nav() {
  return (
    <header className="relative bg-ink-950 border-b border-ink-600">
      {/* Thin gold line at very top — like a gilded frame edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent" />

      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-cinzel text-lg tracking-[0.2em] text-parchment-100 uppercase hover:text-gold-300 transition-colors duration-300"
        >
          Late Chapter
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {[
            { label: "Current Book", href: "/book" },
            { label: "Vote",         href: "/voting" },
            { label: "Archive",      href: "/archive" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-parchment-300 hover:text-gold-300 transition-colors duration-300 relative group"
              >
                {label}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Subtle gradient border-bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-600 to-transparent opacity-60" />
    </header>
  );
}
