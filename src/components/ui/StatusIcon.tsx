import { ReactNode } from 'react';

interface StatusIconProps {
  type: 'success' | 'error' | 'warning' | 'info' | 'email';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export default function StatusIcon({ type, size = 'md', children }: StatusIconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const typeStyles = {
    success: {
      bg: 'from-green-100 to-emerald-50',
      innerBg: 'from-green-50 to-white',
      iconColor: 'text-green-600',
      glowColor: 'from-green-400/20 to-emerald-400/20'
    },
    error: {
      bg: 'from-red-100 to-rose-50',
      innerBg: 'from-red-50 to-white',
      iconColor: 'text-red-600',
      glowColor: 'from-red-400/20 to-rose-400/20'
    },
    warning: {
      bg: 'from-yellow-100 to-amber-50',
      innerBg: 'from-yellow-50 to-white',
      iconColor: 'text-yellow-600',
      glowColor: 'from-yellow-400/20 to-amber-400/20'
    },
    info: {
      bg: 'from-blue-100 to-sky-50',
      innerBg: 'from-blue-50 to-white',
      iconColor: 'text-blue-600',
      glowColor: 'from-blue-400/20 to-sky-400/20'
    },
    email: {
      bg: 'from-green-100 to-emerald-50',
      innerBg: 'from-green-50 to-white',
      iconColor: 'text-green-600',
      glowColor: 'from-green-400/20 to-emerald-400/20'
    }
  };

  const style = typeStyles[type];

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className={`${iconSizes[size]} ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className={`${iconSizes[size]} ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className={`${iconSizes[size]} ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        );
      case 'info':
        return (
          <svg className={`${iconSizes[size]} ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        );
      case 'email':
        return (
          <svg className={`${iconSizes[size]} ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
            />
          </svg>
        );
      default:
        return children;
    }
  };

  return (
    <div className="text-center">
      <div className={`relative mx-auto ${sizeClasses[size]} mb-8`}>
        {/* Simplified background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${style.bg} rounded-full opacity-60`}></div>
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {getIcon()}
        </div>
      </div>
    </div>
  );
} 