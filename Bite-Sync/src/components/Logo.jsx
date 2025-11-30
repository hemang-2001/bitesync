import React from 'react';
import { cn } from '@/lib/utils';

const Logo = ({ className, showText = true, textClassName }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative overflow-hidden rounded-xl shadow-sm border border-border/50 w-10 h-10 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1551410224-699683e15636?auto=format&fit=crop&w=100&q=80" 
          alt="BiteSync Logo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>
      {showText && (
        <h1 className={cn("font-serif text-xl font-bold tracking-tight text-foreground", textClassName)}>
          BiteSync
        </h1>
      )}
    </div>
  );
};

export default Logo;
