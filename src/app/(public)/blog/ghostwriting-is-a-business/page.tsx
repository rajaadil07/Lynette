import Link from 'next/link'

export default function GhostwritingIsABusinessPost() {
  return (
    <div className="min-h-screen bg-[#1B1B1F]">
      <article className="mx-auto max-w-3xl px-6 lg:px-8 pt-48 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-20">
          <Link 
            href="/blog" 
            className="text-white hover:text-white/80 transition-colors font-inter text-sm font-medium inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
          >
            ← Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-20">
          <h1 className="text-3xl lg:text-5xl font-medium text-white mb-12 font-avenir leading-tight tracking-tight">
            Ghostwriting Is a Business. Start Running It Like One.
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-white/40 font-inter">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-xs font-medium text-white">C</span>
              </div>
              <span className="font-medium">Connor</span>
            </div>
            <span className="text-white/20">•</span>
            <span>August 2025</span>
            <span className="text-white/20">•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-none">
          <div className="text-white/70 font-inter leading-relaxed space-y-10 text-lg font-light">
            <p className="text-xl font-normal text-white leading-relaxed">
              Realize this, fellow ghosts.
            </p>
            
            <p className="leading-loose">
              You&apos;re not just a writer. You&apos;re the operator of a business. And if you&apos;re still managing client chaos with post-its and a prayer, you&apos;re building on sand.
            </p>
            
            <p className="leading-loose">
              That&apos;s why we made GhostSync.
            </p>
            
            <p className="leading-loose">
              It&apos;s not just a tool. It&apos;s the operations nerve center for ghostwriters who&apos;ve outgrown Google Drive mess and back-and-forth &quot;Did you get this?&quot; emails. I&apos;m not talking about another platform that promises clarity and delivers clutter. I&apos;m talking about one that actually knows what a ghostwriter&apos;s day looks like.
            </p>
            
            <p className="text-xl font-normal text-white mt-16 mb-10 leading-relaxed">
              Because we, the GhostSync team, live it.
            </p>

            <div className="bg-white/3 border-l-2 border-white/20 p-10 my-16 rounded-r-lg">
              <p className="text-lg font-light leading-loose">
                Most ghostwriters I know are flying by instinct.
              </p>
              <p className="mt-6 leading-loose">
                And let me be honest. Instinct works. Until it doesn&apos;t. Until you forget where that contract was saved, your editor ghosts you, until your client replies to an old email thread asking for something you definitely already delivered.
              </p>
              <p className="mt-6 leading-loose">
                It doesn&apos;t make you disorganized. It makes you human.
              </p>
              <p className="mt-6 font-normal text-white leading-loose">
                But &quot;human&quot; doesn&apos;t scale.
              </p>
            </div>

            <p className="leading-loose">
              And if you want to scale this thing and want to move from service provider to brand then you need a system that moves like you do.
            </p>
            
            <p className="text-xl font-normal text-white mt-12 leading-relaxed">
              GhostSync is that system.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              What makes GhostSync different?
            </h2>
            
            <p className="mb-8 leading-loose">
              Here&apos;s what we built in because we needed it ourselves:
            </p>
            
            <ul className="space-y-8 ml-0 list-none">
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">Branded onboarding forms that don&apos;t feel like a 2005 Google Sheet.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">A project tracker that shows you, your client, and your vendors exactly where things stand.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">Secure file sharing that doesn&apos;t involve seven apps and a smoke signal.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">Clean messaging. No more mixing up client feedback with your weekend plans.</span>
              </li>
            </ul>
            
            <p className="mt-10 leading-loose">
              This isn&apos;t some bloated CRM with features you&apos;ll never use. It&apos;s a platform designed for people who write behind the scenes with precision.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              Why build it at all?
            </h2>
            
            <p className="font-normal text-white leading-loose">
              Because ghostwriters deserve infrastructure. Period.
            </p>
            
            <p className="leading-loose">
              And until now, no one was building for us. Not really. Not the way we work. We had to force ourselves into onboarding platforms made for businesses not shaped and made like ours.
            </p>
            
            <p className="leading-loose">
              The ghostwriting industry is exploding with more creators, experts, and CEOs that want a book, and compelling content. But with that growth comes demand. Real demand. Tight deadlines, complex teams, NDAs, invoices, redlines, scope creep, and yes &quot;can you send that again?&quot;
            </p>
            
            <p className="text-xl font-normal text-white mt-12 leading-relaxed">
              We&apos;re not freelancers. We&apos;re founders. GhostSync was made to reflect that.
            </p>

            <div className="bg-white/3 border border-white/10 p-12 rounded-lg my-20">
              <p className="text-lg font-light text-white mb-8 leading-loose">
                If you&apos;ve ever said, &quot;I just need one place to keep everything straight,&quot; we made this for you.
              </p>
              <p className="leading-loose">
                Not for the tech bros. Not for the content mills. Not for the agencies who think ghostwriting is just another deliverable.
              </p>
              <p className="mt-8 font-normal text-white leading-loose">
                This is for the ghostwriter who knows how to write like a CEO and needs tools that back it up.
              </p>
            </div>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              So who&apos;s it for?
            </h2>
            
            <ul className="space-y-8 ml-0 list-none">
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">The ghost juggling three clients and ten Google Docs</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">The one-woman writing studio who&apos;s ready to look like a team</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">The freelancer who wants to stop winging it</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                <span className="leading-loose">The pro who&apos;s tired of explaining basic process over and over</span>
              </li>
            </ul>
            
            <p className="mt-16 text-xl font-normal text-white leading-relaxed">
              Sound like you?
            </p>
            
            <p className="text-xl leading-relaxed">
              Good. You&apos;re our people.
            </p>

            <div className="bg-white text-[#1B1B1F] p-16 rounded-xl my-20">
              <h3 className="text-2xl font-medium mb-8 font-avenir">
                We&apos;re in beta.
              </h3>
              <p className="mb-8 font-inter font-light leading-relaxed text-lg">
                That means early access. Real-time feature shaping. Exclusive perks.
              </p>
              <p className="font-inter font-light leading-relaxed text-lg">
                We&apos;re building GhostSync with the people who use it. Not for mass appeal. For precision. For people who want to operate sharply.
              </p>
              <p className="mt-8 font-inter font-light leading-relaxed text-lg">
                If you&apos;re down to help shape the future of this industry while finally getting your own ops together we&apos;d love to have you.
              </p>
            </div>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              Here&apos;s the bottom line:
            </h2>
            
            <p className="text-xl font-normal text-white leading-relaxed">
              Ghostwriting is a business. A real one.
            </p>
            
            <p className="text-lg leading-loose mt-8">
              And it deserves real tools.
            </p>
            
            <p className="text-lg leading-loose">
              You&apos;ve already got the talent. Let GhostSync handle the rest.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-24 pt-16 border-t border-white/10">
              <Link 
                href="/waitlist"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200 font-inter"
              >
                Join Beta Waitlist
              </Link>
            </div>

            <div className="mt-16 text-right">
              <p className="text-white/30 font-inter font-light">
                — Connor
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}