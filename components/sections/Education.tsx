'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

export function Education() {
  const items = resumeData.education;

  return (
    <SectionShell id="education" eyebrow="Education" title="Timeline of growth">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-6">
          {items.map((edu, i) => (
            <motion.div
              key={edu.program + i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pl-10"
            >
              <span className="absolute left-[6px] top-3 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_22px_rgba(124,58,237,0.8)]" />
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">{edu.program}</h3>
                <p className="mt-2 text-sm text-slate-300">{edu.institution || '—'}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {edu.period ? (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {edu.period}
                    </span>
                  ) : null}
                  {edu.grade ? (
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                      {edu.grade}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

