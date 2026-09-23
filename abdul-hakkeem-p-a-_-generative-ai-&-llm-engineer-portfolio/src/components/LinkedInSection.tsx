import React from 'react';
import { Linkedin, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LinkedInSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0D1117] border border-neutral-800 relative overflow-hidden">
          {/* Subtle tech accent backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-950/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#0A66C2] flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Professional Network & Hiring</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Looking for an AI & ML Engineer?
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                I build Python-based applications, REST APIs, and Generative AI/LLM-powered systems—ranging from 
                local LLM serving and prompt engineering to LangChain RAG chatbots and full-stack healthcare platforms.
                Seeking to apply strong programming fundamentals as an AI & ML Engineer building cloud-native AI applications on Google Cloud.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-400 pt-2">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Available for Full-Time AI & ML Engineer Roles
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Awarded Best Student of the Year 2025
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0A66C2]/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-cyan-400 text-center"
              >
                <Linkedin className="w-4 h-4 fill-white" />
                <span>Let&apos;s Connect on LinkedIn →</span>
              </a>

              <span className="text-[11px] font-mono text-neutral-500">
                Verified: linkedin.com/in/abdullah-m-cr7
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="relative z-10 mt-10 pt-8 border-t border-neutral-800/80">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Academic & Technical Distinctions:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3"
                >
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white mb-1">
                      {ach.split('in')[0]?.trim() || 'Achievement'}
                    </div>
                    <div className="text-[11px] text-neutral-400 leading-snug">
                      {ach}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
