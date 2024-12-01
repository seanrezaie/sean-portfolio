import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" asChild className="border-gray-700 hover:bg-gray-800 text-white">
            <a href="https://github.com/seanrezaie" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild className="border-gray-700 hover:bg-gray-800 text-white">
            <a href="https://www.linkedin.com/in/seanrezaie" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild className="border-gray-700 hover:bg-gray-800 text-white">
            <a href="mailto:seanrezaie@berkeley.edu">
              <MailIcon className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 