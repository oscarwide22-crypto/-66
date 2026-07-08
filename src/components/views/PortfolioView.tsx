import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, TrendingUp, Users, ShieldAlert, 
  ArrowUpRight, Award, Compass, Zap, Layers,
  Server, ShieldCheck, Network, Database, Coins, Lock, ChevronDown, ChevronUp
} from 'lucide-react';
import { PORTFOLIO_COMPANIES } from '../../data';
import { PortfolioCompany } from '../../types';

export default function PortfolioView() {
  const [activeStage, setActiveStage] = useState<string>('all');
  const [activeIndustry, setActiveIndustry] = useState<string>('all');
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null);
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  const cryptoCaseStudies = [
    {
      id: 'helios-consensus',
      num: '01',
      category: 'DECENTRALIZED SETTLEMENT & DEFI',
      title: 'Helios Zero-Knowledge Settlement Protocol',
      allocation: 'Series A Allocation ($80M Committed)',
      status: 'Live Network',
      icon: <Coins className="w-5 h-5 text-gold-400" />,
      challenge: 'Global cross-border treasury clearing remains bottlenecked by centralized clearinghouses, legacy SWIFT rails, and heavy counterparty risk, causing multi-day settlement delays and multi-billion dollar capital inefficiencies.',
      execution: 'Engineered a post-quantum zero-knowledge rollup (zk-Rollup) infrastructure that compresses financial transaction states into cryptographic proofs. Consensus is reached via a decentralized validation network of 500 independent institutional nodes.',
      metrics: [
        { label: 'THROUGHPUT RATE', value: '500,000+ Tx/s', sub: 'Instant sub-millisecond finality' },
        { label: 'CAPITAL UNLOCKED', value: '$1.2B USD', sub: 'Zero buffer liquidity pools needed' },
        { label: 'CENSORSHIP RESISTANCE', value: '100%', sub: 'Sovereign-to-sovereign cryptographic clearing' }
      ],
      deepDive: {
        consensus: 'Tendermint-derived Proof-of-Stake with custom BFT finality thresholds.',
        cryptography: 'Recursive zk-SNARKs (PLONK) with custom post-quantum signature schemes (Falcon/Dilithium).',
        smartContracts: 'Formal mathematical verification of all core state-transition equations to eliminate re-entrancy vectors.',
        ledgerArch: 'Two-tier sharded ledger separating high-frequency cryptographic verification from state permanence.'
      }
    },
    {
      id: 'spark-depin',
      num: '02',
      category: 'DISTRIBUTED COMPUTE & DEPIN',
      title: 'Spark DePIN GPU Compute Cluster',
      allocation: 'Seed Incubation ($25M Committed)',
      status: 'Pilot Stage',
      icon: <Server className="w-5 h-5 text-gold-400" />,
      challenge: 'High-performance AI training and model inference are heavily centralized in hyperscaler clouds. AI startups face hardware hoarding, inflated pricing, and potential model censorship from massive tech monopolies.',
      execution: 'Established a decentralized, token-incentivized routing protocol linking over 12,000 idle enterprise-tier GPUs across five allied nations. Orchestration of deep neural network weights is split into independent sub-computations, protected by zero-knowledge encryption during transit.',
      metrics: [
        { label: 'COST SAVINGS', value: '70% Reduction', sub: 'Compared to standard hyperscaler cloud compute' },
        { label: 'HARDWARE BASELINE', value: '12,000+ GPUs', sub: 'Enterprise-tier decentralized hardware' },
        { label: 'COORDINATED CAPACITY', value: '14 Petaflops', sub: 'Distributed AI model training & inference' }
      ],
      deepDive: {
        consensus: 'Proof-of-Useful-Work (PoUW) validating actual mathematical execution of neural model iterations.',
        cryptography: 'Fully Homomorphic Encryption (FHE) protecting weights and private training datasets during processing.',
        smartContracts: 'Dynamic SLA smart agreements distributing real-time payments based on uptime and hardware efficiency.',
        ledgerArch: 'Sparsely-populated state tree optimized for high-throughput operational metadata logs.'
      }
    },
    {
      id: 'astraeus-oracle',
      num: '03',
      category: 'INTEROPERABILITY & ORACLES',
      title: 'Astraeus Sovereignty Bridge & Oracle Layer',
      allocation: 'Strategic Growth ($45M Committed)',
      status: 'Beta Network',
      icon: <Network className="w-5 h-5 text-gold-400" />,
      challenge: 'Cross-chain messaging and off-chain data feeds (oracles) are vulnerable to single-signature attacks, smart-contract exploits, and API manipulation, causing billions of dollars in protocol hacks.',
      execution: 'Deployed a post-quantum cryptographic oracle network featuring decentralized multi-party computation (MPC) and threshold signatures. This ensures that real-world financial data feeds, commodity prices, and cross-ledger states are mathematically verified across hundreds of independent validator keys before execution.',
      metrics: [
        { label: 'SECURED TVL', value: '$4.2B Secured', sub: 'Across 6 high-integrity sovereign networks' },
        { label: 'UPDATE FREQUENCY', value: '< 1.0s Interval', sub: 'Sub-second real-time commodity pricing' },
        { label: 'INTEGRITY FACTOR', value: '99.999%', sub: 'Tamper-proof distributed multi-party computation' }
      ],
      deepDive: {
        consensus: 'Threshold Signature Scheme (TSS) requiring 2/3 cryptographic approval from randomized keysets.',
        cryptography: 'Multi-Party Computation (MPC) utilizing Shamir Secret Sharing with proactive share recovery.',
        smartContracts: 'Automated fallback mechanisms in case of extreme market volatility or node disconnections.',
        ledgerArch: 'Decentralized oracle registry recording continuous verification signatures for state audits.'
      }
    }
  ];

  const stages = ['all', 'Seed', 'Series A', 'Series B', 'Growth'];
  const industries = ['all', 'Artificial Intelligence', 'Climate Technology', 'Biotechnology', 'Space Technology', 'Cybersecurity', 'Energy', 'Cryptocurrency'];

  const filteredCompanies = PORTFOLIO_COMPANIES.filter((company) => {
    const stageMatch = activeStage === 'all' || company.stage === activeStage;
    const industryMatch = activeIndustry === 'all' || company.industry === activeIndustry;
    return stageMatch && industryMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="w-full text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Header */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Active Deployments</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Spark <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Portfolios</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          We invest in companies characterized by fundamental scientific originality. From programmable genomics to fusion baseload, explore our active structural positions.
        </p>
      </div>

      {/* Filter Controllers */}
      <div id="portfolio-filters" className="flex flex-col gap-5 border-y border-white/5 py-8 mb-12">
        {/* Stage Filter Row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 w-24">Stage:</span>
          {stages.map((stage) => (
            <button
              id={`filter-stage-${stage.toLowerCase()}`}
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`text-xs font-mono font-medium tracking-wide px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                activeStage === stage
                  ? 'bg-gold-500 border-gold-500 text-black'
                  : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {stage === 'all' ? 'All Stages' : stage}
            </button>
          ))}
        </div>

        {/* Industry Filter Row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 w-24">Industry:</span>
          {industries.map((industry) => (
            <button
              id={`filter-industry-${industry.toLowerCase().replace(/\s+/g, '-')}`}
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`text-xs font-mono font-medium tracking-wide px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                activeIndustry === industry
                  ? 'bg-gold-500 border-gold-500 text-black'
                  : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolios Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          id="portfolio-grid"
          key={`${activeStage}-${activeIndustry}`}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCompanies.map((company) => (
            <motion.div
              id={`portfolio-card-${company.id}`}
              key={company.id}
              variants={cardVariants}
              onClick={() => setSelectedCompany(company)}
              className="glass-panel rounded-2xl border border-white/5 overflow-hidden group hover:border-gold-500/20 glow-hover flex flex-col justify-between cursor-pointer min-h-[480px] h-full"
            >
              {/* Cover Image & Stage Label */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={company.coverImage}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                
                {/* Stage Badge */}
                <span className="absolute top-4 right-4 bg-black/60 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-gold-300 uppercase tracking-widest">
                  {company.stage}
                </span>

                {/* Industry Indicator */}
                <span className="absolute bottom-4 left-6 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  {company.industry}
                </span>
              </div>

              {/* Main Contents */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white tracking-wide group-hover:text-gold-300 transition-colors mb-3">
                    {company.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                    {company.description}
                  </p>
                </div>

                {/* Mini Stats Matrix */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-white/5 pt-5 mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Strategic Metric</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans">{company.stats.growth}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Scale Factor</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans">{company.stats.employees}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Financing Stage</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans">{company.stats.funding}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Planetary Impact</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans">{company.stats.impact}</span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 bg-white/1 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gold-400 group-hover:bg-gold-950/5 transition-colors">
                <span>View Executive Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results Fallback */}
      {filteredCompanies.length === 0 && (
        <div className="text-center py-20 flex flex-col items-center gap-4">
          <Layers className="w-12 h-12 text-zinc-700 animate-pulse" />
          <h3 className="text-lg font-display font-medium text-zinc-400">No active allocations matching criteria</h3>
          <p className="text-xs text-zinc-600 font-sans max-w-sm">
            Try resetting your stage or industry filters to explore all deep-tech investments.
          </p>
        </div>
      )}

      {/* Editorial Web3 Case Studies Section */}
      <div id="web3-case-studies" className="mt-28 pt-16 border-t border-white/5 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Sovereign Frontiers
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-light text-white leading-tight">
              Sovereign <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Web3 &amp; DeFi</span> Case Studies
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
              An analytical overview of Spark Capital's advanced cryptographic allocations, mapping real-world operational challenges to mathematically secure decentralized solutions.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">ALLOCATION SCALE</span>
            <span className="text-xl font-display font-semibold text-white mt-1 block">$150M Committed</span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {cryptoCaseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-[#070707] border border-white/5 rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col gap-6 hover:border-gold-500/10 transition-all duration-500"
            >
              {/* Top Row: Meta & Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/5 pb-6">
                <div className="flex items-start gap-4">
                  {/* Huge Number */}
                  <span className="text-5xl md:text-6xl font-display font-extralight text-gold-500/10 leading-none">
                    {study.num}
                  </span>
                  <div className="flex flex-col gap-1.5 w-full">
                    <span className="text-[9px] font-mono text-gold-400 tracking-widest uppercase block">
                      {study.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-semibold text-white tracking-wide">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="text-[10px] font-mono text-zinc-500">
                        {study.allocation}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        study.status === 'Live Network' 
                          ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400'
                          : study.status === 'Pilot Stage'
                          ? 'bg-amber-500/5 border-amber-500/20 text-amber-400'
                          : 'bg-blue-500/5 border-blue-500/20 text-blue-400'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0 self-start md:self-auto">
                  {study.icon}
                </div>
              </div>

              {/* Core Mechanics Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Text blocks */}
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">The Operational Challenge</span>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-gold-400 uppercase tracking-wider">Web3 Cryptographic Execution</span>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {study.execution}
                    </p>
                  </div>

                  {/* Deep-Dive Toggle Button */}
                  <button
                    onClick={() => setExpandedCaseId(expandedCaseId === study.id ? null : study.id)}
                    className="self-start mt-2 flex items-center gap-2 text-[11px] font-mono text-gold-400 hover:text-gold-300 transition-colors cursor-pointer"
                  >
                    {expandedCaseId === study.id ? (
                      <>
                        <span>Hide Technical Specification</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Expand Technical Specification</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Metrics Right Side */}
                <div className="lg:col-span-4 flex flex-col gap-4 bg-white/1 p-5 rounded-xl border border-white/5 self-start w-full">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Validated Impact Metrics</span>
                  <div className="flex flex-col gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <span className="text-lg md:text-xl font-display font-bold text-white tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[9px] font-mono text-gold-400 uppercase tracking-wider mt-0.5">
                          {metric.label}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-sans mt-0.5">
                          {metric.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable Technical Deep-Dive */}
              <AnimatePresence>
                {expandedCaseId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/5 pt-6 mt-2">
                      <div className="bg-black/50 border border-white/5 rounded-xl p-5 md:p-6 font-mono text-xs text-zinc-300 flex flex-col gap-4 shadow-inner">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-3 mb-2 gap-3">
                          <span className="text-gold-400 text-[10px] tracking-wider font-semibold">
                            // CRITICAL CRYPTOGRAPHIC SPECIFICATIONS
                          </span>
                          <span className="text-[9px] bg-gold-500/10 border border-gold-500/20 text-gold-400 px-2 py-0.5 rounded-md uppercase tracking-widest">
                            Verified Protocol State
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Consensus Engine</span>
                            <p className="text-zinc-300 leading-relaxed font-mono text-left">
                              &gt; {study.deepDive.consensus}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Cryptographic Primitives</span>
                            <p className="text-zinc-300 leading-relaxed font-mono text-left">
                              &gt; {study.deepDive.cryptography}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Smart Contract Audits</span>
                            <p className="text-zinc-300 leading-relaxed font-mono text-left">
                              &gt; {study.deepDive.smartContracts}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Ledger Architecture</span>
                            <p className="text-zinc-300 leading-relaxed font-mono text-left">
                              &gt; {study.deepDive.ledgerArch}
                            </p>
                          </div>
                        </div>

                        <div className="text-[9px] text-zinc-600 border-t border-white/5 pt-3 mt-1 flex justify-between items-center">
                          <span>SYSTEM_STATE: ALIGNED_WITH_SPARK_SCIENTIFIC_MANDATE</span>
                          <span>STABILITY_INDEX: 1.0</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Overlay Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            id="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-[#0a0a0a] border border-white/10 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button
                id="close-portfolio-modal"
                onClick={() => setSelectedCompany(null)}
                className="absolute top-4 right-4 bg-black/40 text-white hover:text-gold-400 transition-colors w-8 h-8 rounded-full flex items-center justify-center border border-white/10 z-10 cursor-pointer"
              >
                &times;
              </button>

              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={selectedCompany.coverImage}
                  alt={selectedCompany.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                    {selectedCompany.industry}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white tracking-wide">
                    {selectedCompany.name}
                  </h2>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono bg-white/2 p-4 rounded-xl border border-white/5">
                  <div>
                    <span className="text-zinc-500 uppercase text-[9px]">Sourcing Year:</span>
                    <span className="text-zinc-200 block font-medium mt-0.5">{selectedCompany.founded}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase text-[9px]">Active Leader:</span>
                    <span className="text-zinc-200 block font-medium mt-0.5">{selectedCompany.ceo}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase text-[9px]">Funding Status:</span>
                    <span className="text-gold-400 block font-semibold mt-0.5">{selectedCompany.stage} Tier</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Scientific Overview</span>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                    {selectedCompany.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Validated Impact Metrics</span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-white/5 p-3 rounded-lg bg-white/1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Scale Level</span>
                      <span className="text-xs text-zinc-300 font-sans font-medium mt-1 block">{selectedCompany.stats.employees}</span>
                    </div>
                    <div className="border border-white/5 p-3 rounded-lg bg-white/1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Planetary Factor</span>
                      <span className="text-xs text-zinc-300 font-sans font-medium mt-1 block">{selectedCompany.stats.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="flex-1 py-3 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors cursor-pointer"
                  >
                    Close Sheet
                  </button>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-xs font-mono bg-gold-500 hover:bg-gold-400 text-black rounded-full font-semibold tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Inquire Co-Investment <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
