import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import WorkExperience from "@/components/work-experience"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav"

export default function WorkExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Kazi.dev
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/#projects"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link href="/work-experience" className="text-purple-600 dark:text-purple-400 transition-colors">
              Experience
            </Link>
            <Link
              href="/#about"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-white">Work Experience</h1>

        <div className="max-w-4xl mx-auto">
  <WorkExperience
    title="Software Developer (Contract)"
    company="Data Elysium"
    location="Remote / Calgary, AB"
    period="May 2025 – August 2025"
    description="Built an interactive chatbot UI using React.js that helped 500+ users retrieve insights from uploaded PDFs via RAG and OpenAI integration, improving response accuracy by 35%. Collaborated closely with backend engineers to implement secure REST API endpoints and enhance overall system performance."
    responsibilities={[
      "Developed RAG chatbot systems leveraging NLP techniques and OpenAI APIs",
      "Engineered and optimized vector databases for fast, accurate information retrieval",
      "Integrated large language models with custom knowledge bases for improved context understanding",
      "Created and maintained RESTful APIs for seamless frontend-backend communication",
      "Implemented JWT-based authentication and role-based access control to secure user data",
      "Collaborated with cross-functional teams to define product requirements and ensure timely delivery",
      "Performed rigorous testing and optimized system performance for scalability",
      "Documented codebase, APIs, and system architecture for future maintenance",
    ]}
    technologies={[
      "React.js",
      "Python",
      "JavaScript",
      "Node.js",
      "Django REST Framework",
      "OpenAI API",
      "LangChain",
      "Vector Databases",
      "JWT Authentication",
      "Docker",
      "Git",
    ]}
  />
</div>

      </div>

      <footer className="bg-slate-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Kazi Badrul Arif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
