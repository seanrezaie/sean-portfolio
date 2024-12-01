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
      <div className="relative z-10 text-center space-y-12">
        <div>
          <h1 className="text-6xl font-bold text-white mb-4">Sean Rezaie</h1>
          <p className="text-2xl text-gray-200">Portfolio</p>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="icon"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white"
            asChild
          >
            <a href="https://github.com/seanrezaie" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white"
            asChild
          >
            <a href="https://www.linkedin.com/in/seanrezaie" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="bg-black/20 border-white/20 hover:bg-black/40 [&>svg]:text-white"
            asChild
          >
            <a href="/Rezaie,Sean_Resume_APX.pdf" target="_blank" rel="noopener noreferrer">
              <FileTextIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button 
                variant="outline"
                className={cn(
                  "bg-black/20 border-white/20 hover:bg-black/40 text-white px-6 rounded-lg",
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