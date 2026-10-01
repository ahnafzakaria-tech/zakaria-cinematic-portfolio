import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 18, stiffness: 220 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="about" className="relative overflow-hidden bg-black px-6 py-24 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-32">
      <div className="absolute left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4"><span className="text-[11px] tracking-[0.35em] text-[#D4AF37]">01 / ABOUT ME</span><div className="h-px w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" /></div>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="lg:col-span-7">
            <h2 className="mb-7 text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent">DOCUMENT CONTROL</span>
              <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent">AS A DISCIPLINE.</span>
            </h2>
            <p className="max-w-2xl text-sm font-light leading-[1.9] tracking-wide text-[#B3A497] sm:text-base">
              I am Md Zakaria Hossain, a Project Document Controller with almost four years of experience managing engineering and construction documentation on large-scale power and renewable-energy EPC projects. My work combines project-specific coding, numbering, classification, metadata validation, submission workflows, revision control, and close-out handover.
            </p>
            <p className="mt-5 max-w-2xl text-sm font-light leading-[1.9] tracking-wide text-[#8F8176]">
              With LL.B and LL.M training, I bring a compliance-focused approach to contractual documentation, regulatory record-keeping, approval routing, and stakeholder coordination.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#8C6D4F]/30 pt-6 sm:grid-cols-4">
              {[['206', 'Goldwind turbines'], ['273+ km²', 'Starah project area'], ['COD', 'Meghnaghat achieved'], ['3', 'AI certificates']].map(([value, label]) => (
                <div key={label}><p className="text-2xl text-[#F4EBE2]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{value}</p><p className="text-[9px] uppercase tracking-[0.15em] text-[#A8988B]">{label}</p></div>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div ref={cardRef} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} onMouseMove={handleMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); mouseX.set(0); mouseY.set(0); }} className="relative w-full max-w-[390px] border border-[#8C6D4F]/50 bg-[#120F0C]/80 p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.95)] transition-colors hover:border-[#D4AF37]">
              <div className="absolute -inset-5 -z-10 rounded-3xl bg-[#D4AF37]/20 blur-2xl transition-opacity" style={{ opacity: hovered ? 0.45 : 0.15 }} />
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img src="/assets/profile.jpg" alt="Md Zakaria Hossain" className="h-full w-full object-cover object-top brightness-[0.9] contrast-110 transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5"><p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">PROJECT DOCUMENT CONTROLLER</p><p className="mt-1 text-sm tracking-wider text-[#EAD8C7]">MD ZAKARIA HOSSAIN</p></div>
              </div>
              <div className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#D4AF37]" /><div className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#D4AF37]" />
            </motion.div>
          </div>
        </div>
        <div className="relative mt-16 h-40 overflow-hidden border border-[#8C6D4F]/30 sm:h-52">
          <img src="/assets/sunset.jpg" alt="Sunset over the Starah project site" className="h-full w-full object-cover opacity-60 grayscale-[0.15] transition duration-700 hover:scale-105 hover:opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/70" />
          <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-[#F7E7C4]">FIELD NOTES // SAUDI ARABIA</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
