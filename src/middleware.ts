import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define exact public routes
const exactPublicRoutes = [
  '/',
  '/login',
  '/signup',
  '/waitlist',
  '/terms',
  '/privacy',
  '/about',
  '/contact',
  '/faq',
  '/error',
  '/verify-email'
]

// Define public route patterns (for routes with dynamic segments)
const publicRoutePatterns = [
  '/blog',
  '/api/waitlist',
  '/api/contact'
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

  // Check if the current path is an exact public route
  const isExactPublicRoute = exactPublicRoutes.includes(pathname)
  
  // Check if the current path matches any public route pattern
  const isPublicRoutePattern = publicRoutePatterns.some(pattern => 
    pathname.startsWith(pattern)
  )
  
  // Combine both checks
  const isPublicRoute = isExactPublicRoute || isPublicRoutePattern

  // Check if the current path matches any protected route pattern
  const isProtectedRoute = protectedRoutePatterns.some(pattern => 
    pathname.startsWith(pattern)
  )

  // Allow public routes and static files
  if (isPublicRoute || pathname.includes('/_next') || pathname.includes('/static') || pathname.includes('.')) {
    return NextResponse.next()
  }

  // For protected routes, check for mock authentication
  if (isProtectedRoute) {
    // Check for mock auth cookie
    const mockAuth = request.cookies.get('mock-auth')
    
    // If mock auth cookie exists and is valid, allow access
    if (mockAuth?.value === 'authenticated') {
      return NextResponse.next()
    }
    
    // Otherwise redirect to login
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