"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react"; // Make sure to import React
import VideoPlayer from "@/components/VideoPlayer";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(
    params as unknown as Promise<{ slug: string }>
  );
  const slug = unwrappedParams.slug;

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
          className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
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
          <h1 className="text-4xl font-bold mb-2 text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
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
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            {/* Fallback image for non-video projects */}
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
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-200 mb-4">{project.description}</p>

              {/* This would be expanded project description */}
              <p className="text-gray-200">{project.fullDescription}</p>
            </div>
          </div>

          <div>
            <div className="project-card p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && Object.keys(project.links).length > 0 && (
                <>
                  <h2 className="text-xl font-bold mb-4 text-white">
                    Project Links
                  </h2>
                  <div className="space-y-2">
                    {project.links.official && (
                      <a
                        href={project.links.official}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        Official Website
                      </a>
                    )}
                    {project.links.itch && (
                      <a
                        href={project.links.itch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        Itch.io Page
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 hover:underline"
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
        {/* Project Gallery */}
        {project.galleryImages ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Placeholder for gallery images */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-48 rounded-lg overflow-hidden bg-gray-800"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Gallery Image {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div> // Empty div to maintain the flex spacing
        )}
        {/* Game Demo Section (Placeholder) */}
        {project.webglEnabled == true ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Play the Game</h2>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              <p className="text-gray-500">
                WebGL Game Demo Will Be Embedded Here
              </p>
            </div>
          </div>
        ) : (
          <div></div> // Empty div to maintain the flex spacing
        )}
        {/* Next/Previous Project Navigation with Descending Order Logic */}
        <div className="flex justify-between mt-12">
          {project.id < projects.length ? (
            <Link
              href={`/projects/${project.id + 1}`}
              className="btn btn-primary btn-md"
            >
              ← Previous Project
            </Link>
          ) : (
            <div></div> // Empty div to maintain the flex spacing
          )}
          {project.id > 1 ? (
            <Link
              href={`/projects/${project.id - 1}`}
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
