'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface OrganizationHeaderProps {
  user?: {
    id: string
    email?: string
    user_metadata?: {
      full_name?: string
      avatar_url?: string
    }
  }
  organization?: {
    id: string
    name: string
    description?: string
  }
  userRole?: string
  currentPath?: string
}

export default function OrganizationHeader({ 
  user, 
  organization, 
  userRole, 
  currentPath 
}: OrganizationHeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const router = useRouter()

  const handleSignOut = async () => {
    // Mock sign out - redirect to login
    router.push('/login')
  }

  const userInitials = user?.user_metadata?.full_name
    ? user.user_metadata.full_name
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
    : user?.email?.[0]?.toUpperCase() || 'U'

  const baseUrl = `/dashboard`

  const navItems = [
    { href: baseUrl, label: 'Dashboard', path: '' },
    { href: `/projects`, label: 'Projects', path: 'projects' },
    { href: `/settings`, label: 'Settings', path: 'settings' }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Organization */}
          <div className="flex items-center">
            <Link href={baseUrl} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 32 32" fill="none">
                  <path 
                    d="M4 10.667C4 7.727 6.727 5.333 10 5.333H22C25.273 5.333 28 7.727 28 10.667V18.667C28 21.607 25.273 24 22 24H12.8L7.2 29.333C6.933 29.6 6.533 29.733 6.133 29.733C5.733 29.733 5.333 29.6 5.067 29.333C4.8 29.067 4.667 28.667 4.667 28.267V25.6C4.4 25.2 4 24.667 4 24V10.667Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <rect x="11" y="13" width="12" height="2" rx="1" fill="url(#gradient1)" opacity="0.8"/>
                  <rect x="12" y="17" width="8" height="2" rx="1" fill="url(#gradient2)" opacity="0.7"/>
                  <defs>
                    <linearGradient id="gradient1" x1="11" y1="14" x2="23" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8EBEFE"/>
                      <stop offset="1" stopColor="#5087FF"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="12" y1="18" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#73A5FF"/>
                      <stop offset="1" stopColor="#6095FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900">
                  {organization?.name || 'Ghostwrite Pro'}
                </div>
                {userRole === 'admin' && (
                  <div className="text-xs text-gray-500">Admin</div>
                )}
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.href} 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPath === item.path
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-3 text-sm rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-medium text-sm">
                {userInitials}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-gray-900 font-medium">
                  {user?.user_metadata?.full_name || 'User'}
                </div>
                <div className="text-gray-500 text-xs">
                  {user?.email || 'user@example.com'}
                </div>
              </div>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-900">
                    {user?.user_metadata?.full_name || 'User'}
                  </div>
                  <div className="text-sm text-gray-500 truncate">
                    {user?.email || 'user@example.com'}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {userRole || 'User'} • {organization?.name || 'Ghostwrite Pro'}
                  </div>
                </div>
                
                <Link
                  href={`/profile`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                
                <Link
                  href={`/preferences`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Preferences
                </Link>
                
                <div className="border-t border-gray-100 mt-1">
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.href} 
              className={`block px-3 py-2 text-sm font-medium ${
                currentPath === item.path
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 