import { useState, useEffect } from "react";

function getTimeRemaining() {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diff = endOfDay.getTime() - now.getTime();

  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {[
        { value: time.hours, label: "Horas" },
        { value: time.minutes, label: "Min" },
        { value: time.seconds, label: "Seg" },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-b from-brand-purple to-brand-indigo font-passion text-lg font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-xl sm:text-2xl md:h-16 md:w-16 md:text-3xl">
            {pad(unit.value)}
          </span>
          <span className="mt-1 font-baloo text-xs text-gray-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
