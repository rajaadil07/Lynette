'use client'

import { StatusCard } from '@/components';

export default function VerifyEmailPage() {
  const handleResendEmail = () => {
    // Add resend email logic here
    console.log('Resending verification email...');
  };

  return (
    <StatusCard
      type="email"
      title="Check your email"
      description="We've sent you a verification link to complete your registration."
      primaryAction={{
        label: "BACK TO LOGIN",
        href: "/login"
      }}
      secondaryAction={{
        label: "Resend verification email",
        onClick: handleResendEmail
      }}
      showFooter={false}
    />
  );
} 