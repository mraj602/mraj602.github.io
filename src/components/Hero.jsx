import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const facts = [
  { label: "Now", value: "AI Software Engineer, Tohands" },
  { label: "Focus", value: "AI, backend & cloud" },
  { label: "Based in", value: "Bengaluru · open to remote" },
  { label: "Open to", value: "Founding, applied AI & FDE roles" },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              Software engineer<span className="hidden sm:inline"> · AI, backend &amp; cloud</span>
            </div>

            <p className="font-display text-2xl sm:text-3xl text-muted mb-3">Hi, I'm Mayank Raj.</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.02] text-ink">
              I build whole <em className="text-accent">products</em>.
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl">
              I design and build AI agents and the backends, data pipelines and cloud underneath them:
              today for India's small retailers at Tohands.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper hover:opacity-90 transition-opacity"
              >
                See my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:mraj602@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-base font-medium text-ink hover:border-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                Get in touch
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative order-first lg:order-none mx-auto lg:mx-0 lg:ml-auto w-full max-w-[230px] sm:max-w-[280px] lg:max-w-[380px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-accent-soft border border-line" aria-hidden="true"></div>
            <img
              src="/mayank.jpg"
              alt="Portrait of Mayank Raj"
              width="800"
              height="1000"
              className="relative aspect-[4/5] w-full rounded-[28px] object-cover border border-line shadow-[0_20px_50px_-20px_rgba(22,32,27,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
