import { useEffect, useState } from 'react'
import { OnboardingStepProps } from '../types'

interface CompletionStepProps extends OnboardingStepProps {
  onComplete: () => void
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
    { name: 'Outline', description: 'Chapter structure and content planning', status: 'pending' },
    { name: 'First Draft', description: 'Initial manuscript writing', status: 'pending' },
    { name: 'Revision 1', description: 'Content review and improvements', status: 'pending' },
    { name: 'Final Manuscript', description: 'Polished final version', status: 'pending' },
    { name: 'Proofing', description: 'Final editing and quality check', status: 'pending' }
  ]

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white py-8 px-6">
        <div className="w-full max-w-lg mx-auto text-center space-y-8">
          
          {/* Loading Animation */}
          <div className="space-y-6">
            <div className="w-24 h-24 mx-auto relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#374151"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 2.83} 283`}
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-semibold text-gray-900">{Math.round(progress)}%</div>
                  <div className="text-xs text-gray-500">Setting up</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-2xl font-medium text-gray-900">Setting up your project</h1>
              <p className="text-gray-600">
                Creating your personalized workspace and project timeline
              </p>
            </div>
          </div>

          {/* Project Preview */}
          <div className="bg-gray-50 rounded-lg p-6 text-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{formData.projectTitle || 'Your Project'}</h3>
                <p className="text-sm text-gray-500">5-Phase Timeline • {formData.estimatedLength}</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {projectPhases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs font-medium text-gray-600">{index + 1}</span>
                  </div>
                  <div className="text-xs text-gray-700">{phase.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white py-8 px-6">
        <div className="w-full max-w-lg mx-auto text-center space-y-8">
          
          {/* Success Animation */}
          <div className="space-y-6">
            <div className="w-24 h-24 mx-auto relative">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-2xl font-medium text-gray-900">Welcome to Ghostwrite Pro</h1>
              <p className="text-gray-600">Your professional workspace is ready</p>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Setup Complete</span>
              </div>
              <p className="text-sm text-gray-500">Redirecting to your dashboard in 3 seconds...</p>
            </div>
          </div>

          {/* Project Summary */}
          <div className="space-y-4">
            
            {/* Project Overview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Project Created</h3>
                  <p className="text-sm text-gray-600">{formData.projectTitle}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Type: {formData.projectType}</div>
                <div>Length: {formData.estimatedLength}</div>
              </div>
            </div>

            {/* Author Profile */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Author Profile</h3>
                  <p className="text-sm text-gray-600">{formData.name}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Background: {formData.persona}</div>
                <div>Experience: {formData.previousExperience}</div>
              </div>
            </div>

            {/* Security Setup */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Security Enabled</h3>
                  <p className="text-sm text-gray-600">Documents Protected</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div>NDA: {formData.ndaSigned ? 'Signed' : 'Pending'}</div>
                <div>Contract: {formData.contractUploaded ? 'Uploaded' : 'Pending'}</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
                <div>
                  <div className="font-medium text-gray-900">Explore Your Dashboard</div>
                  <div className="text-gray-600 text-xs">Get familiar with your project workspace</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">2</div>
                <div>
                  <div className="font-medium text-gray-900">Upload Reference Materials</div>
                  <div className="text-gray-600 text-xs">Share any existing content or research</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">3</div>
                <div>
                  <div className="font-medium text-gray-900">Schedule Your First Meeting</div>
                  <div className="text-gray-600 text-xs">Connect with your ghostwriter to begin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  return (
    <div className="min-h-screen bg-white py-8 px-6">
      <div className="w-full max-w-lg mx-auto text-center space-y-6">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-gray-900">Setup Failed</h1>
          <p className="text-gray-600">
            We encountered an issue setting up your workspace. Please try again.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={onBack}
            className="w-full px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
} 