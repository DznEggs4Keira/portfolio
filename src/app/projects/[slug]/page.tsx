"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  // Find the project with the matching slug
  const project = projects.find(
    (p) => p.slug === slug || p.id.toString() === slug
  );

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center font-mono text-xs uppercase tracking-wide text-accent hover:underline mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>
        {/* Project Header */}
        <div className="project-card p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2 text-ink">
            {project.title}
          </h1>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category} Project
          </p>
        </div>
        {/* Project Video */}
        {project.videoUrl ? (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <VideoPlayer
              src={project.videoUrl}
              title={project.title}
            />
          </div>
        ) : (
        /* Fallback image for non-video projects */
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl || "/placeholder-project.svg"}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        )}
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="project-card p-6 rounded-lg h-full">
              <h2 className="text-2xl font-serif font-bold mb-4 text-ink">Overview</h2>
              <p className="text-ink-soft mb-4">{project.description}</p>
              <p className="text-ink-soft">{project.fullDescription}</p>
            </div>
          </div>

          <div>
            <div className="project-card p-6 rounded-lg">
              <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {project.links?.itch && (
                <a
                  href={project.links.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-active w-full mb-4"
                >
                  Play on itch.io →
                </a>
              )}

              {project.links && Object.keys(project.links).length > 0 && (
                <>
                  <h2 className="font-mono text-xs uppercase tracking-wide text-accent mb-4">
                    Project Links
                  </h2>
                  <div className="space-y-2 font-mono text-sm">
                    {project.links.official && (
                      <a
                        href={project.links.official}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-ink-soft hover:text-accent hover:underline"
                      >
                        Official Website
                      </a>
                    )}
                    {project.links.itch && (
                      <a
                        href={project.links.itch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-ink-soft hover:text-accent hover:underline"
                      >
                        Itch.io Page
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-ink-soft hover:text-accent hover:underline"
                      >
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* My Contribution */}
        {project.contribution && project.contribution.length > 0 && (
          <div className="project-card p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-ink">My Contribution</h2>
            <ul className="list-disc list-inside space-y-1.5 text-ink-soft">
              {project.contribution.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Dev Logs */}
        {project.devLogs && project.devLogs.length > 0 && (
          <div className="project-card p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-ink">Dev Logs</h2>
            <div className="space-y-6">
              {[...project.devLogs].reverse().map((entry, i) => (
                <div key={i} className="border-l-2 border-rule pl-4">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="font-mono text-xs uppercase tracking-wide text-accent">
                      {entry.date}
                    </span>
                    {entry.title && (
                      <span className="font-serif font-bold text-ink">{entry.title}</span>
                    )}
                  </div>
                  <p className="text-ink-soft">{entry.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Project Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-ink">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.galleryImages.map((img: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-paper-raised border border-rule rounded-lg p-2"
                  style={{ overflow: "auto" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img || "/placeholder-project.svg"}
                    alt={project.title}
                    className="rounded-lg max-w-full h-auto"
                    style={{ display: "block", maxHeight: 400 }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Next/Previous Project Navigation with Ascending Order Logic */}
        <div className="flex justify-between mt-12">
          {project.id > 0 ? (
            <Link
              href={`/projects/${project.id - 1}`}
              className="btn btn-primary btn-md"
            >
              ← Previous Project
            </Link>
          ) : (
            <div></div> // Empty div to maintain the flex spacing
          )}
          {project.id < projects.length - 1 ? (
            <Link
              href={`/projects/${project.id + 1}`}
              className="btn btn-primary btn-md"
            >
              Next Project →
            </Link>
          ) : (
            <div></div> // Empty div to maintain the flex spacing
          )}
        </div>
      </motion.div>
    </div>
  );
}
