import React from "react"
import Layout from "../components/Layout"
import Introduction from "../components/Introduction"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skills from "../components/Skills"
import ProjectsPreview from "../components/ProjectsPreview"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-16">
        <Introduction />
        <Experience />
        <Education />
        <Skills />
        <ProjectsPreview />
      </div>
    </Layout>
  )
}

