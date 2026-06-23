import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { ChevronDown, Calendar, Tag } from 'lucide-react';
import { Button } from '../components/Button';

const ARTICLES = [
  {
    id: 1,
    title: "How Much Does a Website Cost in 2026?",
    date: "August 25, 2025",
    category: "Insights",
    summary: "It's one of the first questions every business owner asks. Here's what actually determines website pricing in 2026, and why two businesses can pay very different amounts.",
    content: (
      <>
        <h3 className="font-bold text-white mt-6 mb-2">It Depends on What You're Actually Building</h3>
        <p className="mb-4">A simple landing page promoting one offer is a completely different project from a multi-page business website, which is again different from an eCommerce store processing payments, or a custom web application with logins, dashboards, and bookings. Each step up adds design time, development complexity, and testing requirements.</p>

        <h3 className="font-bold text-white mb-2">What Actually Drives the Price</h3>
        <p className="mb-4">Beyond the page count, the real cost drivers are: how custom the design needs to be, how much functionality is involved (payments, bookings, user accounts, search, filters), how many third-party tools need to be integrated (CRMs, payment gateways, marketing platforms), and how much content needs to be written, translated, or migrated from an old site.</p>

        <h3 className="font-bold text-white mb-2">How AI Has Changed Web Development Costs in 2026</h3>
        <p className="mb-4">AI-assisted development tools have sped up a lot of the repetitive parts of building a website — boilerplate code, basic layouts, first-draft copy. That has shifted where the cost actually goes: less time spent on routine setup, more time spent where it matters — UX strategy, custom functionality, security, and making sure the site actually fits the business. A well-run agency uses AI to move faster without lowering the quality of the thinking behind the site.</p>

        <h3 className="font-bold text-white mb-2">Hidden Costs People Forget</h3>
        <p className="mb-4">Domain registration, hosting, SSL certificates, ongoing maintenance, content creation, and SEO setup are often left out of the initial budget conversation — but they're recurring realities of owning a website, not one-time extras.</p>

        <h3 className="font-bold text-white mb-2">So What's a Realistic Range?</h3>
        <p className="mb-4">As a general industry pattern in 2026: simple landing pages tend to sit at the lower end of the spectrum, full business websites in the middle, and eCommerce stores or custom web applications at the higher end — with the final number always shaped by the specific features involved.</p>
        <p className="mb-6">There's no honest flat number that applies to every business, which is exactly why TOFU doesn't publish blanket pricing. Every project gets a free consultation and a quote based on what you actually need — not a generic package.</p>
        
        <div className="p-6 bg-navy-900 border border-white/10 rounded-xl text-center">
          <p className="font-bold text-white mb-4">Want a clear, no-obligation estimate for your project?</p>
          <Button href="/contact" variant="primary">Get a Free Consultation</Button>
        </div>
      </>
    )
  },
  {
    id: 2,
    title: "Why Your Business Needs a Professional Website in 2026",
    date: "September 10, 2025",
    category: "Strategy",
    summary: "If your business still doesn't have a proper website — or is running on something built years ago and never updated — here's why that's costing you more than you think.",
    content: (
      <>
        <h3 className="font-bold text-white mt-6 mb-2">Your Website Is Your First Impression</h3>
        <p className="mb-4">Before most customers ever call, message, or visit in person, they look you up. A professional, fast, well-designed website signals that you're established and trustworthy. A dated or broken one sends the opposite message — even if the business behind it is excellent.</p>

        <h3 className="font-bold text-white mb-2">It's Where AI Assistants Find You Too</h3>
        <p className="mb-4">In 2026, more customers are using AI-powered search and chat assistants to find businesses, compare options, and get recommendations — not just typing into a search bar. A well-structured website with clear, organized information about what you offer makes it far easier for these tools to find and recommend your business in the first place.</p>

        <h3 className="font-bold text-white mb-2">Social Media Isn't a Substitute</h3>
        <p className="mb-4">A social media page is rented space — you don't control the algorithm, the layout, or whether the platform changes its rules tomorrow. A website is an asset you own outright, fully under your control.</p>

        <h3 className="font-bold text-white mb-2">It Works While You Sleep</h3>
        <p className="mb-4">A website doesn't close at 6 PM. It answers questions, shows your work, and captures leads around the clock — including the customers who only have time to look you up at midnight.</p>

        <h3 className="font-bold text-white mb-2">Local Customers Expect It</h3>
        <p className="mb-4">Whether someone finds you through a Google search or a Google Business Profile, they expect a working website to confirm you're real and see what you offer before they ever reach out.</p>
        <p className="mb-6">A professional website isn't a luxury anymore — it's the baseline expectation. The businesses that treat it as an investment, not an afterthought, are the ones customers trust first.</p>

        <div className="p-6 bg-navy-900 border border-white/10 rounded-xl text-center">
          <p className="font-bold text-white mb-4">Ready to build a website that actually works for your business?</p>
          <Button href="/contact" variant="primary">Talk to TOFU</Button>
        </div>
      </>
    )
  },
  {
    id: 3,
    title: "Best UI/UX Practices for Startups in 2026",
    date: "October 05, 2025",
    category: "Design",
    summary: "Startups rarely lose users because the idea was bad — they lose them because the experience was confusing, slow, or untrustworthy. Here's what matters most.",
    content: (
      <>
        <h3 className="font-bold text-white mt-6 mb-2">Start with Clarity, Not Cleverness</h3>
        <p className="mb-4">Your homepage or app's first screen should answer one question instantly: what is this, and why should I care? Clever, abstract design that takes a moment to "figure out" loses users before they ever get there.</p>

        <h3 className="font-bold text-white mb-2">Design Mobile-First</h3>
        <p className="mb-4">Most traffic for most startups arrives on a phone. Designing for the smallest screen first — then expanding up to desktop — forces genuinely necessary decisions about what stays and what gets cut.</p>

        <h3 className="font-bold text-white mb-2">Make Every CTA Obvious</h3>
        <p className="mb-4">Every screen should have one clear primary action. When users are given five equally-weighted buttons, they tend to click none of them.</p>

        <h3 className="font-bold text-white mb-2">Speed Is a UX Feature</h3>
        <p className="mb-4">A beautiful interface that takes six seconds to load loses users before the beauty even matters. Optimized images, lazy loading, and lean code aren't just technical concerns — they're part of the user experience itself.</p>

        <h3 className="font-bold text-white mb-2">Test With Real Users Early</h3>
        <p className="mb-4">Wireframes and prototypes should be tested before a single line of production code is written. It's far cheaper to fix a confusing flow on paper than after launch.</p>

        <h3 className="font-bold text-white mb-2">Build a Consistent Design System</h3>
        <p className="mb-4">Reusable components, consistent spacing, and a predictable visual language make a product feel polished and trustworthy — even when built fast, which most startups have to do.</p>

        <h3 className="font-bold text-white mb-2">Aesthetic Trends Still Need to Serve Usability</h3>
        <p className="mb-4">Dark themes and glassmorphic interfaces are popular in 2026 for good reason — they look modern and premium. But contrast, readability, and accessibility always come before trend-following.</p>
        <p className="mb-6">Good UI/UX isn't about adding more — it's about removing everything that gets in the way of the user reaching their goal.</p>

        <div className="p-6 bg-navy-900 border border-white/10 rounded-xl text-center">
          <p className="font-bold text-white mb-4">Building a startup product and need it designed right the first time?</p>
          <Button href="/contact" variant="primary">Let's talk</Button>
        </div>
      </>
    )
  },
  {
    id: 4,
    title: "How Automation Improves Business Efficiency",
    date: "November 12, 2025",
    category: "Technology",
    summary: "Every business eventually hits the same wall: growth requires more hours than the team actually has. Automation is how businesses keep growing.",
    content: (
      <>
        <h3 className="font-bold text-white mt-6 mb-2">Automation Removes the Repetitive Work</h3>
        <p className="mb-4">Manual data entry, repetitive follow-up emails, appointment reminders, and basic scheduling are exactly the kind of tasks that eat hours without requiring real judgment — and exactly the kind of tasks automation handles best.</p>

        <h3 className="font-bold text-white mb-2">Better Data, Better Decisions</h3>
        <p className="mb-4">A centralized CRM or custom dashboard turns scattered spreadsheets and notes into one clear view of the business — making it possible to spot trends and make decisions based on real numbers instead of guesswork.</p>

        <h3 className="font-bold text-white mb-2">Marketing That Runs Itself (Mostly)</h3>
        <p className="mb-4">Automated email sequences, lead nurturing flows, and Google Business Profile management mean potential customers get timely, consistent communication without someone manually managing every step.</p>

        <h3 className="font-bold text-white mb-2">AI-Powered Support, Without Losing the Human Touch</h3>
        <p className="mb-4">AI assistants and chatbots can now handle common questions instantly, 24/7 — freeing the human team to focus on the conversations that actually need a person's judgment and care.</p>

        <h3 className="font-bold text-white mb-2">It Scales With You</h3>
        <p className="mb-4">The real advantage of automation isn't just saving time today — it's that the systems keep working the same way whether you have 10 customers or 10,000, without a proportional increase in staff or stress.</p>
        <p className="mb-6">Automation isn't about replacing people — it's about freeing them from the work that shouldn't have needed a person in the first place, so they can focus on the work that does.</p>

        <div className="p-6 bg-navy-900 border border-white/10 rounded-xl text-center">
          <p className="font-bold text-white mb-4">Want to find out what in your business could run on autopilot?</p>
          <Button href="/contact" variant="primary">Let's map it out together</Button>
        </div>
      </>
    )
  }
];

export function Blog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900 z-10" />
          <motion.img 
            src="https://images.unsplash.com/photo-1518655048521-f130df041f66?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="Blog Background"
            className="w-full h-full object-cover opacity-30"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-glow-blue-300/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Insights & Ideas</h1>
            <p className="text-base md:text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
              Thoughts on design, development, and scaling your business in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {ARTICLES.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 md:p-8 cursor-pointer group" hoverEffect>
                  <div 
                    onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-4 text-xs font-medium text-text-body mb-3">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                        <span className="flex items-center gap-1.5 text-glow-blue-200"><Tag className="w-3.5 h-3.5" />{article.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white group-hover:text-glow-blue-100 transition-colors">{article.title}</h2>
                      
                      <AnimatePresence>
                        {expandedId !== article.id && (
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-text-body text-sm mt-3 line-clamp-2"
                          >
                            {article.summary}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <button className="p-2 border border-white/10 rounded-full bg-navy-900/5 text-white shrink-0 group-hover:border-glow-blue-300 transition-colors">
                       <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedId === article.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedId === article.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                         <div className="pt-6 border-t border-white/10 mt-6 text-text-body text-sm leading-relaxed">
                           {article.content}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
