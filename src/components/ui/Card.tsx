'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'relative rounded-2xl p-6 md:p-8',
        'bg-white/[0.03] backdrop-blur-sm',
        'border border-white/[0.06]',
        hover && 'transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1]',
        glow && 'glow-blue',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
