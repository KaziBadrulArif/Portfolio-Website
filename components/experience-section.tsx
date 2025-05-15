import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
}

export default function Experience({ title, company, location, period, description, skills }: ExperienceProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
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
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <div>
        <h5 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
          Skills Used
        </h5>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
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
  )
}
