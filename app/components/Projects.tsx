import { Card } from "@/components/ui/card"
import { projects } from "@/app/data/projects"
import Link from 'next/link'

interface Project {
  title: string;
  date: string;
  description: string[];
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index}>
              {project.title === "Conversify" ? (
                <Link href="https://www.getconversify.com/" target="_blank" rel="noopener noreferrer">
                  <ProjectCard project={project} isClickable />
                </Link>
              ) : (
                <ProjectCard project={project} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, isClickable = false }: { project: Project; isClickable?: boolean }) {
  return (
    <Card 
      className={`bg-black/40 backdrop-blur-sm border-gray-800 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-purple-400 mb-4">{project.date}</p>
        <p className="text-gray-300">{project.description[0]}</p>
      </div>
    </Card>
  )
} 