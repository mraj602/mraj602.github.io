import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from './Icons';

const socials = [
  { href: "https://github.com/mraj602", label: "GitHub", Icon: GithubIcon },
  { href: "https://linkedin.com/in/mraj602", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://medium.com/@mraj602", label: "Medium", Icon: MediumIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-band-muted mb-4">Contact</div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Building something early? <em className="text-[#5cc39a]">Let's talk.</em>
          </h2>
          <p className="mt-5 text-lg text-band-muted">
            Open to founding-engineer, applied-AI and forward-deployed roles, in Bengaluru or remote.
          </p>
          <a
            href="mailto:mraj602@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#5cc39a] px-6 py-3 text-base font-medium text-[#0a0f0d] hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            mraj602@gmail.com
          </a>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/15 pt-6 text-sm text-band-muted">
          <div>© {new Date().getFullYear()} Mayank Raj · Bengaluru, India</div>
          <div className="flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-band-ink transition-colors">
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
