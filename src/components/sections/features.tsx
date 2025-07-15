'use client'

const features = [
  {
    number: '01',
    title: 'Client Dashboard',
    description: 'Keep clients in the loop with real-time progress tracking, milestone updates, and project insights.'
  },
  {
    number: '02',
    title: 'Smart Onboarding',
    description: 'Transform scattered emails into a smooth, professional intake process that captures everything upfront.'
  },
  {
    number: '03',
    title: 'Document Hub',
    description: 'Organize every draft with automatic version control, inline feedback, and collaborative editing tools.'
  },
  {
    number: '04',
    title: 'Project Timeline',
    description: 'Stay on track with visual timelines, smart reminders, and milestone tracking that keeps projects moving.'
  },
  {
    number: '05',
    title: 'Instant Payments',
    description: 'Streamline billing with milestone-based invoicing and automated payment processing built right in.'
  },
  {
    number: '06',
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks like follow-ups and reminders, so you can focus on delivering great content.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative pt-32 lg:pt-40 pb-32 lg:pb-40 bg-[#1B1B1F] overflow-hidden">
      {/* Background gradient for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5D9CEC]/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header with better SEO structure */}
        <header className="text-center mb-24 lg:mb-32">
          <h2 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Built for the way
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              you actually work
            </span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-3xl mx-auto font-inter leading-relaxed">
            Everything you need to manage client projects professionally, all in one platform.
          </p>
        </header>

        {/* Features List with enhanced visual hierarchy */}
        <div className="mt-20">
          <div className="space-y-0">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-t border-[#F8F9FA]/10 first:border-t-0"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5D9CEC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Number with enhanced styling */}
                <div className="lg:col-span-1 relative">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5D9CEC]/10 text-[#5D9CEC] font-inter text-sm font-semibold group-hover:bg-[#5D9CEC]/20 transition-colors duration-300">
                    {feature.number}
                  </span>
                </div>

                {/* Title with better typography */}
                <div className="lg:col-span-4 relative">
                  <h3 className="font-inter text-2xl lg:text-3xl font-medium text-[#F8F9FA] group-hover:text-[#FBC02D] transition-all duration-300 tracking-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Description with improved readability */}
                <div className="lg:col-span-6 lg:col-start-7 relative">
                  <p className="font-inter text-base lg:text-lg text-[#F8F9FA]/70 leading-relaxed group-hover:text-[#F8F9FA]/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

              </article>
            ))}
          </div>
        </div>

        {/* Enhanced bottom section */}
        <footer className="mt-32 text-center">
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-[#F8F9FA]/20 flex-1 max-w-xs" />
            <p className="font-inter text-sm lg:text-base text-[#F8F9FA]/50 uppercase tracking-widest">
              Professional tools for professional writers
            </p>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-[#F8F9FA]/20 flex-1 max-w-xs" />
          </div>
        </footer>
      </div>
    </section>
  )
}