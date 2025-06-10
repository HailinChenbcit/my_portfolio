import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { featuredProjects } from "@/content/projects"

const ProjectCard = dynamic(() => import("@/components/ProjectCard").then(mod => mod.ProjectCard), {
  loading: () => (
    <div className="h-[300px] w-full animate-pulse rounded-lg border bg-muted" />
  ),
})

const AnimatedSection = dynamic(() => import("@/components/AnimatedSection").then(mod => mod.AnimatedSection), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function Home() {
  return (
    <div className="flex-1">
      <AnimatedSection className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Hi, I&apos;m Your Name
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A passionate software developer specializing in web development and creating
            exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            I&apos;m a software developer with a passion for creating beautiful and functional
            web applications. With expertise in modern web technologies, I strive to build
            solutions that make a difference.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {["React", "TypeScript", "Node.js", "Python", "AWS"].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-lg border p-4 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Here are some of my recent works
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  )
}
