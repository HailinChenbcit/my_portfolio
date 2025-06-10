export interface Project {
  title: string
  description: string
  githubUrl: string
  demoUrl?: string
  technologies: string[]
}

export const featuredProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://your-portfolio.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"]
  },
  {
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates and user authentication.",
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-manager-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with payment integration and inventory management.",
    githubUrl: "https://github.com/yourusername/ecommerce",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS"]
  }
]
