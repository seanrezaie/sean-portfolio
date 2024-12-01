'use client';

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">SR</Link>
        </div>
      </div>
    </nav>
  )
} 