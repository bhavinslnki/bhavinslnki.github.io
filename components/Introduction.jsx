import React from "react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import Socials from "./Socials"
import Link from "next/link"

export default function Introduction() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-1">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/10"></div>
      <Card className="relative overflow-hidden border-none bg-background/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/images/bhavin.jpg"
                alt="Bhavin Solanki"
                width={200}
                height={200}
                className="rounded-full border-4 border-background relative z-10"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-2">Bhavin Solanki</h1>
              <p className="text-xl mb-4 text-muted-foreground">Software Engineer</p>
              <p className="mb-6 max-w-2xl">
                Versatile software engineer with 2+ years of experience specializing in Node.js and Python. Proficient in
                building efficient, scalable backend systems and solving complex problems across various domains.
                Passionate about creating innovative solutions and continuously learning new technologies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 6354184592</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>solankibhavin2881@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>India</span>
                </div>
              </div>
              <Socials />
              <div className="mt-6">
                <Link href="/projects" passHref>
                  <Button className="group">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

