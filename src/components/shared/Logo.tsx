import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function Logo({ className, variant = 'default' }: LogoProps) {
  const isWhite = variant === 'white';
  
  return (
    <Link href="/" className={cn('inline-flex items-center gap-3 group', className)}>
      <div className={cn(
        "relative flex items-center justify-center rounded-xl border p-1.5 shadow-sm transition-all duration-300",
        isWhite 
          ? "bg-white/10 border-white/20 group-hover:bg-white/20" 
          : "bg-white border-slate-200 group-hover:border-blue-300"
      )}>
        <img
          src="/images/brand/AVIX.png"
          alt="Logo AVIX"
          className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg"
        />
      </div>
      <span className={cn(
        "text-xl md:text-2xl font-bold font-heading tracking-tight",
        isWhite ? "text-white" : "text-navy-950"
      )}>
        AVIX
      </span>
    </Link>
  );
}
