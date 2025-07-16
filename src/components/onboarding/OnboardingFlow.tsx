'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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

  const totalSteps = 5

  // Load all form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('ghostsync-onboarding-data')
    const savedStep = localStorage.getItem('ghostsync-onboarding-step')
    
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
    localStorage.setItem('ghostsync-onboarding-data', JSON.stringify(formData))
    localStorage.setItem('ghostsync-onboarding-step', currentStep.toString())
  }, [formData, currentStep])

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const completeOnboarding = useCallback(async () => {
    setLoading(true)
    try {
      console.log('Completing ghostwriting onboarding with data:', formData)
      
      // Simulate project setup process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clean up localStorage
      localStorage.removeItem('ghostsync-onboarding-data')
      localStorage.removeItem('ghostsync-onboarding-step')
      localStorage.removeItem('ghostsync-onboarding-personal')
      localStorage.removeItem('ghostsync-onboarding-project')
      localStorage.removeItem('ghostsync-onboarding-contract')
      localStorage.removeItem('ghostsync-onboarding-payment')
      
      // Redirect to dashboard
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
            onComplete={completeOnboarding}
            onBack={prevStep}
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
    <div className="min-h-screen bg-[#1B1B1F]">
      {/* Header */}
      <header className="bg-[#1B1B1F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image 
                src="/icon.png" 
                alt="GhostSync" 
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-inter font-semibold text-[#F8F9FA] text-lg">GhostSync</span>
            </div>
            
            {/* Progress indicator - only show for steps 1-4 */}
            {currentStep < 5 && (
              <div className="flex items-center space-x-2 text-sm text-[#F8F9FA]/60">
                <span>Step {currentStep} of 4</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Progress Bar - Only show for first 4 steps */}
        {currentStep < 5 && (
          <ProgressBar currentStep={currentStep} totalSteps={4} />
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {renderCurrentStep()}
      </main>
    </div>
  )
} 