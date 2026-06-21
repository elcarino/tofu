import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Target, Eye, ShieldCheck, Zap, Users, PenTool } from 'lucide-react';

const TEAM = [
  {
    name: "Ahina Ahmed",
    role: "CEO, Founder & Project Lead",
    image: "https://i.ibb.co.com/F4tLV9kh/Whats-App-Image-2026-06-19-at-4-49-59-PM-1.jpg",
    imageClass: "w-full h-full object-cover object-top"
  },
  {
    name: "Carlos Bulas",
    role: "Co-Founder, Business Developer",
    image: "https://i.ibb.co.com/mrQ8C239/Untitled-design-2.png",
    imageClass: "w-full h-full object-cover object-top"
  }
];

export function About() {
  return (
    <div className="w-full">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900 z-10" />
          <motion.img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMNPdxo1PxCb22AxoMnJQDRgoexvRXaZwhCoea5xyjw&s=10"
            alt="About Background"
            className="w-full h-full object-cover opacity-30"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-glow-blue-300/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">About TOFU</h1>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              TOFU is a Business Growth & Digital Solutions Company focused on helping businesses grow through technology, strategy, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-text-body text-base leading-relaxed">
                <p>
                  TOFU — Transforming Opportunities For You — was founded on August 20, 2025, with a simple belief: every business, no matter its size, deserves digital solutions built around its real goals, not a generic template.
                </p>
                <p>
                  What started as a small, focused team has grown into a global creative studio. We specialize in looking at the whole picture — from the visionary concept to the final masterpiece — ensuring that the technology elevates your business's narrative.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                 <GlassCard className="p-6 flex flex-col items-center text-center">
                    <Target className="w-10 h-10 text-glow-blue-100 mb-4" />
                    <h3 className="text-white text-sm font-bold mb-2">Our Mission</h3>
                    <p className="text-xs text-text-body">Deliver high-quality, result-driven solutions tailored to your unique goals.</p>
                 </GlassCard>
                 <GlassCard className="p-6 flex flex-col items-center text-center mt-10">
                    <Eye className="w-10 h-10 text-glow-blue-200 mb-4" />
                    <h3 className="text-white text-sm font-bold mb-2">Our Vision</h3>
                    <p className="text-xs text-text-body">To become a globally recognized digital company empowering businesses of all sizes.</p>
                 </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-2xl font-bold text-white">Our Core Values</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PenTool, title: "Intentional Design", desc: "Clean, purpose-driven aesthetics without clutter." },
                { icon: ShieldCheck, title: "Future-Proof", desc: "Scalable development built to grow with you." },
                { icon: Users, title: "User-Focused", desc: "Experience prioritized in everything we build." },
                { icon: Zap, title: "Long-Term Value", desc: "Sustainable solutions over quick, fragile fixes." },
              ].map((val, i) => (
                <div key={i}>
                  <GlassCard className="p-8 text-center h-full" hoverEffect>
                    <val.icon className="w-8 h-8 text-glow-blue-100 mx-auto mb-4" />
                    <h4 className="text-white text-sm font-bold mb-2">{val.title}</h4>
                    <p className="text-xs text-text-body">{val.desc}</p>
                  </GlassCard>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-blue-300/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-glow-blue-200 text-xs font-bold tracking-widest uppercase mb-3 block">Founding Team</span>
            <h2 className="text-2xl font-bold text-white">The People Behind TOFU</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="group relative"
              >
                 <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-white/10 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(30,195,255,0.4)] transition-all duration-500 bg-navy-900/50">
                   <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-glow-blue-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                   <img src={member.image} alt={member.name} className={`${member.imageClass} filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.05]`} />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-1 group-hover:text-glow-blue-100 transition-colors">{member.name}</h3>
                 <p className="text-text-body text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-md mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8 text-center border-dashed border-white/20">
               <h3 className="text-lg font-bold text-white mb-2">Future Team Expansion</h3>
               <p className="text-glow-blue-200 text-sm font-semibold uppercase tracking-widest">Coming Soon</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="py-24 text-center">
         <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to work together?</h2>
         <Button href="/contact" variant="primary" className="h-12 px-8 text-base">
           Contact Our Team
         </Button>
      </section>

    </div>
  );
}
