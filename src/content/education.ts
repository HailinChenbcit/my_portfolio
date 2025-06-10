export interface Education {
  school: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

export const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    location: "San Francisco, CA",
    startDate: "2017",
    endDate: "2019",
    description: [
      "Specialized in Software Engineering and Machine Learning",
      "Graduated with honors (GPA: 3.9/4.0)",
      "Published research paper on distributed systems"
    ]
  },
  {
    school: "State University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "New York, NY",
    startDate: "2013",
    endDate: "2017",
    description: [
      "Dean's List for academic excellence",
      "Senior project: Developed a real-time collaboration platform",
      "Active member of the Computer Science Club"
    ]
  }
] 