import { 
  TeamMember, 
  Office, 
  PortfolioCompany, 
  IndustrySector, 
  ResearchReport, 
  RoadmapMilestone,
  ESGInitiative
} from './types';

import heroImg from './assets/images/alethea_hero_1782752414584.jpg';
import miSookImg from './assets/images/regenerated_image_1782776793088.jpg';
import zurichOfficeImg from './assets/images/zurich_office_1782928754234.jpg';
import bostonOfficeImg from './assets/images/boston_office_1782928770804.jpg';
import helixTherapeuticsImg from './assets/images/helix_therapeutics_1782928737846.jpg';
import zeroKnowledgeProofsImg from './assets/images/zero_knowledge_proofs_1782928787445.jpg';

export const HERO_IMAGE = heroImg;

export const STATISTICS = [
  { value: '$4.2B', label: 'Assets Under Management', sub: 'In deep tech, climate & frontier tech' },
  { value: '42%', label: 'Average IRR Across Portfolios', sub: 'Top-decile performance' },
  { value: '18', label: 'Global IPOs & Exits', sub: 'Creating massive enterprise liquidities' },
  { value: '45+', label: 'Ph.D. Scientists & Partners', sub: 'Technical depth in every investment' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'victoria-thorne',
    name: 'Victoria Thorne',
    title: 'Managing Partner',
    bio: 'Victoria has spent 22 years at the intersection of venture finance and advanced nuclear physics. She leads Spark Capital’s Climate and Fusion Tech mandates, directing capital to clean energy projects that redefine power infrastructure.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/victoria-thorne-spark',
    email: 'v.thorne@sparkcapital.com',
    specialty: 'Climate Infrastructure & Fusion Power',
    yearsOfExperience: 22,
    education: 'Ph.D. in Nuclear Engineering, MIT; MBA, Stanford GSB',
    previousCompanies: ['Goldman Sachs Principal Ventures', 'Sequoia Capital', 'ARPA-E Advisor'],
    expertise: ['Frontier Energy Markets', 'Capital Allocation', 'Regulatory Approvals'],
    roleType: 'committee'
  },
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    title: 'General Partner',
    bio: 'Marcus focuses on autonomous computing, deep learning architectures, and robotics. Prior to venture capital, he co-founded a robotics automation firm that was acquired by Google for $820M.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/marcus-vance-spark',
    email: 'm.vance@sparkcapital.com',
    specialty: 'Cognitive Systems & Autonomous Robotics',
    yearsOfExperience: 18,
    education: 'Ph.D. in Computer Science (AI/ML), Stanford University',
    previousCompanies: ['Google DeepMind Research', 'Cognitive Robotics (Founder)', 'Benchmark'],
    expertise: ['Neural Networks', 'Autonomous Navigation', 'Deep Learning Hardware'],
    roleType: 'committee'
  },
  {
    id: 'helena-rostova',
    name: 'Helena Rostova',
    title: 'General Partner',
    bio: 'Helena leads Spark Capital’s Healthcare and Biotech investment strategy. She represents the firm on the boards of three preclinical stage genetic therapy developers and coordinates clinical trial acceleration networks.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/helena-rostova-spark',
    email: 'h.rostova@sparkcapital.com',
    specialty: 'Programmable RNA & Precision Biotech',
    yearsOfExperience: 15,
    education: 'M.D. / Ph.D. in Molecular Genetics, Oxford University',
    previousCompanies: ['Novartis Venture Fund', 'Genentech R&D Director', 'KPCB'],
    expertise: ['Genetic Therapy Platforms', 'Clinical FDA Pipelines', 'IP Portfolio Defense'],
    roleType: 'committee'
  },
  {
    id: 'kenji-takahashi',
    name: 'Kenji Takahashi',
    title: 'Investment Director',
    bio: 'Kenji focuses on aerospace, space tech infrastructure, and satellite communications. He brings critical operational experience from his years as flight software lead for orbital vehicle launches.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/kenji-takahashi-spark',
    email: 'k.takahashi@sparkcapital.com',
    specialty: 'Orbital Logistics & Quantum Telecom',
    yearsOfExperience: 12,
    education: 'M.S. in Aerospace Engineering, University of Tokyo; B.S. in Physics',
    previousCompanies: ['SpaceX Flight Systems', 'JAXA Research', 'Founders Fund'],
    expertise: ['Satellite Constellations', 'Aerothermal Systems', 'Orbital Navigation'],
    roleType: 'committee'
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    title: 'Operating Partner',
    bio: 'Sarah leads our portfolio growth advisory group. She advises our investments on talent acquisition, product scaling, and enterprise sales, helping early-stage scientific research scale into global operations.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/sarah-jenkins-spark',
    email: 's.jenkins@sparkcapital.com',
    specialty: 'Enterprise GTM & Organizational Scaling',
    yearsOfExperience: 16,
    education: 'B.A. in Economics, Princeton University',
    previousCompanies: ['Stripe (VP of Enterprise Sales)', 'SaaS Labs', 'Andreessen Horowitz'],
    expertise: ['GTM Strategy', 'Organizational Scaling', 'SaaS Business Models'],
    roleType: 'committee'
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    title: 'Partner',
    bio: 'David manages financial technology and cybersecurity transactions. He has a distinct background in cryptography and has structured over $3B in debt and equity financing for growth-stage technology firms.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/david-sterling-spark',
    email: 'd.sterling@sparkcapital.com',
    specialty: 'Quantum-Resistant Crypto & Digital Banking',
    yearsOfExperience: 14,
    education: 'M.S. in Cryptography, ETH Zürich; B.S. in Mathematics',
    previousCompanies: ['Morgan Stanley Tech Investment Banking', 'Palantir Technologies', 'Thoma Bravo'],
    expertise: ['Enterprise Cybersecurity', 'Debt Structuring', 'Cross-Border M&A'],
    roleType: 'committee'
  },
  {
    id: 'aris-thorne',
    name: 'Aris Thorne',
    title: 'Technology Partner',
    bio: 'Aris leads our technical review panel, conducting deep architecture audits on potential computing investments. He manages our relationships with national supercomputing labs and university research hubs.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/aris-thorne-spark',
    email: 'a.thorne@sparkcapital.com',
    specialty: 'High-Performance Computing & Silicon Fabric',
    yearsOfExperience: 20,
    education: 'Ph.D. in Electrical Engineering, UC Berkeley',
    previousCompanies: ['NVIDIA Chief Architect Office', 'Intel Labs Director', 'Khosla Ventures Advisor'],
    expertise: ['Silicon Architecture', 'High-Performance Fabric', 'EDA Tools'],
    roleType: 'committee'
  },
  {
    id: 'lee-mi-sook',
    name: 'Mi Sook Lee',
    title: 'Senior Project Manager',
    bio: "Lee Mi Sook oversees strategic investment projects, cross-border operations, and portfolio execution across global markets. With more than seven years of experience in financial project management, she works closely with investment, legal, and executive teams to ensure efficient delivery of high-impact initiatives while supporting the firm's long-term growth strategy.",
    photo: miSookImg,
    linkedin: 'https://linkedin.com/in/lee-mi-sook-spark',
    email: 'm.lee@sparkcapital.com',
    specialty: 'Strategic Project Management • Investment Operations • Cross-border Execution • Stakeholder Management • Operational Excellence • Portfolio Coordination',
    yearsOfExperience: 7,
    education: "M.S. in Finance, Seoul National University; Executive Education in Global Financial Management, London Business School",
    previousCompanies: ['Deloitte Financial Advisory', 'HSBC Global Banking', 'PwC Deals Advisory'],
    expertise: [
      'Strategic Project Management',
      'Investment Operations',
      'Cross-border Execution',
      'Stakeholder Management',
      'Operational Excellence',
      'Portfolio Coordination'
    ],
    roleType: 'committee'
  },
  {
    id: 'elena-guseva',
    name: 'Dr. Elena Guseva',
    title: 'AI Advisory Board Chair',
    bio: 'Elena is a pioneer in generative architectures and alignment research. She sits on our board to review machine learning safety, ethical model deployments, and multi-modal scalability potential.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/elena-guseva-spark',
    email: 'e.guseva@sparkcapital.com',
    specialty: 'Generative Models & Computational Ethics',
    yearsOfExperience: 15,
    education: 'Ph.D. in Computational Linguistics, Oxford University; postdoctoral at MIT CSAIL',
    previousCompanies: ['OpenAI Principal Researcher', 'Google Brain Science Lead'],
    expertise: ['Large Language Architecture', 'Alignment Protocols', 'Compute Clustering'],
    roleType: 'advisory'
  },
  {
    id: 'jonathan-cole',
    name: 'Sir Jonathan Cole',
    title: 'Geopolitical Advisor',
    bio: 'Sir Jonathan provides critical analysis on cross-border technology regulations, sovereign fund alignments, and international trade compliance for our global orbital logistics portfolio.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/jonathan-cole-spark',
    email: 'j.cole@sparkcapital.com',
    specialty: 'Sovereign Investment & Cross-Border Compliance',
    yearsOfExperience: 30,
    education: 'M.A. in Philosophy, Politics & Economics (PPE), Oxford University',
    previousCompanies: ['UK Foreign Office (Former Ambassador)', 'Bain Capital Advisory Council', 'World Economic Forum Panelist'],
    expertise: ['International Trade Policy', 'Sovereign Relations', 'Macroeconomics'],
    roleType: 'advisory'
  },
  {
    id: 'alistair-vance',
    name: 'Prof. Alistair Vance',
    title: 'Medical Innovation Advisor',
    bio: 'Alistair is a renowned Harvard Medical professor and researcher in longevity sciences. He provides technical validation on gene editing therapies, cellular reprogramming protocols, and clinical phase viability.',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: 'https://linkedin.com/in/alistair-vance-spark',
    email: 'a.vance@sparkcapital.com',
    specialty: 'Longevity Therapeutics & Gene Vector Delivery',
    yearsOfExperience: 25,
    education: 'M.D., Harvard Medical School; Fellowship in Medical Genetics, Johns Hopkins',
    previousCompanies: ['Harvard Medical School Faculty', 'National Institutes of Health (NIH) Advisory', 'Broad Institute Collaborator'],
    expertise: ['Gene Delivery Vectors', 'Longevity Assays', 'Translational Biotechnology'],
    roleType: 'advisory'
  }
];

