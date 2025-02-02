import React from "react"
import Layout from "../../components/Layout"
import Education from "../../components/Education"

export const metadata = {
  title: "Education - Bhavin Solanki",
  description: "Educational background of Bhavin Solanki, Software Engineer",
}

export default function EducationPage() {
  return (
    <Layout>
      <Education />
    </Layout>
  )
}

