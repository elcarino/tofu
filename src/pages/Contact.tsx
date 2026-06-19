import { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Web browsers strongly restrict 'mailto:' links, especially inside applications.
    // To ensure 100% reliable delivery without needing a backend server,
    // we sequence all form submissions into a clean WhatsApp message format.
    const textBody = `*New Inquiry via Website*\n\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message}`;
    
    const waNumber = '8801338699948';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textBody)}`;
    
    // Open WhatsApp Web or the WhatsApp application dynamically
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900 z-10" />
          <motion.img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqX6J3DhsKVwPnupUln3WMyVTa8BrmWG97_vO4HTHjw&s=10"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-30"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-blue-300/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-blue-100/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-4xl mx-auto mb-20 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Have a Project Idea?</h1>
               <p className="text-base md:text-lg text-text-body max-w-2xl mx-auto mb-10">
                 Let's build something great together. Fill out the form or reach out directly via email or WhatsApp.
               </p>
             </motion.div>
           </div>

           <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <motion.div 
                className="lg:w-1/3 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                 <GlassCard className="p-8">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                     <Mail className="w-6 h-6 text-glow-blue-100" />
                   </div>
                   <h3 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">Email Us</h3>
                   <a href="mailto:hellowearetofu@gmail.com" className="text-text-body text-sm hover:text-white transition-colors block">
                     hellowearetofu@gmail.com
                   </a>
                 </GlassCard>

                 <GlassCard className="p-8">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                     <Phone className="w-6 h-6 text-glow-blue-100" />
                   </div>
                   <h3 className="text-white text-sm font-semibold mb-2">WhatsApp or Call</h3>
                   <div className="space-y-4 text-sm mt-4">
                     <div>
                       <a href="tel:+8801338699948" className="text-text-body hover:text-white transition-colors">
                         +880 1338-699948
                       </a>
                     </div>
                     <div>
                       <a href="tel:+244948479645" className="text-text-body hover:text-white transition-colors">
                         +244 948 479 645
                       </a>
                     </div>
                   </div>
                 </GlassCard>

                 <GlassCard className="p-8">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                     <MapPin className="w-6 h-6 text-glow-blue-100" />
                   </div>
                   <h3 className="text-white text-sm font-semibold mb-2">Office</h3>
                   <p className="text-text-body text-sm">
                     234, Mahi Manjil, Kasiani,<br />
                     Gopalgonj, Bangladesh
                   </p>
                 </GlassCard>
              </motion.div>

              {/* Form */}
              <motion.div 
                className="lg:w-2/3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlassCard className="p-8 md:p-12 h-full">
                  <h2 className="text-xl font-bold text-white mb-8">Send us a message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-glow-blue-300 focus:ring-1 focus:ring-glow-blue-300 transition-all font-sans" 
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact" className="text-sm font-medium text-white/80">Email / WhatsApp Number</label>
                        <input 
                          type="text" 
                          id="contact" 
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({...formData, contact: e.target.value})}
                          className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-glow-blue-300 focus:ring-1 focus:ring-glow-blue-300 transition-all font-sans" 
                          placeholder="hello@example.com or +880..."
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-white/80">Service Required</label>
                      <select 
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-glow-blue-300 focus:ring-1 focus:ring-glow-blue-300 transition-all appearance-none font-sans"
                      >
                        <option value="" disabled>Select a category...</option>
                        <option value="web">Website Development</option>
                        <option value="app">Mobile App Development</option>
                        <option value="ui">UI/UX Design</option>
                        <option value="graphic">Graphic Design</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="3d">Architecture & 3D Visualization</option>
                        <option value="custom">Custom Digital Solutions</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/80">Project Details</label>
                      <textarea 
                        id="message" 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-glow-blue-300 focus:ring-1 focus:ring-glow-blue-300 transition-all resize-none font-sans" 
                        placeholder="Tell us about your project goals, timeline, or any specific requirements..."
                      ></textarea>
                    </div>

                    <Button variant="primary" type="submit" className="w-full h-12 text-base mt-4 gap-2 group">
                      Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </GlassCard>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
