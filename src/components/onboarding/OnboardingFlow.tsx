'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { User, FormData } from './types'
import { ProgressBar } from './components'
import { 
  PersonalInfoStep, 
  ProjectDetailsStep,
  ContractStep,
  PaymentStep,
  CompletionStep 
} from './steps'

interface OnboardingFlowProps {
  user?: User
}

export default function OnboardingFlow({ }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    // Personal Info
    name: '',
    email: '',
    persona: '',
    
    // Project Details
    projectTitle: '',
    projectType: '',
    estimatedLength: '',
    targetAudience: '',
    
    // Manuscript Details
    currentStage: '',
    previousExperience: '',
    
    // Process Preferences
    communicationStyle: '',
    feedbackFrequency: '',
    
    // Contract & Legal
    ndaSigned: false,
    contractUploaded: false,
    
    // Payment & Subscription
    subscriptionTier: '',
    
    // Timeline & Deliverables
    deadline: '',
    milestonePreferences: []
  })
  
  const router = useRouter()
  const searchParams = useSearchParams()

  const totalSteps = 5 // Updated to include payment step

  // Load all form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('ghostwriter-onboarding-data')
    const savedStep = localStorage.getItem('ghostwriter-onboarding-step')
    
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData)
        setFormData(parsedData)
      } catch (error) {
        console.error('Failed to parse saved form data:', error)
      }
    }
    
    if (savedStep) {
      try {
        const stepNumber = parseInt(savedStep, 10)
        if (stepNumber >= 1 && stepNumber <= totalSteps) {
          setCurrentStep(stepNumber)
        }
      } catch (error) {
        console.error('Failed to parse saved step:', error)
      }
    }
  }, [totalSteps])

  // Auto-save form data and current step to localStorage
  useEffect(() => {
    localStorage.setItem('ghostwriter-onboarding-data', JSON.stringify(formData))
    localStorage.setItem('ghostwriter-onboarding-step', currentStep.toString())
  }, [formData, currentStep])

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

  const completeOnboarding = useCallback(async () => {
    setLoading(true)
    try {
      console.log('Completing ghostwriting onboarding with data:', formData)
      
      // Simulate project setup process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clean up localStorage
      localStorage.removeItem('ghostwriter-onboarding-data')
      localStorage.removeItem('ghostwriter-onboarding-step')
      localStorage.removeItem('ghostwriter-onboarding-personal')
      localStorage.removeItem('ghostwriter-onboarding-project')
      localStorage.removeItem('ghostwriter-onboarding-contract')
      localStorage.removeItem('ghostwriter-onboarding-payment')
      
      // Redirect to a static dashboard
      console.log('✅ Ghostwriting onboarding completed! Redirecting to dashboard')
      router.push('/dashboard')
    } catch (error) {
      console.error('Onboarding error:', error)
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      alert(`Onboarding failed: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }, [router, formData])

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 2:
        return (
          <ProjectDetailsStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 3:
        return (
          <ContractStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 4:
        return (
          <PaymentStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
      case 5:
        return (
          <CompletionStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            onComplete={completeOnboarding}
            loading={loading}
          />
        )
      default:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
            loading={loading}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Progress Bar - Only show for first 4 steps */}
      {currentStep < 5 && (
        <ProgressBar currentStep={currentStep} totalSteps={4} />
      )}

      {/* Current Step Content */}
      {renderCurrentStep()}
    </div>
  )
} 