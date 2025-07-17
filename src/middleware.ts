import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/waitlist',
  '/terms',
  '/privacy',
  '/about',
  '/contact',
  '/faq',
  '/api/waitlist',
  '/api/contact',
  '/error',
  '/verify-email'
]

// Define protected route patterns
const protectedRoutePatterns = [
  '/dashboard',
  '/onboarding',
  '/projects',
  '/settings',
  '/api/projects',
  '/api/user',
  '/api/onboarding'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route
  )

  // Check if the current path matches any protected route pattern
  const isProtectedRoute = protectedRoutePatterns.some(pattern => 
    pathname.startsWith(pattern)
  )

  // Allow public routes and static files
  if (isPublicRoute || pathname.includes('/_next') || pathname.includes('/static') || pathname.includes('.')) {
    return NextResponse.next()
  }

  // For protected routes, redirect to login
  if (isProtectedRoute) {
    // In production, you would check for a valid session/token here
    // For now, we'll always redirect to login
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Default: redirect any other routes to home
  return NextResponse.redirect(new URL('/', request.url))
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|images|fonts|icon.png).*)',
  ],
}