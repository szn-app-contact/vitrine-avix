import { cn } from '@/lib/utils';

interface GlowEffectProps {
  className?: string;
  color?: 'blue' | 'cyan' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
}

export default function GlowEffect({ className, color = 'blue', size = 'md' }: GlowEffectProps) {
  const colors = {
    blue: 'bg-blue-500/20',
    cyan: 'bg-cyan-500/20',
    emerald: 'bg-emerald-500/20',
  };

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl opacity-30 pointer-events-none',
        colors[color],
        sizes[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
