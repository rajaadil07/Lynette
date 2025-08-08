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
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/20 via-transparent to-transparent backdrop-blur-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="GhostSync" 
              width={120} 
              height={120}
              className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg"
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