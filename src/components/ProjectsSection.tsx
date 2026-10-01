import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  experienceUrl: string;
  contactUrl: string;
  cover: string;
  disciplines: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Starah Independent Power Plant',
    category: '2 GW ONSHORE WIND / SAUDI ARABIA',
    description:
      'Project Document Controller at CEEC (China Energy Engineering Corporation), supporting ACWA Power’s 2 GW onshore wind project. Manage numbering and coding, engineering drawing revisions, MOM records, and MOS/RA approval routing in Thinkproject. Track FCRs, site instructions, MARs, concrete pouring records, and overdue submissions while training engineers in document workflows.',
      experienceUrl: '#experience',
      contactUrl: '#contact',
      cover: '/assets/starah-cover.jpg',
    disciplines: ['Thinkproject', 'Revision Control', 'MOM', 'MOS / RA', 'FCR / MAR', 'Engineer Training'],
    metrics: [
      { label: 'PERIOD', value: 'Nov 2025–Present' },
      { label: 'EMPLOYER', value: 'CEEC' },
      { label: 'OWNER', value: 'ACWA Power' },
      { label: 'EDMS', value: 'Thinkproject' },
    ],
  },
  {
    number: '02',
    title: 'Meghnaghat 718 MW Combined Cycle Power Plant',
    category: 'COMBINED CYCLE POWER / BANGLADESH',
    description:
      'Supported Samsung C&T’s full-lifecycle project records for JERA Meghnaghat Power Limited’s 718 MW plant, powered by GE Vernova technology. Managed transmittals, reports, as-built records, handover documentation, and training through Samsung Knox Portal (S-PMIS). The project achieved commercial operation (COD) in 2025.',
      experienceUrl: '#experience',
      contactUrl: '#contact',
      cover: '/assets/aerial-1.jpg',
    disciplines: ['S-PMIS', 'Transmittals', 'Project Reports', 'As-Builts', 'Handover', 'Training'],
    metrics: [
      { label: 'PERIOD', value: 'Nov 2022–Oct 2025' },
      { label: 'EMPLOYER', value: 'Samsung C&T' },
      { label: 'OWNER', value: 'JERA Meghnaghat Power Limited' },
      { label: 'MILESTONE', value: 'COD achieved 2025' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ENERGY PROJECTS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              DOCUMENTED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Supporting major energy projects with controlled records, traceable approvals, and coordinated handover documentation.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="min-w-0 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Document Control Disciplines */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.disciplines.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="min-w-0 lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="relative h-44 overflow-hidden rounded-sm border border-[#8C6D4F]/40 bg-[#050403] group-hover:border-[#D4AF37]/70 sm:h-52">
                      <img src={project.cover} alt={`${project.title} project cover`} className="h-full w-full object-cover brightness-75 contrast-110 transition duration-700 group-hover:scale-105 group-hover:brightness-95" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-[9px] font-mono uppercase tracking-[0.24em] text-[#F7E7C4]">FIELD DOCUMENTATION</span>
                    </div>
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT PROFILE
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4"
                        >
                          <span className="shrink-0 text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="min-w-0 break-words sm:text-right text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={project.experienceUrl}
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>EXPERIENCE</span>
                        <span className="text-xs">↗</span>
                      </a>

                      <a
                          href={project.contactUrl}
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LET’S TALK</span>
                          <span className="text-xs">↗</span>
                        </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
