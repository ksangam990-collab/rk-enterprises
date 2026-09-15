import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-security-950 disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-lg';

  const variants = {
    primary: 'bg-brand-red hover:bg-brand-red-dark text-white shadow-lg shadow-brand-red/20 focus:ring-brand-red border border-brand-red/50 hover:shadow-brand-red/40',
    blue: 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg shadow-brand-blue/20 focus:ring-brand-blue border border-brand-blue/50 hover:shadow-brand-blue/40',
    whatsapp: 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-semibold shadow-lg shadow-[#25D366]/25 focus:ring-[#25D366]',
    outline: 'border border-slate-700 hover:border-slate-500 bg-security-900/60 hover:bg-security-800 text-slate-200 hover:text-white focus:ring-slate-400',
    glass: 'glass-panel hover:bg-slate-800/80 text-white border-white/10 hover:border-white/20 shadow-md focus:ring-brand-blue',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/60 focus:ring-slate-500'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
  };

  const classes = clsx(baseClasses, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
