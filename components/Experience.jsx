import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "White Orange Software",
    period: "Dec 2022 - Present",
    description:
      " Designed and implemented server-side architectures,scalable backend systems using Node.js and Python, ensuring high performance and reliability for diverse applications. Mentored junior developers and implemented best practices for code quality and testing.Developed and optimized SQL and NoSQL databases, ensuring high performance for data-intensive applications.Streamlined deployment processes by integrating CI/CD pipelines, improving efficiency and reliability.Worked on 10+ projects and used Git for version control, working with different teams to ensure smooth project delivery"
  },
  {
    title: " Python Developer Intern",
    company: " PIE INFOTECH Pvt. Ltd",
    period: "Jan 2022 - May 2022",
    description:
      "Contributed to the development of a secure Password Manager web application during a 4-month internship.Focused on implementing user authentication, data encryption, and REST API functionalities to enhance security and usability .",
  }
]

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <CardDescription className="text-lg">
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

