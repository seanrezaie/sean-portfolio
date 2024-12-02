import { Card } from "@/components/ui/card"
import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen flex items-center py-8 sm:py-0">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Mobile-only title */}
          <div className="lg:hidden col-span-full mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          {/* Image Column - Moves to top on mobile */}
          <div className="lg:col-span-5 lg:order-last space-y-6">
            {/* Desktop-only title */}
            <h2 className="hidden lg:block text-4xl font-bold text-center bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                  src="/IMG_1836 5.jpg"
                  alt="Sean Rezaie"
                  width={300}
                  height={300}
                  className="relative rounded-lg shadow-2xl w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6">
            <Card className="bg-black/40 border-gray-800 p-4 lg:p-8 backdrop-blur-sm">
              <div className="space-y-3 lg:space-y-4">
                <p className="text-sm lg:text-base leading-relaxed text-gray-300">
                  My name is Sean Rezaie, and I&apos;m a senior at UC Berkeley studying Computer Science with a minor in Data Science. Growing up in Laguna Niguel, California, I always had a deep curiosity for both technology and the life sciences, which led me to pursue pre-medical studies alongside my current field. That unique combination has fueled my passion for solving complex problems at the intersection of healthcare, data, and software engineering.
                </p>
                <p className="text-sm lg:text-base leading-relaxed text-gray-300">
                  While my academic journey began with the desire to understand the intricacies of the human body, my love for coding and innovation drew me toward creating impactful solutions using technology. Over time, I&apos;ve cultivated a fascination for building scalable systems and leveraging data to solve real-world problems.
                </p>
                <p className="text-sm lg:text-base leading-relaxed text-gray-300">
                  Currently, I&apos;m working on a map-based platform at BlackPrint Technologies that uses geospatial data to streamline site selection, and I&apos;ve co-founded Conversify, an AI-powered platform designed to help people improve their conversational skills. Outside of work, I&apos;m always eager to learn, tinker with new tools, and explore creative ways technology can make the world a better place.
                </p>
                <p className="text-sm lg:text-base leading-relaxed text-gray-300">
                  When I&apos;m not coding or working on a project, you&apos;ll find me enjoying hitting the gym, playing TFT (just hit Masters), or exploring new challenges that push the boundaries of what&apos;s possible. My goal is to keep building and learning, with the hope that my work will someday make a meaningful difference in people&apos;s lives.
                </p>
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-black/40 border-gray-800 p-4 backdrop-blur-sm">
                <h3 className="text-base lg:text-lg font-semibold mb-2 text-purple-400">Skills</h3>
                <ul className="list-disc list-inside text-xs lg:text-sm text-gray-300 space-y-0.5">
                  <li>Full Stack Development</li>
                  <li>Data Science & Analytics</li>
                  <li>Machine Learning</li>
                  <li>System Architecture</li>
                </ul>
              </Card>

              <Card className="bg-black/40 border-gray-800 p-4 backdrop-blur-sm">
                <h3 className="text-base lg:text-lg font-semibold mb-2 text-purple-400">Interests</h3>
                <ul className="list-disc list-inside text-xs lg:text-sm text-gray-300 space-y-0.5">
                  <li>Computational Biology</li>
                  <li>AI/ML Applications</li>
                  <li>Healthcare Technology</li>
                  <li>Data Visualization</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 