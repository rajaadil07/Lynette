import { useState, useEffect } from 'react'

interface CompletionStepProps {
  formData: any
  onComplete: () => void
  onBack: () => void
  loading?: boolean
}

export default function CompletionStep({ 
  formData, 
  onComplete, 
  onBack 
}: CompletionStepProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const setupProject = async () => {
      try {
        setStatus('loading')
        
        // Simulate project setup process with progress
        const steps = [
          'Creating your project workspace...',
          'Setting up milestone timeline...',
          'Configuring communication preferences...',
          'Initializing document vault...',
          'Finalizing security settings...'
        ]
        
        for (let i = 0; i < steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 800))
          setProgress(((i + 1) / steps.length) * 100)
        }
        
        setStatus('success')
        
        // Auto-complete after showing success
        setTimeout(() => {
          onComplete()
        }, 3000)
        
      } catch (error) {
        console.error('Project setup error:', error)
        setStatus('error')
      }
    }

    setupProject()
  }, [onComplete])

  const projectPhases = [
    { name: 'Outline', description: 'Chapter structure and content planning' },
    { name: 'First Draft', description: 'Initial manuscript writing' },
    { name: 'Revision 1', description: 'Content review and improvements' },
    { name: 'Final Manuscript', description: 'Polished final version' },
    { name: 'Proofing', description: 'Final editing and quality check' }
  ]

  if (status === 'loading') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-12 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#5D9CEC]/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#5D9CEC] animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-inter font-semibold text-[#F8F9FA]">
              Setting up your project
            </h1>
            <p className="text-[#F8F9FA]/60">
              We're preparing everything for your ghostwriting project...
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-[#5D9CEC] h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-[#F8F9FA]/60">{Math.round(progress)}% complete</p>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Success Header */}
          <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-[#5D9CEC]/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#5D9CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA]">
                You're all set, {formData.name?.split(' ')[0] || 'Writer'}!
              </h1>
              <p className="text-lg text-[#F8F9FA]/60">
                Your project "{formData.projectTitle || 'Untitled Project'}" is ready
              </p>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA] mb-6">Your Project Timeline</h2>
            <div className="space-y-4">
              {projectPhases.map((phase, index) => (
                <div key={index} className="flex items-center space-x-4 py-3 border-b border-white/10 last:border-0">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm font-medium text-[#F8F9FA]/60">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#F8F9FA] text-sm">{phase.name}</h3>
                    <p className="text-xs text-[#F8F9FA]/60">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA] mb-6">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#5D9CEC] text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
                <div>
                  <h3 className="font-medium text-[#F8F9FA] text-sm">Explore Your Dashboard</h3>
                  <p className="text-xs text-[#F8F9FA]/60">Get familiar with your project workspace</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#5D9CEC] text-white rounded-full flex items-center justify-center text-xs font-medium">2</div>
                <div>
                  <h3 className="font-medium text-[#F8F9FA] text-sm">Upload Reference Materials</h3>
                  <p className="text-xs text-[#F8F9FA]/60">Share any existing content or research</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#5D9CEC] text-white rounded-full flex items-center justify-center text-xs font-medium">3</div>
                <div>
                  <h3 className="font-medium text-[#F8F9FA] text-sm">Schedule Your First Meeting</h3>
                  <p className="text-xs text-[#F8F9FA]/60">Connect with your ghostwriter to begin your journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#F8F9FA]/60">Redirecting to your dashboard in a few seconds...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-12 text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-inter font-semibold text-[#F8F9FA]">
            Something went wrong
          </h1>
          <p className="text-[#F8F9FA]/60">
            We encountered an error setting up your project. Please try again.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-white/10 text-[#F8F9FA]/70 rounded-lg font-medium text-sm hover:border-[#5D9CEC]/50 hover:text-[#F8F9FA] transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#5D9CEC] text-white rounded-lg font-medium text-sm hover:bg-[#4A8BE8] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
} 