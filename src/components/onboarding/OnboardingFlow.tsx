'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

import { User, FormData } from './types'
import { ProgressBar } from './components'
import { 
  IntroStep, 
  PersonalInfoStep, 
  PreferencesStep, 
  IntegrationStep 
} from './steps'

interface OnboardingFlowProps {
  user?: User
}

export default function OnboardingFlow({ user }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    briefingTime: '08:00',
    briefingItems: ['news', 'emails', 'schedule', 'tasks'],
    calendarProvider: ''
  })
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeOnboarding = async () => {
    setLoading(true)
    try {
      console.log('Completing onboarding with data:', formData)
      
      // Clean up localStorage
      localStorage.removeItem('onboarding-form-data')
      
      // Simulate onboarding completion and redirect to home
      console.log('✅ Onboarding completed successfully! Redirecting to home page')
      router.push('/')
    } catch (error) {
      console.error('Onboarding error:', error)
      // Show error message to user
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      alert(`Onboarding failed: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  // Restore form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('onboarding-form-data')
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData)
        setFormData(parsedData)
        setCurrentStep(4) // Go to OAuth step if we have saved data
      } catch (error) {
        console.error('Failed to parse saved form data:', error)
      }
    }
  }, [])

  // Handle OAuth success redirect and auto-complete onboarding
  useEffect(() => {
    const oauthSuccessParam = searchParams.get('oauth_success')
    const provider = searchParams.get('provider')
    const userEmail = searchParams.get('user_email')
    const userName = searchParams.get('user_name')
    const googleUserId = searchParams.get('user_id')
    
    if (oauthSuccessParam === 'true' && provider === 'google') {
      // Restore saved form data and add OAuth provider
      const savedFormData = localStorage.getItem('onboarding-form-data')
      if (savedFormData) {
        try {
          const parsedData = JSON.parse(savedFormData)
          setFormData({
            ...parsedData,
            calendarProvider: 'google'
          })
          
          // Auto-complete onboarding since OAuth is done
          setTimeout(() => {
            completeOnboarding()
          }, 1000) // Small delay to show success state
          
        } catch (error) {
          console.error('Failed to restore form data:', error)
        }
      }
      
      // Clean up saved data
      localStorage.removeItem('onboarding-form-data')
      
      // Show success message
      console.log('OAuth authentication successful! Auto-completing onboarding...', { 
        userEmail, 
        userName, 
        googleUserId 
      })
    }
  }, [searchParams])

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <IntroStep onNext={nextStep} />
      case 2:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 3:
        return (
          <PreferencesStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 4:
        return (
          <IntegrationStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            onComplete={completeOnboarding}
            loading={loading}
          />
        )
      default:
        return <IntroStep onNext={nextStep} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-orange-50 relative overflow-hidden">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* Current Step Content */}
      {renderCurrentStep()}
    </div>
  )
} 