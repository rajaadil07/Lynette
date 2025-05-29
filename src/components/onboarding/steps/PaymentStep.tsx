import { OnboardingStepProps } from '../types'
import { useEffect, useState } from 'react'

interface PaymentStepProps extends OnboardingStepProps {}

const subscriptionTiers = [
  {
    id: 'freelancer',
    name: 'Freelancer',
    price: 50,
    description: 'Perfect for solo ghostwriters',
    features: [
      '5 active projects',
      '5 GB storage',
      'Basic project timeline',
      'Email support',
      'Client portal access'
    ],
    seats: '1 seat'
  },
  {
    id: 'studio',
    name: 'Studio',
    price: 299,
    description: 'For growing writing firms',
    features: [
      '30 active projects',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'Team collaboration tools',
      'Custom branding'
    ],
    seats: '5 seats',
    popular: true
  },
  {
    id: 'publisher',
    name: 'Publisher',
    price: 1000,
    description: 'Enterprise-grade for publishers',
    features: [
      '100 active projects',
      '250 GB storage',
      'SSO integration',
      'Dedicated support',
      'API access',
      'Custom workflows',
      'Audit logs'
    ],
    seats: '10 seats'
  }
]

export default function PaymentStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: PaymentStepProps) {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  })
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ghostwriter-onboarding-payment')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Failed to load saved payment info:', error)
      }
    }
  }, [setFormData])

  const handleTierSelect = (tierId: string) => {
    const updatedData = { ...formData, subscriptionTier: tierId }
    setFormData(prev => ({ ...prev, subscriptionTier: tierId }))
    
    // Save payment info to localStorage
    const paymentData = {
      subscriptionTier: tierId
    }
    localStorage.setItem('ghostwriter-onboarding-payment', JSON.stringify(paymentData))
  }

  const selectedTier = subscriptionTiers.find(tier => tier.id === formData.subscriptionTier)

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <div className="w-full max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium text-gray-900">Choose your plan</h1>
          <p className="text-gray-600">Start with a 30-day free trial</p>
        </div>

        {/* Plan Selection */}
        <div className="space-y-3">
          {subscriptionTiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => handleTierSelect(tier.id)}
              className={`w-full p-4 rounded-lg border text-left transition-all relative ${
                formData.subscriptionTier === tier.id 
                  ? 'border-gray-900 bg-gray-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-2 left-4 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{tier.name}</h3>
                  <p className="text-xs text-gray-600">{tier.seats}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-gray-900">${tier.price}</div>
                  <div className="text-xs text-gray-600">/month</div>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mb-2">{tier.description}</p>
              
              <div className="space-y-1">
                {tier.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-600">
                    <svg className="w-3 h-3 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
                {tier.features.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{tier.features.length - 2} more features
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Free Trial Notice */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs font-medium text-gray-900">30-day free trial</p>
              <p className="text-xs text-gray-600">No charges until trial ends. Cancel anytime. Powered by Stripe.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button 
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>

          <button
            onClick={onNext}
            disabled={!formData.subscriptionTier}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  )
} 