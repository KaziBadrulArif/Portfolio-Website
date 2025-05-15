import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Experience from "@/components/experience-section"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-white">Professional Experience</h1>

        <div className="max-w-4xl mx-auto">
          <Experience
            title="Software Engineer Intern"
            company="Data Elysium"
            location="Calgary, AB"
            period="May 2023 - August 2023"
            description="As a Software Engineer Intern at Data Elysium, I contributed to the development of data-driven applications, collaborated with cross-functional teams, and implemented new features using modern web technologies. I worked on optimizing database queries, building responsive user interfaces, and participating in code reviews to ensure high-quality deliverables."
            skills={[
              "React.js",
              "Node.js",
              "Express",
              "PostgreSQL",
              "REST APIs",
              "Git",
              "Agile Development",
              "TypeScript",
            ]}
          />

          {/* You can add more experiences as they come */}
        </div>
      </div>
    </div>
  )
}
