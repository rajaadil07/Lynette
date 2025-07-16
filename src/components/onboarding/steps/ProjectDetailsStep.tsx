import { OnboardingStepProps } from '../types'
import { useEffect } from 'react'

const manuscriptStages = [
  { id: 'idea', label: 'Just an Idea', description: 'Starting from scratch' },
  { id: 'outline', label: 'Outline Ready', description: 'Have chapter breakdown' },
  { id: 'partial-draft', label: 'Partial Draft', description: 'Some chapters written' },
  { id: 'full-draft', label: 'Full Draft', description: 'Complete first draft' },
  { id: 'revision', label: 'Needs Revision', description: 'Draft requires editing' }
]

const experienceLevels = [
  { id: 'first-time', label: 'First-Time Author', description: 'This is my first book' },
  { id: 'experienced', label: 'Experienced Author', description: 'I\'ve written books before' },
  { id: 'published', label: 'Published Author', description: 'I have published works' }
]

const communicationStyles = [
  { id: 'formal', label: 'Formal & Structured', description: 'Professional, scheduled check-ins' },
  { id: 'collaborative', label: 'Collaborative', description: 'Regular back-and-forth discussion' },
  { id: 'hands-off', label: 'Minimal Involvement', description: 'Periodic updates only' }
]

export default function ProjectDetailsStep({ 
  formData, 
  setFormData, 
  onNext, 
  onBack 
}: OnboardingStepProps) {
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ghostsync-onboarding-project')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Failed to load saved project info:', error)
      }
    }
  }, [setFormData])

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const updatedData = { ...formData, [field]: value }
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Save project details to localStorage
    const projectData = {
      projectTitle: updatedData.projectTitle,
      estimatedLength: updatedData.estimatedLength,
      targetAudience: updatedData.targetAudience,
      currentStage: updatedData.currentStage,
      previousExperience: updatedData.previousExperience,
      communicationStyle: updatedData.communicationStyle,
      feedbackFrequency: updatedData.feedbackFrequency
    }
    localStorage.setItem('ghostsync-onboarding-project', JSON.stringify(projectData))
  }

  const isFormValid = formData.projectTitle && formData.estimatedLength && formData.targetAudience && 
                     formData.currentStage && formData.previousExperience && formData.communicationStyle

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-inter font-semibold text-[#F8F9FA]">
            Project Details
          </h1>
          <p className="text-lg text-[#F8F9FA]/60">
            Tell us about your book project
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1B1B1F] border border-white/10 rounded-lg p-8 space-y-8">
          {/* Basic Project Info */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#F8F9FA] mb-2">
                  Project title
                </label>
                <input
                  type="text"
                  value={formData.projectTitle}
                  onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-[#1B1B1F] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:border-transparent transition-colors"
                  placeholder="What's the working title of your book?"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#F8F9FA] mb-2">
                    Estimated length
                  </label>
                  <select
                    value={formData.estimatedLength}
                    onChange={(e) => handleInputChange('estimatedLength', e.target.value)}
                    className="w-full px-4 py-3 border border-white/10 rounded-lg bg-[#1B1B1F] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:border-transparent transition-colors"
                  >
                    <option value="">Select length</option>
                    <option value="40000-60000">40,000-60,000 words</option>
                    <option value="60000-80000">60,000-80,000 words</option>
                    <option value="80000-100000">80,000-100,000 words</option>
                    <option value="100000+">100,000+ words</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#F8F9FA] mb-2">
                    Target audience
                  </label>
                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full px-4 py-3 border border-white/10 rounded-lg bg-[#1B1B1F] text-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#5D9CEC] focus:border-transparent transition-colors"
                    placeholder="Who is this book for?"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Current Stage */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Current Stage</h2>
            <div className="grid grid-cols-2 gap-3">
              {manuscriptStages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleInputChange('currentStage', stage.id)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    formData.currentStage === stage.id
                      ? 'border-[#5D9CEC] bg-[#5D9CEC]/10'
                      : 'border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/5'
                  }`}
                >
                  <div className="font-medium text-[#F8F9FA] text-sm mb-1">
                    {stage.label}
                  </div>
                  <div className="text-xs text-[#F8F9FA]/60">
                    {stage.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Writing Experience</h2>
            <div className="grid grid-cols-3 gap-3">
              {experienceLevels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => handleInputChange('previousExperience', level.id)}
                  className={`p-4 rounded-lg border text-left transition-colors ${
                    formData.previousExperience === level.id
                      ? 'border-[#5D9CEC] bg-[#5D9CEC]/10'
                      : 'border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/5'
                  }`}
                >
                  <div className="font-medium text-[#F8F9FA] text-sm mb-1">
                    {level.label}
                  </div>
                  <div className="text-xs text-[#F8F9FA]/60">
                    {level.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="space-y-6">
            <h2 className="text-lg font-inter font-medium text-[#F8F9FA]">Communication Style</h2>
            <div className="space-y-3">
              {communicationStyles.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => handleInputChange('communicationStyle', style.id)}
                  className={`w-full p-4 rounded-lg border text-left transition-colors ${
                    formData.communicationStyle === style.id
                      ? 'border-[#5D9CEC] bg-[#5D9CEC]/10'
                      : 'border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/5'
                  }`}
                >
                  <div className="font-medium text-[#F8F9FA] text-sm mb-1">
                    {style.label}
                  </div>
                  <div className="text-xs text-[#F8F9FA]/60">
                    {style.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-white/10">
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
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 