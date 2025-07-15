'use client'

const steps = [
  {
    number: '01',
    title: 'Sign up in seconds',
    description: 'Create your account and set up your workspace. No credit card required to start.'
  },
  {
    number: '02',
    title: 'Onboard your client',
    description: 'Send a magic link. Your client answers key questions and uploads materials in one smooth flow.'
  },
  {
    number: '03',
    title: 'Collaborate seamlessly',
    description: 'Write, share drafts, and get feedback all in one place. No more email chaos.'
  },
  {
    number: '04',
    title: 'Deliver like a pro',
    description: 'Hit milestones, process payments, and wrap up projects with style. Happy clients, every time.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-0 pb-32 lg:pb-40 bg-[#1B1B1F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Get started in minutes,
            <span className="block font-lora font-normal text-[#FBC02D] mt-3">
              not days
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#F8F9FA]/60 max-w-2xl mx-auto font-inter">
            From signup to your first project, we've eliminated every friction point.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F8F9FA]/10 text-[#5D9CEC] font-inter text-lg font-medium mb-6 border border-[#F8F9FA]/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-inter font-medium text-[#F8F9FA] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#F8F9FA]/60 font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}