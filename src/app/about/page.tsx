"use client";

import { sideQuests, skillStack } from "@/data/about";
import { timelineEvents, TimelineEvent } from "@/data/about";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isItemInView = useInView(itemRef, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-12" ref={itemRef}>
      {/* The dot */}
      <div className="absolute left-1/2 top-5 -ml-2.5 z-10">
        <motion.div
          className="w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"
          initial={{ scale: 0 }}
          animate={isItemInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
      </div>

      {/* The content */}
      <motion.div
        className={`w-[calc(50%-20px)] ${isLeft ? "mr-auto pr-8" : "ml-auto pl-8"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
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

interface SkillSectionProps {
  title: string;
  tags: string[];
}

function SkillSection({ title, tags }: SkillSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            className="tech-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function SideQuests() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      <h2 className="text-2xl font-semibold mb-6 text-center">Side Quests</h2>
      <motion.div
        className="project-card p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-4">
          {sideQuests.map((quest, index) => (
            <motion.p
              key={quest.id}
              className="text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: "easeOut" }}
            >
              {quest.text}
            </motion.p>
          ))}
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
        {skillStack.map((stack) => (
          <SkillSection key={stack.title} title={stack.title} tags={stack.tags} />
        ))}
      </div>

      {/* Journey Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Hobbies/Side Quests */}
      <SideQuests />
    </div>
  );
}
