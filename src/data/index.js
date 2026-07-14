import SafetySignImg from '@assets/SafetySign.png'

// ============================================
// CLIENTS DATA
// ============================================
export const clients = [
  { id: 1, name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png' },
  { id: 2, name: 'Mahindra & Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mahindra_Rise_logo.svg/200px-Mahindra_Rise_logo.svg.png' },
  { id: 3, name: 'Apollo Hospitals', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Apollo_Hospitals_Logo.svg/200px-Apollo_Hospitals_Logo.svg.png' },
  { id: 4, name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png' },
  { id: 5, name: 'Amazon India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
  { id: 6, name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png' },
  { id: 7, name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
  { id: 8, name: 'Bajaj Auto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bajaj_Auto_logo.svg/200px-Bajaj_Auto_logo.svg.png' },
]

// ============================================
// TEAM DATA
// ============================================
export const team = [
  {
    id: 1,
    name: 'Rajendra Sharma',
    designation: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: '20+ years experience in corporate printing, commercial signage fabrication, and corporate marketing across India.',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Anita Verma',
    designation: 'COO',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Operations expert with track record of scaling custom installation logistics and corporate facility support services.',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Suresh Nair',
    designation: 'VP – Business Development',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Led strategic brand integrations and fleet wrap accounts for corporate clients across Mumbai, Delhi, and Bangalore.',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Kavita Iyer',
    designation: 'Head – HR & Quality Control',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    bio: 'Oversees safety certifications and technician screening processes for high-altitude signboard deployments.',
    linkedin: '#',
  },
]

// ============================================
// BLOG DATA
// ============================================
export const blogPosts = [
  {
    id: 1,
    slug: 'impact-of-sign-boards-on-retail',
    title: 'How Modern LED Sign Boards Drive Foot Traffic in Retail Malls',
    category: 'Signages',
    date: '2025-12-15',
    author: 'Suresh Nair',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop',
    excerpt: 'Illuminated 3D LED signs play a massive role in storefront recognition. We explore key design configurations for high impact.',
  },
  {
    id: 2,
    slug: 'benefits-of-vehicle-branding-fleet',
    title: 'Calculating ROI of Fleet Vehicle Branding in Metro Cities',
    category: 'Branding',
    date: '2025-11-20',
    author: 'Anita Verma',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop',
    excerpt: 'Fleet vinyl wrapping turns passive delivery routes into dynamic mobile billboards. Learn about city-wide advertising metrics.',
  },
  {
    id: 3,
    slug: 'office-rebranding-culture',
    title: 'Transforming Workspaces: FROST Films & Lobby Branding',
    category: 'Office Branding',
    date: '2025-10-05',
    author: 'Rajendra Sharma',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop',
    excerpt: 'Modern glass partitioning and custom values wall decals do more than look good—they redefine company culture.',
  },
  {
    id: 4,
    slug: 'commercial-product-photography-tips',
    title: 'Commercial Product Photography: Tips for Clean Catalog Sets',
    category: 'Photography',
    date: '2025-09-12',
    author: 'Kavita Iyer',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop',
    excerpt: 'Precise color balancing and shadow editing are critical for digital catalogs. Learn our photography studio guidelines.',
  },
  {
    id: 5,
    slug: 'safety-signages-factories',
    title: 'Navigating Factory Safety Signage Rules in India',
    category: 'Compliance',
    date: '2025-08-18',
    author: 'Kavita Iyer',
    readTime: '4 min',
    image: SafetySignImg,
    excerpt: 'OSHA & Indian standards demand clear exit route markings and hazard boards. Check our safety board audit checklist.',
  },
  {
    id: 6,
    slug: 'it-support-network-cabling',
    title: 'Why Structured Cabling Matters For High-Speed Workstations',
    category: 'IT Support',
    date: '2025-07-22',
    author: 'Anita Verma',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
    excerpt: 'Organized CAT6 switches and patch panel terminations ensure low latency network operations. Learn how we prevent packet loss.',
  },
]

export const blogCategories = ['All', 'Signages', 'Branding', 'Office Branding', 'Photography', 'Compliance', 'IT Support']
