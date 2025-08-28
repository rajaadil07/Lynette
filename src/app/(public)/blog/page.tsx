import Link from 'next/link'

const blogPosts = [
  {
    slug: 'ghostwriting-is-a-business',
    title: 'Ghostwriting Is a Business. Start Running It Like One.',
    excerpt: 'You\'re not just a writer. You\'re the operator of a business. And if you\'re still managing client chaos with post-its and a prayer, you\'re building on sand.',
    author: 'Connor',
    date: 'August 2025',
    readTime: '5 min read',
    featured: true
  },
  {
    slug: 'steal-our-stack',
    title: 'Steal Our Stack: 4 Tools That Change the Game',
    excerpt: 'Your stack is your toolkit, a curated set of platforms and resources that keep your business running smoothly. Today, I\'m pulling back the curtain and letting you steal ours.',
    author: 'Emma',
    date: 'August 2025',
    readTime: '7 min read',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#1B1B1F]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-48 pb-20">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-6xl lg:text-8xl font-semibold text-white mb-10 font-avenir tracking-tight leading-none">
            The Sync
          </h1>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-10"></div>
          <p className="text-lg text-white/60 font-inter max-w-xl mx-auto leading-relaxed font-light">
            Insights, strategies, and industry updates for ghostwriters
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-20">
          {blogPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {post.featured && (
                  <div className="mb-8">
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 backdrop-blur-sm rounded-md border border-white/10">
                      Featured Article
                    </span>
                  </div>
                )}
                
                <h2 className="text-2xl lg:text-4xl font-medium text-white mb-6 font-avenir leading-tight group-hover:text-white/90 transition-colors duration-300 max-w-4xl">
                  {post.title}
                </h2>
                
                <p className="text-base lg:text-lg text-white/60 mb-8 font-inter leading-relaxed max-w-2xl font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-white/40 font-inter font-light">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-white/8 rounded-full flex items-center justify-center border border-white/10">
                        <span className="text-xs font-medium text-white/80">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span className="text-white/20">•</span>
                    <span>{post.date}</span>
                    <span className="text-white/20">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="inline-flex items-center text-sm text-white/50 font-medium group-hover:text-white/80 transition-colors duration-300">
                    Read more
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-40">
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/8 p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-medium text-white mb-6 font-avenir">
                Stay updated
              </h2>
              <p className="text-base text-white/50 mb-12 font-inter leading-relaxed font-light">
                Get the latest insights on running a successful ghostwriting business delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-300 font-inter backdrop-blur-sm text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-[#1B1B1F] font-medium rounded-lg hover:bg-white/95 transition-all duration-300 font-inter text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}