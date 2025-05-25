'use client'

import Link from 'next/link'
import MessageLogo from '../logo/MessageLogo'
import { usePathname } from 'next/navigation'

export default function PublicHeader() {
  const pathname = usePathname()
  
  // Hide header on organization, workspace, and onboarding routes
  if (pathname.startsWith('/org/') || pathname.startsWith('/workspace') || pathname.startsWith('/onboarding')) {
    return null
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <MessageLogo />

          {/* Ultra-Modern Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="group relative overflow-hidden px-7 py-3 text-sm tracking-wide text-gray-900 bg-white/20 backdrop-blur-2xl border border-white/40 rounded-xl hover:bg-white/30 hover:border-white/60 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 drop-shadow-sm">Login</span>
              {/* Crisp top highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
              {/* Clean bottom border */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              {/* Subtle side gradients */}
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            </Link>
            <Link
              href="/signup"
              className="group relative overflow-hidden px-7 py-3 text-sm tracking-wide text-white bg-gray-900/95 backdrop-blur-2xl border border-gray-600/50 rounded-xl hover:bg-black hover:border-gray-500/60 transition-all duration-400 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 drop-shadow-sm">Sign Up</span>
              {/* Premium top edge */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400/60 to-transparent"></div>
              {/* Refined bottom accent */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700/80 to-transparent"></div>
              {/* Elegant side borders */}
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-gray-500/50 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-500/50 to-transparent"></div>
              {/* Ambient glow */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-gray-600/10 via-gray-400/20 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm -z-10"></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 