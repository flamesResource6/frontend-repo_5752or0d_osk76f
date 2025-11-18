import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Insightful Dashboard',
    category: 'Data',
    desc: 'Interactive analytics dashboard with drill-down charts and performant queries.',
    tech: ['React', 'FastAPI', 'MongoDB', 'ECharts'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'E-commerce UI Kit',
    category: 'Web Dev',
    desc: 'Component-driven storefront with elegant product browsing and cart flows.',
    tech: ['React', 'Tailwind', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'University Project: NLP',
    category: 'University Projects',
    desc: 'Text classification pipeline with explainability and robust evaluation.',
    tech: ['Python', 'scikit-learn', 'Pandas'],
    img: 'https://images.unsplash.com/photo-1526378722484-c1a6d1cbc9a0?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
]

const categories = ['All', 'Web Dev', 'Data', 'University Projects']

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projects</h2>
            <p className="mt-2 text-slate-300">A selection of things I’ve built and explored.</p>
          </div>
          <div className="flex items-center gap-2">
            {categories.map((c) => (
              <button key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10">
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-xs text-blue-300">{p.category}</div>
                <h3 className="mt-1 text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="text-sm text-blue-300 hover:text-blue-200">Live demo</a>
                  <a href={p.code} className="text-sm text-slate-300 hover:text-slate-200">Code</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
