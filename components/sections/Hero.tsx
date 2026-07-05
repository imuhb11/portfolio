"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

const name = 'BHUMI VIJAYKUMAR HINGU';
const roles = ['Computer Engineering Student', 'AI & Machine Learning Enthusiast', 'Software Developer', 'Future Software Engineer'];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 noise" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 backdrop-blur">
            <Sparkles size={16} />
            <span>Building intelligent experiences with modern software</span>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {name}
            </h1>
            <div className="min-h-16 text-2xl font-medium text-slate-300 sm:text-3xl">
              {roles[0]}
            </div>
          </div>
          <p className="max-w-2xl text-lg text-slate-400">
            Computer Engineering student passionate about AI, machine learning, and building scalable software that feels effortless.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/Bhumi_Hingu_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-600/80 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-violet-500">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:scale-[1.02]">
              View Projects
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="glass-card relative overflow-hidden p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />
          <div className="relative z-10 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Current focus</p>
              <div className="mt-4 space-y-3">
                {['Machine Learning', 'Computer Vision', 'Software Engineering', 'Product Thinking'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Available for internships and collaborations</span>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm text-slate-400">
        <span>Scroll</span>
        <ArrowDown className="animate-bounce" size={18} />
      </motion.a>
    </section>
  );
}
