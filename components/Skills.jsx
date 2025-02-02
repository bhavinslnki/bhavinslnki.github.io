import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const skills = [
  { category: "Languages", items: ["JavaScript", "Python", "SQL", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", items: ["Node.js", "Express", "React", "Django", "Flask"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "CI/CD", "Nginx"] },
]

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillSet, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{skillSet.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

