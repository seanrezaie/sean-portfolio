'use client';

import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, FileTextIcon } from "lucide-react"
import AnimatedBackground from './AnimatedBackground'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Hero() {
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="relative z-10 text-center space-y-16">
        <div>
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">Sean Rezaie</h1>
          <p className="text-2xl text-gray-300 font-light tracking-wide">Software Engineer</p>
          <div className="mt-4 text-gray-400 font-mono text-sm">berkeley.edu • san francisco, ca</div>
        </div>
        
        <div className="flex justify-center gap-6">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white rounded-xl"
            asChild
          >
            <a href="https://github.com/seanrezaie" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white rounded-xl"
            asChild
          >
            <a href="https://www.linkedin.com/in/seanrezaie" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white rounded-xl"
            asChild
          >
            <a href="/Rezaie,Sean_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileTextIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button 
                variant="outline"
                className={cn(
                  "bg-black/20 border-white/20 hover:bg-black/40 text-white px-8 py-6 rounded-xl font-medium tracking-wide",
                  pathname === link.href && "bg-black/40 border-white/40"
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 