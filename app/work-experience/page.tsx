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
            title="Software Engineering Intern"
            company="Data Elysium"
            location="Calgary, AB"
            period="April 2023 - August 2023"
            description="Worked as a software engineering intern at Data Elysium, focusing on developing and implementing RAG (Retrieval-Augmented Generation) chatbots. Collaborated with a team of engineers to design, build, and optimize AI-powered conversational systems that leverage both retrieval and generation capabilities."
            responsibilities={[
              "Developed and implemented RAG chatbot systems using modern NLP techniques",
              "Built and optimized vector databases for efficient information retrieval",
              "Integrated large language models with custom knowledge bases",
              "Created APIs for seamless integration with frontend applications",
              "Implemented user feedback mechanisms to improve chatbot responses",
              "Conducted testing and performance optimization of chatbot systems",
              "Collaborated with cross-functional teams to define requirements and features",
              "Documented code, processes, and system architecture",
            ]}
            technologies={[
              "Python",
              "JavaScript",
              "React",
              "Node.js",
              "LangChain",
              "Vector Databases",
              "LLMs",
              "REST APIs",
              "Git",
              "Docker",
            ]}
          />

          {/* You can add more work experiences as they come */}
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
