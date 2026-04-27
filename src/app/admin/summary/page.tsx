/*
  Admin-only page. Once auth is wired up this will be protected by middleware
  so only the admin account can reach it. For now it's just a placeholder.
*/
export default function AdminSummaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Admin</p>
      <h1 className="font-(family-name:--font-playfair) text-4xl text-cream-50 mb-6">
        Meeting Summary
      </h1>
      <p className="text-muted">
        Coming soon — Claude AI will aggregate member reactions and generate talking points here.
      </p>
    </div>
  );
}
