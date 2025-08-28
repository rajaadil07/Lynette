import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    
    // Send welcome email to the user
    const { data: welcomeData, error: welcomeError } = await resend.emails.send({
      from: 'GhostSync <noreply@ghostsync.ai>',
      to: [email],
      subject: "You're in.",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background-color: #1B1B1F;
                color: #F8F9FA;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .content {
                background-color: #242429;
                border-radius: 12px;
                padding: 40px;
                border: 1px solid rgba(248, 249, 250, 0.1);
              }
              h1 {
                font-size: 28px;
                font-weight: 600;
                margin: 0 0 24px 0;
                color: #F8F9FA;
                line-height: 1.2;
              }
              p {
                font-size: 16px;
                line-height: 1.6;
                margin: 0 0 16px 0;
                color: rgba(248, 249, 250, 0.8);
              }
              .signature {
                margin-top: 32px;
                padding-top: 24px;
                border-top: 1px solid rgba(248, 249, 250, 0.1);
              }
              .signature p {
                margin: 4px 0;
                color: rgba(248, 249, 250, 0.6);
              }
              .logo {
                width: 40px;
                height: 40px;
                margin-bottom: 24px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="content">
                <h1>You're in.</h1>
                
                <p>Hey! Welcome to the GhostSync waitlist.</p>
                
                <p>You'll be first in line when we launch, and we'll hit you with updates, sneak peeks, and early access perks along the way.</p>
                
                <p>We're glad you're here. Big things are ahead.</p>
                
                <div class="signature">
                  <p>Stay synced.</p>
                  <p>– Team GhostSync</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (welcomeError) {
      console.error('Welcome email error:', welcomeError)
      // Don't throw error here, continue to send admin notification
    } else {
      console.log('Welcome email sent successfully:', welcomeData)
    }

    // Send notification email to admin
    const { data, error } = await resend.emails.send({
      from: 'GhostSync <waitlist@ghostsync.ai>',
      to: ['ghostsync2025@gmail.com'],
      subject: 'New Waitlist Signup - GhostSync',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 20px;
                font-family: Arial, sans-serif;
                background-color: #ffffff;
                color: #000000;
                line-height: 1.6;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
              }
              h1 {
                font-size: 24px;
                font-weight: bold;
                margin: 0 0 20px 0;
                color: #000000;
              }
              .info {
                margin: 20px 0;
              }
              .label {
                font-weight: bold;
                color: #000000;
                margin-bottom: 5px;
              }
              .value {
                color: #000000;
                margin-bottom: 15px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>New Waitlist Signup</h1>
              
              <div class="info">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
                
                <div class="label">Time:</div>
                <div class="value">${new Date(timestamp).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</div>
              </div>
              
              <p>Someone just joined the GhostSync waitlist.</p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Admin notification error:', error)
      // If admin notification fails but welcome email succeeded, still return success
      if (!welcomeError) {
        return NextResponse.json(
          { message: 'Successfully joined waitlist' },
          { status: 200 }
        )
      }
      throw new Error('Failed to send emails')
    }

    console.log('Admin notification sent successfully:', data)

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