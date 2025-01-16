import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-8">
          <Card className="bg-black/40 backdrop-blur-sm border-gray-800 p-8 rounded-xl">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                My name is Sean Rezaie, and I&apos;m a senior at UC Berkeley studying Computer Science with a minor in Data Science. Growing up in Laguna Niguel, California, I always had a deep curiosity for both technology and the life sciences, which led me to pursue pre-medical studies alongside my current field. That unique combination has fueled my passion for solving complex problems at the intersection of healthcare, data, and software engineering.
              </p>
              <p className="text-gray-300 leading-relaxed">
                While my academic journey began with the desire to understand the intricacies of the human body, my love for coding and innovation drew me toward creating impactful solutions using technology. Over time, I&apos;ve cultivated a fascination for building scalable systems and leveraging data to solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I&apos;m working on a map-based platform at BlackPrint Technologies that uses geospatial data to streamline site selection, and I&apos;ve co-founded Conversify, an AI-powered platform designed to help people improve their conversational skills. Outside of work, I&apos;m always eager to learn, tinker with new tools, and explore creative ways technology can make the world a better place.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I&apos;m not coding or working on a project, you&apos;ll find me enjoying hitting the gym, playing TFT (just hit Masters), or exploring new challenges that push the boundaries of what&apos;s possible. My goal is to keep building and learning, with the hope that my work will someday make a meaningful difference in people&apos;s lives.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/10">
              <h3 className="text-lg font-semibold mb-4 text-white tracking-tight">Technical Skills</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Full Stack Development</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Cloud Architecture</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">System Design</span>
                </div>
              </div>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/10">
              <h3 className="text-lg font-semibold mb-4 text-white tracking-tight">Areas of Interest</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Computational Biology</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">AI/ML Applications</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Healthcare Tech</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Data Visualization</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">Cloud Computing</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 