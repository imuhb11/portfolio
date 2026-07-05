'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/section-shell';
import { resumeData } from '@/lib/resume';
import { Mail, MapPin, Phone, Github, Linkedin, AtSign } from 'lucide-react';

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let’s build something premium">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">Name</span>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-400/40" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Email</span>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-400/40" placeholder="you@example.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-slate-300">Message</span>
            <textarea className="mt-2 min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-400/40" placeholder="Tell me about your project..." />
          </label>

          <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_80px_rgba(124,58,237,0.35)] transition hover:scale-[1.01]">
            <AtSign size={16} /> Send Message
          </button>

          <p className="text-xs text-slate-500">
            EmailJS integration placeholder. Wire your EmailJS keys to enable actual sending.
          </p>
        </motion.form>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Direct</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-violet-200" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-slate-300">{resumeData.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-violet-200" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-slate-300">{resumeData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-violet-200" />
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-sm text-slate-300">{resumeData.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Social</p>
            <div className="mt-4 flex flex-col gap-3">
              {resumeData.contact.socials.map((s) => {
                const Icon = s.label === 'GitHub' ? Github : s.label === 'LinkedIn' ? Linkedin : Mail;
                return (
                  <a key={s.label} href={s.href} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:border-violet-400/40 transition">
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4 text-violet-200" />
                      {s.label}
                    </span>
                    <span className="text-slate-500 group-hover:text-violet-200">→</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

