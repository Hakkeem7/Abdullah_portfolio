import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, ArrowRight, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0D1117] border border-neutral-700 rounded-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-neutral-800 bg-[#111827]/80">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
              Project Architecture & Technical Deep-Dive
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
            <div className="text-sm text-neutral-400 mt-0.5">
              {project.subtitle}
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Status Bar */}
          <div className="p-3.5 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
            <span className="font-mono text-neutral-400">DEPLOYMENT STATUS:</span>
            <span className="font-mono text-cyan-300 font-medium">{project.status}</span>
          </div>

          {/* Problem Solved */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <span>Engineering Problem Addressed</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed bg-[#111827] p-4 rounded-lg border border-neutral-800/80">
              {project.problemSolved}
            </p>
          </div>

          {/* Architecture Pipeline / Workflow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Data Workflow</span>
            </div>
            <div className="space-y-2">
              {project.architectureSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70 text-xs"
                >
                  <span className="font-mono text-cyan-400 font-bold shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="text-neutral-300 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Functionality */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
              Key Capabilities & Features
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.keyFunctionality.map((func, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 p-2.5 rounded-md bg-[#111827] border border-neutral-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 leading-normal">{func}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack - Zero-Pill format */}
          <div className="pt-2 border-t border-neutral-800">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Technology Stack:
            </div>
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-neutral-300 font-mono">
              {project.techStack.map((tech, tIdx) => (
                <React.Fragment key={tech}>
                  <span className="text-neutral-200">{tech}</span>
                  {tIdx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-[#111827]/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-600 rounded-md transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Site</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
