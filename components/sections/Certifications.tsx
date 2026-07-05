'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

export function Certifications() {
  const certs = resumeData.certifications;
  return (
    <SectionShell id="certifications" eyebrow="Certifications" title="Badges of focused learning">
      <div className="space-y-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title + i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="glass-card p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="mt-2 text-sm text-slate-300">
                  {c.issuer} {c.note ? `• ${c.note}` : ''}
                </p>
              </div>
              <span className="mt-3 inline-flex w-fit rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
                {c.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

