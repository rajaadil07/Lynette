'use server'

import { cookies } from 'next/headers'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Simple validation
  if (!email || !password) {
    return { error: 'Please provide both email and password' }
  }

  // Mock credentials that always work
  if (email === 'ghost@ghostsync.ai' && password === 'ghostpassword!$') {
    // Set a mock authentication cookie
    const cookieStore = await cookies()
    cookieStore.set('mock-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })
    
    // Return success so client can handle the redirect with animation
    return { success: true }
  }

  // For any other credentials, return invalid
  return { error: 'Invalid credentials. Please try again.' }
} 