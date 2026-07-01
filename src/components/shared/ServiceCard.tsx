'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Card from '@/components/ui/Card';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = (LucideIcons as any)[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors duration-300">
          {IconComponent && <IconComponent className="text-blue-400" size={24} />}
        </div>
        <h3 className="text-xl font-bold font-heading text-white mb-3">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <LucideIcons.Check className="text-emerald-400 mt-0.5 shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
