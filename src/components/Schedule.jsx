import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScheduleSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // Spine grow animation
  const spineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const day1 = [
    { time: "09:00 AM", title: "Registration & Check-In" },
    { time: "10:00 AM", title: "Breakfast + Opening Keynotes" },
    { time: "01:00 PM", title: "Lunch Break" },
    { time: "05:00 PM", title: "Jamming / Mentoring Session" },
    { time: "08:00 PM", title: "Dinner" },
    { time: "12:00 AM", title: "Midnight Evaluation + Snacks" },
  ];

  const day2 = [
    { time: "08:00 AM", title: "GitHub Push + Prototype Submission" },
    { time: "09:00 AM", title: "Breakfast" },
    { time: "10:00 AM", title: "PPT Presentation Round" },
    { time: "12:00 PM", title: "Top 5 Teams Announcement + Lunch" },
    { time: "03:00 PM", title: "Final Round + Prize Distribution" },
  ];

  const renderTimeline = (sessions) => (
    <div className="relative mt-16">

      {/* Animated Spine */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
      <motion.div
        style={{ height: spineHeight }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-[#b30000]"
      />

      <div className="space-y-24">
        {sessions.map((session, index) => {
          const isLeft = index % 2 === 0;

          const x = useTransform(
            smoothProgress,
            [0, 1],
            [isLeft ? -150 : 150, 0]
          );

          const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

          return (
            <div key={index} className="relative flex items-center justify-center">

              {/* Animated Node Pulse */}
              <motion.div
                style={{ scale: smoothProgress }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#b30000] rounded-full shadow-[0_0_20px_rgba(179,0,0,0.8)]"
              />

              {/* Card */}
              <motion.div
                style={{ x, opacity }}
                className={`
                  w-[90%] sm:w-[80%] md:w-[45%]
                  ${isLeft ? "mr-auto text-right pr-12" : "ml-auto pl-12"}
                  bg-white/5 backdrop-blur-md border border-white/10 
                  rounded-2xl p-6 hover:border-[#b30000] transition duration-300
                  hover:shadow-[0_0_40px_rgba(179,0,0,0.3)]
                `}
              >
                <p className="text-xs tracking-[0.4em] text-white/50 uppercase mb-3">
                  {session.time}
                </p>

                <h4 className="text-lg font-semibold text-white">
                  {session.title}
                </h4>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-24">
  EVENT <span className="text-[#b30000] italic">SCHEDULE</span>
</h2>

        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Day 1 · The Kickoff
          </h3>
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase mt-2">
            28 March 2026
          </p>
        </div>

        {renderTimeline(day1)}

        <div className="text-center mt-32">
          <h3 className="text-xl md:text-2xl font-semibold">
            Day 2 · The Finale
          </h3>
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase mt-2">
            29 March 2026
          </p>
        </div>

        {renderTimeline(day2)}
      </div>
    </section>
  );
}