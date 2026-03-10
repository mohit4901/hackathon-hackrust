import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.92,
    rotateX: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
};

export default function PrizeDistribution() {
  return (
    <section className="relative bg-black py-32 overflow-hidden perspective-[1400px]">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* STATIC HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 tracking-tight">
          PRIZE <span className="text-[#b30000] italic">POOL</span>
        </h2>

        {/* MAIN PRIZES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {/* CHAMPION */}
          <motion.div
            variants={cardVariant}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-[#0d0d0d] border border-[#b30000] p-12 rounded-3xl text-center shadow-[0_0_60px_rgba(179,0,0,0.35)] overflow-hidden"
          >
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b30000]/15 via-transparent to-transparent pointer-events-none" />

            {/* Animated Shine */}
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              transition={{
                duration: 2,
                ease: "linear",
              }}
              viewport={{ once: false }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-4 relative z-10">
              Champion
            </h3>

            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: false }}
              className="text-5xl font-bold text-[#b30000] relative z-10"
            >
              ₹31K
            </motion.p>
          </motion.div>

          {/* RUNNER UP */}
          <motion.div
            variants={cardVariant}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            className="bg-[#0d0d0d] border border-white/10 p-12 rounded-3xl text-center hover:border-[#b30000] transition duration-300"
          >
            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-4">
              Runner-Up
            </h3>
            <p className="text-4xl font-semibold text-white">₹21K</p>
          </motion.div>

          {/* SECOND RUNNER UP */}
          <motion.div
            variants={cardVariant}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            className="bg-[#0d0d0d] border border-white/10 p-12 rounded-3xl text-center hover:border-[#b30000] transition duration-300"
          >
            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-4">
              Second Runner-Up
            </h3>
            <p className="text-3xl font-semibold text-white">₹11K</p>
          </motion.div>

        </motion.div>

        {/* SPECIAL MENTIONS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >

          <motion.div
            variants={cardVariant}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0d0d0d] border border-white/10 p-8 rounded-2xl text-center hover:border-[#b30000] transition duration-300"
          >
            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-3">
              Best Open Innovation
            </h3>
            <p className="text-2xl font-semibold text-white">₹5K</p>
          </motion.div>

          <motion.div
            variants={cardVariant}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0d0d0d] border border-white/10 p-8 rounded-2xl text-center hover:border-[#b30000] transition duration-300"
          >
            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-3">
            Best All Girls Team
            </h3>
            <p className="text-2xl font-semibold text-white">₹5K</p>
          </motion.div>

        </motion.div>

        {/* PARTICIPATION BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: false }}
          className="mt-20 bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl p-10 text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold tracking-wide mb-4">
            Participation Certificates & Goodies for All
          </h3>
          <p className="text-white/60 text-sm tracking-wide">
            Every participant walks away with official certification and exclusive hackathon merchandise.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
