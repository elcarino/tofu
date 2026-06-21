import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { GlassCard } from '../components/GlassCard';
import { Code, Smartphone, PenTool, Layout, TrendingUp, Box, Layers, ArrowRight, Star } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import globalNetworkMap from '../assets/images/global_network_map_1781851835931.jpg';
import heroBg from '../assets/images/hero_bg_grid_1781852395970.jpg';

const TESTIMONIALS = [
  { name: "Sarah Jenkins", role: "CEO, TechFlow", review: "TOFU completely transformed our digital presence. The new platform is blazing fast and our conversion rate is up 40%." },
  { name: "Michael Chen", role: "Founder, InnovateNow", review: "The team's attention to detail is unmatched. They understood our vision perfectly and delivered ahead of schedule." },
  { name: "Emma Rodriguez", role: "Marketing Director, Horizon", review: "Their UI/UX design work is stellar. Our users constantly compliment the intuitive layout of our app." },
  { name: "David Foster", role: "CTO, BuildRight", review: "Working with them felt like an extension of our own team. Highly professional, responsive, and talented." },
  { name: "Olivia Hayes", role: "Operations Lead, Apex", review: "The custom CRM they built for us streamlined our entire workflow. We're saving hundreds of hours every month." },
  { name: "James Wilson", role: "Managing Partner, Vector", review: "The 3D visualizations for our new developments have been a game-changer for our pre-sales team." },
  { name: "Anna Schmidt", role: "E-commerce Manager, TrendSet", review: "Our website's redesign looks stunning and performs exceptionally well. Sales have never been better." },
  { name: "Robert Nakano", role: "Founder, FinTech Next", review: "They guided us from MVP to a full product flawlessly. I couldn't recommend them more highly for complex builds." },
  { name: "Elena Rostova", role: "Director, Global Reach", review: "Their digital marketing strategy put us on the map locally. We've seen a massive surge in qualified leads." }
];



export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/80 to-navy-900 z-10" />
          <img 
            src="https://media.jogroup.eu/jogroup.eu/wp-content/uploads/2020/09/JO-Group-Digital-Transformation_sito-1400x760px-1024x556.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue-300/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-blue-100 to-glow-blue-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                Digital Opportunities
              </span>
            </h1>
            <p className="text-base md:text-lg text-text-body max-w-3xl mx-auto mb-10 leading-relaxed">
              TOFU is a Business Growth & Digital Solutions Company helping startups and businesses grow through technology, strategy, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto text-base h-12 px-8">
                Get Free Consultation
              </Button>
              <Button href="/portfolio" variant="secondary" className="w-full sm:w-auto text-base h-12 px-8">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-glow-blue-200 text-xs font-bold tracking-widest uppercase mb-3 block">What We Do</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Complete Digital Solutions Tailored to Your Business</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hoverEffect className="h-full flex flex-col items-start gap-4 p-6 md:p-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <service.icon className="w-8 h-8 text-glow-blue-100" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
                  <p className="text-text-body text-sm flex-grow leading-relaxed">{service.shortDesc}</p>
                  <Button href="/services" variant="secondary" className="!px-0 !py-0 !bg-transparent !border-none hover:!bg-transparent text-glow-blue-200 hover:text-white !justify-start gap-2 text-sm mt-4 font-semibold">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden">
        {/* Top border line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose TOFU?</h2>
                <p className="text-text-body mb-8 text-base leading-relaxed">
                  We don't just build software. We build the exact tools your business needs to grow, without the recycled templates or bloated tech stacks.
                </p>
                <ul className="space-y-4 text-sm">
                  {[
                    "Full-cycle development from concept to launch",
                    "Fully custom solutions — no recycled templates",
                    "Modern, scalable, high-performance builds",
                    "Fast delivery with ongoing support",
                    "A global team with a business-first mindset"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                       <span className="mt-1 w-5 h-5 rounded-full bg-glow-blue-300/20 border border-glow-blue-300/50 flex items-center justify-center shrink-0">
                         <div className="w-1.5 h-1.5 rounded-full bg-glow-blue-100"></div>
                       </span>
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="lg:w-5/12 mx-auto relative group">
               <div className="absolute inset-0 bg-glow-blue-300/30 blur-[60px] rounded-full group-hover:bg-glow-blue-100/40 transition-colors duration-700"></div>
               <GlassCard className="relative z-10 aspect-video flex items-center justify-center overflow-hidden p-0 !border-glow-blue-300/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] transition-all duration-500 rounded-2xl w-full">
                 <img 
                   src={globalNetworkMap} 
                   alt="Global tech network map" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                 />
               </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-glow-blue-200 text-xs font-bold tracking-widest uppercase mb-3 block">Client Stories</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard hoverEffect className="h-full flex flex-col pt-8">
                  <div className="flex text-glow-blue-100 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/90 italic mb-6 flex-grow">"{testimonial.review}"</p>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-body mt-1">{testimonial.role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-glow-blue-300/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-text-body mb-8">Have an idea in mind? Let's turn it into a powerful digital product.</p>
            <Button href="/contact" variant="primary" className="h-12 px-8 text-base">
              Start a Conversation
            </Button>
         </div>
      </section>
    </div>
  );
}
