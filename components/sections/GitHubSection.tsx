'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';

export function GitHubSection() {
  return (
    <SectionShell id="github" eyebrow="GitHub" title="Signals of real-world building">
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Contributions</p>
          <div className="mt-4 text-4xl font-semibold text-white">—</div>
          <p className="mt-2 text-sm text-slate-300">Connect a GitHub API/username to render a real graph.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="glass-card p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Pinned repositories</p>
          <div className="mt-4 space-y-3">
            {['Repo Placeholder 1', 'Repo Placeholder 2', 'Repo Placeholder 3'].map((r) => (
              <div key={r} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {r}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Stats snapshot</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { k: 'Top Lang', v: '—' },
              { k: 'Commits', v: '—' },
              { k: 'Activity', v: '—' },
              { k: 'Streak', v: '—' },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-slate-500">{x.k}</p>
                <p className="mt-1 text-lg font-semibold text-white">{x.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 glass-card p-6">
        <p className="text-sm font-medium text-white">Pinned to your projects</p>
        <p className="mt-2 text-sm text-slate-300">
          This section is intentionally placeholder-safe since no GitHub username was provided in the repository.
          Replace placeholders with your real GitHub data when available.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {resumeData.projects.map((p) => (
            <span key={p.title} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {p.title}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

