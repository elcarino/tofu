import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = false }: GlassCardProps) {
  return (
    <div 
      className={`glass-panel border-t-white/20 p-6 ${
        hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.15)] hover:border-glow-blue-300/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
