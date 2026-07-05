'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

export function About() {
  const steps = [
    {
      title: 'Start with fundamentals',
      body:
        'Computer Engineering student passionate about AI, Machine Learning and Software Development.',
      year: 'Now',
    },
    {
      title: 'Build continuously',
      body:
        'Motivated learner continuously exploring modern technologies and turning ideas into working systems.',
      year: 'Ongoing',
    },
    {
      title: 'Create scalable intelligence',
      body:
        'Interested in building scalable intelligent applications and improving real-world workflows.',
      year: 'Next',
    },
  ];

  return (
    <SectionShell id="about" eyebrow="About" title="A story of curiosity & craft">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-slate-300 leading-relaxed">
            {resumeData.summary}
          </p>
          <div className="glass-card noise p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Focus</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {['AI/ML', 'Software Engineering', 'Scalable Systems'].map((x) => (
                <span key={x} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-6 pl-8">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/20 text-xs text-violet-200">
                  {idx + 1}
                </span>
                <div className="glass-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{s.year}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

