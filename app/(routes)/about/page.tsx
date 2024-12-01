import About from '@/app/components/About'

export default function AboutPage() {
  return (
    <div className="relative bg-gradient-to-b from-black via-black/95 to-black min-h-screen">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <About />
    </div>
  )
} 