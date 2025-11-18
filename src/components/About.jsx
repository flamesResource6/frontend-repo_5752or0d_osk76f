import { motion } from 'framer-motion'
import { Code2, Database } from 'lucide-react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 88 },
  { name: 'Pandas', level: 82 },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(500px_circle_at_80%_30%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I found my way into tech by building small tools to solve everyday problems. That curiosity turned into a craft—combining thoughtful interfaces with reliable systems and data-driven insights. Today I focus on shipping polished experiences with clear stories behind them.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-white">
                  <Code2 className="text-blue-300" size={20} />
                  <h3 className="font-semibold">Web Development</h3>
                </div>
                <p className="mt-2 text-slate-300 text-sm">Interfaces that are fast, accessible, and maintainable with modern stacks.</p>
                <p className="mt-2 text-slate-400 text-sm">Key tech: React, TypeScript, Tailwind, Node.js</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-white">
                  <Database className="text-cyan-300" size={20} />
                  <h3 className="font-semibold">Data Science</h3>
                </div>
                <p className="mt-2 text-slate-300 text-sm">From exploration to insights—turning raw data into decisions.</p>
                <p className="mt-2 text-slate-400 text-sm">Key tech: Python, Pandas, scikit-learn, SQL</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-white font-semibold">Skill Snapshot</h4>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div key={s.name} className="">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>{s.name}</span>
                      <span className="text-slate-400">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: s.level + '%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
