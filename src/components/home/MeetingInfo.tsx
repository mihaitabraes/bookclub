interface MeetingInfoProps {
  date: Date;
  location?: string;
}

export default function MeetingInfo({ date, location }: MeetingInfoProps) {
  // Format the date in a friendly, readable way
  const formatted = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="bg-navy-800 rounded-lg p-6 border border-navy-700">
      <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">
        Next Meeting
      </p>
      <p className="font-(family-name:--font-playfair) text-2xl text-cream-50">
        {formatted}
      </p>
      <p className="text-cream-300 mt-1">{time}</p>
      {location && (
        <p className="text-muted text-sm mt-2">{location}</p>
      )}
    </section>
  );
}
