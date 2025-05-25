'use client'

import Link from 'next/link';

interface LoginFormProps {
  onSubmit: (formData: FormData) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-6">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-light text-gray-900 mb-1 tracking-tight">Welcome back</h1>
          <p className="text-gray-500 text-sm font-light">Continue your journey</p>
        </div>

        {/* Login Form */}
        <form action={onSubmit} className="space-y-4 mb-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 text-gray-900 text-sm transition-all duration-200 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-300 text-gray-900 text-sm transition-all duration-200 placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md"
          >
            SIGN IN
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500 mb-5 font-light">
          Don't have an account?{' '}
          <Link href="/signup" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
            Create one
          </Link>
        </p>

        {/* Divider */}
        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-400 font-light">or</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-2.5 mb-6">
          <button className="w-full flex items-center justify-center px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow group">
            <svg className="w-4 h-4 mr-2.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium text-sm">Continue with Google</span>
          </button>

          <button className="w-full flex items-center justify-center px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow group">
            <img src="/microsoft.png" alt="Microsoft" className="w-4 h-4 mr-2.5" />
            <span className="text-gray-700 font-medium text-sm">Continue with Microsoft</span>
          </button>
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