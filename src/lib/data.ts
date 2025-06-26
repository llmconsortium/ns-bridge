export type Vocation =
  | 'Armour'
  | 'Army Intelligence'
  | 'Army Medical Services'
  | 'Commandos'
  | 'Guards'
  | 'Infantry'
  | 'Maintenance & Engineering Support'
  | 'PERSCOM (Personnel Command)'
  | 'SAF Ammunition Command'
  | 'SAF Military Police Command'
  | 'SAF Volunteer Corps'
  | 'Signals'
  | 'Singapore Artillery'
  | 'Singapore Combat Engineers'
  | 'Supply'
  | 'Transport';

export type Rank = 'REC' | 'PTE' | 'LCP' | 'CPL' | 'CFC' | '2LT' | 'LTA' | 'CPT';

export interface PackingItem {
  id: number;
  name: string;
  category: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Commander {
  id: string; // NRIC is the Vocation name for demo
  name: string;
  rank: Rank;
  vocation: Vocation;
}

export interface Soldier {
  id: string; // NRIC is the Vocation name for demo
  name: string;
  rank: Rank;
  vocation: Vocation;
  commanderId: string;
  lastLogin: string | null;
}

export const vocations: Record<Vocation, { packingList: PackingItem[], resources: { googleMapsUrl: string, telegramUrl: string }, faq: FaqItem[] }> = {
  'Armour': {
    packingList: [
      { id: 1, name: 'Helmet (CVC)', category: 'Personal Equipment' },
      { id: 2, name: 'Tank Crew Suit', category: 'Personal Equipment' },
      { id: 3, name: 'Vehicle Tool Kit', category: 'Vehicle Equipment' },
      { id: 4, name: 'Combat Rations (24-hours)', category: 'Sustainment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=sungei+gedong+camp',
      telegramUrl: 'https://t.me/example_armour_channel',
    },
    faq: [
        { q: 'What is the top speed of the Leopard 2SG?', a: 'The Leopard 2SG Main Battle Tank can reach speeds of up to 72 km/h.' },
        { q: 'What is the primary role of an Armour unit?', a: 'Armour units provide mobile firepower and protection on the battlefield, specializing in offensive operations.'}
    ]
  },
  'Army Intelligence': {
    packingList: [
      { id: 5, name: 'Laptop with Encryption Software', category: 'Technical Gear' },
      { id: 6, name: 'Secure Hard Drive', category: 'Technical Gear' },
      { id: 7, name: 'Maps and Satellite Imagery', category: 'Reference' },
      { id: 8, name: 'Notebook & Pen', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=gede+building+singapore',
      telegramUrl: 'https://t.me/example_intel_channel',
    },
    faq: [
        { q: 'Is a security clearance required?', a: 'Yes, all personnel require a security clearance. The level of clearance depends on your specific role and access to information.'}
    ]
  },
  'Army Medical Services': {
    packingList: [
      { id: 9, name: 'Medic Bag with Supplies', category: 'Medical' },
      { id: 10, name: 'Foldable Stretcher', category: 'Medical' },
      { id: 11, name: 'IV Drips & Saline Bags', category: 'Medical' },
      { id: 12, name: 'Water Bottle / Hydration Bag', category: 'Sustainment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=nee+soon+camp+medical+centre',
      telegramUrl: 'https://t.me/example_medic_channel',
    },
    faq: [
        { q: 'What is the "buddy aid" principle?', a: 'It is the immediate medical care provided by a fellow soldier to a casualty in the field before a medic arrives.'}
    ]
  },
  'Commandos': {
    packingList: [
      { id: 13, name: 'Helmet (High-cut)', category: 'Personal Equipment' },
      { id: 14, name: 'Parachute', category: 'Specialist Equipment' },
      { id: 15, name: 'Survival Knife', category: 'Personal Equipment' },
      { id: 16, name: 'Combat Rations (48-hours)', category: 'Sustainment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=pasir+ris+camp+singapore',
      telegramUrl: 'https://t.me/example_commando_channel',
    },
    faq: [
        { q: 'What does "For Honour and Glory" mean?', a: 'It is the motto of the Commandos, reflecting their commitment to excellence and national pride.'}
    ]
  },
  'Guards': {
    packingList: [
      { id: 17, name: 'Helmet', category: 'Personal Equipment' },
      { id: 18, name: 'Rappelling Harness', category: 'Specialist Equipment' },
      { id: 19, name: 'Night Vision Goggles', category: 'Specialist Equipment' },
      { id: 20, name: 'Rifle (SAR 21)', category: 'Weaponry' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=bedok+camp+singapore',
      telegramUrl: 'https://t.me/example_guards_channel',
    },
    faq: [
        { q: 'Are Guards considered special forces?', a: 'Guards are elite infantry soldiers, specializing in rapid deployment and heliborne operations. They are known for their high standards of fitness and combat readiness.'}
    ]
  },
  'Infantry': {
    packingList: [
      { id: 21, name: 'Helmet', category: 'Personal Equipment' },
      { id: 22, name: 'Rifle (SAR 21)', category: 'Weaponry' },
      { id: 23, name: 'Field Pack', category: 'Personal Equipment' },
      { id: 24, name: 'Combat Rations (24-hours)', category: 'Sustainment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=mowbray+road+training+area',
      telegramUrl: 'https://t.me/example_infantry_channel',
    },
    faq: [
        { q: 'What is the standard issue rifle?', a: 'The standard issue rifle for infantry soldiers is the SAR 21 (Singapore Assault Rifle - 21st Century).'}
    ]
  },
  'Maintenance & Engineering Support': {
    packingList: [
      { id: 25, name: 'Safety Boots', category: 'Personal Equipment' },
      { id: 26, name: 'Specialized Tool Kit', category: 'Technical Gear' },
      { id: 27, name: 'Maintenance Manuals', category: 'Reference' },
      { id: 28, name: 'Gloves', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=clementi+camp+singapore',
      telegramUrl: 'https://t.me/example_mes_channel',
    },
    faq: [
        { q: 'What kind of vehicles do we maintain?', a: 'We are responsible for maintaining a wide range of military vehicles, from jeeps and trucks to armored fighting vehicles.'}
    ]
  },
  'PERSCOM (Personnel Command)': {
    packingList: [
      { id: 29, name: 'Admin Uniform (No. 4)', category: 'Personal Equipment' },
      { id: 30, name: 'Laptop', category: 'Technical Gear' },
      { id: 31, name: 'Personnel Documents Folder', category: 'Admin' },
      { id: 32, name: 'Beret', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=central+manpower+base',
      telegramUrl: 'https://t.me/example_perscom_channel',
    },
    faq: [
        { q: 'What are the office hours?', a: 'Standard office hours are from 0800 to 1730, but may vary depending on operational requirements.'}
    ]
  },
  'SAF Ammunition Command': {
    packingList: [
      { id: 33, name: 'Helmet', category: 'Personal Equipment' },
      { id: 34, name: 'Safety Vest (High-vis)', category: 'Personal Equipment' },
      { id: 35, name: 'Ammunition Handling Gloves', category: 'Personal Equipment' },
      { id: 36, name: 'Inventory Scanner', category: 'Logistics Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=kranji+camp+iii+singapore',
      telegramUrl: 'https://t.me/example_ammo_channel',
    },
    faq: [
        { q: 'What safety precautions are most important?', a: 'Strict adherence to handling procedures, wearing appropriate Personal Protective Equipment (PPE), and maintaining clear communication are critical.'}
    ]
  },
  'SAF Military Police Command': {
    packingList: [
      { id: 37, name: 'MP Beret (Red)', category: 'Personal Equipment' },
      { id: 38, name: 'Handcuffs & Key', category: 'Law Enforcement' },
      { id: 39, name: 'Baton', category: 'Law Enforcement' },
      { id: 40, name: 'Whistle', category: 'Law Enforcement' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=mowbray+camp',
      telegramUrl: 'https://t.me/example_mp_channel',
    },
    faq: [
        { q: 'What authority does an MP have?', a: 'SAF MPs have the authority to enforce military law, conduct investigations, and maintain discipline within the Singapore Armed Forces.'}
    ]
  },
  'SAF Volunteer Corps': {
    packingList: [
      { id: 41, name: 'VC Beret', category: 'Personal Equipment' },
      { id: 42, name: 'VC T-Shirt', category: 'Personal Equipment' },
      { id: 43, name: 'Water Bottle', category: 'Sustainment' },
      { id: 44, name: 'Notebook & Pen', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=maju+camp+singapore',
      telegramUrl: 'https://t.me/example_safvc_channel',
    },
    faq: [
        { q: 'What is the commitment for a volunteer?', a: 'Volunteers are expected to complete a specified number of training days and operational deployments per year.'}
    ]
  },
  'Signals': {
    packingList: [
      { id: 45, name: 'Helmet', category: 'Personal Equipment' },
      { id: 46, name: 'Signal Set (e.g. AN/PRC-152)', category: 'Comms Equipment' },
      { id: 47, name: 'Extra Batteries', category: 'Comms Equipment' },
      { id: 48, name: 'Data Cable & Laptop', category: 'Comms Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=stagmont+camp',
      telegramUrl: 'https://t.me/example_signals_channel',
    },
    faq: [
        { q: 'What does "Speed Through Skill" mean?', a: 'It is the motto of the Signals formation, emphasizing proficiency and efficiency in establishing and maintaining communications.'}
    ]
  },
  'Singapore Artillery': {
    packingList: [
      { id: 49, name: 'Helmet', category: 'Personal Equipment' },
      { id: 50, name: 'Gunner\'s Aiming Circle', category: 'Artillery Equipment' },
      { id: 51, name: 'Ear Protection', category: 'Personal Equipment' },
      { id: 52, name: 'Ballistic Vest', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=khatib+camp+singapore',
      telegramUrl: 'https://t.me/example_artillery_channel',
    },
    faq: [
        { q: 'What is a "fire mission"?', a: 'A fire mission is a coordinated process of receiving a request for fire support, calculating firing data, and delivering rounds onto a target.'}
    ]
  },
  'Singapore Combat Engineers': {
    packingList: [
      { id: 53, name: 'Helmet', category: 'Personal Equipment' },
      { id: 54, name: 'Entrenching Tool', category: 'Engineering Equipment' },
      { id: 55, name: 'Mine Detector', category: 'Engineering Equipment' },
      { id: 56, name: 'Gloves', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=seletar+camp',
      telegramUrl: 'https://t.me/example_engineer_channel',
    },
    faq: [
        { q: 'What does "Advanced and Overcome" mean?', a: 'It is the motto of the Singapore Combat Engineers, reflecting their role in overcoming obstacles to enable the advance of friendly forces.'}
    ]
  },
  'Supply': {
    packingList: [
      { id: 57, name: 'Safety Vest', category: 'Personal Equipment' },
      { id: 58, name: 'Inventory Scanner', category: 'Logistics Equipment' },
      { id: 59, name: 'Clipboard and Pen', category: 'Admin' },
      { id: 60, name: 'Safety Boots', category: 'Personal Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=kranji+camp+iii+singapore',
      telegramUrl: 'https://t.me/example_supply_channel',
    },
    faq: [
        { q: 'What is the "7-day norm"?', a: 'It refers to the standard amount of combat supplies (rations, ammunition, fuel) required to sustain a unit for seven days of operations.'}
    ]
  },
  'Transport': {
    packingList: [
      { id: 61, name: 'Vehicle Logbook', category: 'Vehicle Equipment' },
      { id: 62, name: 'Reflective Vest', category: 'Personal Equipment' },
      { id: 63, name: 'Driving License (Class 4/5)', category: 'Personal Documents' },
      { id: 64, name: 'First Aid Kit', category: 'Vehicle Equipment' },
    ],
    resources: {
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=sembawang+camp+transport+node',
      telegramUrl: 'https://t.me/example_transport_channel',
    },
    faq: [
        { q: 'What are the procedures for vehicle checks?', a: 'Drivers must perform "First Parade" checks before moving off, which includes checking fuel, oil, water, tires, and signals.'}
    ]
  },
};

export const commanders: Commander[] = [
  { id: 'armour', name: 'James Leong', rank: 'CPT', vocation: 'Armour' },
  { id: 'armyintelligence', name: 'Ravi Chandran', rank: 'LTA', vocation: 'Army Intelligence' },
  { id: 'armymedicalservices', name: 'Brandon Koh', rank: 'CPT', vocation: 'Army Medical Services' },
  { id: 'commandos', name: 'Alex Tan', rank: 'LTA', vocation: 'Commandos' },
  { id: 'guards', name: 'Benjamin Neo', rank: 'LTA', vocation: 'Guards' },
  { id: 'infantry', name: 'Lee Wei', rank: 'CPT', vocation: 'Infantry' },
  { id: 'maintenanceengineeringsupport', name: 'Kenji Tanaka', rank: 'LTA', vocation: 'Maintenance & Engineering Support' },
  { id: 'perscom', name: 'Brenda Lim', rank: 'CPT', vocation: 'PERSCOM (Personnel Command)' },
  { id: 'safammunitioncommand', name: 'Ismail bin Yaacob', rank: 'LTA', vocation: 'SAF Ammunition Command' },
  { id: 'safmilitarypolicecommand', name: 'John Smith', rank: 'LTA', vocation: 'SAF Military Police Command' },
  { id: 'safvolunteercorps', name: 'Catherine Ng', rank: 'CPT', vocation: 'SAF Volunteer Corps' },
  { id: 'signals', name: 'Zachary Teo', rank: 'LTA', vocation: 'Signals' },
  { id: 'singaporeartillery', name: 'Daniel Lim', rank: 'CPT', vocation: 'Singapore Artillery' },
  { id: 'combatengineers', name: 'Azman bin Othman', rank: 'LTA', vocation: 'Singapore Combat Engineers' },
  { id: 'supply', name: 'Caleb Goh', rank: 'CPT', vocation: 'Supply' },
  { id: 'transport', name: 'Michael Wan', rank: 'LTA', vocation: 'Transport' },
];

export const soldiers: Soldier[] = [
  { id: 'armour', name: 'Tan Ah Kow', rank: 'PTE', vocation: 'Armour', commanderId: 'armour', lastLogin: '2023-10-26T10:00:00Z' },
  { id: 'armour', name: 'Melvin Lee', rank: 'PTE', vocation: 'Armour', commanderId: 'armour', lastLogin: null },
  { id: 'armyintelligence', name: 'Lim Bo Seng', rank: 'PTE', vocation: 'Army Intelligence', commanderId: 'armyintelligence', lastLogin: null },
  { id: 'armyintelligence', name: 'FDeepak S/O Manohar', rank: 'PTE', vocation: 'Army Intelligence', commanderId: 'armyintelligence', lastLogin: '2023-10-27T08:00:00Z' },
  { id: 'armymedicalservices', name: 'Gopal s/o Kumar', rank: 'PTE', vocation: 'Army Medical Services', commanderId: 'armymedicalservices', lastLogin: '2023-10-27T09:00:00Z' },
  { id: 'armymedicalservices', name: 'Bill Tan', rank: 'CPL', vocation: 'Army Medical Services', commanderId: 'armymedicalservices', lastLogin: '2023-10-27T09:15:00Z' },
  { id: 'commandos', name: 'William Wee', rank: 'LCP', vocation: 'Commandos', commanderId: 'commandos', lastLogin: '2023-10-27T11:30:00Z' },
  { id: 'commandos', name: 'Jason Woo', rank: 'PTE', vocation: 'Commandos', commanderId: 'commandos', lastLogin: null },
  { id: 'guards', name: 'David Chen', rank: 'CFC', vocation: 'Guards', commanderId: 'guards', lastLogin: null },
  { id: 'guards', name: 'Ahmad Ibrahim', rank: 'CPL', vocation: 'Guards', commanderId: 'guards', lastLogin: '2023-10-27T09:45:00Z' },
  { id: 'infantry', name: 'Ken Ng', rank: 'PTE', vocation: 'Infantry', commanderId: 'infantry', lastLogin: '2023-10-27T10:30:00Z' },
  { id: 'infantry', name: 'Richard Ho', rank: 'PTE', vocation: 'Infantry', commanderId: 'infantry', lastLogin: null },
  { id: 'maintenanceengineeringsupport', name: 'Ryu Hoshi', rank: 'CPL', vocation: 'Maintenance & Engineering Support', commanderId: 'maintenanceengineeringsupport', lastLogin: '2023-10-26T10:00:00Z' },
  { id: 'maintenanceengineeringsupport', name: 'Chong Jia Hao', rank: 'LCP', vocation: 'Maintenance & Engineering Support', commanderId: 'maintenanceengineeringsupport', lastLogin: '2023-10-27T11:00:00Z' },
  { id: 'perscom', name: 'Teo Yu Heng', rank: 'CPL', vocation: 'PERSCOM (Personnel Command)', commanderId: 'perscom', lastLogin: '2023-10-26T10:00:00Z' },
  { id: 'perscom', name: 'Daniel Yong', rank: 'PTE', vocation: 'PERSCOM (Personnel Command)', commanderId: 'perscom', lastLogin: null },
  { id: 'safammunitioncommand', name: 'Bison Law', rank: 'PTE', vocation: 'SAF Ammunition Command', commanderId: 'safammunitioncommand', lastLogin: null },
  { id: 'safammunitioncommand', name: 'Andy Lau', rank: 'PTE', vocation: 'SAF Ammunition Command', commanderId: 'safammunitioncommand', lastLogin: '2023-10-27T13:00:00Z' },
  { id: 'safmilitarypolicecommand', name: 'Chan Hao Yang', rank: 'LCP', vocation: 'SAF Military Police Command', commanderId: 'safmilitarypolicecommand', lastLogin: '2023-10-27T10:00:00Z' },
  { id: 'safmilitarypolicecommand', name: 'Jacky Cheung', rank: 'CPL', vocation: 'SAF Military Police Command', commanderId: 'safmilitarypolicecommand', lastLogin: null },
  { id: 'safvolunteercorps', name: 'Vega Fabio', rank: 'REC', vocation: 'SAF Volunteer Corps', commanderId: 'safvolunteercorps', lastLogin: null },
  { id: 'safvolunteercorps', name: 'Aaron Kwok', rank: 'REC', vocation: 'SAF Volunteer Corps', commanderId: 'safvolunteercorps', lastLogin: '2023-10-27T14:00:00Z' },
  { id: 'signals', name: 'Leon Lai', rank: 'PTE', vocation: 'Signals', commanderId: 'signals', lastLogin: '2023-10-27T12:00:00Z' },
  { id: 'signals', name: 'Ryan Lim', rank: 'PTE', vocation: 'Signals', commanderId: 'signals', lastLogin: '2023-10-27T12:05:00Z' },
  { id: 'singaporeartillery', name: 'Luqman bin Khalid', rank: 'CPL', vocation: 'Singapore Artillery', commanderId: 'singaporeartillery', lastLogin: null },
  { id: 'singaporeartillery', name: 'Eric Tsang', rank: 'LCP', vocation: 'Singapore Artillery', commanderId: 'singaporeartillery', lastLogin: '2023-10-27T15:00:00Z' },
  { id: 'combatengineers', name: 'Johnathon Tse', rank: 'CFC', vocation: 'Singapore Combat Engineers', commanderId: 'combatengineers', lastLogin: '2023-10-27T10:00:00Z' },
  { id: 'combatengineers', name: 'Tony Leung', rank: 'CPL', vocation: 'Singapore Combat Engineers', commanderId: 'combatengineers', lastLogin: null },
  { id: 'supply', name: 'Lee Zhi Xuan', rank: 'PTE', vocation: 'Supply', commanderId: 'supply', lastLogin: '2023-10-27T10:30:00Z' },
  { id: 'supply', name: 'Chow Yun Fat', rank: 'PTE', vocation: 'Supply', commanderId: 'supply', lastLogin: '2023-10-27T10:35:00Z' },
  { id: 'transport', name: 'Jayden Tan', rank: 'LCP', vocation: 'Transport', commanderId: 'transport', lastLogin: null },
  { id: 'transport', name: 'Stephen Chow', rank: 'LCP', vocation: 'Transport', commanderId: 'transport', lastLogin: null },
];
