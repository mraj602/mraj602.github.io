import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const articles = [
  {
    title: "Everything From a Client Is Untrusted, Including Hardware You Built",
    excerpt: "What it actually costs when the tool list arrives over the network from a machine you don't control.",
    link: "https://medium.com/@mraj602/everything-from-a-client-is-untrusted-including-hardware-you-built-a978058a307e",
    tag: "Security & MCP"
  },
  {
    title: "The Model Called a Tool I Never Gave It",
    excerpt: "What changes when the tools the model calls don't run on your servers.",
    link: "https://medium.com/@mraj602/the-model-called-a-tool-i-never-gave-it-903a4a8e4f62",
    tag: "Agentic AI Architecture"
  }
];

export default function WritingSection() {
  return (
    <section id="writing" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            index="06"
            eyebrow="Writing"
            title="What breaks when AI agents meet real systems."
          />
          <a href="https://medium.com/@mraj602" target="_blank" rel="noreferrer" className="mb-14 inline-flex shrink-0 items-center gap-1.5 text-accent font-medium hover:underline">
            All posts on Medium <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-line bg-paper p-8 transition-colors hover:border-accent/50"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-5">{article.tag}</span>
              <h3 className="font-display text-2xl font-medium leading-snug text-ink mb-4 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{article.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Read on Medium <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
