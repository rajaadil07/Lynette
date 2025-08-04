import { OnboardingStepProps } from '../types'
import { useEffect } from 'react'

const subscriptionTiers = [
  {
    id: 'freelancer',
    name: 'Solo Ghost',
    price: 50,
    description: 'Perfect for independent ghostwriters & freelancers',
    features: [
      'Free trial: 1 client dashboard',
      'Unlimited writing projects',
      'Client portal for real-time updates & approvals',
      'Live document co-editing',
      'Visual project timeline & task board',
      'Automated milestone-based invoicing',
      'Secure client messaging system',
      'Email support',
      '50GB file & media storage'
    ],
    seats: '1 seat',
    popular: false
  },
  {
    id: 'studio',
    name: 'Ghostwriting Agencies',
    price: 299,
    description: 'Built for boutique to mid-sized ghostwriting agencies',
    features: [
      'Everything in Solo Ghost, plus:',
      'Team collaboration: Assign roles, tasks, and permissions',
      'Multi-client dashboard & organization folders',
      'Internal team notes (invisible to client)',
      'Project templates & reusable outlines',
      'Priority email & chat support',
      '500GB storage'
    ],
    seats: '5 seats',
    popular: true
  },
  {
    id: 'publisher',
    name: 'Publishers',
    price: 1000,
    description: 'For large publishers or platforms working with multiple ghostwriters',
    features: [
      'Everything in Ghostwriting Agencies, plus:',
      'Contractor database with assignment & workload tracking',
      'White-label options for client-facing portal & emails',
      '24/7 phone & chat support',
      'Custom editorial workflows (e.g., approval chains)',
      'Unlimited document storage'
    ],
    seats: '10 seats',
    popular: false
  }
]

export default function PaymentStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: OnboardingStepProps) {
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ghostsync-onboarding-payment')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Failed to load saved payment info:', error)
      }
    }
  }, [setFormData])

  const handlePlanSelect = (planId: string) => {
    setFormData(prev => ({ ...prev, subscriptionTier: planId }))
    
    // Save payment data to localStorage
    const paymentData = {
      subscriptionTier: planId
    }
    localStorage.setItem('ghostsync-onboarding-payment', JSON.stringify(paymentData))
  }

  const isFormValid = formData.subscriptionTier

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA]">
            Join Our Waitlist
          </h1>
          <p className="text-lg text-[#F8F9FA]/60">
            Get early access and exclusive pricing when we launch. Choose your preferred plan below.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#1B1B1F] rounded-lg border-2 p-8 flex flex-col transition-all cursor-pointer ${
                formData.subscriptionTier === tier.id
                  ? 'border-[#5D9CEC] ring-4 ring-[#5D9CEC]/20'
                  : 'border-white/10 hover:border-[#5D9CEC]/50'
              } ${tier.popular ? 'ring-2 ring-[#5D9CEC]/30' : ''}`}
              onClick={() => handlePlanSelect(tier.id)}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#5D9CEC] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-inter font-semibold text-[#F8F9FA] mb-2">
                  {tier.name}
                </h3>
                <p className="text-[#F8F9FA]/60 text-sm mb-4">
                  {tier.description}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#F8F9FA]">${tier.price}</span>
                  <span className="text-[#F8F9FA]/60 text-sm">/month</span>
                </div>
                <p className="text-xs text-[#F8F9FA]/50">{tier.seats}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-[#5D9CEC]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#5D9CEC]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#F8F9FA]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Select Button */}
              <div className="mt-auto">
                <button
                  className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${
                    formData.subscriptionTier === tier.id
                      ? 'bg-[#5D9CEC] text-white'
                      : tier.popular
                      ? 'bg-[#5D9CEC] text-white hover:bg-[#4A8BE8]'
                      : 'border border-white/20 text-[#F8F9FA] hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/10'
                  }`}
                  onClick={() => window.location.href = '/waitlist'}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8">
          <h2 className="text-lg font-inter font-medium text-[#F8F9FA] mb-6">
            Why choose GhostSync?
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-[#5D9CEC]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-medium text-[#F8F9FA] mb-2">Secure & Professional</h3>
              <p className="text-sm text-[#F8F9FA]/60">
                Enterprise-grade security with NDA protection and encrypted storage
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-[#5D9CEC]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-[#F8F9FA] mb-2">Lightning Fast</h3>
              <p className="text-sm text-[#F8F9FA]/60">
                Streamlined workflows that reduce project time by 40%
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-[#5D9CEC]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-[#F8F9FA] mb-2">Client Delight</h3>
              <p className="text-sm text-[#F8F9FA]/60">
                Professional client experience that builds trust and loyalty
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-[#FBC02D]/5 border border-[#FBC02D]/30 rounded-lg p-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-[#FBC02D]/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-[#FBC02D]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-[#F8F9FA]">30-Day Money Back Guarantee</h3>
              <p className="text-sm text-[#F8F9FA]/60">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-white/10 text-[#F8F9FA]/70 rounded-lg font-medium text-sm hover:border-[#5D9CEC]/50 hover:text-[#F8F9FA] transition-colors"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isFormValid}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
              isFormValid
                ? 'bg-[#5D9CEC] text-white hover:bg-[#4A8BE8]'
                : 'bg-white/10 text-[#F8F9FA]/40 cursor-not-allowed'
            }`}
          >
            Complete Setup
          </button>
        </div>
      </div>
    </div>
  )
} 