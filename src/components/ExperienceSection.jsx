import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: "AI Software Engineer",
    company: "Tohands",
    period: "Mar 2025 – Present",
    description: "Tohands is a venture-backed startup making smart calculators and an app that help India's small shopkeepers run their business. I joined as an AI engineer and my scope grew to architecture across the product: the AI assistant, the commerce backend, event streaming, internal platforms and the cloud they run on. I lead an analyst and a junior engineer, and set how engineering works with AI.",
    tags: ["Agentic AI", "Architecture", "Backend", "Cloud", "Team lead"]
  },
];

const sideRole = {
  role: "Founder",
  company: "CypherSage",
  period: "Apr 2024 – Present",
  link: "https://cyphersage.in",
  description: "A business consultancy focused on technology, helping founders, small businesses and researchers turn business problems into software, ML and data solutions. I was hands-on in 2024–25, scoping work with clients and leading delivery; I remain the founder but am no longer involved day to day."
};

const education = [
  { degree: "M.Sc Data Science", school: "Christ University", period: "2023 – 2025" },
  { degree: "B.Sc Computer Science, Mathematics & Statistics", school: "Christ University", period: "2020 – 2023" }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          index="01"
          eyebrow="Experience"
          title="Where I've done the work."
        />

        <div className="divide-y divide-line border-y border-line">
          {experiences.map((exp) => (
            <div key={exp.company} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-10">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{exp.period}</div>
                <div className="mt-2 font-display text-2xl font-medium text-ink">
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
                      {exp.company} <ArrowUpRight className="h-5 w-5" />
                    </a>
                  ) : exp.company}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink mb-3">{exp.role}</h3>
                <p className="text-muted leading-relaxed max-w-3xl mb-5">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-10 text-sm">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{sideRole.period}</div>
            <a href={sideRole.link} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-medium text-ink hover:text-accent transition-colors">
              {sideRole.company} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div>
            <div className="font-medium text-ink mb-1">{sideRole.role}</div>
            <p className="text-muted leading-relaxed max-w-3xl">{sideRole.description}</p>
          </div>
        </div>

        <div className="mt-14">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">Education</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div key={ed.degree} className="rounded-2xl border border-line bg-paper p-6">
                <div className="font-mono text-xs text-muted">{ed.period}</div>
                <div className="mt-2 font-display text-lg font-medium text-ink">{ed.degree}</div>
                <div className="text-sm text-muted">{ed.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
