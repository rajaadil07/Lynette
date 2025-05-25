# Supabase Authentication Setup

This project includes a complete Supabase authentication system with modern Next.js App Router patterns and SSR support.

## Quick Start

### 1. Environment Variables

Create a `.env.local` file in the root of your frontend project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project dashboard:
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings > API
4. Copy the Project URL and anon/public key

### 2. Supabase Project Setup

In your Supabase project, you need to configure:

1. **Authentication Settings** (Authentication > Settings):
   - Enable email authentication
   - Configure site URL: `http://localhost:3000` (for development)
   - Add any additional redirect URLs for production

2. **Email Templates** (optional):
   - Customize the confirmation email template
   - Configure SMTP settings for production

### 3. Run the Development Server

```bash
npm run dev
```

Navigate to:
- `/login` - Login page
- `/signup` - Signup page  
- `/workspace` - Protected workspace overview (requires authentication)

## Architecture

### File Structure

```
src/
├── components/
│   ├── Header.tsx           # Professional header with navigation
│   └── WorkspaceLayout.tsx  # Layout wrapper for authenticated pages
├── utils/supabase/
│   ├── client.ts            # Client-side Supabase client
│   ├── server.ts            # Server-side Supabase client  
│   └── middleware.ts        # Middleware utilities
├── middleware.ts            # Next.js middleware
└── app/
    ├── login/
    │   ├── page.tsx         # Login page
    │   └── actions.ts       # Login server actions
    ├── signup/
    │   ├── page.tsx         # Signup page
    │   └── actions.ts       # Signup server actions
    ├── workspace/
    │   └── page.tsx         # Protected workspace overview
    ├── error/
    │   └── page.tsx         # Error handling page
    └── verify-email/
        └── page.tsx         # Email verification page
```

### Key Features

✅ **Server-Side Rendering (SSR)** - Proper SSR support with cookie handling  
✅ **Security** - Automatic session refresh and secure cookie management  
✅ **Error Handling** - Comprehensive error pages and user feedback  
✅ **Modern UI** - Beautiful, responsive design with professional header  
✅ **TypeScript** - Full TypeScript support with proper typing  
✅ **Server Actions** - Modern Next.js server actions for form handling  
✅ **Middleware** - Automatic session management across the app  
✅ **Professional Navigation** - Clean header with user menu and workspace navigation  

### Authentication Flow

1. **Signup**: User fills form → Server action processes → Email verification sent → Redirect to verification page
2. **Login**: User fills form → Server action processes → Authentication → Redirect to workspace  
3. **Session Management**: Middleware automatically refreshes sessions and handles authentication state
4. **Logout**: Header dropdown allows sign out → Redirect to login

### Navigation Structure

The workspace includes a professional header with:
- **Brand/Logo**: Links back to workspace overview
- **Navigation**: Overview, Projects, Team, Settings
- **User Menu**: Profile settings, preferences, sign out
- **Mobile Responsive**: Collapsible navigation on smaller screens

### Security Best Practices

- ✅ Server-side authentication validation
- ✅ Secure cookie handling with httpOnly flags
- ✅ Automatic session refresh
- ✅ CSRF protection through server actions
- ✅ Input validation and error handling
- ✅ Proper redirect handling

## Customization

### Styling
The authentication pages and workspace use Tailwind CSS with a professional design system. Key components:
- Clean header with sticky positioning
- Card-based layout for content sections
- Consistent spacing and typography
- Modern color palette and subtle shadows

### Redirects
Update the redirect URLs in the server actions:
- Success login: Change `/workspace` in `src/app/login/actions.ts`
- Success signup: Change `/verify-email` in `src/app/signup/actions.ts`

### Navigation
Modify navigation items in `src/components/Header.tsx`:
- Add/remove navigation links
- Update workspace structure
- Customize user menu options

### Email Templates
Customize email templates in your Supabase dashboard under Authentication > Email Templates.

### Error Handling
Modify error messages and styling in `src/app/error/page.tsx`.

## Workspace Features

The workspace includes:
- **Overview Dashboard**: Stats cards, recent activity, quick actions
- **Professional Header**: Brand, navigation, user management
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Extensible Structure**: Easy to add new sections and features

## Social Authentication (Optional)

To add Google/Microsoft authentication:

1. **Configure OAuth providers** in Supabase dashboard:
   - Go to Authentication > Providers
   - Enable and configure Google/Microsoft OAuth

2. **Update the components** to use `signInWithOAuth`:
```typescript
// Add to your login/signup pages
const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
  const supabase = createClient()
  await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/workspace`
    }
  })
}
```

## Production Deployment

1. **Update environment variables** for production
2. **Configure redirect URLs** in Supabase dashboard:
   - Add your production domain
   - Update site URL settings
3. **Configure SMTP** for production email delivery
4. **Test authentication flow** thoroughly

## Troubleshooting

### Common Issues

1. **"Invalid redirect URL"**: Add your domain to Site URL in Supabase settings
2. **Email not sending**: Configure SMTP settings in Supabase
3. **Session not persisting**: Check cookie settings and middleware configuration
4. **TypeScript errors**: Ensure all environment variables are properly typed

### Development Tips

- Use Supabase local development for offline testing
- Check the Network tab in browser dev tools for authentication requests
- Monitor the Supabase dashboard logs for authentication events
- Test email verification flow in a separate browser session

## Next Steps

1. Set up user profiles and additional user data
2. Implement role-based access control
3. Add password reset functionality  
4. Configure multi-factor authentication
5. Set up user profile management
6. Add workspace settings and team management
7. Implement project management features

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js SSR with Supabase](https://supabase.com/docs/guides/auth/server-side-rendering)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers) 