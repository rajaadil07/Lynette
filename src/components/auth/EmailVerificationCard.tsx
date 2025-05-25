'use client'

import Link from 'next/link';
import StatusIcon from '../ui/StatusIcon';

interface EmailVerificationCardProps {
  email?: string;
  onResendEmail?: () => void;
}

export default function EmailVerificationCard({ email, onResendEmail }: EmailVerificationCardProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-6">
      <div className="w-full max-w-sm">
        {/* Enhanced Email Icon with Animation */}
        <StatusIcon type="email" size="lg" animated />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">Check your email</h1>
          <div className="space-y-3">
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              We've sent you a verification link to complete your registration.
            </p>
            {email && (
              <p className="text-gray-500 text-sm font-medium bg-gray-50 px-4 py-2 rounded-lg border">
                {email}
              </p>
            )}
            <p className="text-gray-400 text-xs font-light">
              Don't see the email? Check your spam folder or try again.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <Link
            href="/login"
            className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md text-center"
          >
            BACK TO LOGIN
          </Link>
          
          {onResendEmail && (
            <button
              onClick={onResendEmail}
              className="w-full bg-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 text-sm"
            >
              Resend verification email
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-400 font-light">Need help?</span>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm font-light mb-3">
            Having trouble? Contact our support team
          </p>
          <Link 
            href="/support" 
            className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 underline underline-offset-2"
          >
            Get help
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
            <Link href="/terms" className="hover:text-gray-600 transition-colors duration-200 font-light">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors duration-200 font-light">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 