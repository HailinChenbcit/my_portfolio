export interface Experience {
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Tech Company",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "2021",
    endDate: "Present",
    description: [
      "Led development of a full-stack web application serving over 100,000 users",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
  },
  {
    company: "Startup Inc",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: "2019",
    endDate: "2021",
    description: [
      "Developed and maintained multiple client projects using modern web technologies",
      "Collaborated with design team to implement responsive UI/UX",
      "Optimized database queries improving application performance by 40%"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Docker"]
  }
] 