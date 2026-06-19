import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { SERVICES_DATA } from '../data/services';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
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

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES_DATA.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
                  <div className="lg:w-1/3">
                    <div className="sticky top-32">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-glow-blue-100" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                      <p className="text-text-body text-base mb-8 leading-relaxed">
                        {service.intro}
                      </p>
                      <Button href="/contact" variant="primary">
                        Get Free Consultation
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <GlassCard className="p-8 md:p-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-glow-blue-200"></span> What We Offer
                          </h3>
                          <ul className="space-y-4 text-sm">
                            {service.offerings.map((item, i) => (
                              <li key={i} className="text-text-body flex gap-3">
                                <span className="text-glow-blue-300 mt-1">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-glow-blue-200"></span> Our Process
                          </h3>
                          <ol className="space-y-4 text-sm relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                            {service.process.map((step, i) => (
                              <li key={i} className="text-text-body flex gap-4 relative z-10">
                                <span className="bg-navy-900 border border-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-glow-blue-100 shrink-0">
                                  {i + 1}
                                </span>
                                <span className="pt-0.5">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {service.additional && (
                         <div className="mt-10 pt-8 border-t border-white/10">
                           <h4 className="text-sm font-bold text-glow-blue-200 uppercase tracking-wider mb-3">Additional Services</h4>
                           <p className="text-text-body text-sm leading-relaxed">{service.additional}</p>
                         </div>
                      )}

                      <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <p className="text-white text-base font-medium mb-6">{service.cta}</p>
                        <Button href="/contact" variant="secondary" className="gap-2 text-sm">
                          Start a Conversation <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
             <GlassCard className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-navy-800 to-navy-900 !border-glow-blue-300/30">
               <h3 className="text-xl font-bold text-white mb-4">Looking for something specific?</h3>
               <p className="text-text-body text-sm mb-8">We offer Virtual Assistant Solutions, Data Entry, Presentation Design, Technical Documentation, and more.</p>
               <Button href="/contact" variant="primary" className="text-sm">Contact Us for Custom Requests</Button>
             </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
