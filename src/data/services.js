// Icon names are stored as strings and resolved via iconMap in component files
import printingImg from '@assets/printing.webp'
import graphicImg from '@assets/graphic.jpg'
import iTHardwareImg from '@assets/Hardware-Software-Support.jpg'
import customMImg from '@assets/custom merchandise.webp'
import signBordImg from '@assets/sign board.webp'




export const services = [
  {
    id: 1,
    slug: 'printing',
    title: 'Printing Services',
    icon: 'MdPrint',
    color: '#D62828',
    shortDesc: 'Premium bulk printing solutions for corporate collaterals, marketing materials, and custom stationeries.',
    description: 'We deliver high-end offset and digital printing services tailored for corporate business needs. From annual reports and brochures to corporate stationeries, our state-of-the-art machinery ensures accurate colors and premium finishes.',
    features: ['High-resolution digital & offset printing', 'Corporate stationery (business cards, letterheads)', 'Brochures, catalog & flyer production', 'Custom finishing options (matte, gloss, UV, foil)'],
    benefits: ['Consistent brand presentation', 'Fast turnaround times on bulk orders', 'Cost-effective high-volume solutions', 'Eco-friendly paper options available'],
    industries: ['Corporate Offices', 'Retail & Showrooms', 'Schools & Universities', 'Banks & Insurance'],
    process: ['Requirement collection & file review', 'Pre-press digital proofing for approval', 'High-speed precision printing', 'Quality inspection and bulk packaging', 'Secure door-step delivery'],
    gallery: [
      printingImg,
      printingImg,
      printingImg,
      printingImg,
    ],
    faqs: [
      { q: 'What is the minimum order quantity for printing?', a: 'We handle both short-run digital orders and large offset print runs. Minimum quantity varies depending on the product, starting from 100 units.' },
      { q: 'Can you match exact Pantone colors?', a: 'Yes, we use advanced color management systems to ensure precise matching for corporate brand guidelines.' }
    ]
  },
  {
    id: 2,
    slug: 'branding',
    title: 'Corporate Branding',
    icon: 'MdBrandingWatermark',
    color: '#0F172A',
    shortDesc: 'Holistic identity design, brand manuals, logo creation, and comprehensive corporate guidelines.',
    description: 'Establish a commanding presence in your industry. We help design comprehensive visual identities that communicate authority, reliability, and modern aesthetics to your clients and partners.',
    features: ['Logo design & corporate identity systems', 'Brand guidelines & typography style manuals', 'Marketing collateral templates', 'Packaging design and identity consulting'],
    benefits: ['Builds professional trust', 'Creates high visual recognition', 'Ensures consistency across global touchpoints', 'Boosts team pride and organizational alignment'],
    industries: ['Corporate Offices', 'Hospitals & Healthcare', 'Warehouses & Logistics', 'Hotels & Hospitality'],
    process: ['In-depth discovery & brand values audit', 'Moodboard creation & thematic concepts', 'Refining selected identity layouts', 'Developing full brand book assets', 'Handoff of ready-to-use source formats'],
    gallery: [
      'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'Do you write custom brand strategy manuals?', a: 'Yes, our brand strategy document covers tone of voice, visual rules, logo restrictions, and font families.' }
    ]
  },
  {
    id: 3,
    slug: 'marketing',
    title: 'Marketing & Activation',
    icon: 'MdCampaign',
    color: '#F59E0B',
    shortDesc: 'B2B activations, field promotions, brand campaigns, and strategic lead generation activities.',
    description: 'Expand your reach across key Indian demographics. We execute corporate activations, offline marketing drives, and field promotions that put your services right in front of target decision makers.',
    features: ['Field marketing & product activations', 'Corporate gifting campaigns', 'Interactive customer feedback surveys', 'Targeted marketing material distribution'],
    benefits: ['Direct touchpoint with prospects', 'Measurable customer response rate', 'Accelerated sales pipeline growth', 'Hyper-local brand awareness'],
    industries: ['Banks', 'Retail', 'Government Units', 'Construction Sector'],
    process: ['Campaign objective definition', 'Material sourcing & staff training', 'Execution of promotional campaigns', 'Monitoring & daily performance reporting', 'Lead database compilation'],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'Do you manage both digital and print campaigns?', a: 'Yes, we synchronize physical printing/branding campaigns with target local digital reach.' }
    ]
  },
  {
    id: 4,
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: 'MdColorLens',
    color: '#D62828',
    shortDesc: 'High-end custom vector assets, layouts, digital presentations, and editorial designing.',
    description: 'Transform complex business briefs into captivating visual stories. Our design studio crafts premium templates, marketing materials, and digital graphics keeping in line with modern grid layouts.',
    features: ['Corporate profiles & pitch presentations', 'Infographic & data visualization models', 'Brochures, banners, & social media templates', 'Custom vector designs and assets'],
    benefits: ['Establishes professional look', 'Engages potential clients effectively', 'Fast updates with editable source files', 'High accessibility with vector scale compatibility'],
    industries: ['Corporate Offices', 'Hospitals', 'Schools', 'Banks'],
    process: ['Creative brief review & research', 'Initial concept drafts & layouts', 'Client review and iteration phases', 'Final typography adjustment & export', 'Delivery of fully editable source templates'],
    gallery: [
      graphicImg,
      graphicImg,
      graphicImg,
      graphicImg,

    ],
    faqs: [
      { q: 'In what file formats do you deliver designs?', a: 'We deliver editable PSD, AI, INDD, Figma files alongside standard PNG, PDF, and SVG outputs.' }
    ]
  },
  {
    id: 5,
    slug: 'product-photography',
    title: 'Product Photography',
    icon: 'MdPhotoCamera',
    color: '#0F172A',
    shortDesc: 'Ultra-crisp commercial product shoots, corporate portraits, and industrial facility coverage.',
    description: 'High-quality photography is essential for modern commercial trust. We arrange professional studio and site photography, ensuring lighting, backgrounds, and styling highlight your brand values.',
    features: ['Studio lighting setup and backdrops', 'High-definition retail product photography', 'Industrial plant & facility coverage', 'Corporate headshots and team portraiture'],
    benefits: ['Provides genuine image assets', 'Boosts catalog conversions', 'Professional look across corporate websites', 'High-resolution print-ready files'],
    industries: ['Factories', 'Warehouses', 'Corporate Offices', 'Retail'],
    process: ['Creative moodboard & scene setup planning', 'Item preparation & layout design', 'Multi-angle studio/on-site photo session', 'Color grading & high-detail retouching', 'Delivery of high-res image sets'],
    gallery: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'Do you support editing and background removal?', a: 'Yes, all product images undergo professional clipping, cleanup, and background normalization.' }
    ]
  },
  {
    id: 6,
    slug: 'handyman-services',
    title: 'Handyman Services',
    icon: 'MdConstruction',
    color: '#F59E0B',
    shortDesc: 'General maintenance, corporate carpenter teams, painting, and swift repair solutions.',
    description: 'Ensure smooth operations within your premises. We provide expert carpenter and general maintenance professionals for corporate offices, retail stores, and commercial structures.',
    features: ['Office carpentry & workstation modifications', 'General facility repairs and maintenance', 'Commercial painting & plaster touch-ups', 'Fixture & hardware assemblies'],
    benefits: ['Minimizes facility downtime', 'Highly experienced technician teams', 'Statutorily compliant contract labor', 'Instant replacements for uninterrupted shifts'],
    industries: ['Corporate Offices', 'Hotels', 'Schools', 'Retail'],
    process: ['Facility inspection & defect mapping', 'Task prioritisation & material estimation', 'On-site execution by certified technicians', 'Safety checklist validation', 'Client signoff and feedback collection'],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'Do you offer emergency breakdown support?', a: 'Yes, we have mobile handyman teams on-call to address urgent maintenance issues within commercial properties.' }
    ]
  },
  {
    id: 7,
    slug: 'it-hardware-support',
    title: 'IT & Hardware Support',
    icon: 'MdComputer',
    color: '#D62828',
    shortDesc: 'Desktop management, firewall routing, networking, structured cabling, and server maintenance.',
    description: 'Keep your digital systems secure and operational. Our certified network engineers and desktop engineers manage workstation setups, system diagnostics, software updates, and structured LAN cabling.',
    features: ['Desktop troubleshooting & system optimization', 'Structured networking & patch panel wiring', 'Firewall configuration & Wi-Fi routers', 'UPS & peripheral equipment diagnostics'],
    benefits: ['Secures business databases', 'Ensures uninterrupted digital workflows', 'Fast response to hardware breakdowns', 'Saves money compared to full-time IT hires'],
    industries: ['Corporate Offices', 'Banks', 'Schools', 'Warehouses'],
    process: ['IT infrastructure audit', 'Network diagram mapping', 'Deployment of on-site IT technicians', 'Implementation of routine diagnostics', 'Incident resolution tracking'],
    gallery: [
      iTHardwareImg,
      iTHardwareImg,
      iTHardwareImg,
      iTHardwareImg,
    ],
    faqs: [
      { q: 'Can you set up structured cabling for a new office?', a: 'Yes, we handle complete CAT6 LAN cabling, routing configurations, patch panel terminations, and switch setup.' }
    ]
  },
  {
    id: 8,
    slug: 'financial-collection',
    title: 'Financial Collection',
    icon: 'MdAttachMoney',
    color: '#0F172A',
    shortDesc: 'Legal collection management, payment follow-ups, and credit control support services.',
    description: 'Maximize cash flow and decrease bad debts. We assist corporate clients in polite, compliant, and legally structured payment follow-ups, invoice management, and collection coordination.',
    features: ['Compliant invoice follow-up schedules', 'Credit validation and documentation checking', 'Systematic reporting and account updates', 'Dispute resolution mediation'],
    benefits: ['Reduces outstanding credit cycles', 'Maintains client-customer relationship integrity', 'Full legal compliance with banking standards', 'Detailed dashboard reporting'],
    industries: ['Banks', 'Corporate Offices', 'Factories', 'Retail'],
    process: ['Account reviews & invoice audit', 'Customer profiling and soft follow-ups', 'Escalation mapping & negotiation', 'Payment processing coordination', 'Ledger reconciliation'],
    gallery: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'Are your agents trained on industry compliance guidelines?', a: 'Yes, all agents are certified and undergo mandatory training regarding compliance standards and code of conduct.' }
    ]
  },
  {
    id: 9,
    slug: 'banking-services',
    title: 'Banking Services Support',
    icon: 'MdAccountBalance',
    color: '#F59E0B',
    shortDesc: 'Document verification, KYC checks, field visits, and audit documentation assistance.',
    description: 'Speed up banking workflows with verified outsourcing. We supply experienced support staff to manage customer documentation checking, KYC collection, field audits, and administrative file tracking.',
    features: ['KYC documentation verification', 'Address verification field visits', 'Banking terminal data updates', 'Audit compliance file compilation'],
    benefits: ['Accelerates loan & account approvals', 'Reduces administrative overheads', 'Prevents onboarding identity fraud', 'High security and data privacy measures'],
    industries: ['Banks', 'Government', 'Corporate Offices'],
    process: ['SOP alignment & protocol definition', 'Document collection & digitisation', 'Physical field verification calls', 'Validation reports compilation', 'Encrypted database upload'],
    gallery: [
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop'
    ],
    faqs: [
      { q: 'How do you guarantee customer data privacy?', a: 'Our operations comply with banking data protection norms. All verification files are handled using secure, encrypted channels.' }
    ]
  },
  {
    id: 10,
    slug: 'sign-board-printing',
    title: 'Sign Board Printing',
    icon: 'MdFeaturedPlayList',
    color: '#D62828',
    shortDesc: 'Custom industrial & commercial signages, exit routes, and directional boards.',
    description: 'Ensure safety and navigation throughout your workspace. We design and print highly visible directional and warning signs suitable for corporate offices, warehouses, and factories.',
    features: ['UV-resistant warning signages', 'Directional & escape route boards', 'Premium material finishes (Metal, Sunboard, Acrylic)', 'Reflective vinyl signs for dark areas'],
    benefits: ['Ensures workplace safety compliance', 'Highly visible layout designs', 'Long-lasting weather-proof material', 'Aesthetic integration with office styling'],
    industries: ['Factories', 'Warehouses', 'Corporate Offices', 'Construction'],
    process: ['Site safety signs assessment', 'Visual planning & layout creation', 'Substrate printing & lamination', 'Mounting and inspection check'],
    gallery: [signBordImg, signBordImg, signBordImg, signBordImg],
    faqs: []
  },
  {
    id: 11,
    slug: 'flex-printing',
    title: 'Flex Printing',
    icon: 'MdPhotoSizeSelectActual',
    color: '#0F172A',
    shortDesc: 'High-durability banners, promotional backdrops, and event display prints.',
    description: 'Perfect for wide-format displays, events, and outdoor marketing. Our flex prints maintain vibrant colors, high contrast, and excellent durability under heavy outdoor exposure.',
    features: ['Wide-format digital printing', 'Premium gloss/matte flex fabrics', 'Star flex high-density materials', 'Reinforced borders & grommet setups'],
    benefits: ['Highly affordable wide displays', 'Weatherproof colors', 'Perfect for marketing events', 'Fast print processing speeds'],
    industries: ['Retail', 'Corporate Offices', 'Schools', 'Marketing Campaigns'],
    process: ['Resolution check on graphic files', 'High-speed solvent/eco-solvent printing', 'Seaming and edge reinforcement', 'Eyelet setting for easy suspension'],
    gallery: ['https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 12,
    slug: 'led-sign-boards',
    title: 'LED Sign Boards',
    icon: 'MdLightbulb',
    color: '#F59E0B',
    shortDesc: 'High-visibility illuminated 3D LED letters and channel letter signages.',
    description: 'Catch every eye with custom illuminated outdoor signage. We manufacture premium 3D LED channel letter boards that make your commercial showrooms stand out day and night.',
    features: ['Premium weather-proof LED lights', 'Custom acrylic & metal letters', 'Energy-efficient transformers', 'Programmed animations or static lighting'],
    benefits: ['High nighttime visibility', 'Low electricity usage', 'Premium branding look', 'Minimal maintenance needed'],
    industries: ['Retail', 'Hotels', 'Hospitals', 'Corporate Offices'],
    process: ['Architectural sign mockup', 'Metal/Acrylic letter routing', 'Internal LED layout planning', 'Welding and assembly setup', 'On-site structural installation'],
    gallery: ['https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 13,
    slug: 'acp-sign-boards',
    title: 'ACP Sign Boards',
    icon: 'MdDashboard',
    color: '#D62828',
    shortDesc: 'Aluminium Composite Panel bases with acrylic elements for corporate facades.',
    description: 'Premium structural front boards featuring an Aluminium Composite Panel (ACP) base. It offers high resistance to weather, flat structure, and modern corporate finish.',
    features: ['Anti-rust aluminium panels', 'CNC router cutting customization', 'Combined LED/Acrylic details', 'Wide range of panel colors'],
    benefits: ['Excellent durability in heavy rain', 'Sleek, premium look', 'Strong structure resists wind', 'Maintains structural flat look'],
    industries: ['Corporate Offices', 'Banks', 'Showrooms', 'Factories'],
    process: ['Site measurements check', 'ACP sheet CNC cutting', 'Support frame fabrication', 'Letter fixing & wiring', 'Façade anchor installation'],
    gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 14,
    slug: 'glow-sign-boards',
    title: 'Glow Sign Boards',
    icon: 'MdWallpaper',
    color: '#0F172A',
    shortDesc: 'Backlit box signages for budget-friendly commercial storefront identity.',
    description: 'Traditional backlit flex box boards that provide a cost-effective, illuminated solution for general retail branding and commercial storefronts.',
    features: ['Heavy-duty metal box frames', 'Backlit printing formats', 'Efficient internal tube lighting', 'Water-resistant structure framing'],
    benefits: ['Highly affordable lighted signs', 'Clear brand visibility', 'Easy replacement of graphics', 'Durable steel casing'],
    industries: ['Retail', 'Pharmacies', 'Showrooms', 'Schools'],
    process: ['Box framework sizing', 'High-translucency flex printing', 'Tube/LED installation inside box', 'Tension mount of printed media', 'Wall bracket mounting'],
    gallery: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 15,
    slug: 'acrylic-sign-boards',
    title: 'Acrylic Sign Boards',
    icon: 'MdViewQuilt',
    color: '#F59E0B',
    shortDesc: 'Sleek laser-cut acrylic panel boards for corporate reception areas.',
    description: 'Give your office lobby or boardroom a sophisticated touch. We create premium acrylic sign boards with laser-cut raised text, mounted using designer steel studs.',
    features: ['High-gloss virgin acrylic sheet', 'Laser-cut raised text shapes', 'Premium stainless steel wall mount studs', 'Option for internal edge lighting'],
    benefits: ['Super elegant lobby look', 'Accurate edge design lines', 'Durable, scratch-resistant surface', 'Easy cleanup and maintenance'],
    industries: ['Corporate Offices', 'Hospitals', 'Hotels', 'Banks'],
    process: ['Drafting design vectors', 'Acrylic sheet laser routing', 'Lobby wall position marking', 'Drilling & mounting stainless steel studs', 'Acrylic panel lock-in'],
    gallery: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 16,
    slug: 'office-branding',
    title: 'Office Branding',
    icon: 'MdBusiness',
    color: '#D62828',
    shortDesc: 'Comprehensive office graphics, frosted glass films, and timeline murals.',
    description: 'Create an environment that inspires your team and builds confidence in your visitors. We design, produce, and apply complete office branding graphics, wall decals, and custom films.',
    features: ['Frosted glass privacy films', 'Custom corporate mission & value decals', 'Company history timeline murals', 'Room and desk sign plates'],
    benefits: ['Elevates office environment vibe', 'Increases visitor trust', 'Imparts visual values to teams', 'Clean, modern partitioning look'],
    industries: ['Corporate Offices', 'Banks', 'Schools', 'Hospitals'],
    process: ['Facility walkthrough and visual mapping', 'Creating themes in line with company colors', 'Production of vinyl and frost graphics', 'On-site bubble-free installation'],
    gallery: ['https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 17,
    slug: 'vehicle-branding',
    title: 'Vehicle Branding',
    icon: 'MdDirectionsCar',
    color: '#0F172A',
    shortDesc: 'Custom decals and full/partial wraps for delivery trucks, vans, and bikes.',
    description: 'Turn your delivery vehicles into mobile billboards. Our vehicle wraps feature high-quality vinyl sheets that protect the car paint while displaying your brand to thousands of daily commuters.',
    features: ['Automotive-grade cast vinyl media', 'Full vehicle color customization options', 'UV-protection lamination wrap layers', 'Precision vehicle-specific template cutouts'],
    benefits: ['Free mobile advertising reach', 'Protects vehicle paint', 'Creates professional delivery fleet look', 'Long-lasting decal bond'],
    industries: ['Warehouses', 'Retail', 'Factories', 'Corporate Offices'],
    process: ['Taking vehicle measurements & photo templates', 'Design adjustment according to panels', 'Printing & lamination of cast vinyl sheets', 'Expert installation by certified wrap teams'],
    gallery: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 18,
    slug: 'indoor-branding',
    title: 'Indoor Branding',
    icon: 'MdHomeWork',
    color: '#F59E0B',
    shortDesc: 'In-store banners, canvas wraps, hanging panels, and point-of-sale setups.',
    description: 'Ensure in-store visitors are greeted with your latest promotions. We design and install point-of-sale banners, hanging visual displays, and corporate display units inside retail centers and offices.',
    features: ['Foam-board displays & popups', 'Hanging graphics with aluminum frames', 'Canvas frame graphics', 'Interactive display stands'],
    benefits: ['Improves internal sales rates', 'Easily updated layout graphics', 'Premium surface texture print materials', 'Organized and neat look'],
    industries: ['Retail', 'Corporate Offices', 'Hotels', 'Schools'],
    process: ['Lobby or floor space measurement checks', 'Material options matching design needs', 'Printing and frame construction', 'On-site placement and adjustment'],
    gallery: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 19,
    slug: 'outdoor-branding',
    title: 'Outdoor Branding',
    icon: 'MdPublic',
    color: '#D62828',
    shortDesc: 'Unipole displays, exterior banners, barricade prints, and building wraps.',
    description: 'Make a powerful impact on local road traffic. We plan and build wide-scale unipoles, building glass decals, hoarding setups, and construction fence prints.',
    features: ['Wind-resistant steel mounting structures', 'Heavy-weight mesh banner fabrics', 'High-solvent fade-proof inks', 'Comprehensive structural safety reports'],
    benefits: ['Maximum brand visibility reach', 'Resists heavy monsoon rains', 'Great for project launches', 'Creates massive local authority presence'],
    industries: ['Construction', 'Real Estate', 'Retail', 'Government'],
    process: ['Location access check & permission reviews', 'Structural structural calculations', 'Wide-format printing & grommet setting', 'Safety crane hoisting and framing'],
    gallery: ['https://images.unsplash.com/photo-1540340061722-9293d5163008?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 20,
    slug: 'installation-services',
    title: 'Installation Services',
    icon: 'MdHandyman',
    color: '#0F172A',
    shortDesc: 'Professional sign mounting, height works, and display structure fitting.',
    description: 'Safe, certified execution is our priority. Our specialized mounting teams handle height rigging, welding, electrical sign wiring, and structural framing safely and efficiently.',
    features: ['Licensed height rigging specialists', 'On-site welding & anchor framing', 'Safe electrical connector installation', 'Scaffolding and crane arrangements'],
    benefits: ['Zero-risk client setup handling', 'Fully certified work procedures', 'Safe structure operations', 'Insured installation crews'],
    industries: ['Construction', 'Factories', 'Warehouses', 'Retail'],
    process: ['Site safety checklist review', 'Scaffolding/rigging equipment check', 'Anchoring structural frame support', 'Wiring connections check', 'Final structural safety signoff'],
    gallery: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop'],
    faqs: []
  },
  {
    id: 21,
    slug: 'custom-merchandise',
    title: 'Custom Merchandise',
    icon: 'MdCardGiftcard',
    color: '#F59E0B',
    shortDesc: 'Corporate uniforms, customized t-shirts, diaries, pens, and branding assets.',
    description: 'Boost team pride and offer clients memorable gifts. We print high-quality t-shirts, hoodies, corporate organizers, diaries, pens, and customized keychains featuring your brand logo.',
    features: ['Cotton custom fabric t-shirt prints', 'Logo engraving on metal pens', 'Custom organizer diaries', 'Gift-box packing options'],
    benefits: ['Creates team unity look', 'Long-lasting promotional items', 'Premium quality gift boxes', 'Affordable B2B gifting rates'],
    industries: ['Corporate Offices', 'Schools', 'Banks', 'Hotels'],
    process: ['Gift set selection & mockup creation', 'Embroidery & printing processes setup', 'Gift packaging setup', 'Quality checking run', 'Box packing and shipping'],
    gallery: [customMImg, customMImg, customMImg, customMImg],
    faqs: []
  },
  {
    id: 22,
    slug: 'corporate-branding-solutions',
    title: 'Corporate Branding Solutions',
    icon: 'MdDomain',
    color: '#D62828',
    shortDesc: 'End-to-end identity transformations for showrooms, warehouses, and factories.',
    description: 'A complete branding solutions bundle designed for expanding enterprises. We coordinate all elements of showroom visuals, facade composite boards, entrance letter lights, and indoor decals.',
    features: ['Showroom facade front boards coordination', 'Directional sign setups installation', 'Acrylic lobby brandings', 'Sales area promotional popups'],
    benefits: ['Saves time with single vendor', 'Perfect design consistency across sites', 'Volume package discounts', 'Dedicated project manager assignment'],
    industries: ['Retail', 'Warehouses', 'Hospitals', 'Banks'],
    process: ['Strategic brand audit and roadmap planning', 'Material mockups verification', 'Phased production run planning', 'Parallel installations execution', 'Project review checklist approval'],
    gallery: ['https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop'],
    faqs: []
  }
];
