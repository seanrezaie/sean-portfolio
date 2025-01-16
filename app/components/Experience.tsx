import { Card } from "@/components/ui/card"
import { experience } from "@/app/data/experience"
import { BriefcaseIcon, CalendarIcon, BuildingIcon } from "lucide-react"

export default function Experience() {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {experience.map((job, index) => (
            <Card 
              key={index} 
              className="bg-black/40 backdrop-blur-sm border-gray-800 hover:transform hover:-translate-y-2 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/10 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <BriefcaseIcon className="h-5 w-5 text-purple-400" />
                </div>
                
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1">
                      <div className="flex items-center text-gray-400 text-sm font-medium">
                        <BuildingIcon className="h-4 w-4 mr-1.5" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm font-mono">
                        <CalendarIcon className="h-4 w-4 mr-1.5" />
                        {job.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {Array.isArray(job.description) ? (
                      job.description.map((desc, i) => (
                        <p key={i} className="text-sm text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    )}
                  </div>

                  {job.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {job.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 