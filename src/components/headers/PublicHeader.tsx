'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

export default function PublicHeader() {
  const pathname = usePathname()
  
  // Hide header on organization, workspace, and onboarding routes
  if (pathname.startsWith('/org/') || pathname.startsWith('/workspace') || pathname.startsWith('/onboarding')) {
    return null
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32 md:h-40 lg:h-44">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="GhostSync" 
              width={420} 
              height={140}
              className="h-24 md:h-32 lg:h-36 w-auto"
              priority
            />
          </Link>

          {/* Clean Modern Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="auth-secondary">
                Login
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button variant="auth-primary">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 