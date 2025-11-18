import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-2 text-slate-300">Have a question or want to collaborate? Let’s connect.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell me a bit about your project..." />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-white shadow hover:bg-blue-400 transition-colors">Send message</button>
              <a href="/cv.pdf" download className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-slate-100 hover:bg-white/10 transition-colors">Download CV</a>
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Elsewhere</h3>
            <div className="mt-4 grid gap-2">
              <a href="https://github.com" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:you@example.com" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
