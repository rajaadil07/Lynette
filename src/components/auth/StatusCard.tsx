'use client'

import Link from 'next/link';
import { StatusIcon, Divider } from '../ui';

interface StatusCardProps {
  type: 'success' | 'error' | 'warning' | 'info' | 'email';
  title: string;
  description: string;
  email?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  helpText?: string;
  helpLink?: {
    label: string;
    href: string;
  };
  showFooter?: boolean;
}

export default function StatusCard({
  type,
  title,
  description,
  email,
  primaryAction,
  secondaryAction,
  helpText,
  helpLink,
  showFooter = true
}: StatusCardProps) {
  const renderAction = (action: StatusCardProps['primaryAction'], isPrimary = true) => {
    if (!action) return null;

    const baseClasses = isPrimary
      ? "w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md"
      : "w-full text-gray-500 hover:text-gray-700 font-medium py-2 transition-all duration-200 text-sm underline underline-offset-2";

    if (action.href) {
      return (
        <Link href={action.href} className={`${baseClasses} text-center block`}>
          {action.label}
        </Link>
      );
    }

    if (action.onClick) {
      return (
        <button onClick={action.onClick} className={baseClasses}>
          {action.label}
        </button>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-6">
      <div className="w-full max-w-sm">
        {/* Status Icon */}
        <StatusIcon type={type} size="lg" />

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">{title}</h1>
          <div className="space-y-4">
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
              {description}
            </p>
            {email && (
              <p className="text-gray-500 text-sm font-medium bg-gray-50 px-4 py-2 rounded-lg border">
                {email}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {(primaryAction || secondaryAction) && (
          <div className="space-y-4 mb-12">
            {renderAction(primaryAction, true)}
            {renderAction(secondaryAction, false)}
          </div>
        )}

        {/* Help Section */}
        {(helpText || helpLink) && (
          <>
            <Divider text="Need help?" />
            <div className="text-center mb-6">
              {helpText && (
                <p className="text-gray-500 text-sm font-light mb-3">
                  {helpText}
                </p>
              )}
              {helpLink && (
                <Link 
                  href={helpLink.href} 
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 underline underline-offset-2"
                >
                  {helpLink.label}
                </Link>
              )}
            </div>
          </>
        )}

        {/* Footer */}
        {showFooter && (
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
              <Link href="/terms" className="hover:text-gray-600 transition-colors duration-200 font-light">Terms</Link>
              <Link href="/privacy" className="hover:text-gray-600 transition-colors duration-200 font-light">Privacy</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 