'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row"
        >
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} Bhumi Vijaykumar Hingu. Crafted with care.</p>
          <div className="flex items-center gap-3 text-sm">
            {['Privacy', 'Terms', 'Contact'].map((x) => (
              <a key={x} href={x === 'Contact' ? '#contact' : '#'} className="text-slate-400 hover:text-violet-200 transition">
                {x}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

