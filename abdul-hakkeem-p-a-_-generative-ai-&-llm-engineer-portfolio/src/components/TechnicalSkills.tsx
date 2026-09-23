import React, { useState } from 'react';
import { Terminal, Cpu, Database, Server, GitBranch, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const skillCategories = Object.entries(PORTFOLIO_DATA.technicalSkills);
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0][0]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117]/60 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills & Engineering Competencies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Organized by functional domain. Every item represents hands-on production code, benchmarks, or published research.
          </p>
        </div>

        {/* Tabbed View for Clean Layout without Wall of Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs list */}
          <div className="lg:col-span-4 space-y-1.5 bg-[#111827] p-2 rounded-xl border border-neutral-800">
            {skillCategories.map(([category]) => {
              const isSelected = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-800/90 text-cyan-400 shadow-sm border border-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                  }`}
                >
                  <span>{category}</span>
                  <span className="font-mono text-[11px] text-neutral-500">
                    {PORTFOLIO_DATA.technicalSkills[category as keyof typeof PORTFOLIO_DATA.technicalSkills].length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Skills Panel: Zero-Pill format - clean card items with typographic layout */}
          <div className="lg:col-span-8 bg-[#111827] border border-neutral-800 rounded-xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {activeTab}
                </h3>
                <span className="text-xs text-neutral-400">
                  Verified stack items implemented in active repositories and enterprise environments
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                0{skillCategories.findIndex(([c]) => c === activeTab) + 1} / 0{skillCategories.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PORTFOLIO_DATA.technicalSkills[activeTab as keyof typeof PORTFOLIO_DATA.technicalSkills].map((skill, idx) => (
                <div
                  key={skill}
                  className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-cyan-400 shrink-0 font-mono text-[11px]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-200 font-mono font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Note */}
            <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Source: Production systems & open-source implementations</span>
              <a href="#projects" className="text-cyan-400 hover:underline">View in projects →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
