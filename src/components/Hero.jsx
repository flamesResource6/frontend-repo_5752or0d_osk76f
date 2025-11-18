import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-70">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
                Web Developer & Data Enthusiast
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm Your Name
              </h1>
              <p className="mt-4 text-slate-200/90 leading-relaxed max-w-xl">
                I build clean, performant web experiences and turn data into clear, compelling stories. I obsess over details, scalability, and the narrative behind every product.
              </p>
              <p className="mt-6 text-blue-300 text-lg">Design with intention. Build with clarity. Measure what matters.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-white shadow hover:bg-blue-400 transition-colors">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-slate-100 hover:bg-white/10 transition-colors">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
