import React, { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Github, Globe, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<'hiring' | 'speaking' | 'consulting'>('hiring');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topicTemplates = {
    hiring: {
      subject: 'AI & ML Engineer Role Inquiry',
      body: `Hi Abdullah,\n\nWe came across your work in Generative AI, local LLM serving, LangChain RAG pipelines, and full-stack AI development (MedFlow). We have an opportunity that matches your background.\n\nBest regards,`
    },
    speaking: {
      subject: 'Technical Session / Presentation Invitation',
      body: `Hi Abdullah,\n\nCongratulations on your SIMATS 2026 paper presentation win. We would like to invite you to speak or present on Generative AI and RAG architectures.\n\nBest regards,`
    },
    consulting: {
      subject: 'AI Project & Cloud Architecture Collaboration',
      body: `Hi Abdullah,\n\nWe are looking to implement local LLM inference and context-aware RAG pipelines and would like to collaborate.\n\nBest regards,`
    }
  };

  const getMailtoUrl = () => {
    const current = topicTemplates[selectedTopic];
    return `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(current.subject)}&body=${encodeURIComponent(current.body)}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Available for AI & ML Engineering opportunities, Generative AI projects, and cloud-native AI collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 bg-[#111827] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Primary Contact Address
              </div>
              <div className="p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="font-mono text-sm text-cyan-400 hover:text-cyan-300 truncate"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-emerald-400 mt-1.5 pl-1">
                  ✓ Copied {PORTFOLIO_DATA.profile.email} to clipboard
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-neutral-800/80 space-y-3 text-xs">
              <div className="text-neutral-400 font-mono uppercase tracking-wider">
                Phone & Location
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`} className="font-mono hover:text-white transition-colors">
                  {PORTFOLIO_DATA.profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PORTFOLIO_DATA.profile.location}</span>
              </div>
              <div className="text-neutral-400 pt-1">
                Open to full-time engineering roles, AI internships, and cloud-native AI engineering positions on Google Cloud.
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80">
              <div className="text-neutral-400 font-mono uppercase tracking-wider text-xs mb-3">
                Direct Profiles
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={PORTFOLIO_DATA.profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-mono transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-configured Mail Dispatcher */}
          <div className="lg:col-span-7 bg-[#111827] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Dispatch an Engineering Inquiry
              </h3>
              <p className="text-xs text-neutral-400">
                Choose your inquiry focus to generate a pre-structured email template ready to send.
              </p>
            </div>

            {/* Template selector buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTopic('hiring')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  selectedTopic === 'hiring'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                Hiring / Full-Time Role
              </button>

              <button
                onClick={() => setSelectedTopic('speaking')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  selectedTopic === 'speaking'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                Technical Presentation
              </button>

              <button
                onClick={() => setSelectedTopic('consulting')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  selectedTopic === 'consulting'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                Project Collaboration
              </button>
            </div>

            {/* Template preview */}
            <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3 text-xs font-mono">
              <div>
                <span className="text-neutral-500">To: </span>
                <span className="text-neutral-300">{PORTFOLIO_DATA.profile.email}</span>
              </div>
              <div>
                <span className="text-neutral-500">Subject: </span>
                <span className="text-cyan-300">{topicTemplates[selectedTopic].subject}</span>
              </div>
              <div className="pt-2 border-t border-neutral-800 text-neutral-400 whitespace-pre-wrap leading-relaxed">
                {topicTemplates[selectedTopic].body}
              </div>
            </div>

            {/* Send Mail Action */}
            <a
              href={getMailtoUrl()}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs sm:text-sm transition-colors shadow-md shadow-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Mail Client with Pre-filled Template →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
