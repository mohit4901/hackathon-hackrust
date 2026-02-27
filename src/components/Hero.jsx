import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["innovation", "logic"];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 90);
    } 
    else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } 
    else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 50);
    } 
    else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden bg-black text-white">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:24px_24px]" />

      {/* Background HACKRUST Text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden pt-28 md:pt-24">
        <div className="hackrust-track">
          {[...Array(5)].map((_, i) => (
            <h1
              key={i}
              className="text-[40vw] md:text-[26vw] font-black text-white/13 whitespace-nowrap px-20 md:px-32"
            >
              HACKRUST
            </h1>
          ))}
        </div>
      </div>

      {/* BREAK the LIMITS */}
      <div className="absolute top-24 md:top-28 w-full flex items-center justify-between px-6 md:px-20 text-xl md:text-3xl font-bold">
        <span>BREAK</span>
        <span className="text-[#b30000] italic font-light text-sm md:text-lg tracking-widest">
          the
        </span>
        <span>LIMITS</span>
      </div>

      {/* GDG Section */}
      <div className="relative z-10 mt-28 md:mt-32 flex flex-col items-center text-center">

        <img
          src="/gdg-logo.png"
          alt="GDG Logo"
          className="w-15 h-15 mb-3 object-contain"
        />

        <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/60">
          Organised by
        </span>

        <span className="text-[#b30000] text-[11px] md:text-sm font-semibold tracking-widest mt-1">
          GDG DCRUST
        </span>
      </div>

      {/* Main Quote */}
      <div className="relative z-10 text-center max-w-md md:max-w-4xl mt-8 md:mt-12">
        <h2 className="text-xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-[1.2]">
          IN EVERY LINE OF CODE AND EVERY DEBUGGED FOLD, THERE IS{" "}
          <span className="text-[#b30000] italic font-semibold min-w-[90px] md:min-w-[140px] inline-block">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>{" "}
          BETWEEN COMPLEXITY.
        </h2>

        <button className="mt-10 md:mt-12 bg-[#b30000] px-6 md:px-10 py-2 md:py-3 text-[10px] md:text-[11px] tracking-[0.3em] uppercase hover:bg-[#8f0000] transition-all duration-300 hover:scale-105">
          REGISTER NOW
        </button>
      </div>

      {/* Mobile Metadata */}
      <div className="md:hidden absolute bottom-24 text-center text-[11px] tracking-widest uppercase text-white/60">
        24H Offline Hackathon · ₹1Lakh+ Prize Pool
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 flex flex-col items-center">
        <div className="w-[2px] h-10 bg-white/20 relative overflow-hidden">
          <div className="w-full h-3 bg-[#b30000] animate-bounce absolute top-0" />
        </div>
      </div>

    </section>
  );
}