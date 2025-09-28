// components/project-card.tsx
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  features: string[]
  liveLink?: string
  githubLink?: string
  imageSrc?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  technologies,
  features,
  liveLink,
  githubLink,
  imageSrc,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className={`w-full overflow-hidden h-full flex flex-col ${
      featured ? "border-2 border-purple-500 dark:border-purple-600" : ""
    }`}>
      {/* Image: same height everywhere */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </Button>
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="bg-slate-800/80 text-white border-slate-600 hover:bg-slate-700">
                  <Github className="h-4 w-4 mr-2" /> Code
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          {featured && <Badge className="bg-purple-600">Featured</Badge>}
        </div>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>

      {/* Content grows; features pinned at bottom */}
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div>
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Key Features
          </h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {features.map((feature) => (
              <li key={feature} className="text-xs text-slate-600 dark:text-slate-300 flex items-center">
                <svg className="h-3 w-3 text-green-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
