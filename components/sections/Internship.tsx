'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

export function Internship() {
  const it = resumeData.internship;

  return (
    <SectionShell id="internship" eyebrow="Internship" title={it.title}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-5 pl-10">
            {it.bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-200 ring-1 ring-violet-400/30">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-200">{b}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="glass-card noise p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Animated metrics</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {it.metrics.slice(0, 8).map((m, idx) => (
                <motion.div
                  key={m + idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {m}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm font-medium text-white">Core technologies</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {it.technologies.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

