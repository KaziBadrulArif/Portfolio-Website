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
      className={`w-full max-w-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden
      ${featured ? "border-2 border-purple-500 dark:border-purple-600" : "border border-slate-200 dark:border-slate-700"}
      bg-white dark:bg-slate-800
      h-full flex flex-col`}          // ← equal height + vertical layout
    >
      {/* Image (top) with consistent height */}
      <div className="relative w-full aspect-[16/9]">  {/* ← same height on all cards */}
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Hover Overlay (optional) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="h-4 w-4 mr-2" /> Demo
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

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">  {/* ← let content grow to balance heights */}
        {/* Title + badge */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">{title}</h3>
          {featured && <Badge className="bg-purple-600">Featured</Badge>}
        </div>

        {/* Description (same number of lines across cards) */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
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

        {/* Features */}
        <div className="mt-auto">  {/* ← pushes this block to the bottom for alignment */}
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
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
      </div>
    </div>
  );
}
