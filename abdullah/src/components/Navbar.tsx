import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md p-1"
        >
          <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500 transition-colors">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors block text-sm sm:text-base">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="text-[11px] text-neutral-400 block font-mono">
              {PORTFOLIO_DATA.profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-neutral-300 hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-300 hover:text-[#0A66C2] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-cyan-500/50 rounded-md transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium bg-neutral-900 text-neutral-200 border border-neutral-800 rounded-md sm:hidden"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1117] border-b border-neutral-800 px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-400 hover:bg-neutral-900/60 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-neutral-300 hover:text-[#0A66C2] bg-neutral-900 border border-neutral-800 rounded-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
