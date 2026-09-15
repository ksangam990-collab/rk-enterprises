import React from 'react';
import clsx from 'clsx';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
  dotColor = 'bg-brand-red'
}) {
  const baseClasses = 'inline-flex items-center font-medium tracking-wide uppercase rounded-full border';

  const variants = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
    red: 'bg-brand-red/10 text-brand-red-light border-brand-red/30',
    blue: 'bg-brand-blue/10 text-brand-blue-light border-brand-blue/30',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-2',
    lg: 'text-xs px-3 py-1.5 gap-2',
  };

  return (
    <span className={clsx(baseClasses, variants[variant], sizes[size], className)}>
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColor)} />
      )}
      <span>{children}</span>
    </span>
  );
}
