import React from 'react';

export default function SectionHeader({ index, eyebrow, title, intro, dark = false }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className={`font-mono text-xs uppercase tracking-[0.18em] mb-4 ${dark ? 'text-band-muted' : 'text-accent'}`}>
        {index} — {eyebrow}
      </div>
      <h2 className={`font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] ${dark ? 'text-band-ink' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-band-muted' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
