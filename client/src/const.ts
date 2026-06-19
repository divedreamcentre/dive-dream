// Dive Dream Diving Centre Ltd. - Data Models

export interface DiveSite {
  id: string;
  name: string;
  description: string;
  location: string;
  maxDepth: string;
  certificationLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Technical';
  type: ('Wreck' | 'Reef' | 'Deep' | 'Drift' | 'Wall' | 'Night')[];
  marineLife: string[];
  visibility: string;
  waterTemp: string;
  bestSeason: string;
  weatherConditions: string;
  image: string;
}

export interface Course {
  id: string;
  name: string;
  category: 'Beginner' | 'Advanced' | 'Rescue' | 'Technical';
  agency: 'SDI' | 'TDI';
  overview: string;
  prerequisites: string;
  duration: string;
  certificationAwarded: string;
  includedMaterials: string[];
  price: number;
  schedule: string;
}

export interface DivePackage {
  id: string;
  name: string;
  price: number;
  divesCount: number;
  equipmentIncluded: boolean;
  nitroxOption: boolean;
  privateGuideOption: boolean;
  duration: string;
  isBestValue?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  discount: string;
  description: string;
  expiryDate?: string;
  code: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface CrewMember {
  id: string;
  name: string;
  position: string;
  certifications: string[];
  experience: string;
  languages: string[];
  specializations: string[];
  biography: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// ASSET URL CONSTANTS (Generated via high-quality AI)
export const IMAGES = {
  heroUnderwater: "https://d2xsxph8kpxj0f.cloudfront.net/310519663733648542/Aznto3QGygoTJ6FEJVsnJY/hero-underwater-TdUHKQ4U3Ev9xUQ3CDVhpJ.webp",
  diveSiteWreck: "https://d2xsxph8kpxj0f.cloudfront.net/310519663733648542/Aznto3QGygoTJ6FEJVsnJY/dive-site-wreck-3MmgzhoQkDytwfdvsYoTso.webp",
  diveBoat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663733648542/Aznto3QGygoTJ6FEJVsnJY/dive-boat-Nq3qNVj5ZE2g5tsFeu9nvJ.webp",
  scubaTraining: "https://d2xsxph8kpxj0f.cloudfront.net/310519663733648542/Aznto3QGygoTJ6FEJVsnJY/scuba-training-PSQrqcSuAnqLbc4WsFz74z.webp",
  coralReef: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  seaTurtle: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80",
  mantaRay: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  whaleShark: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  instructor1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  instructor2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  instructor3: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  gearRegulator: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
  gearWetsuit: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
  gearComputer: "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?auto=format&fit=crop&w=600&q=80",
  diveCenterClass: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  diveCenterReception: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
};

export const GALLERY_IMAGES = [
  "/images/_16A1117a.webp",
  "/images/_16A1136.webp",
  "/images/_16A1225.webp",
  "/images/_16A5023A-DeNoiseAI-severe-noise copy.webp",
  "/images/_16A5285a-DeNoiseAI-severe-noise copy 2.webp",
  "/images/_16A5337a-DeNoiseAI-severe-noise.webp",
  "/images/_16A8879.webp",
  "/images/_MG_9712-DeNoiseAI-severe-noise.webp",
];

// Dive Dream operates 40+ dive sites across Mauritius
export const DIVE_SITES: DiveSite[] = [
  {
    id: 'coin-de-mire',
    name: 'Coin de Mire',
    description: 'One of Mauritius\'s most spectacular dive sites, Coin de Mire offers dramatic underwater topography with stunning coral formations, abundant marine life, and excellent visibility. Perfect for experienced divers seeking adventure.',
    location: 'Northern Mauritius',
    maxDepth: '40m (130ft)',
    certificationLevel: 'Advanced',
    type: ['Deep', 'Wall', 'Drift'],
    marineLife: ['Groupers', 'Snappers', 'Barracudas', 'Reef Sharks'],
    visibility: '25m - 40m',
    waterTemp: '24°C - 28°C (75°F - 82°F)',
    bestSeason: 'October to April',
    weatherConditions: 'Moderate to strong currents, suitable for advanced divers.',
    image: IMAGES.heroUnderwater
  },
  {
    id: 'ile-plate',
    name: 'Ile Plate',
    description: 'A pristine reef system in Northern Mauritius featuring vibrant coral gardens, abundant tropical fish species, and excellent conditions for both recreational and technical diving. Known for its biodiversity.',
    location: 'Northern Mauritius',
    maxDepth: '35m (115ft)',
    certificationLevel: 'Intermediate',
    type: ['Reef', 'Deep'],
    marineLife: ['Clownfish', 'Parrotfish', 'Moray Eels', 'Trevally'],
    visibility: '20m - 35m',
    waterTemp: '25°C - 27°C (77°F - 81°F)',
    bestSeason: 'Year-round (Best: May to September)',
    weatherConditions: 'Generally calm with light to moderate currents.',
    image: IMAGES.diveSiteWreck
  },
  {
    id: 'round-island',
    name: 'Round Island',
    description: 'A scenic dive destination featuring pristine coral reefs, clear waters, and excellent marine biodiversity. Round Island is ideal for photographers and divers seeking a mix of shallow and deep exploration.',
    location: 'Northern Mauritius',
    maxDepth: '30m (100ft)',
    certificationLevel: 'Beginner',
    type: ['Reef', 'Night'],
    marineLife: ['Green Sea Turtles', 'Octopus', 'Nudibranchs', 'Lionfish'],
    visibility: '20m - 30m',
    waterTemp: '26°C - 28°C (79°F - 82°F)',
    bestSeason: 'Year-round',
    weatherConditions: 'Calm to moderate, suitable for all levels.',
    image: IMAGES.coralReef
  },
  {
    id: 'passe-st-jacques',
    name: 'Passe St-Jacques',
    description: 'Located in Southern Mauritius, Passe St-Jacques is a world-class dive site featuring dramatic underwater canyons, strong currents, and encounters with large pelagic species. A favorite among technical divers.',
    location: 'Southern Mauritius',
    maxDepth: '45m (150ft)',
    certificationLevel: 'Advanced',
    type: ['Deep', 'Drift', 'Wall'],
    marineLife: ['Hammerhead Sharks', 'Eagle Rays', 'Jacks', 'Tuna'],
    visibility: '25m - 40m',
    waterTemp: '23°C - 26°C (73°F - 79°F)',
    bestSeason: 'May to September',
    weatherConditions: 'Strong currents, requires advanced skills and experience.',
    image: IMAGES.scubaTraining
  }
];

// Dive Dream offers comprehensive SDI/TDI training
export const COURSES: Course[] = [
  {
    id: 'sdi-open-water',
    name: 'SDI Open Water Scuba Diver',
    category: 'Beginner',
    agency: 'SDI',
    overview: 'Your gateway to underwater exploration. This comprehensive course teaches fundamental knowledge and practical skills needed to dive safely to 18 meters independently with a buddy. Perfect for beginners.',
    prerequisites: 'Minimum age 10, comfortable swimming ability, medical clearance.',
    duration: '3 - 4 Days',
    certificationAwarded: 'SDI Open Water Diver (Lifetime, Globally Recognized)',
    includedMaterials: ['SDI eLearning Access', 'Digital Logbook', 'Premium Gear Rental', 'Certification Fees'],
    price: 450,
    schedule: 'Day 1: Theory review & confined water skills. Day 2-3: Ocean training dives. Day 4: Final certification dives.'
  },
  {
    id: 'sdi-advanced-water',
    name: 'SDI Advanced Open Water Diver',
    category: 'Advanced',
    agency: 'SDI',
    overview: 'Build confidence and expand your diving capabilities. This course provides hands-on experience in advanced diving techniques, allowing you to dive to 30 meters with proper training and certification.',
    prerequisites: 'SDI Open Water Diver certification or equivalent.',
    duration: '2 - 3 Days',
    certificationAwarded: 'SDI Advanced Open Water Diver',
    includedMaterials: ['eLearning materials', 'Specialty equipment', '4 Ocean training dives'],
    price: 390,
    schedule: 'Day 1: Navigation and buoyancy training. Day 2-3: Specialty dives including deep and drift diving.'
  },
  {
    id: 'sdi-rescue',
    name: 'SDI Rescue Diver',
    category: 'Rescue',
    agency: 'SDI',
    overview: 'Develop critical rescue skills and emergency management techniques. This challenging course prepares you to assist other divers and handle emergency situations with confidence and professionalism.',
    prerequisites: 'Advanced Diver certification, current CPR/First Aid.',
    duration: '3 Days',
    certificationAwarded: 'SDI Rescue Diver',
    includedMaterials: ['SDI Rescue eLearning', 'Oxygen Provider training', 'Scenario-based training'],
    price: 480,
    schedule: 'Day 1: Rescue theory and self-rescue techniques. Day 2: Confined water rescue drills. Day 3: Ocean rescue scenarios.'
  },
  {
    id: 'tdi-nitrox',
    name: 'TDI Enriched Air Nitrox Diver',
    category: 'Advanced',
    agency: 'TDI',
    overview: 'Learn to safely dive with Enriched Air Nitrox to extend your no-decompression limits, reduce surface intervals, and experience less post-dive fatigue. Our state-of-the-art Nitrox station supports this training.',
    prerequisites: 'Open Water Diver certification.',
    duration: '1 Day',
    certificationAwarded: 'TDI Nitrox Diver',
    includedMaterials: ['TDI Nitrox eLearning', 'Gas analysis workshop', '2 Nitrox cylinder fills'],
    price: 180,
    schedule: 'Morning: Physics & physiology lecture, gas analyzer practice. Afternoon: Optional 2 dives using Nitrox.'
  },
  {
    id: 'tdi-wreck-diving',
    name: 'TDI Wreck Diving Specialty',
    category: 'Advanced',
    agency: 'TDI',
    overview: 'Explore the fascinating world of wreck diving. Learn specialized techniques for safe penetration, navigation, and artifact identification in underwater wreck environments.',
    prerequisites: 'Advanced Diver, 25 logged dives.',
    duration: '2 Days',
    certificationAwarded: 'TDI Wreck Diving Specialty',
    includedMaterials: ['TDI Wreck manual', 'Specialty equipment', '3 wreck training dives'],
    price: 320,
    schedule: 'Day 1: Wreck diving theory and confined water training. Day 2: Two guided wreck dives.'
  },
  {
    id: 'tdi-deep-diving',
    name: 'TDI Deep Diver Specialty',
    category: 'Advanced',
    agency: 'TDI',
    overview: 'Master the skills required for deep diving beyond recreational limits. Learn decompression theory, gas management, and safety procedures for dives to 40 meters.',
    prerequisites: 'Advanced Diver, 25 logged dives.',
    duration: '2 Days',
    certificationAwarded: 'TDI Deep Diver',
    includedMaterials: ['TDI Deep Diving manual', 'Decompression tables', '3 deep training dives'],
    price: 350,
    schedule: 'Day 1: Deep diving theory and planning. Day 2: Two deep training dives with decompression stops.'
  }
];

// Dive Dream dive packages for all experience levels
export const DIVE_PACKAGES: DivePackage[] = [
  {
    id: 'single-dive',
    name: 'Single Dive Explorer',
    price: 65,
    divesCount: 1,
    equipmentIncluded: false,
    nitroxOption: true,
    privateGuideOption: true,
    duration: 'Half Day'
  },
  {
    id: 'two-dives',
    name: 'Double Tank Adventure',
    price: 120,
    divesCount: 2,
    equipmentIncluded: false,
    nitroxOption: true,
    privateGuideOption: true,
    duration: 'Half Day',
    isBestValue: false
  },
  {
    id: 'five-dives',
    name: 'Five Dive Package',
    price: 275,
    divesCount: 5,
    equipmentIncluded: true,
    nitroxOption: true,
    privateGuideOption: true,
    duration: '2 - 3 Days',
    isBestValue: true
  },
  {
    id: 'ten-dives',
    name: 'Ten Dive Package',
    price: 500,
    divesCount: 10,
    equipmentIncluded: true,
    nitroxOption: true,
    privateGuideOption: true,
    duration: '5 Days'
  }
];

// Current promotions at Dive Dream
export const PROMOTIONS: Promotion[] = [
  {
    id: 'early-booking',
    title: 'Early Booking Discount',
    discount: '5% OFF',
    description: 'Book your dive package or training course at least 30 days in advance and receive a 5% discount on all bookings.',
    code: 'EARLYBIRD5'
  },
  {
    id: 'group-discount',
    title: 'Group Diving Expeditions',
    discount: '10% OFF',
    description: 'Diving is more fun with friends! Book for a group of 4 or more divers and receive a 10% discount on all dive packages.',
    expiryDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    code: 'DIVEGROUP10'
  },
  {
    id: 'repeat-customer',
    title: 'Loyal Diver Rewards',
    discount: '8% OFF',
    description: 'Returning customers receive an 8% discount on their next dive package or training course. We value your loyalty!',
    code: 'LOYAL8'
  }
];

// Premium services offered by Dive Dream
export const SERVICES: Service[] = [
  {
    id: 'airport-transfer',
    title: 'Airport & Hotel Transfers',
    description: 'Enjoy seamless, air-conditioned private transfers from Mauritius International Airport directly to our dive center or your hotel. Comfortable transport for you and all your dive equipment.',
    price: '$40 per way',
    image: IMAGES.diveBoat
  },
  {
    id: 'private-charter',
    title: 'Private Boat Charters',
    description: 'Charter our dedicated dive boat for fully customized private expeditions. Perfect for groups, families, or professional underwater photography and videography projects.',
    price: 'From $800 / Day',
    image: IMAGES.diveBoat
  },
  {
    id: 'snorkeling-trips',
    title: 'Guided Snorkeling Safaris',
    description: 'Not a certified diver? Join our experienced guides on a guided snorkeling adventure to pristine shallow reefs. All premium snorkeling gear and refreshments included.',
    price: '$35 per person',
    image: IMAGES.coralReef
  },
  {
    id: 'underwater-photography',
    title: 'Underwater Photography Services',
    description: 'Capture your underwater memories with professional underwater photography. Our certified photographer will accompany you and provide high-resolution edited digital images.',
    price: '$85 per session',
    image: IMAGES.heroUnderwater
  },
  {
    id: 'refreshments',
    title: 'Onboard Catering & Refreshments',
    description: 'All boat trips include fresh tropical fruits, snacks, and mineral water. Upgrade to our premium lunch package with hot meals prepared fresh on board.',
    price: 'Included (Lunch upgrade $12)',
    image: IMAGES.diveBoat
  }
];

// Dive Dream professional crew
export const CREW: CrewMember[] = [
  {
    id: 'neysen-pillay',
    name: 'Neysen Pillay',
    position: 'Director & Lead Diving Instructor',
    certifications: ['SDI/TDI Instructor', 'Master Scuba Dive Trainer', 'Rescue Diver Instructor', 'Nitrox Specialty Instructor', 'Deep Diver Specialty Instructor', 'Drift Diving Specialty Instructor', 'Night Dive Specialty Instructor', 'Underwater Photography Specialty Instructor', 'Emergency First Response (EFR) Instructor'],
    experience: '22 Years (13,000+ Dives)',
    languages: ['English', 'French', 'German'],
    specializations: ['Technical Diving', 'Wreck Diving', 'Deep Diving', 'Nitrox Blending', 'Underwater Photography', 'Rescue Training', 'Beginner Training', 'Youth Scuba Programs'],
    biography: 'Neysen is the founder and director of Dive Dream Diving Centre Ltd. A Master Scuba Dive Trainer with 22 years of diving experience and over 13,000 dives logged, Neysen trained in Germany according to European standards. He has trained over 3,500 diving courses and is recognized by SDI, TDI, and CMAS for his professionalism and expertise. Known for his patient teaching style and passion for introducing beginners to the underwater world, Neysen previously worked as Dive Centre Manager and Instructor at Heritage Resort and Le Telfair Resort.',
    image: IMAGES.instructor1
  },
  {
    id: 'dive-master',
    name: 'Experienced Dive Masters',
    position: 'Certified Dive Masters & Guides',
    certifications: ['SDI/TDI Dive Master', 'Emergency First Response Instructor', 'Specialty Certifications'],
    experience: '8-15 Years (2,000+ Dives each)',
    languages: ['English', 'French', 'German'],
    specializations: ['Site Navigation', 'Marine Life Identification', 'Safety Management', 'Group Diving'],
    biography: 'Our team of certified dive masters brings extensive experience and local knowledge of Mauritius dive sites. They are fluent in English, French, and German, ensuring excellent communication with divers from around the world.',
    image: IMAGES.instructor3
  }
];

// Frequently asked questions about Dive Dream
export const FAQS: FAQItem[] = [
  {
    question: 'Do I need a certification to dive with Dive Dream?',
    answer: 'If you are not certified, you can participate in our "Discover Scuba Diving" program, which includes a safety briefing, confined water practice, and a guided ocean dive to a maximum depth of 12 meters. For independent diving, you will need to complete the SDI Open Water Diver course or have equivalent certification from another recognized agency.',
    category: 'General'
  },
  {
    question: 'What is the minimum age for scuba diving?',
    answer: 'The minimum age for the SDI Junior Open Water Diver certification is 10 years old. Children aged 8 and 9 can participate in our Bubble Maker program for pool-based experiences. There is no maximum age, provided you are in good health and medically fit to dive.',
    category: 'General'
  },
  {
    question: 'What certifications does Dive Dream accept?',
    answer: 'We are a premier SDI/TDI facility and fully accept and recognize active certifications from all major global training agencies, including PADI, SSI, NAUI, CMAS, and BSAC. Your certification level will be mapped to equivalent standards.',
    category: 'General'
  },
  {
    question: 'What happens if weather conditions are bad?',
    answer: 'Safety is our absolute priority. If weather conditions, wave swell, or currents are deemed unsafe by our Captain and Head Instructor, we will reschedule your dive or course to another day. If rescheduling is not possible, you will receive a full refund.',
    category: 'Safety'
  },
  {
    question: 'Is equipment rental included in dive packages?',
    answer: 'For our Single Dive and Double Tank packages, premium equipment rental is available for an additional $20 per day. For our Five Dive and Ten Dive packages, full premium equipment rental is completely included in the package price.',
    category: 'Equipment'
  },
  {
    question: 'Is Nitrox available at Dive Dream?',
    answer: 'Yes! We have a state-of-the-art Nitrox filling station capable of producing Enriched Air Nitrox up to 40% oxygen. Nitrox is available for certified Nitrox divers. If you are not certified, you can complete our 1-day TDI Nitrox course.',
    category: 'General'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, PayPal, and secure online payments through our booking system. Cash payments in USD and EUR are also accepted at our reception desk.',
    category: 'Booking'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made more than 48 hours before the scheduled dive receive a 100% refund. Cancellations made between 24-48 hours receive a 50% refund. Cancellations within 24 hours or no-shows are non-refundable, except in cases of medical emergencies.',
    category: 'Booking'
  }
];
