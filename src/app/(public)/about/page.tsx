import Link from 'next/link'

const values = [
  {
    title: 'Writer Made',
    description: 'Built from the ground up by real ghostwriters, GhostSync understands your business and gives you tools to run it flawlessly.',
    icon: '✍️'
  },
  {
    title: 'Privacy First',
    description: 'Your work is confidential. We built security and discretion into every layer of the platform.',
    icon: '🔒'
  },
  {
    title: 'Clarity',
    description: 'No more inbox hunts or scattered files. GhostSync centralizes everything, keeping clients aligned, vendors focused, and your workflow smooth.',
    icon: '⚡'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1B1B1F]">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 pt-48 pb-24">
        <div className="text-center mb-32">
          <h1 className="text-6xl lg:text-8xl font-semibold text-white mb-10 font-avenir tracking-tight leading-none">
            About
          </h1>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-10"></div>
          <p className="text-lg text-white/60 font-inter max-w-xl mx-auto leading-relaxed font-light">
            Revolutionizing the way professional ghostwriters work
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-32">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-12 font-avenir text-center">
            Our Story
          </h2>
          <div className="space-y-8 text-white/70 font-inter text-lg leading-relaxed font-light">
            <p>
              We&apos;re a collective of experienced ghostwriters who&apos;ve worked with individuals, subject-matter experts, top publishers, social media platforms like LinkedIn and X, politicians, thought leaders, public figures, and more. Across all these projects, one thing has remained clear: the workflow processes could be better.
            </p>
            <p className="text-xl font-normal text-white">
              So we built a better one.
            </p>
            <p>
              GhostSync isn&apos;t just another project management tool. It&apos;s purpose-built for the unique challenges of ghostwriting—from managing multiple voices and styles to handling sensitive information with the discretion our industry demands.
            </p>
            <p>
              From onboarding to delivery, we&apos;ve streamlined the entire process—keeping everyone aligned and working smarter. Because when you&apos;re writing someone else&apos;s story, you need tools that understand your story too.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-16 font-avenir text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/3 border border-white/10 rounded-lg p-8">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-medium text-white mb-4 font-avenir">
                  {value.title}
                </h3>
                <p className="text-white/60 font-inter leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <div className="bg-white/3 border border-white/10 rounded-xl p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-8 font-avenir">
            Ready to transform your ghostwriting workflow?
          </h2>
          <p className="text-lg text-white/60 mb-12 font-inter font-light max-w-2xl mx-auto">
            Join the growing community of professional ghostwriters who are running their businesses more efficiently with GhostSync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1B1B1F] font-medium rounded-lg hover:bg-white/95 transition-all duration-200 font-inter"
            >
              Join Waitlist
            </Link>
            <a 
              href="mailto:ghostsync2025@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200 font-inter"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
