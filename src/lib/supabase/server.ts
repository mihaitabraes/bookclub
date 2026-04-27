/*
  Server-side Supabase client.

  Use this in Server Components, Server Actions, and Route Handlers.
  It reads the session from the HTTP request cookies, which is more
  secure than exposing tokens to the browser.

  IMPORTANT: `cookies()` from next/headers is async in Next.js 15+,
  so this function is async too. Always await it:
    const supabase = await createClient();
*/
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // setAll is called from a Server Component where we can't set cookies.
            // This is fine — the session will be refreshed client-side instead.
          }
        },
      },
    }
  );
}
