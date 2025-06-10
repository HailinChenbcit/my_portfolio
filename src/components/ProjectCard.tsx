"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  githubUrl: string
  demoUrl?: string
  technologies: string[]
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  demoUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="mt-auto flex flex-col sm:flex-row gap-2 pt-4">
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </Link>
          </Button>
          {demoUrl && (
            <Button asChild className="w-full sm:w-auto">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
} 