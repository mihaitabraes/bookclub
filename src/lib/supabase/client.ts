/*
  Browser-side Supabase client.

  Use this in Client Components (files that have "use client" at the top)
  for things like voting, submitting reactions, and auth sign-in flows.

  The `createBrowserClient` function from @supabase/ssr automatically
  handles reading and writing the session cookie in the browser.
*/
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
