import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-navy-700 bg-navy-950">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-(family-name:--font-playfair) text-xl text-cream-100 hover:text-amber-400 transition-colors"
        >
          Late Chapter
        </Link>

        <ul className="flex items-center gap-6 text-sm text-cream-300">
          <li>
            <Link href="/book" className="hover:text-amber-400 transition-colors">
              Current Book
            </Link>
          </li>
          <li>
            <Link href="/voting" className="hover:text-amber-400 transition-colors">
              Vote
            </Link>
          </li>
          <li>
            <Link href="/archive" className="hover:text-amber-400 transition-colors">
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
