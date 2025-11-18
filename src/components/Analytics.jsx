import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Bar({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-800 overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: value + '%' }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="h-full" style={{ background: color }} />
      </div>
    </div>
  )
}

export default function Analytics() {
  const data = useMemo(() => ({
    techUse: [
      { label: 'React', value: 35, color: 'linear-gradient(90deg,#60a5fa,#38bdf8)' },
      { label: 'Python', value: 30, color: 'linear-gradient(90deg,#34d399,#22d3ee)' },
      { label: 'TypeScript', value: 20, color: 'linear-gradient(90deg,#a78bfa,#60a5fa)' },
      { label: 'Data Viz', value: 15, color: 'linear-gradient(90deg,#f472b6,#60a5fa)' },
    ],
    categories: [
      { label: 'Web Dev', value: 50 },
      { label: 'Data', value: 35 },
      { label: 'University', value: 15 },
    ],
  }), [])

  return (
    <section id="analytics" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Visualizations</h2>
            <p className="mt-2 text-slate-300">A quick look at my tooling and project mix.</p>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Tech usage breakdown</h3>
            <div className="mt-6 grid gap-4">
              {data.techUse.map((d) => (
                <Bar key={d.label} label={d.label} value={d.value} color={d.color} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Project categories</h3>
            <div className="mt-6 grid gap-3">
              {data.categories.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-blue-400" />
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: c.value + '%' }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                  <span className="text-xs text-slate-300 w-16">{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
