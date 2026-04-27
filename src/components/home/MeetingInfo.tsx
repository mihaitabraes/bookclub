interface MeetingInfoProps {
  date: Date;
  location?: string;
}

export default function MeetingInfo({ date, location }: MeetingInfoProps) {
  const dayName = date.toLocaleDateString("en-GB", { weekday: "long" });
  const dateStr = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="card-victorian p-6 flex flex-col gap-3">
      <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-gold-400">
        Next Meeting
      </p>

      <div>
        <p className="font-cormorant font-semibold text-2xl text-parchment-50">
          {dayName}
        </p>
        <p className="font-cormorant italic text-lg text-parchment-200">
          {dateStr}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-1">
        {/* Small clock ornament */}
        <span className="text-gold-500 text-sm">◆</span>
        <p className="font-cinzel text-xs tracking-widest text-parchment-300">{time}</p>
      </div>

      {location && (
        <p className="text-sm text-dust mt-1">{location}</p>
      )}
    </div>
  );
}
