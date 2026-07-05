'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';
import { Code, Database, Cpu, Sparkles, Users } from 'lucide-react';

const ICONS = {
  programming: Code,
  web: Code,
  database: Database,
  ai: Sparkles,
  core: Cpu,
  soft: Users,
} as const;

function SkillCard({ title, items }: { title: string; items: string[] }) {
  const Icon = (ICONS as any)[title.toLowerCase()] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card relative overflow-hidden p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-violet-200" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Category</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {items.map((s, idx) => (
            <motion.div
              key={s}
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-slate-200">{s}</span>
                <span className="text-xs text-slate-500">{Math.min(95, 55 + idx * 6)}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(95, 55 + idx * 6)}%` }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const s = resumeData.skills;
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Glowing skills, real capability">
      <div className="grid gap-6 lg:grid-cols-2">
        <SkillCard title="Programming" items={s.programming} />
        <SkillCard title="Web" items={s.web} />
        <SkillCard title="Database" items={s.database} />
        <SkillCard title="AI" items={s.ai} />
        <SkillCard title="Core" items={s.core} />
        <SkillCard title="Soft" items={s.soft} />
      </div>
    </SectionShell>
  );
}

