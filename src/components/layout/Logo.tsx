'use client';

import Link from 'next/link';
import { useState } from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const logoSrc =
    variant === 'white'
      ? '/images/brand/logo-avix-white.svg'
      : '/images/brand/logo-avix.svg';

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {!imgError ? (
        <img
          src={logoSrc}
          alt="AVIX"
          className="h-8 md:h-10 w-auto"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-2xl md:text-3xl font-bold tracking-tight font-heading">
          <span className="text-white">AV</span>
          <span className="gradient-text">IX</span>
        </span>
      )}
    </Link>
  );
}
