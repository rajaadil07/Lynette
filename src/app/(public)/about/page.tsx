import Image from 'next/image'
import Link from 'next/link'

const team = [
  {
    name: 'Connor Martin',
    image: '/connor.png',
    bio: 'Connor brings over a decade of experience in ghostwriting and content strategy. Having worked with Fortune 500 executives and bestselling authors, he recognized the need for a platform built specifically for the unique workflows of professional ghostwriters.'
  },
  {
    name: 'Emma Saunders',
    image: '/emma.png',
    bio: 'Emma specializes in optimizing creative workflows and project management systems. With her background in publishing and digital operations, she ensures GhostSync runs smoothly for writers and clients alike.'
  },
  {
    name: 'Megan Hailey',
    image: '/advisor.png',
    bio: 'Megan advises on product strategy and market positioning. As a former ghostwriter turned tech entrepreneur, she brings unique insights into the intersection of writing services and technology.'
  }
]

const values = [
  {
    title: 'Built by Writers',
    description: 'We&apos;ve been in your shoes. Every feature is designed with the ghostwriter&apos;s workflow in mind.',
    icon: '✍️'
  },
  {
    title: 'Privacy First',
    description: 'Your work is confidential. We built security and discretion into every layer of the platform.',
    icon: '🔒'
  },
  {
    title: 'Simplicity Matters',
    description: 'No bloat, no complexity. Just the tools you need to run your ghostwriting business efficiently.',
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
            Building the operating system for professional ghostwriters
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-32">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-12 font-avenir text-center">
            Our Story
          </h2>
          <div className="space-y-8 text-white/70 font-inter text-lg leading-relaxed font-light">
            <p>
              We&apos;re a collective of seasoned ghostwriters who&apos;ve worked with authors, experts, publishers, platforms, and public figures. Across every project, one thing was clear: the workflow needed work.
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

      {/* Team Section */}
      <section className="bg-white/[0.02] backdrop-blur-sm border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <h2 className="text-3xl lg:text-4xl font-medium text-white mb-16 font-avenir text-center">
            Meet the Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {team.map((member, index) => (
              <div key={index} className="group">
                {/* Image Container - Perfectly aligned */}
                <div className="mb-10 relative mx-auto w-64 h-64 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1F]/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Member Info */}
                <h3 className="text-xl font-medium text-white mb-4 font-avenir text-center">
                  {member.name}
                </h3>
                <p className="text-white/60 font-inter text-sm leading-relaxed font-light text-center">
                  {member.bio}
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