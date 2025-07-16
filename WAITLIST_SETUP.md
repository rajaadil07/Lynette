# Waitlist Email Setup Guide

## Quick Setup (Recommended - Using Resend)

1. **Sign up for Resend (Free)**
   - Go to https://resend.com/signup
   - Create a free account (no credit card required)
   - You get 100 emails/day for free

2. **Get your API Key**
   - After signing in, go to https://resend.com/api-keys
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Add to your environment**
   - Create a `.env.local` file in the frontend directory
   - Add: `RESEND_API_KEY=re_YOUR_API_KEY_HERE`

4. **That's it!** 
   - All waitlist signups will be emailed to raja@funeralhq.com
   - Each email includes: email address, timestamp, user agent, and IP

## Alternative Options

### Option 2: SendGrid
```env
SENDGRID_API_KEY=SG.YOUR_API_KEY_HERE
```
Then update the API route to use SendGrid's API.

### Option 3: Development Mode (No Email Service)
If you just want to test without setting up an email service:
- Leave RESEND_API_KEY undefined
- Signups will be logged to the console
- Check your terminal where you run `npm run dev`

## Testing
1. Run `npm run dev`
2. Go to http://localhost:3000/waitlist
3. Enter an email and submit
4. Check raja@funeralhq.com for the notification

## Email Format
Each waitlist signup sends an email like:
```
Subject: New Waitlist Signup: user@example.com

New GhostSync Waitlist Signup

Email: user@example.com
Timestamp: 2024-01-15T10:30:00.000Z
User Agent: Mozilla/5.0...
IP: 192.168.1.1
```

## Troubleshooting
- If emails aren't sending, check your API key is correct
- Check the browser console and server logs for errors
- Resend requires email verification for custom domains
- For production, consider adding rate limiting