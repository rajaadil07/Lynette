import { OnboardingStepProps, AuthorPersona, ProjectType } from '../types'
import { useEffect } from 'react'

const authorPersonas: AuthorPersona[] = [
  { id: 'first-time-author', label: 'First-Time Author', description: 'New to book writing' },
  { id: 'experienced-author', label: 'Experienced Author', description: 'Previously published books' },
  { id: 'business-leader', label: 'Business Leader/CEO', description: 'Sharing business expertise' },
  { id: 'entrepreneur', label: 'Entrepreneur', description: 'Startup founder or business owner' },
  { id: 'thought-leader', label: 'Thought Leader', description: 'Industry expert or influencer' },
  { id: 'celebrity', label: 'Celebrity/Public Figure', description: 'Well-known personality' }
]

const projectTypes: ProjectType[] = [
  { id: 'memoir', label: 'Memoir', description: 'Personal life story', estimatedTimeline: '6-9 months' },
  { id: 'business-book', label: 'Business Book', description: 'Leadership/business insights', estimatedTimeline: '4-6 months' },
  { id: 'self-help', label: 'Self-Help', description: 'Personal development guide', estimatedTimeline: '4-6 months' },
  { id: 'biography', label: 'Biography', description: 'Someone else\'s life story', estimatedTimeline: '8-12 months' },
  { id: 'fiction', label: 'Fiction Novel', description: 'Creative storytelling', estimatedTimeline: '6-12 months' },
  { id: 'academic', label: 'Academic/Research', description: 'Scholarly work', estimatedTimeline: '8-15 months' }
]

export default function PersonalInfoStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: OnboardingStepProps) {
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ghostsync-onboarding-personal')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Failed to load saved personal info:', error)
      }
    }
  }, [setFormData])

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const updatedData = { ...formData, [field]: value }
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Save personal info to localStorage
    const personalData = {
      name: updatedData.name,
      email: updatedData.email,
      persona: updatedData.persona,
      projectType: updatedData.projectType
    }
    localStorage.setItem('ghostsync-onboarding-personal', JSON.stringify(personalData))
  }

  const isFormValid = formData.name && formData.email && formData.persona && formData.projectType

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA]">
            Welcome to GhostSync
          </h1>
          <p className="text-lg text-[#F8F9FA]/60">
            Let's get to know you and your project
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8 space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Personal Information</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#F8F9FA] mb-2">
                  First name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-[#1B1B1F] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:border-transparent transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#F8F9FA] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-[#1B1B1F] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Author Background */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Author Background</h2>
            <div className="grid grid-cols-2 gap-3">
              {authorPersonas.map((persona) => (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => handleInputChange('persona', persona.id)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    formData.persona === persona.id
                      ? 'border-[#5D9CEC] bg-[#5D9CEC]/10'
                      : 'border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/5'
                  }`}
                >
                  <div className="font-medium text-[#F8F9FA] text-sm mb-1">
                    {persona.label}
                  </div>
                  <div className="text-xs text-[#F8F9FA]/60">
                    {persona.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Project Type</h2>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleInputChange('projectType', type.id)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    formData.projectType === type.id
                      ? 'border-[#5D9CEC] bg-[#5D9CEC]/10'
                      : 'border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/5'
                  }`}
                >
                  <div className="font-medium text-[#F8F9FA] text-sm mb-1">
                    {type.label}
                  </div>
                  <div className="text-xs text-[#F8F9FA]/60 mb-2">
                    {type.description}
                  </div>
                  <div className="text-xs text-[#5D9CEC] font-medium">
                    {type.estimatedTimeline}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end pt-6 border-t border-white/10">
            <button
              onClick={onNext}
              disabled={!isFormValid}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
                isFormValid
                  ? 'bg-[#5D9CEC] text-white hover:bg-[#4A8BE8]'
                  : 'bg-white/10 text-[#F8F9FA]/40 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 