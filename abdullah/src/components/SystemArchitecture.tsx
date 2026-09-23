import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowDown, CheckCircle, Cpu, Database, Bot, Server, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SystemArchitecture: React.FC = () => {
  const [selectedArchIndex, setSelectedArchIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentArch = PORTFOLIO_DATA.architectures[selectedArchIndex];
  const activeStep = currentArch.steps[activeStepIndex] || currentArch.steps[0];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            AI System Architectures
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Inspect the internal workflows, data pipelines, and orchestration layers of my production AI systems.
          </p>
        </div>

        {/* Architecture Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-800 pb-4">
          {PORTFOLIO_DATA.architectures.map((arch, idx) => (
            <button
              key={arch.id}
              onClick={() => {
                setSelectedArchIndex(idx);
                setActiveStepIndex(0);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all text-left flex items-center gap-2 cursor-pointer ${
                selectedArchIndex === idx
                  ? 'bg-[#111827] text-cyan-400 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-[#111827]/50 border border-transparent'
              }`}
            >
              <span className="font-mono text-[11px] text-neutral-500">0{idx + 1}</span>
              <span>{arch.title.split(' ')[0]} {arch.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Main Visualizer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top: Interactive Step Diagram */}
          <div className="lg:col-span-7 bg-[#0D1117] border border-neutral-800 rounded-xl p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-1">
                {currentArch.title}
              </h3>
              <p className="text-xs text-neutral-400">
                {currentArch.description}
              </p>
            </div>

            {/* Steps Visual Chain */}
            <div className="space-y-3">
              {currentArch.steps.map((step, sIdx) => {
                const isSelected = activeStepIndex === sIdx;
                return (
                  <div key={sIdx}>
                    <button
                      onClick={() => setActiveStepIndex(sIdx)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#111827] border-cyan-500 shadow-md shadow-cyan-950/30'
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                            isSelected
                              ? 'bg-cyan-500 text-black'
                              : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {sIdx + 1}
                        </div>
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              isSelected ? 'text-white' : 'text-neutral-300'
                            }`}
                          >
                            {step.name}
                          </div>
                          <div className="text-[11px] font-mono text-neutral-500 truncate max-w-xs sm:max-w-md">
                            {step.tech}
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-neutral-500 hidden sm:block">
                        {isSelected ? '● Inspected' : 'Click to inspect'}
                      </div>
                    </button>

                    {/* Flow arrow between steps */}
                    {sIdx < currentArch.steps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-3.5 h-3.5 text-neutral-700" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right / Bottom: Deep Dive Inspector for Selected Step */}
          <div className="lg:col-span-5 bg-[#111827] border border-neutral-800 rounded-xl p-6 space-y-6 sticky top-24">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Step Detail Inspector
                </span>
              </div>
              <span className="font-mono text-xs text-cyan-400 font-semibold">
                Step 0{activeStepIndex + 1} of 0{currentArch.steps.length}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-2">
                {activeStep.name}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Underlying Technology & Protocols:
              </div>
              <div className="text-xs font-mono text-cyan-300">
                {activeStep.tech}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Engineering Mechanics & Verification:
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed bg-[#0D1117] p-4 rounded-lg border border-neutral-800">
                {activeStep.details}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                ← Previous Step
              </button>

              <button
                disabled={activeStepIndex === currentArch.steps.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(currentArch.steps.length - 1, prev + 1))}
                className="px-3.5 py-1.5 text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Next Pipeline Step →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
