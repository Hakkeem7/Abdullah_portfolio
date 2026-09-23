import React, { useState } from 'react';
import { Cpu, Database, Bot, Search, Network, Server, ArrowUpRight, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GenAIExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            AI & Machine Learning Expertise
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Grounded in academic research paper honors, open-source repositories, and hands-on AI & ML engineering.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.expertise.map((item, index) => {
            const isHovered = activeCategory === index;
            return (
              <div
                key={item.category}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 rounded-xl bg-[#111827] border transition-all duration-200 flex flex-col justify-between ${
                  isHovered ? 'border-cyan-500/50 shadow-lg shadow-cyan-950/20 translate-y-[-2px]' : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.category}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {item.headline}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Zero-Pill Discipline: Clean unboxed list of technologies with typographic separator */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                    Engineered Technologies:
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-neutral-300">
                    {item.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="font-mono text-neutral-300 hover:text-cyan-300 transition-colors">
                          {skill}
                        </span>
                        {sIdx < item.skills.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600 select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Callout banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#0D1117] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Interested in system pipelines and serving architectures?
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Explore the interactive architectural workflows behind Local LLM Serving, Gemini AI Summarization, and LangChain RAG.
              </div>
            </div>
          </div>

          <a
            href="#architecture"
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-cyan-400 border border-neutral-700 hover:border-cyan-500/50 rounded-md transition-colors"
          >
            <span>View System Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
