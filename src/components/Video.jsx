import { useRef, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Subtle Grid (Hero theme) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:24px_24px] z-10 pointer-events-none" />

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/WELCOME.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Overlay Text */}
      <div className="relative z-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
          <span className="text-white">DCRUST</span>
          <br />
          <span className="text-[#b30000] italic font-semibold">
            WELCOMES YOU TO
          </span>
          <br/>
          <span className="text-white">TO CODE FOR</span>
          <br/>
          <span className="italic font-semibold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
  VIKSIT BHARAT 2047
</span>
          
        </h2>
      </div>

    </section>
  );
}