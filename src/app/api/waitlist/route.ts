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
      console.error('Resend error:', error)
      throw new Error('Failed to send email')
    }

    console.log('Email sent successfully:', data)

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