import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'search' | 'header' | 'primary' | 'secondary' | 'glass' | 'auth-primary' | 'auth-secondary' | 'hero-cta';
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ 
  variant, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium tracking-wide';
  
  const variantClasses = {
    outline: 'px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white',
    
    search: 'px-6 py-3 rounded-full bg-[#f4f4f4] backdrop-blur-[2px] border border-[rgba(0,0,0,0.1)] text-black hover:border-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.03)] shadow-[0_0_30px_rgba(0,0,0,0.05)] focus:ring-1 focus:ring-black/10 after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_30px_rgba(0,0,0,0.2)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
    
    primary: `
      px-8 py-4 rounded-2xl text-white font-semibold text-sm tracking-wider uppercase
      bg-gradient-to-r from-[#5087FF] via-[#6095FF] to-[#73A5FF]
      hover:from-[#4078EE] hover:via-[#5084EE] hover:to-[#6294EE]
      shadow-[0_8px_32px_rgba(80,135,255,0.3)] hover:shadow-[0_12px_40px_rgba(80,135,255,0.4)]
      border border-white/20 hover:border-white/30
      backdrop-blur-sm
      transform hover:scale-[1.02] hover:-translate-y-0.5
      focus:ring-[#5087FF]/50
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
      after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-black/5 after:to-transparent
    `,
    
    secondary: `
      px-6 py-2.5 rounded-xl text-sm font-medium
      bg-gradient-to-br from-white/95 via-white/85 to-white/90 
      backdrop-blur-[20px] text-gray-900 
      border border-white/60 
      shadow-[0_8px_32px_rgba(255,255,255,0.8),0_1px_6px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] 
      hover:shadow-[0_12px_48px_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]
      hover:bg-gradient-to-br hover:from-white/98 hover:via-white/92 hover:to-white/95
      hover:border-white/80
      transform hover:scale-[1.03] hover:-translate-y-0.5
      focus:ring-white/60
      before:absolute before:inset-0 before:rounded-xl 
      before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-white/10 
      before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
      after:absolute after:top-0 after:left-0 after:right-0 after:h-px 
      after:bg-gradient-to-r after:from-transparent after:via-white/90 after:to-transparent
      after:opacity-80 hover:after:opacity-100 after:transition-opacity after:duration-200
    `,
    
    'auth-primary': `
      px-8 py-3.5 rounded-2xl text-white font-semibold text-sm tracking-wider uppercase
      bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]
      hover:from-[#0a0a0a] hover:via-[#1a1a1a] hover:to-[#0a0a0a]
      shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]
      border border-gray-800/50 hover:border-gray-700/70
      transform hover:scale-[1.02] hover:-translate-y-1
      focus:ring-gray-400/50
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
      after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/5 after:to-transparent after:pointer-events-none
    `,
    
    'auth-secondary': `
      px-7 py-3 rounded-xl text-sm font-medium tracking-wide
      bg-transparent text-gray-700 
      border-2 border-gray-300/60 
      hover:border-gray-400/80 hover:bg-gray-50/50 hover:text-gray-900
      shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]
      transform hover:scale-[1.01] hover:-translate-y-0.5
      focus:ring-gray-400/30 focus:border-gray-400
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200
      after:absolute after:inset-0 after:rounded-xl after:border after:border-white/20 after:pointer-events-none
    `,
    
    'hero-cta': `
      px-10 py-4 rounded-2xl text-white font-semibold text-sm tracking-wider uppercase
      bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]
      hover:from-[#0d0d0d] hover:via-[#1f1f1f] hover:to-[#0d0d0d]
      shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      border border-gray-700/40 hover:border-gray-600/60
      transform hover:scale-[1.03] hover:-translate-y-1.5
      focus:ring-gray-400/50
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-400
      after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/6 after:via-transparent after:to-transparent after:pointer-events-none
    `,
    
    glass: `
      px-6 py-2.5 rounded-xl text-sm font-medium
      bg-white/10 backdrop-blur-xl text-white border border-white/20
      hover:bg-white/20 hover:border-white/30
      shadow-lg hover:shadow-xl
      transform hover:scale-[1.02]
      focus:ring-white/30
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
    `,
    
    header: `
      px-6 py-2.5 rounded-xl text-sm font-medium
      bg-gradient-to-r from-gray-900 to-gray-800 text-white
      hover:from-gray-800 hover:to-gray-700
      border border-gray-700/50 hover:border-gray-600/50
      shadow-sm hover:shadow-md
      transform hover:scale-[1.01]
      focus:ring-gray-500/50
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
    `
  }[variant || 'outline'];
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}; 