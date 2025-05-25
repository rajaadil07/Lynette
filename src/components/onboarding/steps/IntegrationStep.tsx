import { useState } from 'react'
import { OnboardingStepProps } from '../types'

interface IntegrationStepProps extends OnboardingStepProps {
  onComplete: () => void
}

export default function IntegrationStep({ 
  formData, 
  setFormData, 
  onBack, 
  onComplete,
  loading = false
}: IntegrationStepProps) {
  const [oauthSuccess, setOauthSuccess] = useState(false)

  const handleGoogleConnect = async () => {
    try {
      // Save form data and simulate OAuth success
      localStorage.setItem('onboarding-form-data', JSON.stringify(formData))
      console.log('Saved onboarding data before OAuth:', formData)
      
      // Simulate OAuth success without backend call
      setOauthSuccess(true)
      setFormData(prev => ({ ...prev, calendarProvider: 'google' }))
      
      console.log('OAuth simulation completed')
    } catch (error) {
      console.error('OAuth simulation failed:', error)
    }
  }

  const handleMicrosoftConnect = () => {
    alert('Microsoft OAuth integration coming soon! For now, please use Google authentication.')
  }

  return (
    <>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <div className="max-w-xl space-y-16">
            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                Connect your <br />
                <span className="font-normal">mail & calendar</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect your mail and calendar to manage communications, schedule meetings, and organize your time effortlessly.
              </p>
            </div>

            {/* Provider Selection */}
            <div className="space-y-6">
              {/* Google Button */}
              <button
                onClick={handleGoogleConnect}
                disabled={loading}
                className={`w-full flex items-center justify-between px-8 py-6 bg-white border rounded-2xl hover:shadow-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed ${
                  oauthSuccess 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 relative">
                    {/* Official Google G Icon - Based on brand guidelines */}
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    
                    {/* Success checkmark overlay */}
                    {oauthSuccess && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className={`text-lg font-medium transition-colors duration-300 ${
                      oauthSuccess 
                        ? 'text-green-700' 
                        : 'text-gray-900 group-hover:text-gray-700'
                    }`}>
                      {oauthSuccess ? 'Google Connected ✓' : 'Continue with Google'}
                    </div>
                    <div className={`text-sm mt-1 ${
                      oauthSuccess ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {oauthSuccess ? 'Gmail & Calendar access granted' : 'Connect Gmail & Google Calendar'}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  {oauthSuccess ? (
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Microsoft Button */}
              <button
                onClick={handleMicrosoftConnect}
                className="w-full flex items-center justify-between px-8 py-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* Official Microsoft Outlook Icon */}
                    <img 
                      src="/outlook.png" 
                      alt="Microsoft Outlook" 
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      Continue with Microsoft
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Connect Outlook Mail & Calendar
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Clean Circle */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8EBEFE]/85 via-[#73A5FF]/65 to-[#5087FF]/90 blur-3xl opacity-90 animate-pulse"></div>
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#6095FF]/70 to-[#548DFF]/60 blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#73A5FF]/50 to-[#6A9DFF]/65 blur-xl opacity-80 animate-pulse" style={{ animationDelay: '1.6s' }}></div>
          <div className="relative w-80 h-80 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-20 right-8 md:right-16 lg:right-20 z-20">
        <div className="flex items-end justify-between">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>

          {/* Complete Setup Button */}
          <button
            onClick={onComplete}
            disabled={loading}
            className="relative overflow-hidden px-10 py-4 rounded-2xl text-white text-sm tracking-wider uppercase bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] hover:from-[#0d0d0d] hover:via-[#1f1f1f] hover:to-[#0d0d0d] shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-gray-700/40 hover:border-gray-600/60 transform hover:scale-[1.03] hover:-translate-y-1.5 focus:ring-gray-400/50 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-400 after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/6 after:via-transparent after:to-transparent after:pointer-events-none"
          >
            <span className="relative z-10">{loading ? 'SETTING UP...' : 'COMPLETE SETUP →'}</span>
          </button>
        </div>
      </div>
    </>
  )
} 