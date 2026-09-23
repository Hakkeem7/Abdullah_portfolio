import React from 'react';
import { Github, ArrowUpRight, Terminal, BookOpen, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const pinnedRepos = [
    {
      name: 'local-llm-model-integration',
      description: 'Integrated and served a local Large Language Model through a Python/Flask REST API, enabling prompt-based inference without external cloud dependencies.',
      language: 'Python / Flask',
      langColor: '#3572A5',
      stars: 'Core Project',
      url: 'https://github.com/Abuofficial1070/local-llm-model-integration'
    },
    {
      name: 'Med-Flow',
      description: 'AI-powered healthcare management system built with React, Node.js/Express, MongoDB, and Gemini AI for automated medical report summarization and EHR records.',
      language: 'JavaScript / React',
      langColor: '#F7DF1E',
      stars: 'Full-Stack Deployed',
      url: 'https://github.com/Abuofficial1070/Med-Flow'
    },
    {
      name: 'langchain-rag-chatbot',
      description: 'Retrieval-Augmented Generation (RAG) chatbot using LangChain with document processing, chunking, dense vector embeddings, and FastAPI backend serving.',
      language: 'Python / FastAPI',
      langColor: '#3572A5',
      stars: 'RAG Pipeline',
      url: 'https://github.com/Abuofficial1070/langchain-rag-chatbot'
    },
    {
      name: 'data-science-analytics',
      description: 'Data preprocessing, exploratory data analysis (EDA), and machine learning pipelines developed with Pandas, NumPy, and Scikit-learn.',
      language: 'Python / Jupyter',
      langColor: '#DA5B0B',
      stars: 'Data Science',
      url: 'https://github.com/Abuofficial1070'
    }
  ];

  // Contribution simulation grid (42 columns x 7 days)
  const renderContributionHeatmap = () => {
    const weeks = Array.from({ length: 42 }).map((_, wIdx) => {
      return Array.from({ length: 7 }).map((_, dIdx) => {
        const seed = (wIdx * 7 + dIdx * 17) % 100;
        let level = 0;
        if (seed > 85) level = 4;
        else if (seed > 65) level = 3;
        else if (seed > 40) level = 2;
        else if (seed > 20) level = 1;
        return level;
      });
    });

    const levelColors = [
      'bg-neutral-900',
      'bg-emerald-950/80 border border-emerald-800/40',
      'bg-emerald-800/80',
      'bg-emerald-600',
      'bg-emerald-400',
    ];

    return (
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1 min-w-[650px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-2.5 h-2.5 rounded-xs ${levelColors[level]} transition-colors hover:ring-1 hover:ring-white`}
                  title={`Activity level ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117]/60 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GitHub & Code Ecosystem
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Hands-on engineering repositories across Local LLMs, LangChain RAG pipelines, and full-stack AI healthcare systems.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-600 text-xs font-semibold transition-all self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @Abuofficial1070 on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Contribution Graph Widget */}
        <div className="mb-10 p-6 rounded-xl bg-[#111827] border border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-xs text-neutral-400 gap-2">
            <div className="flex items-center gap-2 font-mono">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-medium">Abuofficial1070</span>
              <span>/ Continuous Engineering Activity</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span>Less</span>
              <span className="w-2.5 h-2.5 bg-neutral-900 rounded-xs inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-950 rounded-xs inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-800 rounded-xs inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-600 rounded-xs inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-xs inline-block" />
              <span>More</span>
            </div>
          </div>

          {renderContributionHeatmap()}

          <div className="flex flex-wrap items-center justify-between text-xs text-neutral-400 font-mono pt-4 mt-2 border-t border-neutral-800/80">
            <span>Focus: Local LLM serving, Gemini AI integration, LangChain RAG, Python REST APIs</span>
            <span className="text-emerald-400">● Active code repositories & open source implementations</span>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[#111827] border border-neutral-800 hover:border-neutral-700 hover:bg-[#111827]/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-3 border-t border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>
                <span className="text-cyan-400">{repo.stars}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
