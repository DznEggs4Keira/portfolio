"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  animated?: boolean;
  index?: number;
}

export default function ProjectCard({ project, animated = false, index = 0 }: ProjectCardProps) {
  const content = (
    <>
      <div
        className={`relative w-full h-48 p-8 ${
          project.cardBg === "dark" ? "bg-[#1a1a1a]" : ""
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.cardUrl}
            alt={project.title}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-ink">{project.title}</h3>
        <p className="text-ink-soft mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {project.links?.itch && (
            <a
              href={project.links.itch}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-accent hover:underline"
            >
              Play on itch.io →
            </a>
          )}
          <a
            href={`/projects/${project.id}`}
            className="font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-accent hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </>
  );

  if (!animated) {
    return <div className="project-card">{content}</div>;
  }

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: index * 0.15 }}
    >
      {content}
    </motion.div>
  );
}
