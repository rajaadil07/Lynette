import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Get current timestamp
    const timestamp = new Date().toISOString()
    
    // Format the email content
    const emailContent = `
      New GhostSync Waitlist Signup
      
      Email: ${email}
      Timestamp: ${timestamp}
      User Agent: ${request.headers.get('user-agent') || 'Unknown'}
      IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
    `.trim()

    // For the simplest solution, we'll use a service like Resend, SendGrid, or Mailgun
    // Since you want it AS easy as possible, I'll use the free tier of Resend
    // You'll need to sign up at https://resend.com and get an API key
    
    // Option 1: Using Resend (recommended - very simple)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'GhostSync Waitlist <onboarding@resend.dev>',
          to: 'raja@funeralhq.com',
          subject: `New Waitlist Signup: ${email}`,
          text: emailContent,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
    } else {
      // Fallback: Log to console (for development)
      console.log('📧 New Waitlist Signup:', { email, timestamp })
      console.log(emailContent)
      
      // You could also append to a local file in development
      // But for production, you'll want to use a proper email service
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}