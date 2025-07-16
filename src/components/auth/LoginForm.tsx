'use client'

import Link from 'next/link';

interface LoginFormProps {
  onSubmit: (formData: FormData) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <div className="min-h-screen bg-[#1B1B1F] flex flex-col items-center justify-start px-6 pt-40 md:pt-48 lg:pt-52 pb-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-inter text-3xl md:text-4xl font-light text-[#F8F9FA] mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-[#F8F9FA]/60 text-base font-inter">
            Continue where you left off
          </p>
        </div>

        {/* Login Form */}
        <form action={onSubmit} className="space-y-5 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#F8F9FA]/80 mb-2 font-inter">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D9CEC]/50 focus:border-[#5D9CEC]/50 text-[#F8F9FA] text-base transition-all duration-200 placeholder-[#F8F9FA]/30 font-inter"
              placeholder="you@company.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#F8F9FA]/80 mb-2 font-inter">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D9CEC]/50 focus:border-[#5D9CEC]/50 text-[#F8F9FA] text-base transition-all duration-200 placeholder-[#F8F9FA]/30 font-inter"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-[#5D9CEC] hover:bg-[#4D8CDB] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 text-base shadow-lg hover:shadow-xl font-inter"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-[#F8F9FA]/60 mb-6 font-inter">
          Want early access?{' '}
          <Link href="/waitlist" className="text-[#5D9CEC] hover:text-[#4D8CDB] font-medium transition-colors duration-200">
            Join our waitlist
          </Link>
        </p>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#F8F9FA]/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-[#1B1B1F] text-[#F8F9FA]/40 font-inter">or continue with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-8">
          <button className="w-full flex items-center justify-center px-4 py-3 bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg hover:bg-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-200 group">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#F8F9FA" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#F8F9FA" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#F8F9FA" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#F8F9FA" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-[#F8F9FA]/80 font-medium text-sm font-inter">Continue with Google</span>
          </button>

          <button className="w-full flex items-center justify-center px-4 py-3 bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg hover:bg-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-200 group">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
              <path d="M11.5 2v9.5H2V2h9.5Zm0 20v-9.5H2V22h9.5ZM22 2v9.5h-9.5V2H22Zm0 20v-9.5h-9.5V22H22Z" fill="#F8F9FA"/>
            </svg>
            <span className="text-[#F8F9FA]/80 font-medium text-sm font-inter">Continue with Microsoft</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-[#F8F9FA]/40 font-inter">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-[#F8F9FA]/60 hover:text-[#F8F9FA]/80 transition-colors">
              Terms
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-[#F8F9FA]/60 hover:text-[#F8F9FA]/80 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}