export const OFFICES: Office[] = [
  {
    id: 'office-sf',
    name: 'Silicon Valley Hub',
    city: 'San Francisco',
    address: '420 Montgomery Street, San Francisco, CA 94104',
    teamSize: 22,
    focus: 'Artificial Intelligence, Robotics & Quantum Cryptography',
    markets: ['North America', 'Asia Pacific'],
    photo: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 14, y: 38 }
  },
  {
    id: 'office-ny',
    name: 'East Coast Capital',
    city: 'New York',
    address: '30 Rockefeller Plaza, New York, NY 10112',
    teamSize: 18,
    focus: 'Financial Technology, Growth Operations & Debt Capital Markets',
    markets: ['North America', 'European Union'],
    photo: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 26, y: 36 }
  },
  {
    id: 'office-london',
    name: 'European Sovereign',
    city: 'London',
    address: '100 Bishopsgate, London EC2N 4AG, United Kingdom',
    teamSize: 14,
    focus: 'Climate Tech, Quantum Networks & Geopolitical Alignment',
    markets: ['United Kingdom', 'European Union', 'Middle East'],
    photo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 48, y: 28 }
  },
  {
    id: 'office-zurich',
    name: 'Alpine Precision Hub',
    city: 'Zurich',
    address: 'Bahnhofstrasse 45, 8001 Zürich, Switzerland',
    teamSize: 8,
    focus: 'Biotechnology, Material Sciences & Swiss Deep Labs',
    markets: ['Switzerland', 'DACH Region', 'Global Scientific Coops'],
    photo: zurichOfficeImg,
    coordinates: { x: 52, y: 30 }
  },
  {
    id: 'office-dubai',
    name: 'Sovereign Markets Hub',
    city: 'Dubai',
    address: 'The Gate District, DIFC, Dubai, United Arab Emirates',
    teamSize: 10,
    focus: 'Energy Networks, Desalination Technology & Sovereign Partnerships',
    markets: ['Gulf Region', 'North Africa', 'South Asia'],
    photo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 62, y: 43 }
  },
  {
    id: 'office-singapore',
    name: 'Pacific Growth Hub',
    city: 'Singapore',
    address: 'Marina Bay Financial Centre, Singapore 018983',
    teamSize: 12,
    focus: 'Advanced Manufacturing, Agri-Tech & ASEAN Expansion',
    markets: ['Southeast Asia', 'Australia', 'Greater China'],
    photo: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 78, y: 60 }
  },
  {
    id: 'office-tokyo',
    name: 'Frontier Robotics Hub',
    city: 'Tokyo',
    address: 'Roppongi Hills Mori Tower, Tokyo 106-6108, Japan',
    teamSize: 9,
    focus: 'Haptic Sensors, Space Launch Systems & Solid State Battery R&D',
    markets: ['Japan', 'Korea', 'Oceanic Markets'],
    photo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=600&h=400',
    coordinates: { x: 84, y: 38 }
  },
  {
    id: 'office-boston',
    name: 'Biotech & Academic Hub',
    city: 'Boston',
    address: '200 Clarendon Street, Floor 59, Boston, MA 02116, United States',
    teamSize: 11,
    focus: 'Biotechnology, Quantum Materials & Ivy League Research Partnerships',
    markets: ['North America', 'European Union', 'Global Academic Collaborations'],
    photo: bostonOfficeImg,
    coordinates: { x: 28, y: 34 }
  }
];

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    id: 'aether-fusion',
    name: 'Aether Fusion Systems',
    industry: 'Climate Technology',
    stage: 'Growth',
    description: 'Commercializing utility-scale aneutronic proton-boron nuclear fusion reactors that produce direct electric conversion without steam turbines or radioactive waste.',
    coverImage: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$450M Raised',
      growth: '+140% Yield Efficiency',
      employees: '180 Physicists & Eng',
      impact: 'Zero-Carbon Grid Baseload'
    },
    founded: '2023',
    ceo: 'Dr. Helen Vanderberg'
  },
  {
    id: 'cognitive-labs',
    name: 'Cognitive Labs',
    industry: 'Artificial Intelligence',
    stage: 'Series B',
    description: 'Building autonomous, self-optimizing software agents capable of orchestrating complex industrial operations, global logistics, and multi-tier supplier decisions.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$120M Raised',
      growth: '3.5M Autonomous Hours',
      employees: '85 AI Researchers',
      impact: '80% Operations Cost Reduction'
    },
    founded: '2024',
    ceo: 'Arjun Mehta'
  },
  {
    id: 'helix-therapeutics',
    name: 'Helix Therapeutics',
    industry: 'Biotechnology',
    stage: 'Series A',
    description: 'Developing direct programmable in-vivo RNA-editing therapies that reverse cellular senescence, repairing tissues deteriorated by cardiovascular diseases.',
    coverImage: helixTherapeuticsImg,
    stats: {
      funding: '$65M Raised',
      growth: 'Phase 1b Clinical Trials',
      employees: '45 Geneticists',
      impact: 'Curing Senescent Disorders'
    },
    founded: '2024',
    ceo: 'Dr. Camille Laroche'
  },
  {
    id: 'orbital-logistics',
    name: 'Spark Orbital Logistics',
    industry: 'Space Technology',
    stage: 'Growth',
    description: 'Providing autonomous orbital refueling, salvage, and payload realignment structures for micro-satellites, maximizing space infrastructure sustainability.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$180M Raised',
      growth: '14 Successful Dockings',
      employees: '110 Aerospace Eng',
      impact: 'Clearing LEO Orbit Debris'
    },
    founded: '2023',
    ceo: 'Kenji Takahashi (Interim Chair)'
  },
  {
    id: 'veridian-quantum',
    name: 'Veridian Quantum Encryption',
    industry: 'Cybersecurity',
    stage: 'Series B',
    description: 'Developing mathematical and physics-based quantum key distribution (QKD) hardware modules that secure state-level communication lines against cryptographic cracking.',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$95M Raised',
      growth: '99.999% Intrusion Reject',
      employees: '60 Cryptographers',
      impact: 'Unbreakable Data Channels'
    },
    founded: '2024',
    ceo: 'Prof. Hans-Dieter Koch'
  },
  {
    id: 'aurora-nanotech',
    name: 'Aurora Solid-State Battery',
    industry: 'Energy',
    stage: 'Series B',
    description: 'Manufacturing cobalt-free, high-density solid-state batteries that triple the range of electric utility vehicles and commercial aviation platforms with minimal lithium dependence.',
    coverImage: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$140M Raised',
      growth: '620 Wh/kg Cell Density',
      employees: '95 Battery Scientists',
      impact: 'Zero Cobalt Sourcing Risk'
    },
    founded: '2023',
    ceo: 'Sarah Lin'
  },
  {
    id: 'helios-consensus',
    name: 'Helios Consensus Labs',
    industry: 'Cryptocurrency',
    stage: 'Series A',
    description: 'Developing high-throughput zero-knowledge Rollups and decentralized state-machine protocols capable of handling global sovereign finance settlement.',
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=500',
    stats: {
      funding: '$80M Raised',
      growth: '500k+ Transactions/Sec',
      employees: '55 Cryptographers',
      impact: 'Censorship-Resistant Settlements'
    },
    founded: '2024',
    ceo: 'Dr. Evelyn Martinez'
  }
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'ai-cognitive',
    name: 'Artificial Intelligence & Robotics',
    description: 'Investing in core multi-modal architectures, high-efficiency silicon compilation, neural haptics, and autonomous physical machines.',
    icon: 'Cpu',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Multi-agent workflow networks', 'Ultra-low power edge silicon', 'Haptic feedback mechanisms'],
    investmentThesis: 'We invest at the infrastructure layer of cognitive systems. We bypass surface-level application wrappers to fund foundational compiler designs and physical mechanical breakthroughs.'
  },
  {
    id: 'climate-fusion',
    name: 'Climate & Deep Energy',
    description: 'Funding next-generation solar concentration, deep geothermal wells, non-lithium energy storage, and commercial nuclear fusion baseload.',
    icon: 'Flame',
    coverImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Aneutronic fusion baseload', 'Supercritical geothermal drilling', 'Thermal fluid storage cells'],
    investmentThesis: 'Decarbonizing global manufacturing and energy grids requires radical engineering, not carbon offsets. We fund capital-intensive energy tech with scientifically validated pathways.'
  },
  {
    id: 'biotech-precision',
    name: 'Biotechnology & Longevity',
    description: 'Supporting high-fidelity RNA editors, tissue-specific synthetic vectors, automated chemical synth, and AI-driven clinical target screening.',
    icon: 'Dna',
    coverImage: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Programmable genomic editing', 'Targeted tissue transfection', 'Organoid drug pre-screening'],
    investmentThesis: 'The human body is an information processing system. We invest in genomic reading, editing, and synthesis architectures that replace trial-and-error medicine with digital precision.'
  },
  {
    id: 'space-frontier',
    name: 'Space & Frontier Technology',
    description: 'Scaling orbital mechanics, laser communications, deep-space metallurgy, asteroid chemical analyses, and lunar infrastructure systems.',
    icon: 'Globe',
    coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Propellent storage platforms', 'Laser cross-link telemetries', 'Radiation shielding composites'],
    investmentThesis: 'The solar system represents boundless mineral and chemical bounty. We fund physical infrastructure that turns low Earth orbit and deep space into an active economic zone.'
  },
  {
    id: 'cybersecurity-quantum',
    name: 'Infrastructure & Cybersecurity',
    description: 'Enabling post-quantum lattice encryption, localized microgrid architectures, secure firmware stacks, and optical routing data fabric.',
    icon: 'ShieldAlert',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Post-quantum cryptography', 'Hardware root-of-trust modules', 'Optical high-throughput fabrics'],
    investmentThesis: 'As connectivity deepens, sovereign vulnerability rises. We allocate capital exclusively to physical hardware and cryptographic proof layers that guarantee absolute security.'
  },
  {
    id: 'advanced-manufacturing',
    name: 'Advanced Manufacturing',
    description: 'Scaling high-speed metal deposition, autonomous raw casting, synthetic molecular lattices, and integrated supply-chain networks.',
    icon: 'Wrench',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['E-beam additive 3D deposition', 'Sovereign parts redundancy', 'Smart material alloy formulation'],
    investmentThesis: 'Digital designs must ultimately be instantiated in physical matter. We back automated manufacturing projects that repatriate production and slash global shipping dependencies.'
  },
  {
    id: 'crypto-decentralized',
    name: 'Cryptocurrency & Decentralized Ledgers',
    description: 'Funding zero-knowledge scaling systems, decentralized compute markets, cross-chain consensus protocols, and sovereign reserves technology.',
    icon: 'Coins',
    coverImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800&h=500',
    highlights: ['Zero-knowledge scalability (zk-SNARKs)', 'Decentralized AI inference computing', 'Sovereign ledger settlement layers'],
    investmentThesis: 'Cryptographically secure, decentralized networks form the future baseline of sovereign financial interaction. We back deep mathematical innovations that guarantee transaction trust and decentralized resource allocation.'
  }
];

