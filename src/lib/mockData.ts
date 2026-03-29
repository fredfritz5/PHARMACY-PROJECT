export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  category: 'Prescriptions' | 'OTC Medicine' | 'Vitamins & Supplements' | 'Medical Devices';
  stock: number;
  requiresPrescription: boolean;
  dosageInstructions: string;
  sideEffects: string;
  contraindications: string;
  imageUrl: string;
  popularity: number;
  alternatives: string[]; // IDs
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Complete Multivitamin Pro",
    brand: "HealthPlus Naturals",
    category: "Vitamins & Supplements",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edb73eb2eb4c?w=600&h=600&fit=crop",
    description: "A comprehensive daily multivitamin formula designed to support overall health with 22 essential vitamins and minerals.",
    dosageInstructions: "Take one tablet daily with food, preferably in the morning.",
    sideEffects: "May cause upset stomach initially. Iron may cause stool darkening.",
    contraindications: "Do not exceed recommended dose. Consult physician if pregnant.",
    requiresPrescription: false,
    stock: 150,
    popularity: 95,
    tags: ["vitamins", "daily", "multivitamin", "health", "wellness"],
    alternatives: ["p4"]
  },
  {
    id: "p2",
    name: "Advanced Allergy Relief",
    brand: "ClearBrethe",
    category: "OTC Medicine",
    price: 18.50,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5e4499026?w=600&h=600&fit=crop",
    description: "Non-drowsy 24-hour relief from indoor and outdoor allergy symptoms, including sneezing, runny nose, and itchy eyes.",
    dosageInstructions: "Adults and children 12 years and over: Take one 10mg tablet once daily.",
    sideEffects: "Headache, dry mouth. Avoid taking with fruit juices like grapefruit.",
    contraindications: "Do not use in patients with known hypersensitivity to the active ingredient.",
    requiresPrescription: false,
    stock: 200,
    popularity: 88,
    tags: ["allergy", "antihistamine", "sneezing", "fever", "relief"],
    alternatives: []
  },
  {
    id: "p3",
    name: "Digital Blood Pressure Monitor",
    brand: "MediTech",
    category: "Medical Devices",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=600&fit=crop",
    description: "Clinically validated, automatic upper arm blood pressure monitor for accurate at-home tracking.",
    dosageInstructions: "N/A",
    sideEffects: "N/A",
    contraindications: "Not for use on neonates. Consult doctor if experiencing arrhythmias.",
    requiresPrescription: false,
    stock: 45,
    popularity: 75,
    tags: ["device", "monitor", "blood pressure", "heart", "cardio"],
    alternatives: []
  },
  {
    id: "p4",
    name: "Organic Omega-3 Fish Oil",
    brand: "OceanPure",
    category: "Vitamins & Supplements",
    price: 32.99,
    imageUrl: "https://images.unsplash.com/photo-1616671285408-591223bc7502?w=600&h=600&fit=crop",
    description: "High-potency EPA and DHA formula supporting heart, brain, and joint health without fishy burps.",
    dosageInstructions: "Take two softgels daily with a meal.",
    sideEffects: "Mild gastrointestinal upset, fishy aftertaste.",
    contraindications: "Consult physician prior to use if taking blood thinners.",
    requiresPrescription: false,
    stock: 120,
    popularity: 92,
    tags: ["supplements", "omega3", "fish oil", "heart", "brain", "joints"],
    alternatives: ["p1"]
  },
  {
    id: "rx1",
    name: "Amoxi-Cillin 500mg",
    brand: "Generic Pharma",
    category: "Prescriptions",
    price: 12.00,
    imageUrl: "https://images.unsplash.com/photo-1585830812416-a6ce8bbdfa25?w=600&h=600&fit=crop",
    description: "Penicillin antibiotic used to treat various types of bacterial infections, such as ear/throat infections.",
    dosageInstructions: "As directed by physician. Usually one capsule every 8 hours until completed.",
    sideEffects: "Nausea, vomiting, diarrhea, mild skin rash.",
    contraindications: "Patients with a history of penicillin allergy should not use this medication.",
    requiresPrescription: true,
    stock: 500,
    popularity: 99,
    tags: ["rx", "antibiotic", "infection", "amoxicillin"],
    alternatives: []
  },
  {
    id: "rx2",
    name: "Lisinopril 10mg",
    brand: "CardioGen",
    category: "Prescriptions",
    price: 8.50,
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=600&fit=crop",
    description: "ACE inhibitor primarily used to treat high blood pressure and heart failure.",
    dosageInstructions: "Take one tablet once daily, preferably at the same time each day.",
    sideEffects: "Dry cough, dizziness, elevated potassium levels.",
    contraindications: "Pregnancy, history of angioedema with previous ACE inhibitor use.",
    requiresPrescription: true,
    stock: 300,
    popularity: 80,
    tags: ["rx", "blood pressure", "hypertension", "heart"],
    alternatives: []
  },
  {
    id: "p5",
    name: "Ibuprofen 400mg Fast Acting",
    brand: "ReliefMax",
    category: "OTC Medicine",
    price: 9.99,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop",
    description: "Provides temporary relief of minor aches and pains due to headache, muscle aches, backache.",
    dosageInstructions: "Adults: Take 1 tablet every 4-6 hours while symptoms persist. Do not exceed 6 tablets in 24 hours.",
    sideEffects: "Stomach bleeding warning, stomach ache, heartburn.",
    contraindications: "Allergy to aspirin or NSAIDs. High risk of stomach bleeding.",
    requiresPrescription: false,
    stock: 0, // Mock out of stock
    popularity: 98,
    tags: ["painkiller", "nsaid", "headache", "fever", "ibuprofen"],
    alternatives: []
  }
];

export function fuzzySearchHelper(query: string, items: Product[]): Product[] {
  if (!query) return items;
  const lowerQuery = query.toLowerCase().trim();
  
  return items.filter(item => {
    // Basic fuzzy scoring check
    if (item.name.toLowerCase().includes(lowerQuery)) return true;
    if (item.brand.toLowerCase().includes(lowerQuery)) return true;
    if (item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) return true;
    if (item.category.toLowerCase().includes(lowerQuery)) return true;
    return false;
  }).sort((a, b) => b.popularity - a.popularity);
}
