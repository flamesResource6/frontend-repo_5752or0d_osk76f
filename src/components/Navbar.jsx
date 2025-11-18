import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              <span className="text-blue-400">{/* logo dot */}</span>
              <span>My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </nav>

            <button aria-label="Menu" onClick={() => setOpen(true)} className="md:hidden text-slate-200">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/60" onClick={() => setOpen(false)}>
          <div className="absolute right-4 left-4 top-6 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Navigate</span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="text-slate-200">
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 grid gap-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
