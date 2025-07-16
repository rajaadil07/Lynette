interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-white/10">
      <div 
        className="h-full bg-[#5D9CEC] transition-all duration-300 ease-out"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  )
} 