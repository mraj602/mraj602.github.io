import React from 'react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    title: "Understand",
    description: "Requirements first: who uses it, what happens when it fails, what it costs to run, and what the business actually needs from it."
  },
  {
    title: "Architect",
    description: "Settle the design, flows, security model and scaling path before any code, and write it down so anyone can build on it."
  },
  {
    title: "Build fast",
    description: "I move from design to working software quickly with AI coding agents like Claude Code. Tests, type checks, an architecture-boundary check and my own review of every change gate what ships."
  },
  {
    title: "Own it in production",
    description: "A readiness review before anything risky goes live, alerts I'd want at 3am, and a rollback path for every change. I stay accountable for the outcome, not just the merge."
  }
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="bg-band">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          dark
          index="04"
          eyebrow="How I work"
          title="Design first. Build fast. Own the outcome."
          intro="Most of my time goes into the decisions that matter: what to build, how it fits together, and how it stays secure and scales. AI coding tools turn those decisions into working software quickly, and I review and own everything that ships."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <li key={step.title} className="border-t border-white/15 pt-6">
              <div className="font-display text-5xl font-light text-[#5cc39a] mb-5">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl font-medium text-band-ink mb-3">{step.title}</h3>
              <p className="text-band-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
