export const GMAIL_CONFIG = {
  client_id: process.env.NEXT_PUBLIC_GMAIL_CLIENT_ID!,
  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/gmail`,
  scope: [
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ].join(' '),
  response_type: 'code',
  access_type: 'offline',
  prompt: 'select_account consent',
  include_granted_scopes: 'true',
  state: btoa(Math.random().toString(36) + Date.now().toString(36)),
  ...(typeof window !== 'undefined' && localStorage.getItem('gmail_login_hint') 
    ? { login_hint: localStorage.getItem('gmail_login_hint') }
    : {}),
  hd: '*'
}

export const MICROSOFT_CONFIG = {
  client_id: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID!,
  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/microsoft`,
  scope: [
    'openid',
    'profile',
    'email',
    'offline_access',
    'https://graph.microsoft.com/mail.send',
    'https://graph.microsoft.com/mail.readwrite'
  ].join(' '),
  response_type: 'code',
  response_mode: 'query'
}

export function getGmailAuthUrl() {
  if (!process.env.NEXT_PUBLIC_APP_URL) {
    throw new Error('NEXT_PUBLIC_APP_URL environment variable is not configured')
  }

  const params = new URLSearchParams()
  Object.entries(GMAIL_CONFIG).forEach(([key, value]) => {
    if (value) params.append(key, value)
  })

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

export function getMicrosoftAuthUrl() {
  const params = new URLSearchParams({
    client_id: MICROSOFT_CONFIG.client_id,
    redirect_uri: MICROSOFT_CONFIG.redirect_uri,
    scope: MICROSOFT_CONFIG.scope,
    response_type: MICROSOFT_CONFIG.response_type,
    response_mode: MICROSOFT_CONFIG.response_mode
  })

  return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`
} 