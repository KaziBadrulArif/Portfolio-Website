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
    <div
      className={`flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
        featured ? "border-2 border-purple-500 dark:border-purple-600" : "border border-slate-200 dark:border-slate-700"
      }`}
    >
      {/* Fixed-height Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
          <div className="flex space-x-3">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="default" className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </Button>
            </Link>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="bg-slate-800/80 text-white border-slate-600 hover:bg-slate-700">
                <Github className="h-4 w-4 mr-2" /> Code
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 bg-white dark:bg-slate-800">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
          {featured && <Badge className="bg-purple-600 hover:bg-purple-700">Featured</Badge>}
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>

        <div className="space-y-6 mt-auto">
          <div>
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Technologies
            </h4>
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

          <div>
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {features.map((feature) => (
                <li key={feature} className="text-slate-600 dark:text-slate-300 text-sm flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}