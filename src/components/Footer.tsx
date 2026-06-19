import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-glow-blue-300/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2T2G2dUI3nBSmp2AF1XFI9Rv8vtBhv6gwbRfYf8aKnA&s=10" alt="TOFU Logo" className="h-8 w-auto rounded-md mix-blend-screen" />
              <span className="text-glow-blue-200">TOFU</span>
            </Link>
            <p className="text-text-body text-sm leading-relaxed">
              Crafting digital experiences that tell your unique story. We are a creative collective dedicated to transforming ambitious visions into remarkable realities, elevating brands through design and technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-glow-blue-200 shrink-0" />
                <a href="mailto:hellowearetofu@gmail.com" className="hover:text-white transition-colors">hellowearetofu@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-glow-blue-200 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+8801338699948" className="block hover:text-white transition-colors">+880 1338-699948</a>
                  <a href="tel:+244948479645" className="block hover:text-white transition-colors">+244 948 479 645</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-glow-blue-200 shrink-0" />
                <span>234, Mahi Manjil, Kasiani,<br/>Gopalgonj, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TOFU (Transforming Opportunities For You). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
