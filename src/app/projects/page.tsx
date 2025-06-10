import { SectionHeader } from "@/components/SectionHeader"
import { ProjectCard } from "@/components/ProjectCard"
import { featuredProjects } from "@/content/projects"

export default function ProjectsPage() {
  return (
    <main className="container py-8">
      <SectionHeader
        title="My Projects"
        subtitle="A collection of my work and side projects"
        className="mb-8"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}
