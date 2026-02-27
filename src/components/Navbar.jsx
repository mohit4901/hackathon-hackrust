import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-6 text-[11px] tracking-[0.25em] uppercase">

      <div className="flex items-center justify-between">

        {/* Logo / Title */}
        <div className="text-xs md:text-sm tracking-[0.3em] font-semibold">
          THE OFFICIAL HACKATHON
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-5 h-[1px] bg-white"></span>
          <span className="w-5 h-[1px] bg-white"></span>
          <span className="w-5 h-[1px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-black transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>About Us</a>
          <a href="#" onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      </div>

    </nav>
  );
}