"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { useMode } from "@/components/ModeContext";

export default function Projects() {
  const { mode } = useMode();

  const gamedevProjects = projects
    .filter((project) => project.focus === "gamedev")
    .sort((a, b) => a.id - b.id);
  const backendProjects = projects
    .filter((project) => project.focus === "backend")
    .sort((a, b) => a.id - b.id);

  const sections =
    mode === "gamedev"
      ? [
          { title: "Game Dev Projects", items: gamedevProjects },
          { title: "Backend Projects", items: backendProjects },
        ]
      : [
          { title: "Backend Projects", items: backendProjects },
          { title: "Game Dev Projects", items: gamedevProjects },
        ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-serif font-bold mb-8 text-ink">My Projects</h1>

      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-ink">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((project, index) => (
              <ProjectCard key={project.id} project={project} animated index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
