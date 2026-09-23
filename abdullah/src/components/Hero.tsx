import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Terminal, Layers, Sparkles, Server } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle tech background grid with low opacity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(#1f2937 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow centered behind hero */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Status Line: Zero-pill discipline - clean unboxed typography with typographic dot separators */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-400 mb-6">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {PORTFOLIO_DATA.experience[0]?.role} @ {PORTFOLIO_DATA.experience[0]?.organization}
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">{PORTFOLIO_DATA.profile.communityRole}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-400">{PORTFOLIO_DATA.profile.location}</span>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
          {PORTFOLIO_DATA.profile.name}
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 mb-6">
          {PORTFOLIO_DATA.profile.title}
        </div>

        {/* Professional Statement */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed mb-10 font-normal">
          {PORTFOLIO_DATA.profile.shortBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-cyan-400"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-600 font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-600 font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 hover:border-cyan-500/50 font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Technical Highlights Bar - dynamic data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-neutral-800/80 text-left">
          <div className="p-4 rounded-lg bg-[#0D1117]/80 border border-neutral-800">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              <span>Internship</span>
            </div>
            <div className="text-base font-semibold text-white truncate">{PORTFOLIO_DATA.experience[0]?.role}</div>
            <div className="text-xs text-neutral-400 mt-0.5 truncate">{PORTFOLIO_DATA.experience[0]?.organization} ({PORTFOLIO_DATA.experience[0]?.period})</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D1117]/80 border border-neutral-800">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Data Science</span>
            </div>
            <div className="text-base font-semibold text-white truncate">{PORTFOLIO_DATA.experience[1]?.role}</div>
            <div className="text-xs text-neutral-400 mt-0.5 truncate">{PORTFOLIO_DATA.experience[1]?.organization}</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D1117]/80 border border-neutral-800">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Honor</span>
            </div>
            <div className="text-base font-semibold text-white truncate">SIMATS 2026 Winner</div>
            <div className="text-xs text-neutral-400 mt-0.5 truncate">Best Research Paper Award</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D1117]/80 border border-neutral-800">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Academics</span>
            </div>
            <div className="text-base font-semibold text-white">CGPA {PORTFOLIO_DATA.profile.cgpa}</div>
            <div className="text-xs text-neutral-400 mt-0.5 truncate">Best Student of the Year 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
};
