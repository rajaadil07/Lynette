import { OnboardingStepProps, AuthorPersona, ProjectType } from '../types'
import { useEffect } from 'react'

interface PersonalInfoStepProps extends OnboardingStepProps {}

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
}: PersonalInfoStepProps) {
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ghostwriter-onboarding-personal')
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
    localStorage.setItem('ghostwriter-onboarding-personal', JSON.stringify(personalData))
  }

  const isFormValid = formData.name && formData.email && formData.persona && formData.projectType

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-gray-900">Welcome to Ghostwrite Pro</h1>
          <p className="text-gray-600">How will you primarily be using this platform?</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">What's your first name?</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder=""
              />
            </div>
          </div>

          {/* Author Background */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What's your author background?</label>
            <div className="relative">
              <select
                value={formData.persona}
                onChange={(e) => handleInputChange('persona', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                {authorPersonas.map((persona) => (
                  <option key={persona.id} value={persona.id}>{persona.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What type of book are you writing?</label>
            <div className="relative">
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                {projectTypes.map((type) => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button 
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Skip
          </button>

          <button
            onClick={onNext}
            disabled={!isFormValid}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
} 