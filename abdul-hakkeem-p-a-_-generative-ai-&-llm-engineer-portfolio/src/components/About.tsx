import React from 'react';
import { Terminal, ShieldCheck, Zap, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117]/60 border-t border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Software Engineer and Applied AI Systems Builder focusing on the transition of modern LLM architectures into reliable enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
            {PORTFOLIO_DATA.profile.extendedBio.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}

            <p className="p-4 rounded-lg bg-[#111827] border-l-2 border-cyan-500 text-neutral-200 text-sm font-mono">
              &ldquo;I build end-to-end AI systems—from local LLM serving and structured prompt engineering 
              to LangChain RAG pipelines, high-performance REST APIs, and full-stack clinical workflows.&rdquo;
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                Core Engineering Focus Areas:
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Cloud-Independent Local Inference:</strong> Serving local foundation models through Python/Flask REST endpoints with structured prompt templates, avoiding external API dependencies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Context-Grounded Document Intelligence:</strong> Architecting LangChain RAG pipelines with dense vector embeddings and semantic search to eliminate hallucinations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Production Full-Stack AI Integration:</strong> Integrating frontier LLMs (Google Gemini AI) into enterprise full-stack stacks (React, Node.js, Express, MongoDB) for automated report summarization.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Technical Fact Sheet / Sidebar */}
          <div className="lg:col-span-5 bg-[#111827] border border-neutral-800 rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Verified Snapshot</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">● Active Engineer</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-neutral-500 font-mono block mb-1">CURRENT POSITION</span>
                <span className="text-neutral-200 font-medium text-sm block">
                  {PORTFOLIO_DATA.experience[0]?.role} @ {PORTFOLIO_DATA.experience[0]?.organization}
                </span>
                <span className="text-neutral-400">{PORTFOLIO_DATA.experience[0]?.responsibilities[0]}</span>
              </div>

              {PORTFOLIO_DATA.experience[1] && (
                <div className="border-t border-neutral-800/80 pt-3">
                  <span className="text-neutral-500 font-mono block mb-1">PREVIOUS EXPERIENCE</span>
                  <span className="text-neutral-200 font-medium text-sm block">
                    {PORTFOLIO_DATA.experience[1]?.role} @ {PORTFOLIO_DATA.experience[1]?.organization}
                  </span>
                  <span className="text-neutral-400">{PORTFOLIO_DATA.experience[1]?.responsibilities[0]}</span>
                </div>
              )}

              {PORTFOLIO_DATA.education[0] && (
                <div className="border-t border-neutral-800/80 pt-3">
                  <span className="text-neutral-500 font-mono block mb-1">EDUCATION & RESEARCH</span>
                  <span className="text-neutral-200 font-medium text-sm block">
                    {PORTFOLIO_DATA.education[0].institution}
                  </span>
                  <span className="text-neutral-400">{PORTFOLIO_DATA.education[0].degree}</span>
                </div>
              )}

              <div className="border-t border-neutral-800/80 pt-3">
                <span className="text-neutral-500 font-mono block mb-1">COMMUNITY & RECOGNITION</span>
                <span className="text-neutral-200 font-medium text-sm block">
                  {PORTFOLIO_DATA.profile.communityRole}
                </span>
                <span className="text-neutral-400">{PORTFOLIO_DATA.talks[0]?.title || 'Keynote Speaker'}</span>
              </div>

              <div className="border-t border-neutral-800/80 pt-3">
                <span className="text-neutral-500 font-mono block mb-1">PRIMARY CONTACT</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="text-cyan-400 hover:text-cyan-300 font-mono underline decoration-neutral-700 hover:decoration-cyan-400 transition-colors"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-xs font-medium text-white transition-colors"
              >
                <span>Explore Implemented Systems</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
