'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  // Mock login - in a real app you'd validate credentials
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Simple validation
  if (!email || !password) {
    redirect('/error?message=' + encodeURIComponent('Please provide both email and password'))
  }

  // Mock successful login - redirect to onboarding
  revalidatePath('/', 'layout')
  redirect('/onboarding')
} 