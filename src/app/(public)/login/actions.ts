'use server'


export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Simple validation
  if (!email || !password) {
    return { error: 'Please provide both email and password' }
  }

  // For now, always return invalid credentials
  // In production, this would check against a database
  return { error: 'Invalid credentials. Please try again.' }
} 