"use client";

import { useMode } from "@/components/ModeContext";
import { ResumeData } from "@/lib/fetchResumeData";

// Bullets/descriptions come from the user's own CV site (cv.gameweaver.dev),
// not arbitrary third-party input, and contain inline <b> tags for emphasis.
function Rich({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function ResumeView({ data }: { data: ResumeData }) {
  const { mode } = useMode();
  const d = mode === "gamedev" ? data.gd : data.be;

  return (
    <div className="project-card p-8 rounded-lg">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-wide text-accent mb-2">{d.role}</p>
        <p className="text-ink-soft italic">{d.tagline}</p>
      </div>

      <section className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          {d.experience.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <span className="font-serif font-bold text-ink">{exp.role}</span>
                <span className="font-mono text-xs text-ink-faint">{exp.meta}</span>
              </div>
              <p className="text-ink-soft mb-2">{exp.org}</p>
              <ul className="list-disc list-inside space-y-1 text-ink-soft">
                {exp.bullets.map((b, j) => (
                  <li key={j}>
                    <Rich html={b} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {d.showJams && d.jams && d.jams.length > 0 && (
        <section className="mb-8">
          <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
            Game Jam Projects
          </h2>
          <div className="space-y-4">
            {d.jams.map((jam, i) => (
              <div key={i}>
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <span className="font-serif font-bold text-ink">{jam.name}</span>
                  <span className="font-mono text-xs text-ink-faint">{jam.meta}</span>
                </div>
                <p className="text-ink-soft">
                  <Rich html={jam.desc} />
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {d.showProjects && d.projects && d.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
            Key Projects
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-ink-soft">
            {d.projects.map((p, i) => (
              <li key={i}>
                <Rich html={p} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
          {d.skillsLabel}
        </h2>
        <div className="flex flex-wrap gap-2">
          {d.skills.map((skill) => (
            <span key={skill} className="tech-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <p className="font-serif font-bold text-ink">MSc Computer Games Technology</p>
            <p className="text-ink-soft text-sm">Abertay University, Scotland, UK</p>
            <p className="font-mono text-xs text-ink-faint">2018–2019 · Merit</p>
            <p className="text-ink-faint text-sm italic mt-1">
              Thesis: &quot;Adaptive Behavior in Followers in Skyrim&quot; — rule-based AI systems, behavioral modeling
            </p>
          </div>
          <div>
            <p className="font-serif font-bold text-ink">PGDip Entrepreneurship</p>
            <p className="text-ink-soft text-sm">Allama Iqbal Open University</p>
            <p className="font-mono text-xs text-ink-faint">2023–2024</p>
          </div>
          <div>
            <p className="font-serif font-bold text-ink">BSc Computer Science</p>
            <p className="text-ink-soft text-sm">Mazoon College, Oman</p>
            <p className="font-mono text-xs text-ink-faint">2015–2018 · Distinction</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4 border-b border-rule pb-2">
          Languages
        </h2>
        <p className="text-ink-soft">English (Fluent) · Urdu (Native) · Punjabi (Native)</p>
      </section>
    </div>
  );
}
