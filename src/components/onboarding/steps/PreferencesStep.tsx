import { OnboardingStepProps, BriefingItem } from '../types'

interface PreferencesStepProps extends OnboardingStepProps {}

const briefingItems: BriefingItem[] = [
  { id: 'news', label: 'Relevant news & updates' },
  { id: 'emails', label: 'Important emails' },
  { id: 'schedule', label: 'Schedule preview' },
  { id: 'tasks', label: 'Priority tasks' }
]

export default function PreferencesStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: PreferencesStepProps) {
  const toggleBriefingItem = (itemId: string) => {
    const isSelected = formData.briefingItems?.includes(itemId) ?? true
    
    if (isSelected) {
      // Remove item from selection
      setFormData(prev => ({ 
        ...prev, 
        briefingItems: prev.briefingItems.filter(i => i !== itemId)
      }))
    } else {
      // Add item to selection
      setFormData(prev => ({ 
        ...prev, 
        briefingItems: [...prev.briefingItems, itemId]
      }))
    }
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
                What should we<br />
                <span className="font-normal">include?</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Customize your daily briefing with the information that matters to you.
              </p>
            </div>

            {/* What to Include */}
            <div className="space-y-8">
              <div className="space-y-4">
                {briefingItems.map((item) => {
                  const isSelected = formData.briefingItems?.includes(item.id) ?? true
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleBriefingItem(item.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? 'border-blue-200 bg-blue-50/50 hover:bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`text-lg font-medium transition-colors duration-300 ${
                        isSelected ? 'text-blue-900' : 'text-gray-700'
                      }`}>
                        {item.label}
                      </span>
                      
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
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

          {/* Continue Button */}
          <button
            onClick={onNext}
            className="relative overflow-hidden px-10 py-4 rounded-2xl text-white text-sm tracking-wider uppercase bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] hover:from-[#0d0d0d] hover:via-[#1f1f1f] hover:to-[#0d0d0d] shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-gray-700/40 hover:border-gray-600/60 transform hover:scale-[1.03] hover:-translate-y-1.5 focus:ring-gray-400/50 transition-all duration-400 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-400 after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/6 after:via-transparent after:to-transparent after:pointer-events-none"
          >
            <span className="relative z-10">CONTINUE →</span>
          </button>
        </div>
      </div>
    </>
  )
} 