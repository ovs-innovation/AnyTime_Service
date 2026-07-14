import printingImg from '@assets/printing.webp'
import graphicImg from '@assets/graphic.jpg'
import signBordImg from '@assets/sign board.webp'

export const portfolioCategories = [
  'All',
  'Printing',
  'Branding',
  'Sign Boards',
  'LED Sign Boards',
  'Office Branding',
  'Product Photography',
  'Marketing',
  'Graphic Design',
  'Vehicle Branding',
  'Flex Printing'
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Annual Corporate Report Booklets',
    category: 'Printing',
    client: 'Tata Group',
    location: 'Mumbai, Maharashtra',
    image: printingImg,
    description: 'Offset printed 120-page annual report on premium 150 GSM matte art paper with gold foil stamping on the cover pages.',
    details: 'Completed printing of 5,000 corporate reports with precise Pantone matching, perfect binding, and protective velvet thermal lamination for the executive board members.'
  },
  {
    id: 2,
    title: 'Corporate Brand Identity Overhaul',
    category: 'Branding',
    client: 'Apollo Hospitals Group',
    location: 'Noida, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop',
    description: 'A comprehensive rebranding initiative including a modernized logo design, new color palettes, and strict typography rules.',
    details: 'Created an 80-page brand manual detailing design specifications for stationary, uniform embroidery, digital templates, and emergency vehicle symbols.'
  },
  {
    id: 3,
    title: 'Illuminated 3D LED Shop Signage',
    category: 'LED Sign Boards',
    client: 'Max Fashion Retail',
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop',
    description: 'Custom fabricated metal channel letters with internal weather-resistant LED light strips and laser-cut acrylic front faces.',
    details: 'Installed a 24-foot wide storefront board utilizing high-durability Korean LEDs. Features auto twilight sensors for smart energy savings.'
  },
  {
    id: 4,
    title: 'Industrial Safety & Directional Signages',
    category: 'Sign Boards',
    client: 'Mahindra Logistics Park',
    location: 'Pune, Maharashtra',
    image: signBordImg,
    description: 'High-visibility safety warning signs, warehouse aisle layout markers, and retro-reflective exit path signages.',
    details: 'Custom routed rust-free aluminum composite panels with laminated engineering grade reflective vinyl film sheets to ensure safety compliance.'
  },
  {
    id: 5,
    title: 'Frosted Glass Films & Lobby Graphics',
    category: 'Office Branding',
    client: 'Zoho Corporation Office',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop',
    description: 'Privacy frosted films featuring geometric cutouts, corporate mission statement decals, and reception acrylic brand board.',
    details: 'Delivered bubble-free installation on 120 partition glasses, alongside an elegant 10mm reception lobby acrylic board suspended with steel spacers.'
  },
  {
    id: 6,
    title: 'Professional Commercial Product Shoots',
    category: 'Product Photography',
    client: 'Urban Company Essentials',
    location: 'Gurugram, Haryana',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop',
    description: 'High-detail catalog product photography with precise color settings against clean white backgrounds for web application use.',
    details: 'Conducted high-definition shoots for 85 home cleaning products, including clipping path, color correction, shadow adjustment, and web optimized exports.'
  },
  {
    id: 7,
    title: 'B2B Field Promotion Campaigns',
    category: 'Marketing',
    client: 'HDFC Bank Corporate division',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    description: 'Coordination of B2B field activations, branded promotion stalls setup, and local print media distribution.',
    details: 'Deployed promotional kiosks at 15 tech parks over 5 days, generating 1,200 verified sales leads for business loan accounts.'
  },
  {
    id: 8,
    title: 'Creative Corporate Brochure Design',
    category: 'Graphic Design',
    client: 'Tata Steel Infrastructure',
    location: 'Kolkata, West Bengal',
    image: graphicImg,
    description: 'Editorial graphic design and typographic planning for a tri-fold structural steel brochure booklet.',
    details: 'Designed clean infographics, custom maps, structural charts, and photo pages aligned with Tata Steel corporate color standards.'
  },
  {
    id: 9,
    title: 'Delivery Fleet Custom Vehicle Wraps',
    category: 'Vehicle Branding',
    client: 'Amazon India Logistics',
    location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop',
    description: 'High-quality automotive cast vinyl partial wraps on 50 delivery vans with UV-protective lamination layers.',
    details: 'Printed and applied Amazon logo wraps with precision cutout slots matching vehicle panels. Backed by a 3-year warranty against peeling.'
  },
  {
    id: 10,
    title: 'Wide Format Event Flex Banners',
    category: 'Flex Printing',
    client: 'DPS International School',
    location: 'Noida, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop',
    description: 'Massive front-lit flex banners with eyelet borders for annual school sports meet promotion.',
    details: 'High-speed solvent printing of a 40x15 feet banner on heavy weather-proof flex material, complete with grommets and corner reinforcement.'
  }
];
