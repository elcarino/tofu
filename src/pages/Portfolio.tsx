import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = ["All", "Websites", "Mobile Apps", "UI/UX", "3D Design"];

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
    title: "Pulse — Social Profile & Settings App UI",
    category: "UI/UX",
    challenge: "The client needed a dark-mode mobile app interface for a social/community platform that felt sleek and modern, while still keeping core user flows — profile, settings, and account editing — simple and easy to navigate. The challenge was designing a UI that felt premium and on-trend without sacrificing usability across multiple nested screens.",
    solution: "We designed a clean dark-themed UI using a high-contrast black background paired with a vibrant lime-green accent to highlight key actions like toggles, buttons, and tab indicators. The \"My Profile\" screen surfaces follower stats, content tabs (Feed, Challenge, Badge), and recent posts in a scannable layout. The Settings screen organizes account options — notifications, dark mode, language, contact info — into a clean list structure, while the Edit Profile screen keeps form fields minimal and well-spaced for quick edits, with a clear \"Save Changes\" call-to-action.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/efb575245941343.Y3JvcCwyOTg1LDIzMzUsMTAzLDA.png",
    outcome: "The final UI delivers a consistent, polished dark-mode experience across all core screens, making everyday actions like updating a profile or adjusting settings feel fast and intuitive for users."
  },
  {
    id: 4,
    title: "Mindwave — Mental Wellness & Sleep Tracking App",
    category: "Mobile Apps",
    challenge: "The client needed a wellness app that could track mood, sleep, and overall health without feeling overwhelming or clinical to the user.",
    solution: "We designed a calm, dark-themed UI with soft pastel accents and rounded cards. A mood check-in greets users on the home screen, while circular charts and clean graphs visualize sleep, stress, and health scores at a glance.",
    image: "https://cdn.dribbble.com/userupload/46661712/file/255d7ceab253e2a6d4a10689b625f82e.webp?format=webp&resize=400x300&vertical=center",
    outcome: "A wellness app that makes daily self-check-ins feel light and easy — encouraging users to build a consistent health-tracking habit."
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
    category: "UI/UX",
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
