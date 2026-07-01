import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  theme?: 'dark' | 'light';
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  className,
  theme = 'dark',
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  
  return (
    <div className={cn('max-w-3xl', centered ? 'mx-auto text-center' : '', className)}>
      {badge && (
        <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6", 
          isDark ? "bg-white/5 text-blue-400 border border-white/10" : "bg-blue-50 text-blue-600 border border-blue-100"
        )}>
          {badge}
        </div>
      )}
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 tracking-tight", 
        isDark ? "text-white" : "text-navy-950"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg md:text-xl font-light leading-relaxed", 
          isDark ? "text-slate-300" : "text-slate-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
