import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { handleGlassMouseMove, handleGlassMouseLeave } from '../utils/useGlassTilt';
import cvFile from '../assets/Abdullah_Shahid_NET_CV.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-xs text-[#9A9088] relative z-10">
      <div
        className="glass max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer"
        onMouseMove={handleGlassMouseMove}
        onMouseLeave={handleGlassMouseLeave}
      >
        
        {/* Brand */}
        <div className="mono-text">
          <span className="text-[#FF9A3D] font-mono font-bold">&gt;_</span> Abdullah Shahid &mdash;{' '}
          <span className="text-[#9A9088]">Full Stack .NET &bull; React</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Abdullahmughal123"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-lg bg-white/05 border border-white/10 flex items-center justify-center text-[#9A9088] hover:text-[#FF9A3D] hover:border-[#FF9A3D] transition-all"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-shahid-a17b37272/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-lg bg-white/05 border border-white/10 flex items-center justify-center text-[#9A9088] hover:text-[#FF9A3D] hover:border-[#FF9A3D] transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={cvFile}
            download="Abdullah_Shahid_NET_CV.pdf"
            aria-label="Download CV"
            className="inline-flex h-8 items-center rounded-lg bg-white/05 border border-white/10 px-3 text-[#9A9088] hover:text-[#FF9A3D] hover:border-[#FF9A3D] transition-all font-mono"
          >
            Download CV
          </a>
        </div>

        <div className="text-[#9A9088] font-mono">
          &copy; {currentYear} Abdullah Shahid
        </div>

      </div>
    </footer>
  );
}
