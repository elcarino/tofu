import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = ["All", "Websites", "Google Business Services", "Graphic Design", "3D Design"];

const PROJECTS = [
  {
    id: 1,
    title: "Awaken — Functional Nutrition Website for Women",
    category: "Websites",
    challenge: "The client, a functional nutrition coach focused on women's health, needed a website that felt clean, approachable, and trustworthy — one that could clearly communicate her services while also converting visitors into leads through a free downloadable resource. The design also had to work seamlessly on mobile, since most of her audience would discover her through social media on their phones.",
    solution: "We created a soft, organic visual identity using a calming sage-green and cream palette paired with warm lifestyle photography to reflect a healthy, holistic lifestyle. The homepage leads with a clear value proposition and call-to-action (\"Schedule a Consult\"), followed by an easy-to-scan layout highlighting her core message, \"Healthy Food = Happy Body.\" A dedicated lead-magnet section promoting a free \"30-Day Meal Plan for Reducing Inflammation\" was built in to capture emails, with the mobile version optimized for quick scrolling and fast access to the download and core service links.",
    image: "https://images.squarespace-cdn.com/content/v1/61e038eeb87d7b547c1f23a2/d885193e-26a1-4ee1-8ef7-d7949eacd206/Well-Sites-Awaken.jpg?format=750w",
    outcome: "The result is a warm, credible online presence that builds trust at first glance and gives the client a built-in lead-generation tool — turning casual visitors into email subscribers and potential clients."
  },
  {
    id: 2,
    title: "Lumera Residence — Modern Luxury Dining & Kitchen Interior",
    category: "3D Design",
    challenge: "The client wanted an open-plan dining and kitchen space that felt grand and luxurious, yet still warm and livable. With floor-to-ceiling glass walls bringing in natural light and views of the garden, the design needed to balance openness with a sense of intimacy at the dining table, while tying the kitchen and dining areas into one cohesive visual story.",
    solution: "We designed a sophisticated palette of charcoal grey, warm brass, and white marble to create contrast and depth across the space. A sculptural ribbon-style chandelier was placed as the centerpiece above the dining table, drawing the eye upward and anchoring the room's focal point. Concealed cove lighting along the ceiling and back-lit marble panels in the kitchen add a soft ambient glow, while sleek matte cabinetry and a marble-topped island give the kitchen a clean, high-end finish. Floor-length drapery softens the glass walls without blocking the outdoor view.",
    image: "https://archicgi.com/wp-content/uploads/2020/05/3d-visualization-interior-design-studio.jpg",
    outcome: "The final render delivers a refined, hotel-grade dining experience that feels both opulent and inviting — a space designed for entertaining at scale without losing its sense of warmth and comfort."
  },
  {
    id: 3,
    title: "Corporate Brand Identity System",
    category: "Graphic Design",
    challenge: "The client had no consistent visual style across their materials, making it hard to stand out in a competitive market. Colors, fonts, and layouts were all over the place with no clear direction or brand voice.",
    solution: "We developed a clean, modern design system with a defined color palette, typography, and reusable templates. All creatives were built around a single visual language that worked across print, digital, and social media.",
    image: "https://img.freepik.com/free-vector/modern-professional-business-stationery-set_23-2148367387.jpg?semt=ais_user_personalization&w=740&q=80",
    outcome: "The brand saw a 35% increase in audience engagement within the first two months of the redesign launch. The client now has a strong, recognizable identity that they can maintain independently going forward."
  },
  {
    id: 4,
    title: "Google Business Profile Setup",
    category: "Google Business Services",
    challenge: "The client had no Google Business Profile, making them completely invisible in local search results. Competitors were ranking higher on Maps and getting more calls, visits, and customer trust.",
    solution: "We created and fully optimized their Google Business Profile with accurate info, photos, and categories. Verified the account, set up Business Profile settings, and enabled reviews and regular post updates.",
    image: "https://embedsocial.com/wp-content/uploads/2024/08/add-role-google-business-profile-settings.jpg",
    outcome: "The business started appearing in Google Maps and local search within the first two weeks of going live. Customer calls and profile visits increased significantly, building stronger local trust and online visibility."
  },
  {
    id: 5,
    title: "Peacrest — Luxury Hotel & Resort Website",
    category: "Websites",
    challenge: "The client needed a hotel booking website that could showcase a high-end resort experience while building immediate trust with potential guests — through credibility markers like ratings, years of expertise, and client satisfaction — without making the page feel like a wall of sales copy.",
    solution: "We designed a warm, editorial layout anchored by a full-width hero video/image of the resort interior, paired with elegant serif typography and a clear \"Book Apartments\" call-to-action. A stats section highlighting 98% positive feedback, 15+ years of expertise, and 25K+ happy clients was placed right after the intro to build trust early. The \"Rooms & Suites\" and \"Explore Rooms and Suites\" sections use clean grid cards with pricing and key details (size, beds, guests) so visitors can compare options at a glance, while a dedicated \"Our Accommodations\" section showcases lifestyle photography of the lounge and common areas.",
    image: "https://cdn.dribbble.com/userupload/45085837/file/42d2ca9b91286e1bf940d89ae7d43e3c.webp?resize=752x&vertical=center",
    outcome: "The result is a trustworthy, visually rich hotel website that builds credibility fast and makes it easy for guests to browse rooms and book directly — turning casual visitors into confident bookings."
  },
  {
    id: 6,
    title: "Subcom — E-commerce Admin Dashboard",
    category: "Graphic Design",
    challenge: "The client needed a dashboard that could show key store metrics — revenue, customers, orders — at a glance, without digging through multiple pages.",
    solution: "We designed a clean dashboard with metric cards, a sales summary chart, top products, and a recent orders table — all organized with clear visual hierarchy and a simple sidebar for navigation.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg",
    outcome: "A streamlined admin experience that gives store owners a full snapshot of their business in one screen, saving time on daily tracking."
  },
  {
    id: 7,
    title: "Aurelia Suite — Master Bedroom with Walk-in Wardrobe",
    category: "3D Design",
    challenge: "The client wanted a master bedroom that felt hotel-luxurious, with full wardrobe storage built in without making the space feel cramped.",
    solution: "We used a warm neutral palette with glass-front wardrobes lining both walls, a trio of arched brass mirrors as a dressing-area focal point, and soft cove lighting throughout for a warm, layered glow.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/051cba105821807.5f8316057a85b.jpg",
    outcome: "A refined, hotel-inspired suite that blends generous storage with a serene, luxurious feel."
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900 z-10" />
          <motion.img 
            src="https://static1.squarespace.com/static/52209c36e4b01d14c4caa822/t/588118096b8f5b2aa4338958/1484855336577/?format=1500w"
            alt="Portfolio Background"
            className="w-full h-full object-cover opacity-60"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-glow-blue-300/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Work</h1>
            <p className="text-base md:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              Showcasing quality work and real results. Here are some of the digital experiences and solutions we've crafted.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-20 relative z-10">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-glow-blue-300/20 text-white border border-glow-blue-300/50 block shadow-[0_0_15px_rgba(96,165,250,0.2)]' 
                  : 'bg-white/5 text-text-body border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-16 flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col gap-8 max-w-5xl w-full ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                >
                  {/* Image Side */}
                  <div className="lg:w-5/12 mx-auto w-full relative group" style={{ perspective: "1000px" }}>
                     <motion.div 
                       className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-glow-blue-300/40 aspect-[4/3] shadow-[0_0_20px_rgba(96,165,250,0.1)] group-hover:shadow-[0_0_35px_rgba(96,165,250,0.3)] transition-all duration-500 will-change-[transform,shadow]"
                       whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                     >
                       <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                       <motion.img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
                         whileHover={{ scale: 1.08 }}
                       />
                     </motion.div>
                 </div>
                {/* Content Side */}
                <div className="lg:w-7/12 flex flex-col justify-center">
                  <span className="text-glow-blue-200 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h2 className="text-2xl font-bold text-white mb-6">{project.title}</h2>
                  
                  <GlassCard className="p-6 mb-6">
                    <h4 className="text-white text-sm font-medium mb-2 opacity-90">The Challenge</h4>
                    <p className="text-text-body text-xs leading-relaxed">{project.challenge}</p>
                  </GlassCard>
                  
                  <GlassCard className="p-6 mb-8">
                    <h4 className="text-white text-sm font-medium mb-2 opacity-90">Our Solution</h4>
                    <p className="text-text-body text-xs leading-relaxed">{project.solution}</p>
                  </GlassCard>

                    <div>
                      <h4 className="text-white text-sm font-medium mb-1 opacity-90">Outcome</h4>
                      <p className="text-glow-blue-100 text-sm font-medium">{project.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-32 text-center">
             <h2 className="text-2xl font-bold text-white mb-6">Ready to see your project here?</h2>
             <Button href="/contact" variant="primary" className="h-12 px-8 text-base">
                Let's Build Something Great
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
