import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import "./globals.css";

/*
  next/font/google downloads fonts at build time and serves them
  from the same domain — no external network request in the browser,
  which is both faster and better for privacy.

  We load two fonts:
  - Playfair Display (serif) for headings — gives a warm literary feel
  - Inter (sans-serif) for body text — clean and highly readable
*/
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Late Chapter Book Club",
  description:
    "A small book club for people with busy lives who carve out time to read.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      /*
        We attach the font CSS variables to <html> so they're available
        everywhere via var(--font-playfair) and var(--font-inter).
        The antialiased class smooths font rendering on most screens.
      */
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy-900 text-cream-100">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
