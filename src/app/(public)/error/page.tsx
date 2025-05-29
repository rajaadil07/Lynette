'use client'

import { StatusCard } from '@/components'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ErrorContent() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message') || 'An unexpected error occurred'

  return (
    <StatusCard
      type="error"
      title="Something went wrong"
      description={message}
      primaryAction={{
        label: "TRY AGAIN",
        href: "/login"
      }}
      secondaryAction={{
        label: "Go home",
        href: "/"
      }}
      showFooter={false}
    />
  )
}

export default function ErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-gray-500 text-sm font-light">Loading...</div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  )
} 