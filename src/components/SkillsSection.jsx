import React from 'react';
import SectionHeader from './SectionHeader';

const strongest = [
  "System design & architecture",
  "Agentic AI & MCP",
  "Kotlin / Spring Boot",
  "Python / FastAPI",
  "Kafka & event-driven systems",
  "AWS & Kubernetes",
];

const skillsData = [
  {
    category: "AI & Machine Learning",
    skills: ["LangGraph / LangChain", "Model Context Protocol", "LiteLLM", "RAG with pgvector", "LiveKit voice", "Langfuse & evaluation"]
  },
  {
    category: "Backend & Architecture",
    skills: ["Event sourcing & CQRS", "Axon", "Temporal", "OAuth 2.0 & multi-tenancy"]
  },
  {
    category: "Data & Streaming",
    skills: ["PostgreSQL", "Redis", "ClickHouse", "Kafka (Amazon MSK)", "Debezium CDC", "Analytics & dashboards"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes (EKS)", "Terraform", "Helm", "ArgoCD", "GitHub Actions", "Sentry & Grafana"]
  },
  {
    category: "Way of Working",
    skills: ["System design", "Security by design", "Claude Code", "Requirements & scoping", "Technical writing", "Leading small teams"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          index="07"
          eyebrow="Toolkit"
          title="What I reach for."
        />

        <div className="mb-12 rounded-2xl border border-line bg-surface p-6 sm:p-7">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">Strongest in</div>
          <ul className="flex flex-wrap gap-2">
            {strongest.map((s) => (
              <li key={s} className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-paper">{s}</li>
            ))}
          </ul>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-6">Also work with</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillsData.map((group) => (
            <div key={group.category} className="border-t border-line pt-5">
              <h3 className="font-display text-lg font-medium text-ink mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
