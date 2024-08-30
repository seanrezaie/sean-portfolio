'use client';

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon, GraduationCapIcon, SunIcon, MoonIcon, BriefcaseIcon, Code2Icon } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [showCoursework, setShowCoursework] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleView = () => {
    setShowCoursework(!showCoursework)
  }

  const Footer = () => (
    <footer className={`mt-12 py-4 border-t ${darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
      <div className="container mx-auto flex justify-center items-center space-x-2">
        <Code2Icon className="w-5 h-5" />
        <span>by</span>
        <span className="font-semibold">Sean Rezaie</span>
        <span className="text-blue-500">@</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )

  const courses = [
    {
      title: "CS 61B : Data Structures",
    },
    {
      title: "CS 70 : Discrete Mathematics",
    },
    {
      title: "CS 170 : Efficient Algorithms",
    },
    {
      title: "CS 186 : Database Systems",
    },
    {
      title: "CS 61A : Structure and Interpretations of Computer Programs",
    },
    {
      title: "Data 100 : Principles of Data Science",
    },
    {
      title: "CS 61C : Computer Architecture",
    },
    {
      title: "Math 54 : Linear Algebra & Differential Equations",
    },
  ]

  const MainContent = () => (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <img
          alt="Sean Rezaie"
          className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
          src="/IMG_6705.JPG"
          style={{
            aspectRatio: "1",
            objectFit: "cover",
          }}
          width="160"
          height="160"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">Sean Rezaie</h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} mt-2`}>B.A Computer Science | Minor Data Science</p>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>University of California, Berkeley</p>
        </div>
      </div>
  
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Hello! I'm Sean, a current student at UC Berkeley. I am passionate about solving problems, learning, and using my knowledge to benefit the world around me. My interests lie in Computational Biology and Machine Learning.
        </p>
      </div>
  
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <Button variant="outline" className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}>
          <GithubIcon className="w-4 h-4" />
          <a href="https://github.com/seanrezaie" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Button>
        <Button variant="outline" className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}>
          <LinkedinIcon className="w-4 h-4" />
          <a href="https://www.linkedin.com/in/seanrezaie" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Button>
        <Button variant="outline" className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}>
          <MailIcon className="w-4 h-4" />
          <a href="mailto:seanrezaie@berkeley.edu">Email</a>
        </Button>
        <Button variant="outline" className={`flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : ''}`}>
          <FileTextIcon className="w-4 h-4" />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </Button>
      </div>
  
      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
  <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
    {[
      {
        title: "Algorithms Engineer",
        company: "BlackPrint Technologies",
        date: "April 2024 – Present",
        description: "BlackPrint Technologies is a startup based San Francisco working on automating site selection."
      },
      {
        title: "Full Stack Software Engineering Intern",
        company: "Alpha Omega Group",
        date: "May 2024 – Aug 2024",
        description: "AOG is a consulting firm that specializes in advisory services and IT/business process transformation"
      },
      {
        title: "Software Engineering Intern",
        company: "Seam - Lego for Growth Hacking",
        date: "May 2023 – Dec 2023",
        description: "Seam helps Go-To Market teams automate their acquisition strategies"
      },
      {
        title: "Data 8 Course Tutor",
        company: "UC Berkeley Division of Computing, Data Science, and Society",
        date: "Jan 2024 – Present",
        description: "Course Staff on UC Berkeley's largest Undergraduate Course"
      },
    ].map((job, index) => (
      <div key={index} className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
          </svg>
        </span>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h3>
          <p className="font-bold text-gray-700 dark:text-gray-300">{job.company}</p>
          <time className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">{job.date}</time>
          <p className={`text-sm italic ${darkMode ? 'text-white' : 'text-black'}`}>{job.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
        <div className="space-y-4">
          {[
            {
              title: "Spot2 and Inmuebles24 Property Data Pipeline",
              date: "May 2024 – July 2024",
              description: [
                "Engineered a high-performance web scraping system using Python, Asyncio, and Playwright to extract data from 300,000+ property listings across 11 regions in Mexico City; leveraged concurrency to increase collection speed from 1,000 to 4,000 listings/hour",
                "Designed a scalable AWS S3-based data pipeline with Parquet compression; automated 6-hourly runs with a priority-based algorithm, cutting processing time from 8 to 4.5 hours per full scrape and enhancing real-time market analysis capabilities"
              ]
            },
            {
              title: "COVID-19, Demographics and Political Affiliation",
              date: "Aug 2023 – Nov 2023",
              description: [
                "Developed and implemented a k-Nearest Neighbors (k-NN) classifier to analyze the correlation between COVID-19 impact, demographic data, and political affiliation in U.S counties during the 2020 Presidential Election",
                "Achieved a predicted accuracy of 92.6% by utilizing machine learning techniques to process and analyze data from sources such as New York Times, Politico, The Census Bureau, and the EPA"
              ]
            }
          ].map((project, index) => (
            <Card key={index} className={darkMode ? 'bg-gray-700' : ''}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{project.date}</p>
                <ul className={`list-disc list-inside text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )

  const CourseworkContent = () => (
    <>
      <h1 className="text-3xl font-bold mb-6">Coursework</h1>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <Card key={index} className={darkMode ? 'bg-gray-700' : ''}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-100 to-gray-200'} transition-colors duration-200 flex flex-col justify-between`}>
      <div className="flex-grow">
        <div className="container mx-auto p-4">
          <div className="flex justify-end mb-4 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleView} 
              className={darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                : 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700'
              }
            >
              {showCoursework ? <BriefcaseIcon className="h-[1.2rem] w-[1.2rem]" /> : <GraduationCapIcon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle view</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleDarkMode} 
              className={darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                : 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700'
              }
            >
              {darkMode ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <Card className={`w-full max-w-4xl mx-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <CardContent className="p-6 sm:p-10">
              {showCoursework ? <CourseworkContent /> : <MainContent />}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}