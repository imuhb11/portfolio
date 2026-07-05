'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = resumeData.projects;

  return (
    <SectionShell id="projects" eyebrow="Projects" title="Work that feels alive">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title + idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.06 }}
            className="glass-card group relative overflow-hidden p-7"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Featured Project</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.category}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-200">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.liveDemoUrl || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:scale-[1.02]"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={p.githubUrl || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:scale-[1.02]"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={p.caseStudyUrl || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-200 backdrop-blur transition hover:scale-[1.02]"
                >
                  Case Study
                </a>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-5">
                <p className="text-sm font-medium text-white">Highlights</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.features.slice(0, 4).map((f) => (
                    <div key={f} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

