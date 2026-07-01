'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FaqItem as FaqItemType } from '@/types';

interface FaqItemProps {
  item: FaqItemType;
  index: number;
}

export default function FaqItem({ item, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            'text-slate-400 shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180 text-blue-400'
          )}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-400 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
