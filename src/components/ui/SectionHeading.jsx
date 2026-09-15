import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badgeText,
  badgeVariant = 'red',
  title,
  highlightText,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`space-y-4 mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badgeText && (
        <div className={centered ? 'flex justify-center' : ''}>
          <Badge variant={badgeVariant} dot dotColor={badgeVariant === 'red' ? 'bg-brand-red' : 'bg-brand-blue'}>
            {badgeText}
          </Badge>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
