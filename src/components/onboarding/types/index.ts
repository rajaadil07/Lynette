export interface User {
  id: string
  email?: string
}

export interface FormData {
  // Personal Info
  name?: string
  email?: string
  persona?: string // author, publisher-editor, etc.
  
  // Project Details
  projectTitle?: string
  projectType?: string // memoir, business-book, fiction, etc.
  estimatedLength?: string // word count
  targetAudience?: string
  
  // Manuscript Details
  currentStage?: string // outline, first-draft, revisions, etc.
  previousExperience?: string // first-time, experienced, published
  
  // Process Preferences
  communicationStyle?: string // formal, casual, detailed
  feedbackFrequency?: string // weekly, bi-weekly, chapter-by-chapter
  
  // Contract & Legal
  ndaSigned?: boolean
  contractUploaded?: boolean
  contractFile?: File
  
  // Payment & Subscription
  subscriptionTier?: string // freelancer, studio, publisher
  
  // Timeline & Deliverables
  deadline?: string
  milestonePreferences?: string[]
}

export interface AuthorPersona {
  id: string
  label: string
  description: string
}

export interface ProjectType {
  id: string
  label: string
  description: string
  estimatedTimeline: string
}

export interface OnboardingStepProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onNext: () => void
  onBack: () => void
  loading?: boolean
}

export interface MilestoneOption {
  id: string
  label: string
  description: string
}

export interface CommunicationPreference {
  id: string
  label: string
  description: string
} 