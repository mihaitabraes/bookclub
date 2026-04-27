/*
  Shared TypeScript types for Late Chapter Book Club.

  These types mirror the shape of data we'll store in Supabase.
  Once we set up the actual database, we'll generate precise types
  from the schema — but these serve as our working contract until then.
*/

// ─── Books ────────────────────────────────────────────────────────────────────

export type BookStatus = "current" | "upcoming" | "archived";

export interface Book {
  id: string;
  title: string;
  author: string;
  /** Open Library work ID, e.g. "OL45804W". Used to fetch cover art + metadata. */
  open_library_id: string | null;
  cover_url: string | null;
  description: string | null;
  total_chapters: number | null;
  current_chapter: number | null;
  status: BookStatus;
  created_at: string;
}

// ─── Meetings ─────────────────────────────────────────────────────────────────

export interface Meeting {
  id: string;
  book_id: string;
  meeting_date: string; // ISO timestamp
  location: string | null;
  notes: string | null;
}

// ─── Members ──────────────────────────────────────────────────────────────────

export type MemberRole = "admin" | "member";

export interface Member {
  id: string; // same as Supabase auth user id
  display_name: string;
  email: string;
  role: MemberRole;
  joined_at: string;
}

// ─── Voting ───────────────────────────────────────────────────────────────────

export type VotingStatus = "open" | "closed";

export interface VotingRound {
  id: string;
  closes_at: string; // ISO timestamp
  status: VotingStatus;
  created_by: string; // member id (always admin)
}

export interface VotingCandidate {
  id: string;
  voting_round_id: string;
  book_id: string;
  book?: Book; // joined
}

export interface Vote {
  id: string;
  voting_round_id: string;
  candidate_id: string;
  member_id: string;
  created_at: string;
}

// ─── Reviews & Reactions ──────────────────────────────────────────────────────

export interface ChapterReaction {
  id: string;
  book_id: string;
  member_id: string;
  chapter_number: number;
  /** Short reaction text, written as the member reads that chapter */
  content: string;
  created_at: string;
  member?: Pick<Member, "display_name">;
}

export interface FinalReview {
  id: string;
  book_id: string;
  member_id: string;
  /** 1–5 star rating */
  rating: number;
  content: string;
  created_at: string;
  member?: Pick<Member, "display_name">;
}

// ─── Open Library API ─────────────────────────────────────────────────────────

/** Shape returned by the Open Library Works API */
export interface OpenLibraryWork {
  title: string;
  description: string | { type: string; value: string };
  authors: Array<{ author: { key: string } }>;
  covers: number[];
}

// ─── Admin AI Summary ─────────────────────────────────────────────────────────

export interface AISummary {
  themes: string[];
  tensions: string[];
  talking_points: string[];
  generated_at: string;
  raw: string; // full Claude response
}
