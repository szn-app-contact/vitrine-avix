import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'promo';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    promo: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-semibold border rounded-full', variants[variant], className)}>
      {children}
    </span>
  );
}
