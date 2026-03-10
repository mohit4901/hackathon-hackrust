import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] text-black px-6 lg:px-20 py-28">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        FIRST TIME <span className="italic text-[#b30000] font-normal">in</span> DCRUST
      </h2>

      {/* Big Branding */}
      <div className="text-[14vw] font-black tracking-tight leading-none">
        <span className="text-[#b30000]">HACK</span>RUST
      </div>

      {/* Social Links */}
      <div className="mt-16 flex items-center gap-6">

        <a
          href="https://www.instagram.com/hack_rust/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#b30000] transition-all duration-300"
        >
          <FaInstagram className="text-xl" />
          Instagram
        </a>

      </div>

      {/* Copyright */}
      <div className="mt-16 text-xs uppercase tracking-[0.3em]">
        © 2026 HACKRUST 1.0 (DCRUST)
      </div>
      <div className="mt-16 text-xs uppercase tracking-[0.3em]">
     Made By GDG Web Dev Team
      </div>

    </footer>
  );
}
