import React from "react"
import Layout from "../../components/Layout"
import Contact from "../../components/Contact"

export const metadata = {
  title: "Contact - Bhavin Solanki",
  description: "Get in touch with Bhavin Solanki, Software Engineer",
}

export default function ContactPage() {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}

