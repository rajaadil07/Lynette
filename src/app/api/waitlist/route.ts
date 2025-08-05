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
      from: 'GhostSync <ghost@ghostsync.ai>',
      to: ['ghost@ghostsync.ai'],
      subject: 'New Waitlist Signup',
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
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                background-color: #1B1B1F;
                color: #F8F9FA;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
              }
              .logo {
                width: 48px;
                height: 48px;
                margin: 0 auto 20px;
                background-color: #5D9CEC;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              h1 {
                font-size: 24px;
                font-weight: 300;
                margin: 0;
                color: #F8F9FA;
              }
              .content {
                background-color: rgba(248, 249, 250, 0.05);
                border: 1px solid rgba(248, 249, 250, 0.1);
                border-radius: 12px;
                padding: 32px;
                margin-bottom: 32px;
              }
              .label {
                font-size: 14px;
                color: rgba(248, 249, 250, 0.6);
                margin-bottom: 8px;
              }
              .value {
                font-size: 18px;
                color: #F8F9FA;
                margin-bottom: 24px;
              }
              .value:last-child {
                margin-bottom: 0;
              }
              .footer {
                text-align: center;
                font-size: 14px;
                color: rgba(248, 249, 250, 0.4);
              }
              .accent {
                color: #5D9CEC;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#F8F9FA" opacity="0.9"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#F8F9FA" stroke-width="1.5" opacity="0.9"/>
                  </svg>
                </div>
                <h1>New Waitlist Signup</h1>
              </div>
              
              <div class="content">
                <div>
                  <div class="label">Email Address</div>
                  <div class="value">${email}</div>
                </div>
                
                <div>
                  <div class="label">Signed Up</div>
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
              </div>
              
              <div class="footer">
                <p>Someone just joined the <span class="accent">GhostSync</span> waitlist.</p>
              </div>
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