export const RESEARCH_REPORTS: ResearchReport[] = [
  {
    id: 'report-fusion-2026',
    title: 'Commercializing Proton-Boron Fusion: Capitalizing on the Baseload of 2030',
    category: 'Energy Infrastructure',
    date: 'May 12, 2026',
    readTime: '18 min read',
    author: 'Victoria Thorne',
    authorTitle: 'Managing Partner',
    summary: 'Spark Capital’s technical breakdown of aneutronic fusion scaling. Discover why proton-boron fusion renders tritium-based deuterium models commercially obsolete due to hardware simplification.',
    coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600&h=400',
    highlights: [
      'Eliminating radioactive steam turbine structures',
      'The direct electrostatic collection efficiency (+90%)',
      'Cost per Megawatt projections: $0.02/kWh by 2031'
    ]
  },
  {
    id: 'report-ai-silicon',
    title: 'Beyond Transformers: Neuromorphic Computing & Dynamic Silicon Fabrics',
    category: 'Autonomous Systems',
    date: 'March 24, 2026',
    readTime: '15 min read',
    author: 'Dr. Marcus Vance',
    authorTitle: 'General Partner',
    summary: 'Analyze the physical bottlenecks of massive LLM clusters. We document how neuromorphic chips bypass the Von Neumann memory-processor bottleneck to run real-time autonomous robotics.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    highlights: [
      'Addressing LLM cooling failures in gigawatt centers',
      'Dynamic field-programmable gate grids (FPGG) evolution',
      'Running 500B parameter equivalents at sub-15W output'
    ]
  },
  {
    id: 'report-rna-longevity',
    title: 'Programmable Epigenetic In-Vivo Rewriting: Preclinical Successes',
    category: 'Biotechnology',
    date: 'January 15, 2026',
    readTime: '22 min read',
    author: 'Helena Rostova',
    authorTitle: 'General Partner',
    summary: 'Explore the therapeutic timeline of gene therapies targeting senescent pathways. A review of mouse model vascular rejuvenation studies led by Spark Capital’s bio portfolio.',
    coverImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600&h=400',
    highlights: [
      'In-vivo transfection efficiency using novel lipid casings',
      '95% reduction in senescent vascular plaque in animal models',
      'Phase 1 clinical trial designs submitted to EMA/FDA'
    ]
  },
  {
    id: 'report-cryptography-2026',
    title: 'Zero-Knowledge Proofs as Global Truth Anchors: Scaling Sovereign Ledger Systems',
    category: 'Sovereign Cryptography',
    date: 'April 05, 2026',
    readTime: '20 min read',
    author: 'David Sterling',
    authorTitle: 'Partner',
    summary: 'A deep-dive technical research on zk-SNARK scalability, showing how zero-knowledge cryptography solves the trilemma of security, decentralization, and speed for global ledgers.',
    coverImage: zeroKnowledgeProofsImg,
    highlights: [
      'Mathematical optimizations in pairing-friendly elliptic curves',
      'Minimizing verification proofs to constant size (<300 bytes)',
      'Constructing private, auditable sovereign financial channels'
    ]
  }
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'rm-1',
    phase: 'Phase I',
    title: 'Scientific Foundation & Sourcing',
    period: '2026 – 2028',
    description: 'Securing structural partnerships with leading research laboratories, creating proprietary IP frameworks, and launching the deep tech seed accelerator.',
    milestones: [
      'Establish technical advisory hubs in Oxford, ETH Zürich, and Stanford',
      'Deploy $1.2B of specialized Fund IV capital into preclinical biotechnology platforms',
      'Inaugurate the Spark Supercomputing Cluster (15,000 H100 equivalents) for portfolio allocation'
    ],
    status: 'active'
  },
  {
    id: 'rm-2',
    phase: 'Phase II',
    title: 'Commercial Scale & Proving',
    period: '2028 – 2030',
    description: 'Transitioning frontier laboratory models into scaled commercial deployments. First physical grid linkages for our energy portfolio and FAA space logistics certification.',
    milestones: [
      'Achieve first commercial 100MW fusion baseline link to North American regional grid',
      'FDA clinical authorization for senescent RNA treatments for chronic vascular diseases',
      'Deploy autonomous drone delivery networks across three Pacific sovereign economic zones'
    ],
    status: 'future'
  },
  {
    id: 'rm-3',
    phase: 'Phase III',
    title: 'Global Consolidation & Dominance',
    period: '2030 – 2033',
    description: 'Standardizing deep tech infrastructures across global economies. Sovereign funds alignment to establish secure and redundant supply chains across allied nations.',
    milestones: [
      'Direct $3.0B Fund V focus to sovereign aerospace and post-quantum network securities',
      'IPO exits for initial fusion energy and autonomous multi-agent software portfolios',
      'Expand interactive offices in Tokyo and Munich to handle deep material logistics'
    ],
    status: 'future'
  },
  {
    id: 'rm-4',
    phase: 'Phase IV',
    title: 'Systemic Regeneration & Abundance',
    period: '2033 – 2036',
    description: 'Securing absolute resource availability and planetary longevity goals. Scaling off-world mining, synthetic manufacturing grids, and cellular cellular healing standardizations.',
    milestones: [
      'Deploy localized microgrid fusion batteries to off-grid oceanic regions',
      'Operationalize autonomous lunar metallurgy extraction structures',
      'Standardize direct genetic cellular therapies to double general human active life'
    ],
    status: 'future'
  }
];

