import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import AnimatedText from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav"
export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Kazi.dev
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#projects"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/work-experience"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#about"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
            <a href="/Resume.pdf" download>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            </a>
          </div>
          <MobileNav />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Kazi Badrul Arif
              </span>
            </h1>
            <AnimatedText
              text="a computer science student at the University of Calgary, building smart tools with code, creativity, and curiosity."
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
            />
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm a passionate full-stack developer with a love for solving real-world problems through elegant code and
              thoughtful UX. Currently looking for software engineering opportunities where I can apply my technical
              skills and creativity to build innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Resume.pdf" download>
  <Button className="bg-purple-600 hover:bg-purple-700">
    <Download className="mr-2 h-4 w-4" /> Download Resume
  </Button>
</a>

              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-950"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <Link
                  href="https://github.com/KaziBadrulArif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kazi-badrul-arif-44a57323a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl transform transition-transform hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 animate-pulse"></div>
              <Image
                src="Kazi_IMG.png"
                alt="Kazi Badrul Arif"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section */}
        <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 dark:text-white">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* IT Support */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">IT Support</h3>
                <div className="flex flex-wrap gap-2">
                  {["Desktop Hardware", "Windows 10/11", "Microsoft 365", "Troubleshooting", "System Maintenance"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              {/* Front-End Development */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Front-End Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "Flexbox",
                    "Grid",
                    "JavaScript ES6",
                    "TypeScript",
                    "DOM Manipulation",
                    "jQuery",
                    "React.js",
                    "React Hooks",
                    "JAVA",
                    "Web Design with Figma",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Back-End Development */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Back-End Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "EJS",
                    "NPM",
                    "Python",
                    "SQL",
                    "PostgreSQL",
                    "Authentication",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Version Control & Other Tools */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Version Control & Other Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Bash Command Line", "Deployment with GitHub Pages"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Work Experience Preview Section */}
        <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-800 dark:text-white">
              Work Experience
            </h2>
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">Software Engineering Intern</h3>
                  <h4 className="text-lg font-medium text-purple-600">Data Elysium</h4>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>May 2025 - August 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Calgary, AB</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Developed and implemented RAG (Retrieval-Augmented Generation) chatbots, optimizing AI-powered
                conversational systems that leverage both retrieval and generation capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "JavaScript", "React", "LangChain", "Vector Databases", "LLMs"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Link href="/work-experience">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Briefcase className="mr-2 h-4 w-4" /> View Full Experience
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
<section className="py-20 bg-slate-50 dark:bg-slate-900/50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
      Featured Projects
    </h2>
    <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
      Here are some of my recent projects that showcase my skills and passion for building innovative solutions.
    </p>
    
    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <ProjectCard
        title="IELTS Mock Test Creator"
        description="An AI-powered writing test platform that gives instant, intelligent feedback to IELTS learners. It uses NLP models and a dynamic frontend to simulate the real IELTS experience."
        technologies={["React", "Django", "AI APIs", "TailwindCSS"]}
        features={["Live feedback", "Secure test submission", "Clean UI", "User tracking"]}
        liveLink="https://github.com/KaziBadrulArif/Ielts-Ai-Mock"
        githubLink="https://github.com/KaziBadrulArif/Ielts-Ai-Mock"
        imageSrc="IELTS_MOCK.png"
        featured={true}
      />
      
      <ProjectCard
        title="NextStep – UCalgary Job Portal"
        description="A tailored platform for University of Calgary students to connect with employers. Features include student/employer dashboards, job posting, application tracking, and moderator approval flow."
        technologies={["React", "Django REST", "Styled Components", "JWT Auth"]}
        features={["Role-based login", "Application review", "Email notifications", "Saved jobs"]}
        liveLink="https://github.com/mahmudul-ai/NextStep-UofC"
        githubLink="https://github.com/mahmudul-ai/NextStep-UofC"
        imageSrc="NEXTSTEP.png"
      />
      
      <ProjectCard
        title="UofC Degree Navigator"
        description="A sleek academic planning tool that helps UCalgary students visualize their progress and plan future semesters."
        technologies={["React", "Django", "Chart.js"]}
        features={["Dynamic degree audit", "Credit tracking", "Course prerequisites", "UI timeline"]}
        liveLink="https://github.com/HighBlinks/481Project"
        githubLink="https://github.com/HighBlinks/481Project"
        imageSrc="UofCDegreeNav.png"
      />
    </div>
  </div>
</section>

        {/* About Section */}
        <section id="about" className="bg-slate-100 dark:bg-slate-800/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800 dark:text-white">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-10">
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                Beyond coding, I'm deeply interested in education tech, system design, and helping others grow. I
                believe in building clean, user-first interfaces backed by solid backend architecture. I'm always
                learning, always iterating.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                As a computer science student at the University of Calgary, I've had the opportunity to work on a
                variety of projects that have helped me develop my skills in full-stack development, AI integration, and
                user experience design.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                I've gained valuable industry experience through my internship at Data Elysium as a Software Engineer,
                where I applied my technical skills to real-world problems and collaborated with a team of
                professionals.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Let's build something extraordinary. Feel free to reach out:{" "}
                <a href="mailto:arifabesh33@gmail.com" className="text-purple-600 hover:underline">
                  arifabesh33@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Kazi Badrul Arif
              </div>
              <p className="text-slate-400 mt-2">Software Engineer</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/KaziBadrulArif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kazi-badrul-arif-44a57323a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:arifabesh33@gmail.com"
                className="text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Kazi Badrul Arif. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
