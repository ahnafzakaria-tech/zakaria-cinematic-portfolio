import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'EXPERTISE', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      {cursor.x >= 0 && (
        <motion.div
          className="fixed left-0 top-0 z-50 pointer-events-none rounded-full border border-[#D4AF37]/50"
          animate={{
            x: cursor.x - (hovered ? 24 : 5),
            y: cursor.y - (hovered ? 24 : 5),
            width: hovered ? 48 : 10,
            height: hovered ? 48 : 10,
            backgroundColor: hovered ? 'rgba(212,175,55,0.12)' : 'rgba(235,215,195,0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      <div className="absolute inset-0 bg-[#050403]">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-45">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(212,175,55,0.18),transparent_32%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 sm:px-12 lg:px-16">
        <header className="flex items-center justify-between">
          <a href="#hero" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="text-sm font-semibold tracking-[0.35em] text-[#EAD8C7]">
            ZAKARIA.
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-light tracking-[0.25em] text-[#C4B5A5] md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="transition-colors hover:text-[#FFF5EB]">
                {item.name}
              </a>
            ))}
          </nav>
          <a href="#contact" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="border border-[#8C6D4F]/60 px-4 py-2 text-[11px] tracking-[0.2em] text-[#EAD8C7] transition hover:border-[#D4AF37]">
            LET&apos;S TALK ↗
          </a>
        </header>

        <div id="hero" className="my-auto flex w-full items-center py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium tracking-[0.35em] text-[#D4AF37]">PROJECT DOCUMENT CONTROL // RIYADH, KSA</p>
            <h1 className="mb-6 text-6xl uppercase leading-[0.8] tracking-tight sm:text-8xl lg:text-[8.5rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent">CONTROL</span>
              <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent">THE</span>
              <span className="block bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] bg-clip-text text-transparent">DETAIL.</span>
            </h1>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#D7C5B5] sm:text-sm">
              EPC DOCUMENTATION <span className="text-[#8C6D4F]">•</span> EDMS ADMINISTRATION <span className="text-[#8C6D4F]">•</span> COMPLIANCE
            </p>
            <p className="max-w-xl text-sm font-light leading-[1.8] tracking-wide text-[#A8988B] sm:text-base">
              Md Zakaria Hossain is a Project Document Controller managing traceable, compliant records across major power generation and renewable-energy EPC projects in Saudi Arabia and Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="border border-[#D4AF37] bg-[#D4AF37]/10 px-6 py-3 text-[11px] font-medium tracking-[0.22em] text-[#F7E7C4] transition hover:bg-[#D4AF37] hover:text-black">EXPLORE PROJECTS ↗</a>
              <a href="/assets/Md-Zakaria-Hossain-CV.pdf" download onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="border border-[#8C6D4F]/60 px-6 py-3 text-[11px] font-medium tracking-[0.22em] text-[#C4B5A5] transition hover:border-[#D4AF37] hover:text-white">DOWNLOAD CV ↓</a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 divide-x divide-[#8C6D4F]/30 border-t border-[#8C6D4F]/30 pt-5 sm:grid-cols-4">
              {[
                ['~4 yrs', 'Experience'],
                ['2', 'EPC Projects'],
                ['2.7 GW', 'Project Capacity'],
                ['2', 'Countries'],
              ].map(([value, label]) => (
                <div key={label} className="px-4 first:pl-0">
                  <p className="text-2xl text-[#F4EBE2] sm:text-3xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{value}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#A8988B]">{label}</p>
                </div>
              ))}
            </div>
            <img src="/assets/Signature.png" alt="Zakaria signature" className="mt-7 h-auto w-48 opacity-80 brightness-150 contrast-125" />
          </motion.div>
        </div>

        <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.25em] text-[#8C6D4F]">
          <span>THINKPROJECT · S-PMIS · ACONEX</span>
          <span className="hidden sm:block">SCROLL TO DISCOVER ↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
