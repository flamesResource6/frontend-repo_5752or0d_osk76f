import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-slate-300 hover:text-white">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
            <a href="#analytics" className="text-slate-300 hover:text-white">Analytics</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="text-slate-300 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}
