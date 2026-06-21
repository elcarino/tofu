import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { SERVICES_DATA } from '../data/services';
import { ChevronDown } from 'lucide-react';

export function Services() {
  const [expandedId, setExpandedId] = useState<string>("");

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900 z-10" />
          <motion.img 
            src="https://leadershipconsulting.com/dev/wp-content/uploads/2017/12/AdobeStock_68129542.jpg"
            alt="Services Background"
            className="w-full h-full object-cover opacity-30"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-glow-blue-300/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-base md:text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
              TOFU offers complete digital solutions for startups and established businesses — from your first landing page to fully custom enterprise software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {SERVICES_DATA.map((service, index) => {
              const isExpanded = expandedId === service.id;
              
              return (
                <motion.div 
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="scroll-mt-32"
                >
                  <button 
                    onClick={() => setExpandedId(isExpanded ? "" : service.id)}
                    className="w-full text-left"
                  >
                    <GlassCard className={`p-6 md:p-8 flex items-center justify-between transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(30,195,255,0.2)] ${isExpanded ? 'border-glow-blue-300 bg-white/5' : 'hover:border-white/30'}`}>
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-glow-blue-500/20 text-glow-blue-200' : 'bg-white/5 text-white/70'}`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-1">{service.title}</h2>
                          <p className="text-text-body text-sm md:text-base">{service.shortDesc}</p>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 transform ${isExpanded ? 'border-glow-blue-300 rotate-180 text-glow-blue-200 shadow-[0_0_15px_rgba(30,195,255,0.5)]' : 'border-white/10 text-white/50'}`}>
                        <ChevronDown className="w-6 h-6" />
                      </div>
                    </GlassCard>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-12 pb-8 px-2 md:px-6 space-y-20">
                          {service.subServices.map((sub, i) => (
                            <div key={i} className="flex flex-col lg:flex-row gap-10 lg:items-start group">
                              <div className="lg:w-1/3">
                                <div className="sticky top-32">
                                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_50px_rgba(30,195,255,0.4)] transition-shadow duration-500 border border-white/10">
                                    <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent pointer-events-none"></div>
                                  </div>
                                  <h3 className="text-2xl font-bold text-white mb-4">{sub.title}</h3>
                                  <p className="text-text-body text-base mb-8 leading-relaxed">
                                    {sub.intro}
                                  </p>
                                  <Button href="/contact" variant="primary">
                                    Get Free Consultation
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="lg:w-2/3">
                                <GlassCard className="p-8 md:p-10 h-full">
                                  <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                      <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-glow-blue-200"></span> What We Offer
                                      </h4>
                                      <ul className="space-y-4 text-sm">
                                        {sub.offerings.map((item, idx) => (
                                          <li key={idx} className="text-text-body flex gap-3">
                                            <span className="text-glow-blue-300 mt-1">✓</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-glow-blue-200"></span> Our Process
                                      </h4>
                                      <ol className="space-y-4 text-sm relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                                        {sub.process.map((step, idx) => (
                                          <li key={idx} className="text-text-body flex gap-4 relative z-10">
                                            <span className="bg-navy-900 border border-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-glow-blue-100 shrink-0">
                                              {idx + 1}
                                            </span>
                                            <span className="pt-0.5">{step}</span>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                  </div>
                                </GlassCard>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-32 text-center">
             <GlassCard className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-navy-800 to-navy-900 !border-glow-blue-300/30">
               <h3 className="text-xl font-bold text-white mb-4">Looking for something specific?</h3>
               <p className="text-text-body text-sm mb-8">We offer Custom Digital Solutions, Data Entry, and more.</p>
               <Button href="/contact" variant="primary" className="text-sm">Contact Us for Custom Requests</Button>
             </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
