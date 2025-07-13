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
    title="Software Developer (Contract)"
    company="Data Elysium"
    location="Remote / Calgary, AB"
    period="May 2025 – August 2025"
    description="Built an interactive chatbot UI using React.js that served 500+ users, integrating RAG and OpenAI to enhance response accuracy by 35%. Collaborated with backend engineers to develop secure REST APIs and implement JWT-based authentication, ensuring data privacy and streamlined user access."
    skills={[
      "React.js",
      "Django REST Framework",
      "Node.js",
      "Python",
      "OpenAI API",
      "JWT Authentication",
      "REST APIs",
      "Git",
      "Docker",
      "Agile Development",
    ]}
  />

  {/* You can add more experiences as they come */}
</div>

      </div>
    </div>
  )
}
