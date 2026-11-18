import React from 'react';
import { Boxes, Cpu, Server, Cloud, LineChart, LayoutDashboard } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: "Product & System Architecture",
    description: "Turning a fuzzy requirement into a design a team can build on: domain boundaries, data models, consistency, security and a path to scale. Event-sourced platforms, modular monoliths, multi-tenant products.",
    Icon: Boxes
  },
  {
    title: "Agentic AI & Voice",
    description: "AI assistants that take real actions: agents, tool protocols like MCP, retrieval, model routing and realtime voice, on the web, in mobile apps and on hardware.",
    Icon: Cpu
  },
  {
    title: "Backend & Distributed Systems",
    description: "Services in Kotlin and Python, event streams on Kafka, change data capture, and long-running workflows on Temporal that recover cleanly when something fails.",
    Icon: Server
  },
  {
    title: "Cloud & Platform Engineering",
    description: "AWS and Kubernetes run entirely as code: Terraform, Helm and GitOps delivery, with observability, disaster recovery and self-hosted tooling built in.",
    Icon: Cloud
  },
  {
    title: "Data, Analytics & ML",
    description: "Data pipelines, analytics dashboards and applied machine learning, from recommendation engines to evaluation sets, and the plumbing underneath them.",
    Icon: LineChart
  },
  {
    title: "Products & Internal Tools",
    description: "CRMs, operations platforms, websites and app features. Whatever the business needs next, built together with the people who will use it.",
    Icon: LayoutDashboard
  }
];

export default function ServicesSection() {
  return (
    <section id="what-i-do" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          index="05"
          eyebrow="What I do"
          title="Where I spend my time."
          intro="Most of my work sits where AI agents meet real backends: identity, event streams, and the infrastructure underneath. Around that, whatever the product needs next."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map(({ title, description, Icon }) => (
            <div key={title} className="border-t border-line pt-6">
              <Icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-medium text-ink mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
