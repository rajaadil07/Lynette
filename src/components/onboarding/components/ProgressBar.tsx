interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 h-1">
      <div className="w-full h-full bg-gray-200/30">
        <div 
          className="h-full bg-gradient-to-r from-[#8EBEFE] to-[#5087FF] transition-all duration-700 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  )
} 