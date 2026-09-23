import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Layers, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rag' | 'agents' | 'serving' | 'multimodal'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'serving', label: 'Local LLM Serving' },
    { id: 'agents', label: 'Healthcare & Gemini AI' },
    { id: 'rag', label: 'LangChain RAG' },
  ] as const;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117]/70 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured AI & LLM Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Production architectures, open-source repositories, and verified engineering deployments.
            </p>
          </div>

          {/* Interactive Filter Tabs - Buttons with active/inactive states allowed under Zero-Pill discipline */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#111827] border border-neutral-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-800 text-cyan-400 shadow-sm border border-neutral-700'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl bg-[#111827] border border-neutral-800 hover:border-neutral-700 transition-all duration-200 overflow-hidden shadow-md"
            >
              <div className="p-6 sm:p-7">
                {/* Meta kicker - Zero-Pill format: clean unboxed text with separator */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 uppercase tracking-wider">{project.category}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span className="text-neutral-400 truncate max-w-[200px]">{project.status}</span>
                  </div>
                  {project.featured && (
                    <span className="text-amber-400 text-[11px] font-mono">★ Featured</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {project.title}
                </h3>

                <div className="text-xs font-mono text-neutral-400 mb-4">
                  {project.subtitle}
                </div>

                {/* Problem statement */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Problem Solved:
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Capabilities list */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                    Key Functionality:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {project.keyFunctionality.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0 font-mono">›</span>
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-6 sm:p-7 pt-0">
                {/* Tech stack - Zero-Pill rule: clean inline text with separators */}
                <div className="pt-4 border-t border-neutral-800/80 mb-5">
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs font-mono text-neutral-400">
                    {project.techStack.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-300">{tech}</span>
                        {tIdx < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600 select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn py-1"
                  >
                    <span>View System Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md border border-neutral-800 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-cyan-300 hover:bg-neutral-800 rounded-md border border-neutral-800 transition-colors"
                        aria-label={`Visit live demo for ${project.title}`}
                        title="Visit Live Application"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
