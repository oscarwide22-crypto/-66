import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Flame, Dna, Globe, ShieldAlert, Wrench, Coins,
  ArrowUpRight, Award, CircleDot, Zap, CheckCircle2,
  Database, Network, Server, ShieldCheck, Layers
} from 'lucide-react';
import { INDUSTRY_SECTORS } from '../../data';

export default function StrategyView() {
  const [selectedSector, setSelectedSector] = useState(INDUSTRY_SECTORS[0].id);
  const [cryptoSubTab, setCryptoSubTab] = useState<'web3' | 'cases'>('web3');
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  const visionTimeline = [
    {
      phase: "Phase 01",
      era: "Core Infrastructure & Upstream Commitment",
      date: "2024 — 2025",
      title: "Open-Source Protocol Incubation",
      description: "Providing pure developer capital and research grants to upstream cryptographic initiatives. We fund foundational mathematics over proprietary wrappers.",
      details: [
        "Allocating $35M in non-dilutive development grants directly to zk-SNARK compiler optimizations (PLONK, Halo2).",
        "All incubated codebases are registered under MIT or Apache 2.0 open-source licenses to prevent commercial enclosure.",
        "Developing native language bindings (Rust, Go) for core consensus mechanisms."
      ],
      status: "Completed & Active",
      nodeCount: 12,
      governanceFactor: "Sovereign Devs",
      systemStatus: "STABLE FOUNDATION"
    },
    {
      phase: "Phase 02",
      era: "Network Orchestration & Mesh Hardening",
      date: "2025 — 2026",
      title: "Multi-Jurisdictional Node Networks",
      description: "Transitioning testbeds into globally distributed, sovereign validator clusters. Breaking single-jurisdiction dependency and hyperscaler lock-in.",
      details: [
        "Deploying physical, self-hosted bare-metal validator rigs across five allied sovereign nations.",
        "Mitigating AWS/GCP hosting monopolies by implementing native multi-cloud backup redundancy.",
        "Formulating threshold signature schemes (TSS) for secured multi-party treasury reserves."
      ],
      status: "In Deployment",
      nodeCount: 150,
      governanceFactor: "Distributed Validators",
      systemStatus: "MESH ALIGNED"
    },
    {
      phase: "Phase 03",
      era: "Consensus-Driven Resource Allocation",
      date: "2026 — 2027",
      title: "Decentralized Governance & DAOs",
      description: "Establishing mathematically verifiable on-chain governance systems. Capital allocation and protocol upgrades transition to decentralized stakeholder consensus.",
      details: [
        "Integrating quadratic voting mechanisms to balance power between heavy liquidity providers and protocol developers.",
        "Transitioning multi-signature treasury controls into autonomous, smart-contract-governed treasury vaults.",
        "Deploying cryptographically secured proposal systems with zero-knowledge voter privacy."
      ],
      status: "Active Testing",
      nodeCount: 1200,
      governanceFactor: "Quadratic Stakeholders",
      systemStatus: "DEMOCRACY SECURED"
    },
    {
      phase: "Phase 04",
      era: "Self-Sustaining Public Utilities",
      date: "2027 & Beyond",
      title: "Autonomous Decentralized Spheres",
      description: "A completely decentralized ecosystem of computing power, data routing, and capital aggregation working with total regulatory compliance and absolute security.",
      details: [
        "Self-funding protocol loops driven by automated DePIN micro-transaction gas burning.",
        "Cross-protocol bridges operating autonomously via decentralized cryptographic proof verification.",
        "State-level secure communication lines fully adapted to open, non-custodial networks."
      ],
      status: "Strategic Horizon",
      nodeCount: 15000,
      governanceFactor: "Autonomous Swarms",
      systemStatus: "FULLY SOVEREIGN"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconMap: { [key: string]: any } = {
    Cpu: Cpu,
    Flame: Flame,
    Dna: Dna,
    Globe: Globe,
    ShieldAlert: ShieldAlert,
    Wrench: Wrench,
    Coins: Coins,
  };

  const activeSectorData = INDUSTRY_SECTORS.find(s => s.id === selectedSector) || INDUSTRY_SECTORS[0];
  const ActiveIcon = iconMap[activeSectorData.icon] || Cpu;

  // The comprehensive list of 13 industries requested by the user:
  const allIndustries = [
    { name: 'Artificial Intelligence', category: 'Cognitive' },
    { name: 'Robotics', category: 'Cognitive' },
    { name: 'Enterprise Software', category: 'Cognitive' },
    { name: 'Healthcare', category: 'Biological' },
    { name: 'Biotechnology', category: 'Biological' },
    { name: 'Climate Technology', category: 'Physical' },
    { name: 'Energy', category: 'Physical' },
    { name: 'Space Technology', category: 'Physical' },
    { name: 'Manufacturing', category: 'Physical' },
    { name: 'Cybersecurity', category: 'Infrastructure' },
    { name: 'Infrastructure', category: 'Infrastructure' },
    { name: 'Financial Technology', category: 'Infrastructure' },
    { name: 'Cryptocurrency & Ledgers', category: 'Infrastructure' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="w-full text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Title */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Global Allocation Model</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Sovereign <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Investment Strategy</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          We back highly complex physical and mathematical systems. We focus on industries characterized by high entry barriers, profound scientific complexity, and deep sovereign demand.
        </p>
      </div>

      {/* Strategy Pillars */}
      <section id="strategy-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Pillar 01</span>
          <h3 className="text-lg font-display font-semibold text-white mb-3">Thermodynamic Realism</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Every software or physical platform we fund must obey strict thermodynamic constraints. We do not invest in carbon offsets or marketing layers; we fund direct baseload energy production, physical energy density, and computational efficiency.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Pillar 02</span>
          <h3 className="text-lg font-display font-semibold text-white mb-3">Biological Informationalism</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            We treat biology as an information system. Our investments focus on programming cellular outputs, direct in-vivo genomic editing, and automating laboratory pipelines to convert chemical trials into digital iterations.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Pillar 03</span>
          <h3 className="text-lg font-display font-semibold text-white mb-3">Sovereign Supply Integrity</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Frontier technologies are critical to state-level defense and supply-chain stability. We align with allied nations to establish sovereign redundancies in aerospace logistics, high-density batteries, and unbreakable quantum networks.
          </p>
        </motion.div>
      </section>

      {/* Interactive Bento Sectors Section */}
      <section id="bento-sectors" className="mb-24">
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Active Sectors</span>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">Frontier Core Domains</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sectors Selection Rail */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {INDUSTRY_SECTORS.map((sector) => {
              const Icon = iconMap[sector.icon] || Cpu;
              const isSelected = selectedSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-gold-500 text-black border-gold-500 shadow-xl shadow-gold-500/5'
                      : 'bg-[#080808] border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-display font-semibold tracking-wide">{sector.name}</span>
                  </div>
                  <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-45' : 'text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Editorial Sector Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSector}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden"
              >
                {/* Sector Cover Image */}
                <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8 relative">
                  <img
                    src={activeSectorData.coverImage}
                    alt={activeSectorData.name}
                    className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <ActiveIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-widest text-gold-300 uppercase">
                      Core Domain
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Thesis & Description */}
                  <div className="md:col-span-7 flex flex-col gap-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                      {activeSectorData.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {activeSectorData.description}
                    </p>
                    <div className="h-[1px] bg-white/5 my-2" />
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Scientific Mandate</span>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {activeSectorData.investmentThesis}
                      </p>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="md:col-span-5 flex flex-col gap-4 bg-white/2 p-5 rounded-xl border border-white/5 self-start">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-gold-400" />
                      Key Directives
                    </span>
                    <ul className="flex flex-col gap-3">
                      {activeSectorData.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-300 font-sans leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Custom Crypto Detailed Section */}
                {selectedSector === 'crypto-decentralized' && (
                  <div className="mt-10 pt-8 border-t border-white/5">
                    {/* Tab Navigation */}
                    <div className="flex gap-6 border-b border-white/5 pb-3 mb-6">
                      <button
                        onClick={() => setCryptoSubTab('web3')}
                        className={`text-xs font-mono tracking-wider uppercase pb-2 border-b-2 transition-all cursor-pointer ${
                          cryptoSubTab === 'web3'
                            ? 'border-gold-500 text-gold-400 font-semibold'
                            : 'border-transparent text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        Web3 &amp; Decentralization Pillars
                      </button>
                      <button
                        onClick={() => setCryptoSubTab('cases')}
                        className={`text-xs font-mono tracking-wider uppercase pb-2 border-b-2 transition-all cursor-pointer ${
                          cryptoSubTab === 'cases'
                            ? 'border-gold-500 text-gold-400 font-semibold'
                            : 'border-transparent text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        Allocation Case Studies
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {cryptoSubTab === 'web3' ? (
                        <motion.div
                          key="web3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                          {/* Pillar 1 */}
                          <div className="p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                              <Server className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-display font-semibold text-white tracking-wide">DePIN Protocols</h4>
                            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Hardware Networks</span>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              Coordinating distributed physical computational resources, GPU grids, and edge storage clusters globally via token-incentivized consensus mechanisms.
                            </p>
                          </div>

                          {/* Pillar 2 */}
                          <div className="p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-display font-semibold text-white tracking-wide">Zero-Knowledge Proofs</h4>
                            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Unlinkable Integrity</span>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              Leveraging zk-SNARKs and cryptographic rollups to verify financial states and computational truth while guaranteeing absolute sovereign data privacy.
                            </p>
                          </div>

                          {/* Pillar 3 */}
                          <div className="p-5 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                              <Network className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm font-display font-semibold text-white tracking-wide">Decentralized AI Compute</h4>
                            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Censorship-Resistant</span>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              Decoupling AI model training and inference loops from centralized hyperscale data centers, establishing global market pricing for mathematical operations.
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="cases"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {/* Case 1 */}
                          <div className="p-6 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-display font-semibold text-white">Helios Consensus Labs</h4>
                                <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-wider">Series A Allocation ($80M committed)</span>
                              </div>
                              <span className="text-[9px] font-mono bg-gold-500/10 border border-gold-500/20 text-gold-400 px-2 py-0.5 rounded-md">Live Platform</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              <strong>The Challenge:</strong> Global treasury clearing remains dependent on heavily centralized clearinghouses vulnerable to sudden regulatory changes and latency constraints.
                            </p>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              <strong>Web3 Execution:</strong> Engineered a post-quantum zero-knowledge rollup infrastructure that settled transaction consensus within milliseconds, registering 500,000+ operations/sec with instant finality.
                            </p>
                            <div className="border-t border-white/5 pt-3">
                              <span className="text-[10px] font-mono text-zinc-500 block">Sovereign Impact:</span>
                              <span className="text-xs text-zinc-300 font-sans">Censorship-Resistant, High-Fidelity Treasury Settlement Layer.</span>
                            </div>
                          </div>

                          {/* Case 2 */}
                          <div className="p-6 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-display font-semibold text-white">Spark DePIN Compute Cluster</h4>
                                <span className="text-[9px] font-mono text-amber-500 uppercase tracking-wider">Seed Incubation ($25M committed)</span>
                              </div>
                              <span className="text-[9px] font-mono bg-zinc-800 border border-white/10 text-zinc-400 px-2 py-0.5 rounded-md">Pilot Stage</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              <strong>The Challenge:</strong> High-performance model training is artificially bottlenecked by centralized cloud service providers through hardware hoarding and exorbitant markups.
                            </p>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                              <strong>Web3 Execution:</strong> Deployed a decentralized oracle and smart-contract coordination protocol linking 12,000 idle enterprise-tier GPUs across five allied nations with cryptographic payout structures.
                            </p>
                            <div className="border-t border-white/5 pt-3">
                              <span className="text-[10px] font-mono text-zinc-500 block">Sovereign Impact:</span>
                              <span className="text-xs text-zinc-300 font-sans">Reduces high-performance computing training overheads by 70%.</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Decentralization Vision Timeline & Network Graphic */}
      <section id="decentralization-vision" className="py-20 border-t border-white/5 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              Sovereign Ecosystems
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white leading-tight">
              Decentralization <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Vision &amp; Governance</span>
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
              We reject central points of failure. Explore our tactical timeline and network roadmap for transitioning raw protocol codebases into self-healing, multi-jurisdictional public utilities.
            </p>
          </div>
          <div className="text-left md:text-right shrink-0">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">PROTOCOL ALIGNMENT</span>
            <span className="text-sm font-mono text-white mt-1 block">100% OPEN-SOURCE (MIT/APACHE)</span>
          </div>
        </div>

        {/* Interactive Timeline & Schematic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Timeline Selector: Col-span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-3 w-full">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 block">Governance Roadmap Phases</span>
            {visionTimeline.map((step, idx) => {
              const isActive = activeTimelineStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTimelineStep(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex flex-col gap-2 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0b0b0b] border-gold-500/30 shadow-lg shadow-gold-500/2'
                      : 'bg-[#050505] border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {/* Active highlight side line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold-400" />
                  )}
                  
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${isActive ? 'text-gold-400' : 'text-zinc-500'}`}>
                      {step.phase} • {step.date}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                      isActive 
                        ? 'bg-gold-500/10 border-gold-500/20 text-gold-400'
                        : 'bg-zinc-800/20 border-white/5 text-zinc-500'
                    }`}>
                      {step.status}
                    </span>
                  </div>

                  <h3 className={`text-sm font-display font-semibold tracking-wide ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-zinc-500 leading-relaxed font-sans line-clamp-2">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Visual Schematic & Details: Col-span 7 */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Live Interactive SVG Schematic Map */}
            <div className="bg-[#050505] border border-white/5 rounded-xl p-5 md:p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-gold-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Interactive Network Topology Map
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">
                    SYS_STATE: {visionTimeline[activeTimelineStep].systemStatus}
                  </span>
                </div>
              </div>

              {/* Graphic Stage Canvas */}
              <div className="w-full bg-black/60 rounded-lg p-2 flex items-center justify-center border border-white/5 relative h-56 md:h-64">
                {/* SVG Schematic */}
                <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-600 transition-all duration-700">
                  {/* Subtle Grid dots */}
                  <defs>
                    <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#ffffff" fillOpacity="0.05" />
                    </pattern>
                  </defs>
                  <rect width="400" height="240" fill="url(#grid-pattern)" />

                  {/* Network connections depending on activeTimelineStep */}
                  {activeTimelineStep === 0 && (
                    <>
                      {/* Central Core with satellite code units */}
                      <line x1="200" y1="120" x2="160" y2="70" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                      <line x1="200" y1="120" x2="240" y2="70" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                      <line x1="200" y1="120" x2="200" y2="180" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                      
                      {/* Surrounding inactive nodes */}
                      <line x1="160" y1="70" x2="80" y2="110" stroke="#27272a" strokeWidth="0.75" />
                      <line x1="240" y1="70" x2="320" y2="110" stroke="#27272a" strokeWidth="0.75" />
                      <line x1="200" y1="180" x2="300" y2="170" stroke="#27272a" strokeWidth="0.75" />
                    </>
                  )}

                  {activeTimelineStep === 1 && (
                    <>
                      {/* Multi-Jurisdictional network links */}
                      <line x1="200" y1="120" x2="100" y2="70" stroke="#3f3f46" strokeWidth="1" />
                      <line x1="200" y1="120" x2="300" y2="70" stroke="#3f3f46" strokeWidth="1" />
                      <line x1="200" y1="120" x2="80" y2="160" stroke="#3f3f46" strokeWidth="1" />
                      <line x1="200" y1="120" x2="320" y2="160" stroke="#3f3f46" strokeWidth="1" />
                      
                      {/* Perimeter Mesh connections */}
                      <line x1="100" y1="70" x2="300" y2="70" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
                      <line x1="100" y1="70" x2="80" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
                      <line x1="300" y1="70" x2="320" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
                      <line x1="80" y1="160" x2="320" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
                    </>
                  )}

                  {activeTimelineStep === 2 && (
                    <>
                      {/* Governance consensus links */}
                      <line x1="200" y1="120" x2="100" y2="70" stroke="#d4af37" strokeWidth="1.25" />
                      <line x1="200" y1="120" x2="300" y2="70" stroke="#d4af37" strokeWidth="1.25" />
                      <line x1="200" y1="120" x2="80" y2="160" stroke="#d4af37" strokeWidth="1.25" />
                      <line x1="200" y1="120" x2="320" y2="160" stroke="#d4af37" strokeWidth="1.25" />
                      
                      {/* Interactive governance signal pulses */}
                      <circle cx="150" cy="95" r="2.5" fill="#d4af37">
                        <animate attributeName="cx" values="100;200" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="70;120" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="95" r="2.5" fill="#d4af37">
                        <animate attributeName="cx" values="300;200" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy" values="70;120" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}

                  {activeTimelineStep === 3 && (
                    <>
                      {/* Full Autonomous Swarm - Highly dense mesh connections */}
                      <line x1="200" y1="120" x2="100" y2="70" stroke="#d4af37" strokeWidth="1.5" />
                      <line x1="200" y1="120" x2="300" y2="70" stroke="#d4af37" strokeWidth="1.5" />
                      <line x1="200" y1="120" x2="80" y2="160" stroke="#d4af37" strokeWidth="1.5" />
                      <line x1="200" y1="120" x2="320" y2="160" stroke="#d4af37" strokeWidth="1.5" />
                      
                      <line x1="100" y1="70" x2="300" y2="70" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                      <line x1="100" y1="70" x2="80" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                      <line x1="300" y1="70" x2="320" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                      <line x1="80" y1="160" x2="320" y2="160" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                      
                      {/* Cross links */}
                      <line x1="100" y1="70" x2="320" y2="160" stroke="#d4af37" strokeWidth="0.75" strokeOpacity="0.25" />
                      <line x1="300" y1="70" x2="80" y2="160" stroke="#d4af37" strokeWidth="0.75" strokeOpacity="0.25" />

                      {/* Random micro floating mesh devices */}
                      <circle cx="140" cy="190" r="1" fill="#d4af37" fillOpacity="0.6" />
                      <circle cx="260" cy="50" r="1.5" fill="#d4af37" fillOpacity="0.6" />
                      <circle cx="50" cy="110" r="1" fill="#d4af37" fillOpacity="0.6" />
                      <circle cx="350" cy="110" r="1.5" fill="#d4af37" fillOpacity="0.6" />
                    </>
                  )}

                  {/* Node rendering with glowing states */}
                  {/* Central Node (Spark Core / Treasury Ledger) */}
                  <g>
                    <circle cx="200" cy="120" r="14" fill="#0c0c0c" stroke="#d4af37" strokeWidth="1.5" />
                    <circle cx="200" cy="120" r="10" fill="#d4af37" fillOpacity={activeTimelineStep === 2 ? "0.2" : "0.08"}>
                      <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
                    </circle>
                    {activeTimelineStep === 2 ? (
                      <path d="M196,116 L204,116 L204,124 L196,124 Z" fill="none" stroke="#d4af37" strokeWidth="1.25" />
                    ) : (
                      <circle cx="200" cy="120" r="3" fill="#d4af37" />
                    )}
                    <text x="200" y="146" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" letterSpacing="1">
                      {activeTimelineStep === 2 ? "GOVERNANCE_LEDGER" : "CORE_PROTOCOLS"}
                    </text>
                  </g>

                  {/* Satellite nodes */}
                  {/* Node 1: North America */}
                  <g opacity={activeTimelineStep >= 1 ? 1 : 0.25}>
                    <circle cx="100" cy="70" r="8" fill="#0c0c0c" stroke={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} strokeWidth="1" />
                    <circle cx="100" cy="70" r="2" fill={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} />
                    <text x="100" y="56" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">
                      AMER-1 (OR)
                    </text>
                  </g>

                  {/* Node 2: Europe */}
                  <g opacity={activeTimelineStep >= 1 ? 1 : 0.25}>
                    <circle cx="300" cy="70" r="8" fill="#0c0c0c" stroke={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} strokeWidth="1" />
                    <circle cx="300" cy="70" r="2" fill={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} />
                    <text x="300" y="56" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">
                      EURO-2 (DE)
                    </text>
                  </g>

                  {/* Node 3: Allied Reserve Vault */}
                  <g opacity={activeTimelineStep >= 1 ? 1 : 0.25}>
                    <circle cx="80" cy="160" r="8" fill="#0c0c0c" stroke={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} strokeWidth="1" />
                    <circle cx="80" cy="160" r="2" fill={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} />
                    <text x="80" y="178" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">
                      APAC-3 (KR)
                    </text>
                  </g>

                  {/* Node 4: Global Compute */}
                  <g opacity={activeTimelineStep >= 1 ? 1 : 0.25}>
                    <circle cx="320" cy="160" r="8" fill="#0c0c0c" stroke={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} strokeWidth="1" />
                    <circle cx="320" cy="160" r="2" fill={activeTimelineStep >= 1 ? "#d4af37" : "#52525b"} />
                    <text x="320" y="178" textAnchor="middle" fill="#a1a1aa" fontSize="7" fontFamily="monospace">
                      SVRN-4 (CH)
                    </text>
                  </g>
                </svg>

                {/* SVG absolute overlay technical readouts */}
                <div className="absolute top-3 left-4 font-mono text-[9px] text-zinc-500 bg-black/80 px-2 py-1 rounded border border-white/5 flex flex-col gap-0.5 pointer-events-none">
                  <span>SCALE: MULTI_REGIONAL</span>
                  <span>LATENCY: &lt; 40ms</span>
                  <span>UPSTREAM: GITHUB_PUSHES</span>
                </div>

                <div className="absolute bottom-3 right-4 font-mono text-[9px] text-zinc-500 bg-black/80 px-2 py-1 rounded border border-white/5 flex flex-col gap-0.5 pointer-events-none text-right">
                  <span>ACTIVE_VALIDATORS: {visionTimeline[activeTimelineStep].nodeCount}</span>
                  <span>VOTING_ENG: {visionTimeline[activeTimelineStep].governanceFactor}</span>
                  <span>SEC_STABILITY: 100.0</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications Panel */}
            <div className="bg-[#050505] border border-white/5 rounded-xl p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest">
                  {visionTimeline[activeTimelineStep].era}
                </span>
                <h4 className="text-base font-display font-semibold text-white">
                  {visionTimeline[activeTimelineStep].title}
                </h4>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {visionTimeline[activeTimelineStep].description}
              </p>

              <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                  Tactical Implementations
                </span>
                <ul className="flex flex-col gap-2">
                  {visionTimeline[activeTimelineStep].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Complete Target Industries List */}
      <section id="complete-industries-grid" className="py-16 border-t border-white/5">
        <div className="flex flex-col gap-4 mb-10 text-center items-center">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Global Allocation Reach</span>
          <h2 className="text-2xl md:text-3xl font-display font-light text-white leading-tight">
            Comprehensive <span className="font-semibold text-white">13 Industries Focus</span>
          </h2>
          <p className="text-xs text-zinc-400 max-w-lg font-sans leading-relaxed">
            Spark Capital maintains strategic deployment targets across thirteen key domains of deep engineering and systemic infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allIndustries.map((ind, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-white/5 hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">{ind.category}</span>
              </div>
              <h4 className="text-xs md:text-sm font-display font-semibold text-white tracking-wide">
                {ind.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
