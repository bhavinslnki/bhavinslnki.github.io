import React from "react";
import Image from "next/image";
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink } from "lucide-react"
const projects = [
  {
    website: "https://enjoyfresh.com/",
    slug: "enjoy-fresh",
    title: "Enjoy Fresh",
    description:
      "EnjoyFresh is a unique concept. It's a congregation of food-lovers, and the app is a virtual food hub. You can download it right away on your android or iOS device, register as a Food Seller, and start selling your food to the people who know the delight of savoring the right food!",
    technologies: ["Node.js", "Express", "MySQL", "AWS", "Socket.io"],
    image: "/images/enjoyfresh.png",
  },
  {
    website: "https://muvr.io/",
    slug: "muvr",
    title: "Muvr",
    description:
      "Muvr is a platform designed to simplify moving, furniture delivery, and junk removal with seamless efficiency and reliability. Focused on customer satisfaction, Whether it’s same-day furniture delivery, relocation, or junk removal, Muvr ensures exceptional service tailored to your needs.",
    technologies: ["Node.js", "Express", "MySQL", "Stripe", "AWS", "Socket.io"],
    image: "/images/muvr.webp",
  },
  {
    slug: "chaaat.io",
    website: "https://chaaat.io/home",
    title: "Chaaat.io",
    description:
      "Developed and managed backend APIs for user subscriptions and add-ons using Stripe, including managing and canceling subscription plans. Created APIs to integrate Meta Business APIs for WhatsApp templates and campaigns. Additionally, developed APIs to ensure seamless communication between platform services",
    technologies: ["Node.js", "Fastify.js", "MySQL", "Stripe", "AWS"],
    image: "/images/chaata.io.svg",
  },
  {
    slug: "ndshake",
    website: "https://ndshake.com.tw/home",
    title: "Ndshake",
    description:
      "A networking platform for professionals, built with Node.js and featuring advanced matching algorithms.",
    technologies: ["Node.js", "Express", "MySQL","AWS"],
    image: "/images/ndshake.png",
  },
  {
    slug: "pdf-editor",
    website: "",
    title: "PDF Editor",
    description:
      "Developed a Python-based tool for automated PDF cropping and manipulation, optimizing document processing workflows. Implemented functionalities for invoice modification, data extraction, and automatic cropping of PDF documents and pages.",
    technologies: ["Python", "FastApi", "MySql","SqlAlchemy"],
    image: "/images/placeholder.svg",
  },
  {
    slug:"credit-imperium",
    website: "https://www.creditimperium.com/",
    title: "Credit Imperium",
    description:
      "A comprehensive credit management system built with Node.js and Express, utilizing SQL for data storage and AWS for deployment.",
    technologies: ["Node.js", "Sequelize","Express","Stripe", "SQL", "AWS"],
    image: "/images/creditimperium.jpg",
  },
  {
    slug: "flatquest",
    website: "https://flatquest.se/",
    title: "Flatquest",
    description:
      "A real estate search platform with virtual tour capabilities, built using Node.js and integrating with VR technologies.",
    technologies: ["Node.js", "Express", "MySQL", "Stripe"],
    image: "/images/flatquest.svg",
  },
  {'slug': 't-shirt-ai',
    website: "",
    title: "T-shirt AI",
    description:
      "An AI-powered t-shirt design platform featuring generative AI integration and background removal from images.",
    technologies: ["Python", "Flast"],
    image: "/images/placeholder.svg",
  },
  {
    slug: "freestuff",
    website: "",
    title: "Freestuff",
    description:
      "A platform for sharing and finding free items, built with Node.js and featuring geolocation-based search.",
    technologies: ["Node.js", "Express", "MySQL","Socket.io"],
    image: "/images/placeholder.svg",
  },
];

export default function Projects() {
  return (
    <section className="py-12">
    <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link href={project.website} key={project.slug} target="_blank" rel="noopener noreferrer">
          <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl flex items-center justify-between">
                {project.title}
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </section>
  );
}
