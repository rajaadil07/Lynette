'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function WaitlistPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isSubmitted && countdown === 0) {
      router.push('/')
    }
  }, [isSubmitted, countdown, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error joining waitlist:', error)
      alert('Sorry, there was an error joining the waitlist. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1B1B1F] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-md relative z-10 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-[#5D9CEC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#5D9CEC]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA] mb-4">
            You&apos;re on the list!
          </h1>
          <p className="text-lg text-[#F8F9FA]/60 mb-4">
            We&apos;ll notify you as soon as GhostSync is ready for early access.
          </p>
          <p className="text-sm text-[#F8F9FA]/40 mb-8">
            Redirecting to homepage in {countdown} seconds...
          </p>
          
          <Link href="/">
            <Button className="bg-[#5D9CEC] hover:bg-[#4D8CDB] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1B1B1F] flex flex-col items-center justify-start px-6 pt-24 md:pt-28 lg:pt-32 pb-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/icon.png" 
              alt="GhostSync" 
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <h1 className="font-inter text-3xl md:text-4xl font-light text-[#F8F9FA] mb-2 tracking-tight">
            Join the waitlist
          </h1>
          <p className="text-[#F8F9FA]/60 text-base font-inter">
            Be the first to know when GhostSync launches
          </p>
        </div>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#F8F9FA]/80 mb-2 font-inter">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D9CEC]/50 focus:border-[#5D9CEC]/50 text-[#F8F9FA] text-base transition-all duration-200 placeholder-[#F8F9FA]/30 font-inter"
              placeholder="you@company.com"
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#5D9CEC] hover:bg-[#4D8CDB] disabled:bg-[#5D9CEC]/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 text-base shadow-lg hover:shadow-xl font-inter"
          >
            {isLoading ? 'Joining...' : 'Join waitlist'}
          </button>
        </form>

        {/* Benefits */}
        <div className="bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 rounded-lg p-6 mb-6">
          <h3 className="text-sm font-medium text-[#F8F9FA] mb-3">What to expect:</h3>
          <ul className="space-y-2 text-sm text-[#F8F9FA]/70">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#5D9CEC] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Early access to GhostSync beta
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#5D9CEC] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Exclusive launch pricing
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#5D9CEC] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Direct input on features
            </li>
          </ul>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-[#F8F9FA]/60 mb-6 font-inter">
          Already have an account?{' '}
          <Link href="/login" className="text-[#5D9CEC] hover:text-[#4D8CDB] font-medium transition-colors duration-200">
            Sign in
          </Link>
        </p>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-[#F8F9FA]/40 font-inter">
            By joining, you agree to our{' '}
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
  )
} 