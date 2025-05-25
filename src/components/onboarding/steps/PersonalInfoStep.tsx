import { OnboardingStepProps, Role } from '../types'

interface PersonalInfoStepProps extends OnboardingStepProps {}

const roles: Role[] = [
  { id: 'founder', label: 'Founder/CEO' },
  { id: 'executive', label: 'Executive/VP' },
  { id: 'director', label: 'Director/Manager' },
  { id: 'engineer', label: 'Engineer/Developer' },
  { id: 'sales', label: 'Sales/Marketing' },
  { id: 'operations', label: 'Operations' },
  { id: 'consultant', label: 'Consultant' },
  { id: 'entrepreneur', label: 'Entrepreneur' },
  { id: 'other', label: 'Other' }
]

export default function PersonalInfoStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: PersonalInfoStepProps) {
  const handleNameChange = (value: string) => {
    setFormData(prev => ({ ...prev, name: value }))
  }

  const handleRoleSelect = (roleId: string) => {
    setFormData(prev => ({ ...prev, role: roleId }))
  }

  return (
    <>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Form Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <div className="max-w-xl space-y-16">
            {/* Name Input */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
                What should we<br />
                <span className="font-normal">call you?</span>
              </h1>
              
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-0 py-4 text-2xl bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                What's your <span className="font-normal">role?</span>
              </h2>
              
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) => handleRoleSelect(e.target.value)}
                  className="w-full px-0 py-4 text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-700 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">Select your role</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id} className="text-gray-900">
                      {role.label}
                    </option>
                  ))}
                </select>
                
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Same Circle */}
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
            disabled={!formData.name || !formData.role}
            className="relative overflow-hidden px-10 py-4 rounded-2xl text-white text-sm tracking-wider uppercase bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] hover:from-[#0d0d0d] hover:via-[#1f1f1f] hover:to-[#0d0d0d] shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-gray-700/40 hover:border-gray-600/60 transform hover:scale-[1.03] hover:-translate-y-1.5 focus:ring-gray-400/50 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-400 after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/6 after:via-transparent after:to-transparent after:pointer-events-none"
          >
            <span className="relative z-10">CONTINUE →</span>
          </button>
        </div>
      </div>
    </>
  )
} 