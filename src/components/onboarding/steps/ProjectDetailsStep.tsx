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
    <div className="min-h-screen bg-white py-8 px-6">
      <div className="w-full max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium text-gray-900">Project Details</h1>
          <p className="text-gray-600">Tell us about your book project</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Project Title */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What&apos;s your project title?</label>
            <input
              type="text"
              value={formData.projectTitle}
              onChange={(e) => handleInputChange('projectTitle', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Estimated Length */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Estimated word count</label>
            <div className="relative">
              <select
                value={formData.estimatedLength}
                onChange={(e) => handleInputChange('estimatedLength', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                <option value="under-50k">Under 50,000 words</option>
                <option value="50k-80k">50,000 - 80,000 words</option>
                <option value="80k-120k">80,000 - 120,000 words</option>
                <option value="over-120k">Over 120,000 words</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Who is your target audience?</label>
            <textarea
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              rows={2}
              placeholder=""
            />
          </div>

          {/* Current Stage */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What&apos;s your current manuscript stage?</label>
            <div className="relative">
              <select
                value={formData.currentStage}
                onChange={(e) => handleInputChange('currentStage', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                {manuscriptStages.map((stage) => (
                  <option key={stage.id} value={stage.id}>{stage.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Writing Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What&apos;s your writing experience level?</label>
            <div className="relative">
              <select
                value={formData.previousExperience}
                onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                {experienceLevels.map((level) => (
                  <option key={level.id} value={level.id}>{level.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Communication Style */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">How would you like to collaborate?</label>
            <div className="relative">
              <select
                value={formData.communicationStyle}
                onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                {communicationStyles.map((style) => (
                  <option key={style.id} value={style.id}>{style.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Feedback Frequency - Optional field, smaller spacing */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">How often would you like updates?</label>
            <div className="relative">
              <select
                value={formData.feedbackFrequency}
                onChange={(e) => handleInputChange('feedbackFrequency', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select an option</option>
                <option value="daily">Daily updates</option>
                <option value="weekly">Weekly check-ins</option>
                <option value="bi-weekly">Bi-weekly reviews</option>
                <option value="chapter-by-chapter">After each chapter</option>
                <option value="milestone">At major milestones</option>
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
            ← Back
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