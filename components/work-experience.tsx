import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface WorkExperienceProps {
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export default function WorkExperience({
  title,
  company,
  location,
  period,
  description,
  responsibilities,
  technologies,
}: WorkExperienceProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
          <h4 className="text-lg font-medium text-purple-600">{company}</h4>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1 mb-1">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>

      <div className="mb-6">
        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
          Key Responsibilities
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
              <svg
                className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
          Technologies Used
        </h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
