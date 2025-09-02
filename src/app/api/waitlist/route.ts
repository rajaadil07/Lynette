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
    
    // Use Resend batch API to send both emails efficiently
    const { data, error } = await resend.batch.send([
      {
        from: 'GhostSync <noreply@ghostsync.ai>',
        to: email,
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
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
                  background-color: #1B1B1F;
                  color: #F8F9FA;
                }
                .wrapper {
                  background-color: #1B1B1F;
                  padding: 40px 20px;
                }
                .container {
                  max-width: 560px;
                  margin: 0 auto;
                  background-color: #23232A;
                  border-radius: 16px;
                  overflow: hidden;
                  border: 1px solid rgba(248, 249, 250, 0.08);
                }
                .header {
                  background: linear-gradient(135deg, #5D9CEC 0%, #4A7BC7 100%);
                  padding: 2px;
                }
                .content {
                  padding: 48px 40px;
                }
                h1 {
                  margin: 0 0 32px 0;
                  font-size: 24px;
                  font-weight: 400;
                  color: #F8F9FA;
                  letter-spacing: -0.3px;
                }
                p {
                  margin: 0 0 20px 0;
                  font-size: 16px;
                  line-height: 1.6;
                  color: rgba(248, 249, 250, 0.85);
                }
                .highlight {
                  color: #5D9CEC;
                  font-weight: 500;
                }
                .signature {
                  margin-top: 40px;
                  padding-top: 32px;
                  border-top: 1px solid rgba(248, 249, 250, 0.08);
                }
                .signature p {
                  margin: 0 0 8px 0;
                  color: rgba(248, 249, 250, 0.7);
                }
                .footer {
                  padding: 24px 40px;
                  background-color: rgba(27, 27, 31, 0.5);
                  text-align: center;
                  font-size: 13px;
                  color: rgba(248, 249, 250, 0.4);
                }
                .footer p {
                  margin: 0;
                  font-size: 13px;
                }
              </style>
            </head>
            <body>
              <div class="wrapper">
                <div class="container">
                  <div class="header"></div>
                  <div class="content">
                    <h1>Hey! Welcome to the GhostSync waitlist.</h1>
                    
                    <p>You'll be <span class="highlight">first in line</span> when we launch, and we'll hit you with updates, sneak peeks, and early access perks along the way.</p>
                    
                    <p>We're glad you're here. Big things are ahead.</p>
                    
                    <div class="signature">
                      <p>Stay synced.</p>
                      <p>– Team GhostSync</p>
                    </div>
                  </div>
                  <div class="footer">
                    <p>You're receiving this because you joined the GhostSync waitlist.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      },
      {
        from: 'GhostSync <waitlist@ghostsync.ai>',
        to: 'ghostsync2025@gmail.com',
        subject: `New Waitlist Signup - ${email}`,
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
                  font-family: -apple-system, system-ui, sans-serif;
                  background-color: #f5f5f5;
                  color: #333;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: white;
                  border-radius: 8px;
                  padding: 32px;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h1 {
                  font-size: 20px;
                  font-weight: 600;
                  margin: 0 0 24px 0;
                  color: #1B1B1F;
                }
                .info-row {
                  display: flex;
                  padding: 12px 0;
                  border-bottom: 1px solid #e5e5e5;
                }
                .label {
                  font-weight: 500;
                  color: #666;
                  width: 100px;
                }
                .value {
                  color: #1B1B1F;
                  flex: 1;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>New Waitlist Signup</h1>
                <div class="info-row">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="info-row">
                  <div class="label">Time:</div>
                  <div class="value">${new Date(timestamp).toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}</div>
                </div>
              </div>
            </body>
          </html>
        `,
      }
    ])

    if (error) {
      console.error('Resend batch error:', error)
      throw new Error('Failed to send emails')
    }

    console.log('Emails sent successfully:', data)

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