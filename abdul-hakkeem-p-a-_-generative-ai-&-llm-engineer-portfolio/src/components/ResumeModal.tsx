import React, { useEffect } from 'react';
import { X, Printer, Copy, Check, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${PORTFOLIO_DATA.profile.name}
${PORTFOLIO_DATA.profile.location}
Phone: ${PORTFOLIO_DATA.profile.phone} | Email: ${PORTFOLIO_DATA.profile.email}
LinkedIn: ${PORTFOLIO_DATA.profile.links.linkedin} | GitHub: ${PORTFOLIO_DATA.profile.links.github}

CAREER OBJECTIVE
${PORTFOLIO_DATA.profile.shortBio}

TECHNICAL SKILLS
${Object.entries(PORTFOLIO_DATA.technicalSkills).map(([cat, list]) => `- ${cat}: ${list.join(', ')}`).join('\n')}

PROJECTS
${PORTFOLIO_DATA.projects.map(p => `
- ${p.title} (${p.githubUrl})
  ${p.keyFunctionality.map(k => `* ${k}`).join('\n  ')}
  Tech Stack: ${p.techStack.join(', ')}
`).join('\n')}

INTERNSHIPS & EXPERIENCE
${PORTFOLIO_DATA.experience.map(e => `
- ${e.role}, ${e.organization} (${e.period})
  ${e.responsibilities.map(r => `* ${r}`).join('\n  ')}
  Technologies: ${e.technologies.join(', ')}
`).join('\n')}

ACHIEVEMENTS
${PORTFOLIO_DATA.achievements.map(a => `- ${a}`).join('\n')}

EDUCATION
${PORTFOLIO_DATA.education.map(ed => `
- ${ed.degree}
  ${ed.institution} (${ed.period})
  ${ed.details.map(d => `* ${d}`).join('\n  ')}
`).join('\n')}

COURSES & CERTIFICATIONS
${PORTFOLIO_DATA.certifications.map(c => `- ${c.name} - ${c.issuer} (${c.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0D1117] border border-neutral-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#111827]">
          <div className="flex items-center gap-3">
            <h2 id="resume-dialog-title" className="text-base font-bold text-white">
              Official Resume Document
            </h2>
            <span className="text-xs font-mono text-cyan-400 hidden sm:inline">
              // ATS-Formatted & Recruiter Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-md transition-colors cursor-pointer"
              title="Copy plain text resume for ATS applications"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black rounded-md transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors ml-2 cursor-pointer"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Paper View */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#050505]">
          <div className="max-w-3xl mx-auto bg-[#111827] text-neutral-200 p-8 sm:p-12 rounded-xl border border-neutral-800 shadow-xl space-y-8 font-sans">
            {/* Resume Header */}
            <div className="border-b border-neutral-800 pb-6 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <div className="text-sm font-semibold text-cyan-400 mt-1 font-mono">
                {PORTFOLIO_DATA.profile.title} · {PORTFOLIO_DATA.profile.secondaryTitle}
              </div>

              {/* Contact bar */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-3 text-xs font-mono text-neutral-300 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {PORTFOLIO_DATA.profile.location}
                </span>
                <span aria-hidden="true" className="text-neutral-700">|</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  {PORTFOLIO_DATA.profile.phone}
                </span>
                <span aria-hidden="true" className="text-neutral-700">|</span>
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-cyan-400 hover:underline">
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-3 text-xs font-mono text-neutral-400 mt-1.5">
                <a href={PORTFOLIO_DATA.profile.links.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-cyan-300 transition-colors">
                  {PORTFOLIO_DATA.profile.links.linkedin.replace('https://', '')}
                </a>
                <span aria-hidden="true" className="text-neutral-700">|</span>
                <a href={PORTFOLIO_DATA.profile.links.github} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-cyan-300 transition-colors">
                  {PORTFOLIO_DATA.profile.links.github.replace('https://', '')}
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {PORTFOLIO_DATA.profile.shortBio}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(PORTFOLIO_DATA.technicalSkills).map(([cat, list]) => (
                  <div key={cat} className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                    <span className="font-bold text-white block mb-1">{cat}:</span>
                    <span className="text-neutral-400 font-mono text-[11px] leading-tight">
                      {list.join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4">
                Projects
              </h2>
              <div className="space-y-5">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <div key={project.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{project.title}</span>
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-cyan-400 hover:underline"
                        >
                          {project.githubUrl.replace('https://', '')}
                        </a>
                      )}
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-300 pl-3">
                      {project.keyFunctionality.map((func, fIdx) => (
                        <li key={fIdx} className="list-disc leading-relaxed">
                          {func}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships & Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4">
                Internships & Experience
              </h2>
              <div className="space-y-6">
                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">
                        {exp.role}, <span className="text-cyan-400 font-medium">{exp.organization}</span>
                      </div>
                      <div className="font-mono text-xs text-neutral-400">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-300 pl-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="list-disc leading-relaxed">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                Achievements
              </h2>
              <ul className="space-y-1.5 text-xs text-neutral-300 pl-3">
                {PORTFOLIO_DATA.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="list-disc leading-relaxed">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="font-mono text-xs text-neutral-400">{edu.period}</div>
                    </div>
                    <div className="text-xs text-cyan-400">{edu.institution}</div>
                    <ul className="space-y-0.5 text-xs text-neutral-300 pl-3 pt-1">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx} className="list-disc leading-relaxed">{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses & Certifications */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                Courses & Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{cert.name}</div>
                      <div className="text-[11px] font-mono text-neutral-400">{cert.issuer}</div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
