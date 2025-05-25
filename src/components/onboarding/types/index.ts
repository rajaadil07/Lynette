export interface User {
  id: string
  email?: string
}

export interface FormData {
  name: string
  role: string
  briefingTime: string
  briefingItems: string[]
  calendarProvider: string
}

export interface Role {
  id: string
  label: string
}

export interface OnboardingStepProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onNext: () => void
  onBack: () => void
  loading?: boolean
}

export interface BriefingItem {
  id: string
  label: string
} 