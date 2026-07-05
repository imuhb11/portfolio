import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionShellProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
};

export function SectionShell({ id, title, eyebrow, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn('relative px-6 py-24 sm:px-10 lg:px-16', className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          {eyebrow ? <p className="text-sm uppercase tracking-[0.35em] text-violet-300">{eyebrow}</p> : null}
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
