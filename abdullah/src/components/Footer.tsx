import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-neutral-900 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-sm">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <div className="font-mono text-[11px] text-neutral-500">
              {PORTFOLIO_DATA.profile.title} · {PORTFOLIO_DATA.profile.secondaryTitle}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PORTFOLIO_DATA.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <a
            href={PORTFOLIO_DATA.profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors p-2 rounded-md hover:bg-neutral-900 font-mono text-[11px] cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 gap-2">
        <div>
          Verified portfolio. Sources: ORGIN I, NSIC MSME, Dhaanish Ahmed College of Engineering, SIMATS 2026.
        </div>
        <div>
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
