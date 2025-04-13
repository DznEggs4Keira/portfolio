"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Professional Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.category === "Professional")
            .sort((a, b) => b.id - a.id) // Descending order by id
            .map((project) => (
              <motion.div
                key={project.id}
                className="project-card text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }} // Staggered delay based on index
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
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
                  <a
                    href={project.link}
                    className="hover:underline hover:underline-offset-4"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Hobby Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.category === "Hobby")
            .sort((a, b) => b.id - a.id) // Descending order by id
            .map((project) => (
              <motion.div
                key={project.id}
                className="project-card text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }} // Staggered delay based on index
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
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
                  <a
                    href={project.link}
                    className="hover:underline hover:underline-offset-4"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
