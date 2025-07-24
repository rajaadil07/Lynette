'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Product: [
    { name: 'Features', href: '/#features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' }
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1B1B1F] border-t border-[#F8F9FA]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo and tagline */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="GhostSync" 
                  width={200} 
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              <p className="mt-4 text-base text-[#F8F9FA]/60 max-w-md font-inter leading-relaxed">
                Onboarding software made by ghostwriters specifically for ghostwriters. Manage projects, collaborate with clients, and enhance your business.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://twitter.com/ghostsync"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-[#F8F9FA]/5 flex items-center justify-center hover:bg-[#F8F9FA]/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#F8F9FA]/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/ghostsync"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#F8F9FA]/5 flex items-center justify-center hover:bg-[#F8F9FA]/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#F8F9FA]/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-[#F8F9FA] uppercase tracking-wider font-inter">
                      {category}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-base text-[#F8F9FA]/60 hover:text-[#F8F9FA] transition-colors font-inter"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F8F9FA]/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#F8F9FA]/40 font-inter">
              © {new Date().getFullYear()} GhostSync. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#F8F9FA]/40 hover:text-[#F8F9FA]/60 transition-colors font-inter">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-[#F8F9FA]/40 hover:text-[#F8F9FA]/60 transition-colors font-inter">
                Terms
              </Link>
              <Link href="/sitemap" className="text-sm text-[#F8F9FA]/40 hover:text-[#F8F9FA]/60 transition-colors font-inter">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}