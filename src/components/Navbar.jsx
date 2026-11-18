import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from './Icons';

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#decisions", label: "Decisions" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#writing", label: "Writing" },
];

const socials = [
  { href: "https://github.com/mraj602", label: "GitHub", Icon: GithubIcon },
  { href: "https://linkedin.com/in/mraj602", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://medium.com/@mraj602", label: "Medium", Icon: MediumIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-ink">
          Mayank Raj<span className="text-accent">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm" aria-label="Sections">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="text-muted hover:text-ink transition-colors">{label}</a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-ink transition-colors" title={label} aria-label={label}>
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="mailto:mraj602@gmail.com"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper hover:opacity-90 transition-opacity"
          >
            <Mail className="h-3.5 w-3.5" />
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper px-4 py-4 space-y-1">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-base text-ink">
              {label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-line flex flex-wrap items-center gap-5 text-sm text-muted">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
            <a href="mailto:mraj602@gmail.com" className="flex items-center gap-1.5 text-accent font-medium">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
