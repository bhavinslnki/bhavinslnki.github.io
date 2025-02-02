import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
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
      "Muvr is a platform designed to simplify moving, furniture delivery, and junk removal with seamless efficiency and reliability. Focused on customer satisfaction, Muvr offers a user-friendly experience and dedicated support to make life's transitions hassle-free. Whether it’s same-day furniture delivery, relocation, or junk removal, Muvr ensures exceptional service tailored to your needs.",
    technologies: ["Node.js", "Express", "MySQL", "Stripe", "AWS"],
    image: "/images/muvr.webp",
  },
  {
    website: "",
    slug: "pdf-editor",
    title: "PDF Editor",
    description:
      "Developed a Python-based tool for automated PDF cropping and manipulation, optimizing document processing workflows. Implemented functionalities for invoice modification, data extraction, and automatic cropping of PDF documents and pages.",
    technologies: ["Python", "FastApi", "MySql","SqlAlchemy"],
    image: "/images/placeholder.svg",
  },
];

export default function ProjectsPreview() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link href="/projects" passHref>
          <Button variant="outline" className="group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card
            key={project.slug}
            className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                unoptimized
                className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
              />
            </a>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {project.title}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
