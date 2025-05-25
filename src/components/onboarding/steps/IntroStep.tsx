import { OnboardingStepProps } from '../types'

interface IntroStepProps extends Pick<OnboardingStepProps, 'onNext'> {}

export default function IntroStep({ onNext }: IntroStepProps) {
  return (
    <>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[0.9] tracking-tight">
              Meet your personal<br />
              <span className="font-normal">chief of staff</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Circle */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Enhanced Gradient Glow Background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8EBEFE]/85 via-[#73A5FF]/65 to-[#5087FF]/90 blur-3xl opacity-90 animate-pulse"></div>
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#6095FF]/70 to-[#548DFF]/60 blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#73A5FF]/50 to-[#6A9DFF]/65 blur-xl opacity-80 animate-pulse" style={{ animationDelay: '1.6s' }}></div>
          
          {/* White Circle */}
          <div className="relative w-80 h-80 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-20 right-8 md:right-16 lg:right-20 z-20">
        <div className="flex items-end justify-between">
          {/* Enhanced Sound Toggle */}
          <button className="flex items-center space-x-4 px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-white/90 hover:border-gray-300/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6 9H4a1 1 0 00-1 1v4a1 1 0 001 1h2l4 4V5L6 9z" />
            </svg>
            <span className="text-sm tracking-wider uppercase">Sound On</span>
          </button>

          {/* Command Button */}
          <button
            onClick={onNext}
            className="relative overflow-hidden px-10 py-4 rounded-2xl text-white text-sm tracking-wider uppercase bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] hover:from-[#0d0d0d] hover:via-[#1f1f1f] hover:to-[#0d0d0d] shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-gray-700/40 hover:border-gray-600/60 transform hover:scale-[1.03] hover:-translate-y-1.5 focus:ring-gray-400/50 transition-all duration-400 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-400 after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-b after:from-white/6 after:via-transparent after:to-transparent after:pointer-events-none"
          >
            <span className="relative z-10">TAKE COMMAND →</span>
          </button>
        </div>
      </div>
    </>
  )
} 