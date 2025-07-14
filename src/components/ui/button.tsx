import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'search' | 'header' | 'primary' | 'secondary' | 'glass' | 'auth-primary' | 'auth-secondary' | 'hero-cta' | 'accent';
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-inter font-medium tracking-wide';
  
  const variantClasses = {
    // Primary CTA using brand blue (#5D9CEC)
    primary: `
      px-8 py-4 rounded-2xl text-white font-semibold text-sm tracking-wider uppercase
      bg-[#5D9CEC] hover:bg-[#4A8BE8] active:bg-[#3B7BE0]
      shadow-[0_8px_32px_rgba(93,156,236,0.3)] hover:shadow-[0_12px_40px_rgba(93,156,236,0.4)]
      border border-[#5D9CEC]/20 hover:border-[#5D9CEC]/40
      transform hover:scale-[1.02] hover:-translate-y-0.5
      focus:ring-[#5D9CEC]/50
      before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
    `,
    
    // Hero CTA - Premium professional with subtle depth
    'hero-cta': `
      px-8 py-3.5 rounded-xl text-white font-medium text-sm tracking-wide
      bg-[#5D9CEC] hover:bg-[#4A8BE8] active:bg-[#3B7BE0]
      shadow-[0_4px_16px_rgba(93,156,236,0.3)] hover:shadow-[0_6px_24px_rgba(93,156,236,0.4)]
      border border-[#5D9CEC]/20 hover:border-[#4A8BE8]/30
      transform hover:-translate-y-0.5
      transition-all duration-200 ease-out
      focus:ring-2 focus:ring-[#5D9CEC]/40 focus:ring-offset-2 focus:ring-offset-brand-dark
      backdrop-blur-sm
      relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
      before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-600
    `,
    
    // Accent button using brand yellow (#FBC02D)
    accent: `
      px-8 py-4 rounded-2xl text-[#1B1B1F] font-semibold text-sm tracking-wider uppercase
      bg-[#FBC02D] hover:bg-[#F9B700] active:bg-[#E6A600]
      shadow-[0_8px_32px_rgba(251,192,45,0.3)] hover:shadow-[0_12px_40px_rgba(251,192,45,0.4)]
      border border-[#FBC02D]/20 hover:border-[#FBC02D]/40
      transform hover:scale-[1.02] hover:-translate-y-0.5
      focus:ring-[#FBC02D]/50
      before:absolute before:inset-0 before:rounded-2xl before:bg-black/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
    `,
    
    // Secondary using brand gray (#3C3C44)
    secondary: `
      px-6 py-3 rounded-xl text-sm font-medium
      bg-[#3C3C44] hover:bg-[#4A4A52] active:bg-[#2E2E34]
      text-[#F8F9FA] 
      border border-[#3C3C44]/60 hover:border-[#3C3C44]/80
      shadow-[0_4px_16px_rgba(60,60,68,0.2)] hover:shadow-[0_8px_24px_rgba(60,60,68,0.3)]
      transform hover:scale-[1.01] hover:-translate-y-0.5
      focus:ring-[#3C3C44]/50
      before:absolute before:inset-0 before:rounded-xl before:bg-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
    `,
    
    // Professional outline for secondary actions
    outline: `
      px-6 py-3 rounded-xl text-[#F8F9FA] font-medium text-sm tracking-wide
      bg-transparent hover:bg-white/5 active:bg-white/10
      border border-[#F8F9FA]/20 hover:border-[#F8F9FA]/40
      shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]
      transform hover:-translate-y-0.5
      transition-all duration-200 ease-out
      focus:ring-2 focus:ring-[#F8F9FA]/30 focus:ring-offset-2 focus:ring-offset-brand-dark
      backdrop-blur-sm
    `,
    
    // Auth primary - Clean professional blue
    'auth-primary': `
      px-6 py-2.5 rounded-lg text-white font-medium text-sm
      bg-[#5D9CEC] hover:bg-[#4A8BE8] active:bg-[#3B7BE0]
      shadow-[0_2px_8px_rgba(93,156,236,0.25)] hover:shadow-[0_4px_12px_rgba(93,156,236,0.35)]
      border border-[#5D9CEC]/20 hover:border-[#4A8BE8]/30
      transition-all duration-200 ease-out
      focus:ring-2 focus:ring-[#5D9CEC]/40 focus:ring-offset-2 focus:ring-offset-brand-dark
    `,
    
    // Auth secondary - Elegant minimal
    'auth-secondary': `
      px-6 py-2.5 rounded-lg text-[#F8F9FA] font-medium text-sm
      bg-transparent hover:bg-white/5 active:bg-white/10
      border border-[#F8F9FA]/20 hover:border-[#F8F9FA]/30
      shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]
      transition-all duration-200 ease-out
      focus:ring-2 focus:ring-[#F8F9FA]/30 focus:ring-offset-2 focus:ring-offset-brand-dark
    `,
    
    // Search variant
    search: `
      px-6 py-3 rounded-full font-medium
      bg-[#3C3C44]/20 backdrop-blur-sm border border-[#3C3C44]/30 
      text-[#F8F9FA] hover:border-[#3C3C44]/50 hover:bg-[#3C3C44]/30
      shadow-[0_4px_20px_rgba(60,60,68,0.1)] hover:shadow-[0_8px_30px_rgba(60,60,68,0.2)]
      focus:ring-[#5D9CEC]/50
      before:absolute before:inset-0 before:rounded-full before:bg-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
    `,
    
    // Glass effect using brand colors
    glass: `
      px-6 py-2.5 rounded-xl text-sm font-medium
      bg-[#1B1B1F]/80 backdrop-blur-xl text-[#F8F9FA] border border-[#F8F9FA]/20
      hover:bg-[#1B1B1F]/90 hover:border-[#F8F9FA]/30
      shadow-lg hover:shadow-xl
      transform hover:scale-[1.02]
      focus:ring-[#5D9CEC]/30
      before:absolute before:inset-0 before:rounded-xl before:bg-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
    `,
    
    // Header variant
    header: `
      px-6 py-2.5 rounded-xl text-sm font-medium
      bg-[#5D9CEC] hover:bg-[#4A8BE8] active:bg-[#3B7BE0]
      text-white
      border border-[#5D9CEC]/30 hover:border-[#5D9CEC]/50
      shadow-sm hover:shadow-md
      transform hover:scale-[1.01]
      focus:ring-[#5D9CEC]/50
      before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
    `
  }[variant];
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}; 