export const ESG_INITIATIVES: ESGInitiative[] = [
  {
    id: 'esg-1',
    title: 'Grid Decarbonization',
    metric: '12.4M Tons CO2 Avoided',
    description: 'Our portfolio investments in fusion, solid-state batteries, and energy grids aim to displace fossil baseload globally.',
    icon: 'Leaf'
  },
  {
    id: 'esg-2',
    title: 'Scientific Equity',
    metric: '$85M in University Grants',
    description: 'Direct corporate funding to academic research groups investigating deep physics and genomic medicine without structural commercial strings.',
    icon: 'GraduationCap'
  },
  {
    id: 'esg-3',
    title: 'Redundant Security',
    metric: '100% Sovereign Firmware Scans',
    description: 'Every advanced software or robotics investment undergoes strict third-party regulatory firmware audits to prevent hostile system penetrations.',
    icon: 'Lock'
  }
];

export const CAREER_POSITIONS = [
  {
    id: 'pos-1',
    title: 'Principal - Quantum Computing & Optics',
    location: 'Silicon Valley Hub (San Francisco)',
    type: 'Full-time / In-person',
    experience: '8+ Years Tech Experience / Ph.D. Preferred',
    summary: 'Lead our quantum investment team, coordinating with national research labs to identify promising optical and topological quantum innovations.'
  },
  {
    id: 'pos-2',
    title: 'Associate - Biotech & RNA Platform Systems',
    location: 'Alpine Precision Hub (Zurich)',
    type: 'Full-time / In-person',
    experience: '4+ Years VC/Bio-Banking / M.D. or Molecular Ph.D.',
    summary: 'Support Helena Rostova in conducting deep scientific due diligence on gene vector platforms, cell editing, and clinical pipeline scaling.'
  },
  {
    id: 'pos-3',
    title: 'Director of GTM Operations',
    location: 'East Coast Capital (New York)',
    type: 'Full-time / Hybrid',
    experience: '12+ Years GTM Scaling / Former SaaS VP',
    summary: 'Coordinate directly with early-stage Deep Tech CEOs to design pricing, hire executive teams, and structure enterprise-level sales funnels.'
  },
  {
    id: 'pos-4',
    title: 'Research Fellow - Cryptography & Decentralized Systems',
    location: 'Silicon Valley Hub (San Francisco)',
    type: 'Full-time / In-person',
    experience: '6+ Years Post-doc / Ph.D. in Mathematics or CS',
    summary: 'Lead mathematical validation of decentralized consensus mechanisms, zero-knowledge scalability algorithms, and state-machine integrity.'
  }
];
