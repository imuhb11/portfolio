'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

function formatNumericValue(value: string) {
  const match = value.match(/-?\d+(?:\.\d+)?/);
  if (!match) return { numeric: null as number | null, suffix: value };

  const numeric = Number(match[0]);
  if (!Number.isFinite(numeric)) return { numeric: null as number | null, suffix: value };

  const suffix = value.slice(match.index! + match[0].length);
  return { numeric, suffix };
}

export function Achievements() {
  return (
    <SectionShell id="achievements" eyebrow="Achievements" title="Numbers that tell the truth">
      <div className="grid gap-6 lg:grid-cols-3">
        {resumeData.achievements.map((a, idx) => {
          const parsed = formatNumericValue(a.value);
          const display = parsed.numeric === null ? a.value : `${parsed.numeric.toFixed(2).replace(/\.00$/, '')}${parsed.suffix}`;

          return (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glass-card p-7"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{a.label}</p>
              <div className="mt-4">
                <span className="text-4xl font-semibold text-white">{display}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">Recognized achievement</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}



