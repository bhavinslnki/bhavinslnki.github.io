import React from "react"
import Layout from "../../components/Layout"
import Projects from "../../components/Projects"

export const metadata = {
  title: "Projects - Bhavin Solanki",
  description: "Showcase of projects by Bhavin Solanki, a Software Engineer",
}

export default function ProjectsPage() {
  return (
    <Layout>
      <Projects />
    </Layout>
  )
}

