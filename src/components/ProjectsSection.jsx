import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const featured = [
  {
    title: "AI Assistant on a Keypad-Only Device",
    type: "Agentic AI",
    problem: "Shopkeepers wanted answers about their own business in plain language, on their phone and on a smart calculator with nothing but a keypad.",
    approach: "One agent runtime for text and realtime voice, with tools reached over MCP and answers grounded in each shop's own data.",
    decisions: "The device declares its own tools when a session starts, and the server treats that list as untrusted input. Model routing is provider-agnostic, so no single vendor is a hard dependency.",
    tags: ["LangGraph", "MCP", "LiveKit", "pgvector", "LiteLLM"]
  },
  {
    title: "Event-Sourced Commerce Platform",
    type: "Architecture & Security",
    problem: "Billing, orders, inventory and subscriptions had grown together in one backend that was getting harder to change safely.",
    approach: "A modular monolith on an event-sourced core, with each domain as its own module and its own identity and access layer.",
    decisions: "Event sourcing over plain CRUD, for a record that can be audited and replayed. Every lookup is scoped to the business making it, so tenant isolation is part of the structure, not a check someone might forget.",
    tags: ["Kotlin", "Spring Boot", "Axon", "CQRS", "OAuth 2.0"]
  },
  {
    title: "Company Operations Platform",
    type: "Internal Product",
    problem: "Sales, support and onboarding were working across scattered tools, with no single view of a customer.",
    approach: "One system of record for leads, orders, support and device onboarding, with AI-assisted triage and work queues that assign themselves.",
    decisions: "Fed by change data capture instead of dual writes, so it can't drift from the source of truth. Scoped with the teams who use it and built together with a teammate.",
    tags: ["Kafka", "Debezium", "Realtime", "AI triage"]
  }
];

const groups = [
  {
    area: "AI & Voice",
    items: [
      { title: "LLM routing & failover", description: "Routes each task to the right model, fails over live, with prompt caching and full tracing." },
      { title: "Realtime voice pipeline", description: "Voice on mobile and hardware, with self-hosted noise cancellation and per-turn recording." },
      { title: "Photo-to-inventory upload", description: "Reads a photo of stock or a bill straight into the catalogue." },
      { title: "Inventory recommendations", description: "Learns each shop's buying patterns and re-ranks from what merchants accept." }
    ]
  },
  {
    area: "Identity & Security",
    items: [
      { title: "Identity & access layer", description: "OAuth 2.0 for integrators, signed requests from devices, fail-closed sessions and an audit log." },
      { title: "Tenant isolation by design", description: "Every read and write re-checks which business it belongs to." }
    ]
  },
  {
    area: "Data & Streaming",
    items: [
      { title: "Kafka & change data capture", description: "Taken to production behind a production-readiness review, with lag and health alarms." },
      { title: "Analytics pipeline rebuild", description: "Made faster and lighter, and traced a cross-system data mismatch to its root cause." },
      { title: "Live business dashboards", description: "Real-time views of usage and activity for the whole company." },
      { title: "Onboarding cohort tracking", description: "Follows every new device from first login, and flags who needs a nudge." }
    ]
  },
  {
    area: "Platform & Reliability",
    items: [
      { title: "Kubernetes platform as code", description: "Multi-environment AWS, built with Terraform and Helm and delivered through GitOps." },
      { title: "Read replicas & disaster recovery", description: "A read replica for scale, plus a cross-region replica for disaster recovery." },
      { title: "Self-hosted internal tooling", description: "Feature flags, product analytics, project management, device access and error tracking, all in-house." },
      { title: "Quality gates for AI-assisted work", description: "Coverage floors and architecture-boundary checks that fail CI across teams." }
    ]
  },
  {
    area: "Workflows & Integrations",
    items: [
      { title: "Order lifecycle on Temporal", description: "Fulfilment, shipping and customer messaging across many third-party services." },
      { title: "AI triage of internal requests", description: "Bug reports and feature requests grouped, tagged and routed automatically." },
      { title: "Payment email ingestion", description: "Inbound partner emails parsed into the system through AWS SES." }
    ]
  },
  {
    area: "Independent Work",
    items: [
      { title: "Writing on agentic AI", description: "Essays on tool calling, trust boundaries and client-declared tools.", link: "https://medium.com/@mraj602" },
      { title: "Open source", description: "A Markdown-to-PDF résumé builder on Typst, and code behind the essays.", link: "https://github.com/mraj602" },
      { title: "CypherSage consulting (2024–25)", description: "Software, ML and data projects for founders, small businesses and researchers.", link: "https://cyphersage.in" }
    ]
  }
];

function Detail({ label, children }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-1.5">{label}</dt>
      <dd className="text-muted leading-relaxed">{children}</dd>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title="Systems I've designed and shipped."
          intro="Since joining Tohands I've designed and shipped systems across AI, backend, data, infrastructure and product. Three are walked through below. The rest follow, grouped by area."
        />

        <div className="space-y-6">
          {featured.map((project, idx) => (
            <article key={project.title} className="rounded-2xl border border-line bg-surface p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
              <div className="flex flex-col">
                <div className="font-display text-4xl font-light text-accent mb-4">{String(idx + 1).padStart(2, '0')}</div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-2">{project.type}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium leading-tight text-ink mb-6">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-ink">{tag}</span>
                  ))}
                </div>
              </div>
              <dl className="space-y-5">
                <Detail label="The problem">{project.problem}</Detail>
                <Detail label="The approach">{project.approach}</Detail>
                <Detail label="Key decisions">{project.decisions}</Detail>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl font-medium tracking-tight text-ink mb-2">More of what I've built</h3>
          <p className="text-muted mb-10">Most of it runs in production at Tohands; the last group is independent work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {groups.map((group) => (
              <div key={group.area}>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent border-b border-line pb-3 mb-4">{group.area}</div>
                <ul className="space-y-4">
                  {group.items.map((item) => {
                    const Title = item.link ? 'a' : 'span';
                    const linkProps = item.link ? { href: item.link, target: "_blank", rel: "noreferrer" } : {};
                    return (
                      <li key={item.title}>
                        <Title {...linkProps} className={`inline-flex items-center gap-1 font-medium text-ink ${item.link ? 'hover:text-accent transition-colors' : ''}`}>
                          {item.title}
                          {item.link && <ArrowUpRight className="h-3.5 w-3.5" />}
                        </Title>
                        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
