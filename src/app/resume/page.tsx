import { SectionHeader } from "@/components/SectionHeader"
import { experiences } from "@/content/experience"
import { education } from "@/content/education"

export default function ResumePage() {
  return (
    <main className="container py-8">
      <SectionHeader
        title="Resume"
        subtitle="My professional experience and education"
        className="mb-8"
      />
      <div className="grid gap-12">
        <section>
          <SectionHeader
            title="Experience"
            subtitle="My work history"
            className="mb-8"
          />
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.company} className="space-y-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">{experience.position}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.startDate} - {experience.endDate}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
                <ul className="list-disc space-y-2 pl-4">
                  {experience.description.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="Education"
            subtitle="My academic background"
            className="mb-8"
          />
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree} in {edu.field}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <ul className="list-disc space-y-2 pl-4">
                  {edu.description.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
