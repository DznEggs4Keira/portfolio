"use client";

import { Project } from "@/data/projects";
import { useMode } from "@/components/ModeContext";
import ProjectCard from "@/components/ProjectCard";

interface SpotlightSectionProps {
  projects: Project[];
}

export default function SpotlightSection({ projects }: SpotlightSectionProps) {
  const { mode } = useMode();

  const sorted = [...projects].sort((a, b) => {
    const aMatches = a.focus === mode ? 0 : 1;
    const bMatches = b.focus === mode ? 0 : 1;
    return aMatches - bMatches;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sorted.map((project, index) => (
        <ProjectCard key={project.id} project={project} animated index={index} />
      ))}
    </div>
  );
}
