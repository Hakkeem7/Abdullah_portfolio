import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, BookOpen, Mic, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'research'>('experience');

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience, Education & Distinctions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Engineering internships, university education, paper presentation honors, and technical certifications.
            </p>
          </div>

          {/* Sub-tab Navigation */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#111827] border border-neutral-800 rounded-lg">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-neutral-800 text-cyan-400 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Internships & Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-neutral-800 text-cyan-400 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Certifications</span>
            </button>

            <button
              onClick={() => setActiveTab('research')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'research'
                  ? 'bg-neutral-800 text-cyan-400 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Honors & Paper Presentations</span>
            </button>
          </div>
        </div>

        {/* 1. Experience Timeline View */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.organization}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="text-neutral-400 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.highlight && (
                  <div className="mb-4 text-xs font-mono text-cyan-300/90 bg-cyan-950/30 p-2.5 rounded border border-cyan-900/50">
                    ★ {exp.highlight}
                  </div>
                )}

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 font-mono mt-0.5">›</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Core Tech:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-neutral-300">{tech}</span>
                      {tIdx < exp.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Education & Certifications View */}
        {activeTab === 'education' && (
          <div id="education" className="space-y-8">
            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-xl bg-[#111827] border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-neutral-300 mb-6">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 shrink-0 font-mono mt-0.5">›</span>
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>Degree Verified: Artificial Intelligence & Data Science</span>
                    <span className="text-emerald-400">● CGPA: {PORTFOLIO_DATA.profile.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses & Certifications Sub-Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#111827] border border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Industry Courses & Certifications</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{cert.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{cert.issuer}</div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-1 bg-cyan-950/40 rounded border border-cyan-800/40">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Research & Honors */}
        {activeTab === 'research' && (
          <div className="space-y-10">
            {/* Achievements & Honors */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4">
                <Award className="w-4 h-4" />
                <span>Major Achievements & Awards</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#111827] border border-neutral-800 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                      <Award className="w-4 h-4" />
                      <span>Distinction</span>
                    </div>
                    <p className="text-sm font-medium text-white leading-snug mb-3">
                      {ach}
                    </p>
                    <div className="text-xs font-mono text-emerald-400 pt-2 border-t border-neutral-800">
                      ● Official Academic Recognition
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paper Presentations */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Technical Research & Paper Presentation</span>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.publications.map((pub, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#111827] border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                      <span className="text-cyan-400 font-semibold">{pub.venue}</span>
                      <span>{pub.year}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      {pub.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                      {pub.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 text-xs">
                      <span className="text-cyan-400 font-mono font-medium">{pub.type}</span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-neutral-300 hover:text-white font-medium"
                        >
                          <span>Repository & Verification</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Keynotes & Talks */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4">
                <Mic className="w-4 h-4" />
                <span>Technical Presentations & Hackathons</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.talks.map((talk, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#111827] border border-neutral-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                        <span className="text-cyan-400">{talk.event}</span>
                        <span>{talk.year}</span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                        {talk.title}
                      </h4>

                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {talk.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-800/80 text-xs font-mono text-neutral-500">
                      Location: {talk.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
