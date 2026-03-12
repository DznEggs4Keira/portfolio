"use client";

import { sideQuests, skillStack } from "@/data/about";
import { timelineEvents, TimelineEvent } from "@/data/about"; // Import the TimelineEvent type
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Add proper TypeScript interface for the component props
interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isItemInView = useInView(itemRef, { once: true, amount: 0.3 });

  // Determine if this item should be on the left or right side
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-12" ref={itemRef}>
      {/* The dot */}
      <div className="absolute left-1/2 top-5 -ml-2.5 z-10">
        <motion.div
          className="w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"
          initial={{ scale: 0 }}
          animate={isItemInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </div>

      {/* The content */}
      <motion.div
        className={`w-[calc(50%-20px)] ${isLeft ? "mr-auto pr-8" : "ml-auto pl-8"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={
          isItemInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? -50 : 50 }
        }
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="project-card p-6">
          <span className="inline-block px-3 py-1 mb-2 rounded bg-blue-600 text-white text-sm font-medium">
            {event.year}
          </span>
          <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
          <p className="text-gray-200">{event.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      {/* Skills Section */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {skillStack[0]?.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skillStack[0].tags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {skillStack[1]?.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skillStack[1].tags.map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">My Journey</h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Hobbies/Side Quests */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Side Quests</h2>
        <div className="project-card p-6">
          <div className="space-y-4">
            {sideQuests.map((quest) => (
              <p key={quest.id} className="text-gray-200">
                {quest.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
