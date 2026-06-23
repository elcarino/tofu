import { Monitor, Megaphone, Paintbrush, TrendingUp, ClipboardList, Building, Globe, Layers, Package, Star } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: "digital-presence",
    icon: Monitor,
    title: "Digital Presence",
    shortDesc: "Establish and grow your brand online.",
    subServices: [
       {
         title: "Website Design",
         image: "https://uihut.com/images/blog/15-Best-Website-Concepts-Every-Web-Designer-Should-Know.webp",
         intro: "We craft purposeful, brand-driven website designs that captivate visitors, build trust, and turn clicks into clients.",
         offerings: [
           "Custom UI/UX Design",
           "Responsive Web Design",
           "Mobile-first Design",
           "Brand-aligned Visuals"
         ],
         process: [
           "Discovery & Requirements",
           "Wireframing",
           "Visual Design",
           "Client Feedback & Review"
         ]
       },
       {
         title: "Website Development",
         image: "https://img.magnific.com/premium-psd/psd-ecommerce-fashion-website-template_908119-33.jpg?semt=ais_hybrid&w=740&q=80",
         intro: "Fast, scalable website development turning designs into functional, high-performance web experiences.",
         offerings: [
           "Front-End Development",
           "Back-End & Database Setup",
           "CMS Integration",
           "Performance Optimization"
         ],
         process: [
           "Technical Architecture",
           "Development Phase",
           "Testing & QA",
           "Deployment & Launch"
         ]
       },
       {
         title: "Business Websites",
         image: "https://cdn.dribbble.com/userupload/31753935/file/original-4052d553c7e2c6fb320cf7fb47ca71f9.jpg?format=webp&resize=400x300&vertical=center",
         intro: "Comprehensive multi-page websites designed to represent your business professionally and generate leads.",
         offerings: [
           "Corporate Website Creation",
           "Service Showcase Sites",
           "Lead Generation Funnels",
           "SEO Setup"
         ],
         process: [
           "Content Strategy",
           "Site Architecture",
           "Design & Development",
           "Launch"
         ]
       },
       {
         title: "Landing Pages",
         image: "https://cdn.psdrepo.com/images/2x/personal-landing-page-free-psd-v6.jpg",
         intro: "Focused, conversion-driven single pages tailored for marketing campaigns, product launches, or special offers.",
         offerings: [
           "High-converting Layouts",
           "A/B Testing Setup",
           "Conversion Copywriting",
           "Analytics Integration"
         ],
         process: [
           "Campaign Goal Alignment",
           "Design & Copy Creation",
           "Development",
           "Tracking Setup"
         ]
       },
       {
         title: "Website Maintenance",
         image: "https://static.vecteezy.com/ti/vetor-gratis/p1/3533781-ilustracaoial-de-sistema-de-software-em-manutencao-vetor.jpg",
         intro: "Ongoing support to keep your website secure, updated, and running smoothly — so you never lose traffic or revenue to unexpected downtime.",
         offerings: [
           "Security Updates",
           "Content Updates",
           "Performance Monitoring",
           "Regular Backups"
         ],
         process: [
           "Initial Audit",
           "Setup Monitoring Tools",
           "Monthly Checks",
           "Reporting"
         ]
       }
    ]
  },
  {
    id: "google-business",
    icon: Megaphone,
    title: "Google Business Services",
    shortDesc: "Get found and trusted on Google Local Search.",
    subServices: [
        {
          title: "Google Business Profile Setup",
          image: "https://brightlocal-corp-assets.s3.amazonaws.com/brightlocal-corp-2026/wp/uploads/2026/04/Set-up-Google-Business-Profile-Start-Now-.png",
          intro: "Create a strong foundation on Google Search and Maps with a fully optimized business profile.",
          offerings: [
            "Complete Profile Creation",
            "Business Information Setup",
            "Initial Photo Uploads",
            "Service area Configuration"
          ],
          process: [
            "Data Collection",
            "Profile Creation",
            "Optimization",
            "Client Handover & Training"
          ]
        },
        {
          title: "Google Business Verification",
          image: "https://a.mktgcdn.com/p/Rtx_-jXyvUg8DzYnDNIjG09LnKaCZaoVoXgbZ-4gfQI/1560x878.jpg",
          intro: "Navigate the verification process smoothly so your business can start showing up in local searches.",
          offerings: [
            "Verification Guidance",
            "Video Verification Assist",
            "Postcard Setup",
            "Troubleshooting Issues"
          ],
          process: [
            "Assess Needs",
            "Submit Request",
            "Follow-up with Google",
            "Confirm Verification"
          ]
        },
        {
          title: "Google Maps Optimization",
          image: "https://i.blogs.es/9cdf15/google-maps-rutas/840_560.jpg",
          intro: "Rank higher on Google Maps when potential customers search for services in your area.",
          offerings: [
            "Local Keyword Targeting",
            "Citation Building",
            "Map Ranking Strategies",
            "Competitor Analysis"
          ],
          process: [
            "Local SEO Audit",
            "Keyword Research",
            "Profile Optimization",
            "Go Live & Monitor"
          ]
        },
        {
          title: "Profile Management",
          image: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/11/manage-google-business-profiles-from-search-6183f0f11d744-sej.jpg",
          intro: "Ongoing updates, post creation, and Q&A management to keep your profile active and engaging.",
          offerings: [
            "Regular Google Posts",
            "Review Monitoring",
            "Photo & Video Updates",
            "Performance Tracking"
          ],
          process: [
            "Strategy Planning",
            "Content Creation",
            "Posting schedule",
            "Monthly Reporting"
          ]
        },
        {
          title: "Google Reputation Management",
          image: "https://www.socialpilot.co/wp-content/uploads/2024/12/Enhance-Your-Reputation-with-Google-Review-Management-Tool.webp",
          intro: "Proactively monitor, manage, and respond to your Google Reviews to build trust and credibility.",
          offerings: [
            "24/7 Review Monitoring",
            "Custom Response Strategies",
            "Negative Review Mitigation",
            "Review Generation Campaigns"
          ],
          process: [
            "Audit Current Reviews",
            "Develop Response Protocol",
            "Implement Monitoring Tools",
            "Ongoing Management"
          ]
        }
    ]
  },
  {
    id: "graphic-design",
    icon: Paintbrush,
    title: "Branding & Graphic Design",
    shortDesc: "Graphic design, brand identity, and presence management.",
    subServices: [
        {
          title: "Graphic Design",
           image: "https://img.freepik.com/free-vector/flat-mosaic-trifold_23-2149070597.jpg?semt=ais_hybrid&w=740&q=80",
           intro: "Professional visual solutions that communicate your brand's message effectively and beautifully.",
           offerings: [
             "Custom Illustrations",
             "Marketing Collaterals",
             "Digital Graphics",
             "Print Design"
           ],
           process: [
             "Creative Brief",
             "Concept Creation",
             "Design Drafting",
             "Revisions & Delivery"
           ]
        },
        {
          title: "Logo Design",
          image: "https://img.freepik.com/premium-psd/siyah-duvarda-kabartmali-logo-mockup_139869-684.jpg",
          intro: "Memorable, versatile, and impactful logos that encapsulate your brand identity.",
          offerings: [
            "Custom Logo Marks",
            "Typography Pairing",
            "Brand Color Palettes",
            "Logo Guidelines"
          ],
          process: [
            "Brand Discovery",
            "Brainstorming",
            "Digital Vectorization",
            "Final Delivery"
          ]
        },
        {
          title: "Business Card",
          image: "https://img.freepik.com/premium-psd/luxury-business-card-logo-mockup-with-embossed-effect_180294-262.jpg",
           intro: "Make a lasting first impression with professionally designed, premium business cards.",
           offerings: [
             "Custom Layouts",
             "Double-sided Designs",
             "Print-ready Files",
             "Special Finish Setup"
           ],
           process: [
             "Gather Information",
             "Design Layouts",
             "Client Approval",
             "Prepare Files"
           ]
        },
        {
          title: "Flyers",
          image: "https://img.freepik.com/premium-psd/a4-poster-flyer-psd-mockup_126240-107.jpg",
           intro: "Eye-catching promotional flyers for events, sales, or awareness campaigns.",
           offerings: [
             "Event Flyers",
             "Promotional Material",
             "Digital & Print Ready",
             "Custom Graphics"
           ],
           process: [
             "Determine Objective",
             "Drafting Content",
             "Visual Design",
             "Final Review"
           ]
        },
        {
          title: "Posters",
          image: "https://mockuptree.com/wp-content/uploads/edd/2020/11/Free-Top-View-Grid-Presentation-Poster-Mockup.jpg",
           intro: "Large-format designs that grab attention from a distance.",
           offerings: [
             "Event Posters",
             "Educational Posters",
             "Advertising Posters",
             "High-Res Print Files"
           ],
           process: [
             "Concept Discussion",
             "Visual Composition",
             "Typography Selection",
             "Final Output"
           ]
        },
        {
          title: "Banners",
          image: "https://www.mockupworld.co/wp-content/uploads/2024/05/horizontal-banner-free-mockup.jpg",
           intro: "Impactful banners for web, social media, or physical display.",
           offerings: [
             "Website Banners",
             "Roll-up Banners",
             "Social Media Covers",
             "Ad Creatives"
           ],
           process: [
             "Determine Dimensions",
             "Design Strategy",
             "Asset Production",
             "Final Delivery"
           ]
        },
        {
          title: "Company Profile",
          image: "https://elements-resized.envatousercontent.com/elements-cover-images/f908b208-716c-480f-9014-bc3c2dd9558b?w=433&cf_fit=scale-down&q=85&format=auto&s=ddf23c18c52a93d9bd06662963856e28141e33447baab5143710cef4f98a252f",
           intro: "Comprehensive, beautifully formatted documents that tell your company's story and achievements.",
           offerings: [
             "Corporate Overviews",
             "Service Catalogs",
             "Portfolio Presentations",
             "Investor Pitch Decks"
           ],
           process: [
             "Content Aggregation",
             "Content Structuring",
             "Visual Design",
             "Publishing"
           ]
        },
        {
          title: "Brochures",
          image: "https://img.magnific.com/premium-psd/a4-trifold-brochure-mockup_536878-76.jpg?semt=ais_hybrid&w=740&q=80",
           intro: "Informative tri-fold or multi-page brochures designed to educate and persuade.",
           offerings: [
             "Product Brochures",
             "Service Brochures",
             "Real Estate Guides",
             "Event Programs"
           ],
           process: [
             "Content Strategy",
             "Layout Designing",
             "Infographics Inclusion",
             "Print-ready Exports"
           ]
        },
        {
          title: "Social Media Graphics",
           image: "https://elements-resized.envatousercontent.com/elements-preview-images/a7f23dec-327e-4e47-bfdd-2ad4bcb047ea?w=632&cf_fit=scale-down&q=85&format=auto&s=eee13750b5517a4dbadaed816f4cfb79d5af48d5df0d47329ef2066924e09fd7",
           intro: "Engaging posts, stories, and covers optimized for various social platforms.",
           offerings: [
             "Instagram Posts",
             "Facebook Graphics",
             "LinkedIn Highlights",
             "YouTube Thumbnails"
           ],
           process: [
             "Platform Selection",
             "Template Creation",
             "Content Integration",
             "Delivery"
           ]
        }
    ]
  },
  {
    id: "business-consulting",
    icon: TrendingUp,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM--TJRMphJ3-RQJD1QUGyewVCAjpVdyAacQ&s",
    title: "Business Consulting & Development",
    shortDesc: "Strategic guidance to accelerate your business growth.",
    subServices: [
        {
          title: "Business Development Consulting",
          image: "https://sr-management.bg/wp-content/uploads/2016/11/BusinessConsultingbanner.jpg",
          intro: "Expert guidance to identify new opportunities, build strategic partnerships, and accelerate comprehensive business growth.",
          offerings: [
            "Market Opportunity Analysis",
            "Partnership Strategy",
            "Business Planning",
            "Revenue Model Optimization"
          ],
          process: [
            "Initial Assessment",
            "Strategy Formulation",
            "Execution Planning",
            "Ongoing Advisory"
          ]
        },
        {
          title: "Growth Strategy",
          image: "https://eugenspivak.com/wp-content/uploads/2020/11/growth-strategies-01.jpg",
          intro: "Data-driven strategies designed to scale your operations, increase market share, and maximize profitability.",
          offerings: [
            "Scalability Assessment",
            "Competitive Positioning",
            "Customer Acquisition Strategy",
            "Performance Metrics Setup"
          ],
          process: [
            "Business Audit",
            "Growth Roadmap",
            "Resource Allocation",
            "Implementation & Tracking"
          ]
        },
        {
          title: "Market Expansion Support",
          image: "https://img.magnific.com/premium-photo/depict-dynamic-process-business-growth-focusing-global-expansion-market-entry-strategy-showcase_1289822-1221.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Smoothly navigate your business transition into new local and global markets with minimized risks and clear direction.",
          offerings: [
            "Target Market Analysis",
            "Entry Strategy Consulting",
            "Localization Strategy",
            "Risk Assessment"
          ],
          process: [
            "Market Research",
            "Feasibility Study",
            "Go-to-Market Strategy",
            "Launch Phase Support"
          ]
        },
        {
          title: "Business Growth Planning",
          image: "https://articles.connectnigeria.com/wp-content/uploads/2022/02/business-2987962_1280.jpg",
          intro: "Structured, long-term plans aligning team goals, financial projections, and actionable operational steps.",
          offerings: [
            "Actionable Milestones",
            "Financial Forecasting",
            "Resource Planning",
            "KPI Development"
          ],
          process: [
            "Goal Definition",
            "Current State Analysis",
            "Action Plan Drafting",
            "Review & Alignment"
          ]
        },
        {
          title: "Organizational Development",
          image: "https://cdn.prod.website-files.com/68e520f2b338e9180c181994/68e520f2b338e9180c1821aa_pexels-fauxels-3184292.jpg",
          intro: "Enhance team structures, internal processes, and company culture for higher efficiency and adaptability.",
          offerings: [
            "Team Restructuring",
            "Culture Building",
            "Leadership Development",
            "Change Management"
          ],
          process: [
            "Organizational Health Audit",
            "Restructuring Plan",
            "Intervention & Coaching",
            "Evaluation"
          ]
        },
        {
          title: "Strategic Planning",
          image: "https://www.thealternativeboard.com/hs-fs/hubfs/Imported_Blog_Media/bigstock-166383731-e1512672027778-1.jpg?width=670&name=bigstock-166383731-e1512672027778-1.jpg",
          intro: "Comprehensive roadmaps defining the overarching vision, mission, and strategic objectives for your business's future.",
          offerings: [
            "Vision & Mission Crafting",
            "Objective Setting",
            "SWOT Analysis",
            "Strategic Roadmaps"
          ],
          process: [
            "Stakeholder Interviews",
            "Strategic Workshop",
            "Plan Development",
            "Execution Monitoring"
          ]
        }
    ]
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "Project Management Solutions",
    shortDesc: "Streamline your workflows and effectively deliver projects.",
    subServices: [
        {
          title: "Project Planning",
          image: "https://www.sketchbubble.com/blog/wp-content/uploads/2020/07/project-planning.png",
          intro: "Detailed project blueprints ensuring scope, timelines, and budgets are accurately defined and agreed upon.",
          offerings: [
            "Scope Definition",
            "Timeline Creation",
            "Resource Allocation",
            "Risk Identification"
          ],
          process: [
            "Project Initiation",
            "Requirement Gathering",
            "Plan Drafting",
            "Stakeholder Sign-off"
          ]
        },
        {
          title: "Project Coordination",
          image: "https://img.freepik.com/free-photo/site-engineer-construction-site_53876-42833.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Seamless day-to-day management of tasks, ensuring team alignment and smooth communication across all phases.",
          offerings: [
            "Daily/Weekly Syncs",
            "Task Assignment",
            "Cross-functional Alignment",
            "Progress Tracking"
          ],
          process: [
            "Kickoff Meeting",
            "Execution Monitoring",
            "Status Reporting",
            "Issue Resolution"
          ]
        },
        {
          title: "Process Improvement",
          image: "https://www.forbes.com/advisor/wp-content/uploads/2022/01/What_Is_Process_Improvement_-_article_image.jpg",
          intro: "Identifying bottlenecks and implementing more resilient, efficient working methods to increase overall productivity.",
          offerings: [
            "Process Mapping",
            "Bottleneck Analysis",
            "Lean Methodology Implementation",
            "Continuous Improvement Plans"
          ],
          process: [
            "Current State Map",
            "Gap Analysis",
            "Solution Design",
            "Process Rollout"
          ]
        },
        {
          title: "Workflow Optimization",
          image: "https://empmonitor.com/blog/wp-content/uploads/2025/04/step-by-step-workflow-optimization-process.webp",
          intro: "Streamlining daily operations by eliminating redundant steps and introducing effective automation strategies.",
          offerings: [
            "Workflow Automation Setup",
            "Tool Stack Audits",
            "Standard Operating Procedures (SOPs)",
            "Efficiency Tracking"
          ],
          process: [
            "Audit & Observation",
            "Optimization Strategy",
            "Tool Integration",
            "Team Training"
          ]
        },
        {
          title: "Project Documentation",
          image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/project-documentation-article.jpg",
          intro: "Clear, centralized, and accessible documentation to retain project knowledge and track deliverables.",
          offerings: [
            "Project Charters",
            "Meeting Minutes",
            "Technical/Functional Specs",
            "End-of-Project Reports"
          ],
          process: [
            "Create Document Hub",
            "Template Creation",
            "Ongoing Updates",
            "Final Archiving"
          ]
        },
        {
          title: "Operations Management",
          image: "https://st2.depositphotos.com/3591429/7485/i/450/depositphotos_74851909-stock-photo-management-success-business-concept.jpg",
          intro: "Comprehensive oversight to ensure your core business functions operate reliably day in and day out.",
          offerings: [
            "Performance Monitoring",
            "Capacity Planning",
            "Supply Chain/Vendor Coordination",
            "Quality Control Setup"
          ],
          process: [
            "Operations Assessment",
            "Key Metrics Definition",
            "Management & Oversight",
            "Periodic Optimization"
          ]
        }
    ]
  },
  {
    id: "corporate-support",
    icon: Building,
    title: "Corporate Support Services",
    shortDesc: "Elevating your corporate materials and communications.",
    subServices: [
        {
          title: "Company Profile Development",
          image: "https://www.unsell.design/wp-content/uploads/2020/12/cb3ad9d0-company-profile-template-free.jpg",
          intro: "Professional and compelling corporate overviews that highlight your mission, services, and achievements to stakeholders.",
          offerings: [
            "Brand Storytelling",
            "Executive Summaries",
            "Service & Product Highlights",
            "Design & Layout Integration"
          ],
          process: [
            "Information Gathering",
            "Copywriting",
            "Design Composition",
            "Final Review"
          ]
        },
        {
          title: "Business Proposal Writing",
          image: "https://www.freshbooks.com/_next/image?url=https%3A%2F%2Fwww.freshbooks.com%2Fmedia%2F2025%2F10%2Fbusiness-proposal.jpg&w=1080&q=75",
          intro: "Persuasive and sharply formatted proposals that effectively communicate your value proposition to win contracts.",
          offerings: [
            "Custom Proposal Templates",
            "Value Proposition Crafting",
            "Pricing Structure Presentation",
            "Executive Previews"
          ],
          process: [
            "Requirement Analysis",
            "Drafting & Structuring",
            "Internal Review",
            "Presentation Formatting"
          ]
        },
        {
          title: "Corporate Presentations",
          image: "https://img.freepik.com/free-vector/gradient-business-presentation-templates_52683-80109.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Visually stunning and logically structured slide decks tailored for investors, clients, and internal teams.",
          offerings: [
            "Pitch Decks",
            "Sales Presentations",
            "Infographic Design",
            "Speaking Notes"
          ],
          process: [
            "Audience Analysis",
            "Content Outlining",
            "Visual Design",
            "Final Rehearsal Support"
          ]
        },
        {
          title: "Tender Documentation Support",
          image: "https://img.magnific.com/free-vector/business-man-shaking-hands-signed-contract_3446-646.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Thorough, compliant, and highly competitive documentation to maximize your chances in the bidding process.",
          offerings: [
            "RFP/RFI Responses",
            "Compliance Matrices",
            "Technical Narratives",
            "Formatting & Submission Readiness"
          ],
          process: [
            "Document Breakdown",
            "Information Gathering",
            "Drafting & Compliance Check",
            "Final Submission Prep"
          ]
        },
        {
          title: "Business Documentation",
          image: "https://cdn.pixabay.com/photo/2022/08/13/05/56/folders-7382940_640.jpg",
          intro: "Clear and legally appropriate business letters, policies, capability statements, and essential corporate records.",
          offerings: [
            "Capability Statements",
            "Policy Manuals",
            "Formal Business Letters",
            "SOP Drafting"
          ],
          process: [
            "Needs Assessment",
            "Information Structuring",
            "Drafting & Formatting",
            "Final Client Approval"
          ]
        }
    ]
  },
  {
    id: "international-support",
    icon: Globe,
    title: "International Support Services",
    shortDesc: "Overcoming barriers to build global partnerships.",
    subServices: [
        {
          title: "Translation Services",
          image: "https://media.istockphoto.com/id/1869441600/photo/businessman-holding-a-smartphone-to-translation-of-foreign-languages-on-mobile-app-symbol-of.jpg?s=612x612&w=0&k=20&c=zF8rXtu5Sef6woeSrANn0TPqQFHSQi9D14tVpt3l7oM=",
          intro: "Accurate, culturally nuanced translation of business documents, marketing materials, and digital platforms.",
          offerings: [
            "Document Translation",
            "Website Localization",
            "Technical Manual Translation",
            "Marketing Collateral Translation"
          ],
          process: [
            "Source Text Analysis",
            "Translation Phase",
            "Proofreading & Editing",
            "Quality Assurance"
          ]
        },
        {
          title: "Interpretation Services",
          image: "https://ititranslates.com/wp-content/uploads/2023/08/VRI-Interpreter.jpg",
          intro: "Real-time, professional interpretation to bridge communication gaps during international meetings and conferences.",
          offerings: [
            "Simultaneous Interpretation",
            "Consecutive Interpretation",
            "Virtual Meeting Support",
            "On-site Interpretation"
          ],
          process: [
            "Requirement & Context Briefing",
            "Preparation & Glossary Building",
            "Live Event Support",
            "Post-event Review"
          ]
        },
        {
          title: "International Documentation Support",
          image: "https://img.freepik.com/free-photo/two-business-colleagues-examining-documents-while-working-together-office_637285-1081.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Preparation and advisory on complex cross-border documentation and regulatory reporting formats.",
          offerings: [
            "Export/Import Documentation Advisory",
            "Customs Paperwork Assistance",
            "International Agreements Formatting",
            "Compliance Checking"
          ],
          process: [
            "Requirements Gathering",
            "Document Drafting",
            "Compliance Review",
            "Final Delivery"
          ]
        },
        {
          title: "Cross-Border Business Support",
          image: "https://sftaxcounsel.com/wp-content/uploads/2025/07/Demystifying-a-Cross-Border-Tax-Free-Type-A-Merger-and-Acquisition.jpg",
          intro: "Navigating operational, cultural, and logistical barriers to establish strong international partnerships.",
          offerings: [
            "B2B Matchmaking",
            "Cultural Nuance Advisory",
            "Vendor/Partner Vetting",
            "Communication Facilitation"
          ],
          process: [
            "Strategic Alignment",
            "Partner Identification",
            "Initial Outreach",
            "Relationship Management"
          ]
        },
        {
          title: "Market Research",
          image: "https://myexeed.com/wp-content/uploads/2023/12/2.webp",
          intro: "In-depth insights into global market trends, consumer behaviors, and competitor strategies to guide expansion.",
          offerings: [
            "Industry Trend Reports",
            "Competitor Landscape Analysis",
            "Consumer Behavior Studies",
            "Regulatory Overviews"
          ],
          process: [
            "Define Research Scope",
            "Data Collection",
            "Analysis & Synthesis",
            "Comprehensive Reporting"
          ]
        },
        {
          title: "International Business Consulting",
          image: "https://media.jogroup.eu/jogroup.eu/wp-content/uploads/2022/10/Consulenza-aziendale-1-sito-1024x556.jpg",
          intro: "Strategic advisory tailored for companies aiming to establish or optimize physical or digital presence over borders.",
          offerings: [
            "Global Strategy Development",
            "Risk Management Advisory",
            "Operation Localization Strategies",
            "Global KPI Setup"
          ],
          process: [
            "Global Readiness Audit",
            "Strategy Formulation",
            "Execution Support",
            "Periodic Review"
          ]
        }
    ]
  },
  {
    id: "specialized-solutions",
    icon: Layers,
    title: "Specialized Solutions",
    shortDesc: "Custom technology stacks built for your operational needs.",
    subServices: [
        {
          title: "CRM Development",
          image: "https://codewave.com/insights/wp-content/uploads/2025/07/8-Step-Guide-to-CRM-System-Design-Development-800x500.png",
          intro: "Custom-built Customer Relationship Management systems designed exactly around your team's sales and support workflows.",
          offerings: [
            "Custom CRM Architecture",
            "Data Migration",
            "Third-party Integrations",
            "User Role Management"
          ],
          process: [
            "Workflow Analysis",
            "System Design",
            "Development & Integration",
            "Training & Deployment"
          ]
        },
        {
          title: "ERP Development",
          image: "https://s3-us-west-2.amazonaws.com/issuewireassets/primg/147663/erp-software-development-solutions1529150957.jpg",
          intro: "Unified Enterprise Resource Planning platforms to connect and manage all core aspects of your business seamlessly.",
          offerings: [
            "Module Customization",
            "Process Automation",
            "Legacy System Migration",
            "Analytics Dashboards"
          ],
          process: [
            "Business Assessment",
            "Blueprint Creation",
            "Iterative Development",
            "Go-Live & Support"
          ]
        },
        {
          title: "SaaS Platforms",
          image: "https://t3.ftcdn.net/jpg/08/41/03/30/360_F_841033007_KEWumxYxwS2DDwhulp1gkZkSROxsGmTL.jpg",
          intro: "Scalable, secure, and multi-tenant Software as a Service applications built to productize your unique value.",
          offerings: [
            "Multi-tenant Architecture",
            "Subscription & Billing Systems",
            "User Dashboards",
            "Scalable Cloud Hosting"
          ],
          process: [
            "Concept & Feasibility",
            "UX/UI Design",
            "Full-Stack Development",
            "Launch & Iteration"
          ]
        },
        {
          title: "AI Solutions",
          image: "https://itechindia.co/wp-content/uploads/2024/10/Empowering-organizations-with-AI-and-ML-solutions.png",
          intro: "Integrating Artificial Intelligence to automate tasks, predict trends, and enhance user experiences within your workflows.",
          offerings: [
            "Custom Chatbot Development",
            "Predictive Analytics Setup",
            "Process Automation via AI",
            "Recommendation Engines"
          ],
          process: [
            "Use-case Identification",
            "Data Preparation",
            "Model Integration/Development",
            "Testing & Optimization"
          ]
        },
        {
          title: "Mobile Applications",
          image: "https://www.montebellosoftware.com/wp-content/uploads/2022/11/pasted-image-0-19-1000x550.jpg",
          intro: "Native and cross-platform mobile apps structured for performance, security, and intuitive user engagement.",
          offerings: [
            "iOS & Android Development",
            "Cross-Platform Frameworks",
            "API Connected Apps",
            "App Store Optimization Support"
          ],
          process: [
            "Requirement Definition",
            "App Design (UI/UX)",
            "Development Phase",
            "Testing & Release"
          ]
        },
        {
          title: "API Integrations",
          image: "https://img.magnific.com/premium-photo/modern-api-integration-concept-with-hightech-digital-interface_1157641-28738.jpg?semt=ais_hybrid&w=740&q=80",
          intro: "Connecting disparate software systems, tools, and databases to ensure cohesive, real-time data flow.",
          offerings: [
            "Custom API Builds",
            "Third-Party Service Connections",
            "Payment Gateway Integrations",
            "Data Sync Solutions"
          ],
          process: [
            "System Audit",
            "Integration Mapping",
            "Development & Security Check",
            "Live Testing"
          ]
        },
        {
          title: "Business Automation Systems",
          image: "https://eco-cdn.iqpc.com/eco/images/channel_content/images/automationR2GmkOiitcRj2a2rfkM3pKpxfYNnRjkuhAR1f2Kv.webp",
          intro: "Eliminating manual, repetitive tasks through smart automation layers, freeing your team for high-value work.",
          offerings: [
            "Workflow Automation Maps",
            "No-code/Low-code Integrations",
            "Trigger-Based Alert Systems",
            "Approval Flow Automations"
          ],
          process: [
            "Workflow Mapping",
            "Automation Logic Design",
            "Implementation",
            "Monitoring & Refinement"
          ]
        }
    ]
  },
  {
    id: "service-packages",
    icon: Package,
    title: "Service Packages",
    shortDesc: "Value-packed bundles designed for different business stages.",
    subServices: [
        {
          title: "Starter Package",
          image: "https://i.ibb.co.com/fzgp6qyd/Chat-GPT-Image-Jun-21-2026-09-51-11-PM.png",
          intro: "The essential building blocks for new businesses starting their journey and establishing an initial identity.",
          offerings: [
            "Custom Logo Design",
            "Business Card Design",
            "Google Business Profile Setup"
          ],
          process: [
            "Initial Consultation",
            "Design & Setup",
            "Client Review",
            "Final Delivery"
          ]
        },
        {
          title: "Digital Presence Package",
          image: "https://i.ibb.co.com/WpxQw0CD/Chat-GPT-Image-Jun-21-2026-09-48-24-PM.png",
          intro: "A comprehensive bundle to get your business fully visible and accessible online for potential customers.",
          offerings: [
            "Business Website",
            "Google Business Profile",
            "WhatsApp Integration",
            "Contact Forms"
          ],
          process: [
            "Requirements Gathering",
            "Development Phase",
            "Testing & Integration",
            "Go Live"
          ]
        },
        {
          title: "Business Growth Package",
          image: "https://i.ibb.co.com/hT6FZxg/Chat-GPT-Image-Jun-21-2026-09-43-03-PM.png",
          intro: "Accelerate your company's growth with strategic consulting combined with a strong digital and visual footprint.",
          offerings: [
            "Business Website",
            "Branding",
            "Google Profile Optimization",
            "Business Consulting"
          ],
          process: [
            "Strategic Audit",
            "Asset Creation",
            "Optimization Implementation",
            "Ongoing Review"
          ]
        },
        {
          title: "Corporate Package",
          image: "https://i.ibb.co.com/Fqmq28Js/Chat-GPT-Image-Jun-21-2026-09-43-16-PM.png",
          intro: "A premium suite of corporate solutions tailored for scaling enterprises and high-level stakeholder engagement.",
          offerings: [
            "Company Profile",
            "Corporate Presentation",
            "Website",
            "Strategic Consultation"
          ],
          process: [
            "Executive Alignment",
            "Content & Design Production",
            "Holistic Review",
            "Strategic Rollout"
          ]
        }
    ]
  }
];
