import React from 'react';
import SectionHeader from './SectionHeader';

const decisions = [
  {
    title: "Let the device declare its own tools",
    context: "A server-side agent had to act on hardware it doesn't control, and each device can do different things.",
    options: "Register every device capability on the server, or have each device announce its tools when a session starts.",
    chosen: "The device declares its tools, and the server treats that list as untrusted input, scoped to the caller. New hardware features don't need a server release.",
    revisit: "A declared tool is a promise the server can't verify in advance, so validation and timeouts at that boundary matter more than anywhere else."
  },
  {
    title: "Event sourcing for commerce",
    context: "Orders, stock, billing and refunds interact, and every change has to be explainable after the fact.",
    options: "Plain CRUD tables with an audit log on the side, or events as the source of truth with read models built from them.",
    chosen: "Event sourcing with CQRS. Writes are checked against the aggregate itself, never against a read copy, so a lagging view can't block a valid write.",
    revisit: "It costs more up front: evolving event schemas and running projections are real work. Worth it for money and stock, not for every module."
  },
  {
    title: "Change data capture over dual writes",
    context: "The CRM and other systems needed every subscription and user change, in real time and without drifting.",
    options: "Have the backend write to the database and publish to Kafka separately, or publish from a transactional outbox through change data capture.",
    chosen: "An outbox table captured by Debezium into Kafka. If the transaction commits, the event exists; if it doesn't, nothing leaks.",
    revisit: "Replication slots need watching. A stalled slot quietly grows, so heartbeats and lag alarms went in on day one."
  }
];

function Row({ label, children }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-1">{label}</dt>
      <dd className="text-muted leading-relaxed">{children}</dd>
    </div>
  );
}

export default function DecisionsSection() {
  return (
    <section id="decisions" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          index="03"
          eyebrow="Design decisions"
          title="The calls behind the systems."
          intro="Architecture is mostly trade-offs. A few I've made, what lost, and what each choice costs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {decisions.map((d) => (
            <article key={d.title} className="rounded-2xl border border-line bg-paper p-7 flex flex-col">
              <h3 className="font-display text-xl font-medium text-ink mb-5">{d.title}</h3>
              <dl className="space-y-4">
                <Row label="Context">{d.context}</Row>
                <Row label="Options">{d.options}</Row>
                <Row label="Chosen">{d.chosen}</Row>
                <Row label="The cost">{d.revisit}</Row>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
