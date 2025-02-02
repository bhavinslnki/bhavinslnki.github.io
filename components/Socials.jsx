import React from "react"
import { Github, Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "./ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/bhavinslnki", label: "GitHub" },
  { icon: Linkedin, href: "https://in.linkedin.com/in/bhavin-solanki-4b671822b", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/bhavinsolanki_28/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export default function Socials() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
      {socialLinks.map((social) => (
        <Button key={social.label} variant="outline" size="icon" asChild>
          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}

