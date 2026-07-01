'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden">
        <div className="aspect-video bg-navy-800 rounded-xl mb-4 overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              <span className="text-sm">Aperçu à venir</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Badge>{item.sector}</Badge>
          <Badge variant="success">{item.service}</Badge>
        </div>
        <h3 className="text-lg font-bold font-heading text-white mb-1">{item.title}</h3>
        <div className="flex items-center gap-1 text-sm text-slate-400 mb-3">
          <MapPin size={14} />
          <span>{item.city}</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Voir le projet <ExternalLink size={14} />
          </a>
        )}
      </Card>
    </motion.div>
  );
}
