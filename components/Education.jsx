import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Gujarat Technological University",
    period: "2018 - 2022",
    description: "Graduated with honors. I learned the fundamentals of computer science and engineering, including data structures, algorithms, operating systems, and software engineering. I also developed several projects",  
  },
]

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl">{edu.degree}</CardTitle>
              <CardDescription className="text-lg">
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

