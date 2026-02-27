import { useEffect, useState } from "react";

export default function CountdownSection() {
  const eventDate = new Date("March 28, 2026 00:00:00").getTime();

  const calculate = () => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const t = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!time) {
    return (
      <section className="bg-black text-white py-40 text-center">
        Event Started 🚀
      </section>
    );
  }

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress =
    (time.seconds / 60) * circumference;

  return (
    <section className="relative bg-black py-40 flex flex-col items-center justify-center overflow-hidden">

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:24px_24px]" />

      {/* heading */}
      <h2 className="relative z-10 text-center text-3xl md:text-5xl font-bold tracking-tight mb-20">
        SAVE THE DATES &{" "}
        <span className="text-[#b30000] italic">
          SET REMINDER
        </span>
      </h2>

      {/* clock wrapper */}
      <div className="relative z-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">

        {/* outer thin ring */}
        <div className="absolute inset-0 rounded-full border border-white/10"></div>

        {/* svg animated ring */}
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 280 280"
        >
          <circle
            cx="140"
            cy="140"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="140"
            cy="140"
            r={radius}
            stroke="#b30000"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            transform="rotate(-90 140 140)"
          />
        </svg>

        {/* inner face */}
        <div className="absolute inset-[22px] rounded-full bg-[#0b0b0b] flex flex-col items-center justify-center">

          <div className="text-3xl md:text-4xl font-semibold tracking-[0.15em] text-white">
            {String(time.days).padStart(2, "0")}:
            {String(time.hours).padStart(2, "0")}:
            {String(time.minutes).padStart(2, "0")}:
            {String(time.seconds).padStart(2, "0")}
          </div>

          <div className="mt-5 text-[9px] tracking-[0.5em] text-white/40 uppercase">
            DD&nbsp;&nbsp;HH&nbsp;&nbsp;MM&nbsp;&nbsp;SS
          </div>

        </div>
      </div>

      <p className="relative z-10 mt-16 text-xs tracking-[0.4em] uppercase text-white/40">
        28 March 2026 · Saturday
      </p>

    </section>
  );
}