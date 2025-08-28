import Link from 'next/link'

export default function StealOurStackPost() {
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
            Steal Our Stack: 4 Tools That Change the Game
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-white/40 font-inter">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-xs font-medium text-white">E</span>
              </div>
              <span className="font-medium">Emma</span>
            </div>
            <span className="text-white/20">•</span>
            <span>August 2025</span>
            <span className="text-white/20">•</span>
            <span>7 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-none">
          <div className="text-white/70 font-inter leading-relaxed space-y-10 text-lg font-light">
            <p className="leading-loose">
              As you know by now, fellow Ghost, ghostwriting is more than stringing words together. It&apos;s running a business, managing client relationships, and delivering excellence under pressure. If you&apos;re serious about scaling your ghostwriting game, you need more than creativity. You need a stack. Your stack is your toolkit, a curated set of platforms and resources that keep your business running smoothly.
            </p>
            
            <p className="leading-loose">
              At GhostSync, we know this because we live and breathe this. And because we&apos;re building our platform to make ghostwriter&apos;s lives easier, we know exactly what tools separate hobbyists from professionals. Today, I&apos;m pulling back the curtain and letting you steal our stack.
            </p>
            
            <p className="text-xl font-normal text-white mt-12 leading-relaxed">
              These are the four tools every professional ghostwriter needs to not just survive—but win.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              1. ProWritingAid: Your On-Demand Editor
            </h2>
            
            <p className="leading-loose">
              Every ghostwriter has faced that moment your draft feels solid, but you know it could read sharper, tighter, cleaner. Enter ProWritingAid.
            </p>
            
            <p className="leading-loose">
              This isn&apos;t just spellcheck. ProWritingAid digs deep into style, pacing, readability, and clarity. It flags sticky sentences, repetitive phrasing, and filler words that sneak into even the strongest writer&apos;s drafts. It&apos;s like having a line editor riding shotgun but without the billable hours.
            </p>

            <div className="bg-white/3 border-l-2 border-white/20 p-10 my-16 rounded-r-lg">
              <p className="text-lg font-normal text-white mb-6 leading-loose">
                Why it matters for ghostwriters:
              </p>
              <ul className="space-y-4 ml-0 list-none">
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Keeps your client drafts polished and professional from the first pass.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Saves time in revisions so you can move faster without sacrificing quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Instills confidence your clients don&apos;t see messy drafts, only the clean, ready-for-delivery product.</span>
                </li>
              </ul>
            </div>
            
            <p className="font-normal text-white leading-loose">
              Bottom line: ProWritingAid lets you show up like a pro, every time.
            </p>
            
            <p className="leading-loose">
              The best part is that it&apos;s free, and even their premium subscription is affordable. Check out ProWritingAid <a href="#" className="text-white/70 underline hover:text-white transition-colors">here</a>.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              2. WebEx: Record, Recap, and Remember Everything
            </h2>
            
            <p className="leading-loose">
              Client conversations are packed with jewels: stories, insights, and those little details that shape entire chapters and compelling content. But trying to jot notes while listening? That&apos;s a guaranteed way to miss the magic. That&apos;s why we recommend WebEx.
            </p>
            
            <p className="leading-loose">
              Beyond video calls, WebEx allows you to record entire sessions and provides recap summaries and searchable transcripts. You can revisit the exact moment your client shared that pivotal story, without second-guessing your memory.
            </p>

            <div className="bg-white/3 border-l-2 border-white/20 p-10 my-16 rounded-r-lg">
              <p className="text-lg font-normal text-white mb-6 leading-loose">
                Why it matters for ghostwriters:
              </p>
              <ul className="space-y-4 ml-0 list-none">
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Capture every nuance in real time without splitting focus between listening and writing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Access meeting recap summaries for quick reference when drafting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Store transcripts as a searchable library of client insights.</span>
                </li>
              </ul>
            </div>
            
            <p className="font-normal text-white leading-loose">
              Bottom line: It&apos;s not just a meeting tool. It&apos;s your living archive of client voice and vision.
            </p>
            
            <p className="leading-loose">
              Plus they have a free version, and the monthly subscription is less than fifteen bucks a month.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              3. Ellipsus: A Smarter Alternative to Google Docs
            </h2>
            
            <p className="leading-loose">
              For too long, writers have relied on platforms that quietly use their work to feed machine-learning engines. That&apos;s not the move. Enter Ellipsus, a collaborative writing tool designed with writers in mind.
            </p>
            
            <p className="leading-loose">
              Unlike Google Docs, Ellipsus doesn&apos;t exploit your content to train AI. Instead, it offers real-time collaboration, version history, and intuitive organization features built for teams who take their craft seriously.
            </p>

            <div className="bg-white/3 border-l-2 border-white/20 p-10 my-16 rounded-r-lg">
              <p className="text-lg font-normal text-white mb-6 leading-loose">
                Why it matters for ghostwriters:
              </p>
              <ul className="space-y-4 ml-0 list-none">
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Protects your work from being used without permission.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Enables seamless collaboration with editors, clients, and vendors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Keep your drafts safe, organized, and under your control.</span>
                </li>
              </ul>
            </div>
            
            <p className="font-normal text-white leading-loose">
              Bottom line: Ellipsus respects the writer. And in this business, that&apos;s everything.
            </p>
            
            <p className="leading-loose">
              Oh, and like us they&apos;re in Beta, so as you and your career grow so will they.
            </p>

            <h2 className="text-2xl font-medium text-white mt-24 mb-10 font-avenir">
              4. GhostSync: The Ops Hub You Didn&apos;t Know You Needed
            </h2>
            
            <p className="leading-loose">
              Yeah, it may be a bit biased, but facts are facts. GhostSync is the only platform designed specifically for ghostwriters, freelance writers, ghostwriting agencies and publishers to manage clients, vendors, contractors, and projects in one clean, professional, dashboard.
            </p>
            
            <p className="leading-loose">
              You&apos;ve got your editing handled with ProWritingAid, your transcripts notes covered with WebEx, collaborative editing and non-AI unsolicited content sharing with Ellipsus, and GhostSync ties it all together.
            </p>

            <div className="bg-white/3 border-l-2 border-white/20 p-10 my-16 rounded-r-lg">
              <p className="text-lg font-normal text-white mb-6 leading-loose">
                Why it matters for ghostwriters:
              </p>
              <ul className="space-y-4 ml-0 list-none">
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Branded client onboarding forms that impress from day one.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Centralized hub for files, feedback, easy payment processing, and vendor communication.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/30 mr-4 mt-2 text-xs">•</span>
                  <span className="leading-loose">Streamlined interaction with clients so you all stay on the same page.</span>
                </li>
              </ul>
            </div>
            
            <p className="font-normal text-white leading-loose">
              It&apos;s not just a tool—it&apos;s the difference between looking like a freelancer and operating like a founder.
            </p>

            <div className="bg-white text-[#1B1B1F] p-16 rounded-xl my-20">
              <h3 className="text-2xl font-medium mb-8 font-avenir">
                Final Word: Tools Don&apos;t Replace Talent—They Amplify It
              </h3>
              <p className="mb-8 font-inter font-light leading-relaxed text-lg">
                Ghostwriting will always come down to one thing: can you tell your client&apos;s story better than they can tell it themselves? Tools don&apos;t change that truth. But they do change your capacity.
              </p>
              <p className="font-inter font-light leading-relaxed text-lg">
                The right stack frees your brain for what matters: the writing. Everything else—notes, edits, ops—gets handled.
              </p>
              <p className="mt-8 font-inter font-light leading-relaxed text-lg">
                So steal our stack. Use ProWritingAid, WebEx, Ellipsus, and of course, GhostSync. Build the kind of operation where clients not only trust your talent, ability, and words. They trust your system.
              </p>
            </div>
            
            <p className="text-xl font-normal text-white mt-12 leading-relaxed">
              Show up as a pro, because we don&apos;t just write books. Pros run businesses.
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
                — Emma
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}