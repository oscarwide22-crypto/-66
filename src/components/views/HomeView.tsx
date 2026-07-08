import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Flame, Dna, Globe, TrendingUp, ShieldAlert, Award, Compass, Coins } from 'lucide-react';
import { STATISTICS, HERO_IMAGE } from '../../data';

interface HomeViewProps {
  onNavChange: (tab: string) => void;
}

export default function HomeView({ onNavChange }: HomeViewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const featuredSectors = [
    {
      id: 'ai-cognitive',
      name: 'Artificial Intelligence & Cognitive Systems',
      desc: 'Deep multi-modal architectures, compiler layers, and robotic physical controls.',
      icon: Cpu,
      stat: '$1.4B Invested'
    },
    {
      id: 'climate-fusion',
      name: 'Climate Infrastructure & Fusion',
      desc: 'Aneutronic fusion, grid balancing, and supercritical energy storage storage solutions.',
      icon: Flame,
      stat: '$1.2B Invested'
    },
    {
      id: 'biotech-precision',
      name: 'Molecular Biotech & RNA Editing',
      desc: 'Preclinical senescence reversal, programmable editing, and vector transfection.',
      icon: Dna,
      stat: '$850M Invested'
    },
    {
      id: 'crypto-decentralized',
      name: 'Cryptocurrency & Decentralized Ledgers',
      desc: 'Zero-knowledge scaling systems, decentralized compute markets, and sovereign digital assets.',
      icon: Coins,
      stat: '$750M Invested'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="w-full text-white pt-20"
    >
      {/* Cinematic Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12">
        {/* Background Image with elegant overlay gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Spark Capital Headquarters"
            className="w-full h-full object-cover scale-[1.02] filter brightness-[0.45] contrast-[1.1] transition-transform duration-[10s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20 z-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/40 z-1" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8 justify-center">
            
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono tracking-wider uppercase text-gold-300">
                Sovereign Frontier Technology Financing
              </span>
            </motion.div>

            {/* Cinematic Headings */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl xl:text-7xl font-display font-light tracking-tight leading-[1.05] text-white"
            >
              Investing in the <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400">
                Frontier of Truth
              </span>
            </motion.h1>

            {/* Mission Statement */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 font-sans text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed"
            >
              Spark Capital funds foundational scientific breakthroughs. We provide institutional capital and execution-level expertise to elite teams building the physical, biological, and cognitive architecture of the next century.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => onNavChange('strategy')}
                className="px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold tracking-wider transition-all duration-300 shadow-xl shadow-gold-500/10 cursor-pointer flex items-center gap-2"
              >
                Our Strategy <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavChange('contact')}
                className="px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/20 text-xs font-mono font-medium tracking-wider transition-all duration-300 cursor-pointer"
              >
                Submit Investment Deck
              </button>
            </motion.div>
          </div>

          {/* Core Mini Widget */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end">
            <motion.div
              variants={itemVariants}
              className="glass-panel p-6 rounded-2xl flex flex-col gap-4 border border-white/10"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest">Active Fund Protocol</span>
                <span className="text-[10px] font-mono text-zinc-500">Fund V</span>
              </div>
              <h3 className="text-sm font-display font-semibold text-white tracking-wide">
                Frontier Deep-Tech Capital Deployment
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Spark Capital is actively deploying Fund V, a $1.8B vehicle allocated exclusively to Series A/B investments in fusion, neuromorphic silicon, and programmable biology.
              </p>
              <div className="h-[1px] bg-white/5 my-1" />
              <button 
                onClick={() => onNavChange('portfolio')} 
                className="text-[11px] font-mono text-gold-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                Explore Active Portfolio <ArrowUpRight className="w-3 h-3" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Section */}
      <section id="philosophy" className="py-24 bg-[#070707] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Architectural Principles</span>
              <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight leading-tight">
                Aligning <span className="font-semibold text-white">Sovereign Capital</span> With Planetary Resilience.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                At Spark Capital, we do not chase consumer market fads or surface-level digital integrations. True sovereign leverage is created at the physical layer. Our investments are backed by peer-reviewed thermodynamics, biological proofs, and cryptographic constants.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                We act as a critical bridge between advanced laboratory researches and international supply chains. We collaborate with national security trusts, sovereign wealth funds, and global utilities to guarantee safe, long-term infrastructure scaling.
              </p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span className="text-xs text-zinc-300 font-mono">Peer-Reviewed Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span className="text-xs text-zinc-300 font-mono">Global Security Aligned</span>
                </div>
              </div>
            </div>

            {/* Statistics Dashboard Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {STATISTICS.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-gold-500/20 transition-all duration-300 group"
                >
                  <span className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight group-hover:text-gold-300 transition-colors duration-300 font-mono">
                    {stat.value}
                  </span>
                  <div className="mt-4 flex flex-col">
                    <span className="text-xs font-semibold text-zinc-200 font-sans">{stat.label}</span>
                    <span className="text-[10px] text-zinc-500 font-mono mt-1 leading-snug">{stat.sub}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Industries Preview Section */}
      <section id="sectors-preview" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Investment Focus</span>
              <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-white">
                Our Primary <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Frontier Sectors</span>
              </h2>
            </div>
            <button
              onClick={() => onNavChange('strategy')}
              className="text-xs font-mono font-medium tracking-wider text-gold-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 shrink-0"
            >
              See Strategic Thesis <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSectors.map((sector) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="glass-panel-light p-8 rounded-2xl border border-white/5 hover:border-gold-500/20 glow-hover transition-all duration-300 flex flex-col justify-between min-h-[250px] relative group"
                >
                  <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gold-900/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-gold-800/10 transition-colors duration-500" />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold-950/20 border border-gold-500/20 flex items-center justify-center mb-6 text-gold-400 group-hover:bg-gold-900/40 group-hover:text-gold-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white group-hover:text-gold-300 transition-colors mb-2 leading-snug">
                      {sector.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                      {sector.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono border-t border-white/5 pt-4">
                    <span className="text-zinc-500">{sector.stat}</span>
                    <span 
                      onClick={() => onNavChange('strategy')}
                      className="text-gold-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read Thesis <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global Leadership Trust CTA */}
      <section id="trust-cta" className="py-24 bg-gradient-to-b from-[#050505] to-[#030303] relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative z-10">
          <div className="w-12 h-12 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-950/20 mb-2">
            <Compass className="w-6 h-6 text-gold-400" />
          </div>
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Join Our Portfolio Networks</span>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight text-white max-w-3xl">
            We Back Founders Resolving the <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400">
              Hardest Technical Truths
            </span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl font-sans leading-relaxed">
            If you are a Ph.D. researcher, hardware pioneer, or system architect operating at the limit of deep technology, we offer the network and structural capital required to scale safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
            <button
              onClick={() => onNavChange('leadership')}
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono font-semibold tracking-wider transition-colors cursor-pointer"
            >
              Meet Investment Board
            </button>
            <button
              onClick={() => onNavChange('careers')}
              className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/20 text-xs font-mono font-medium tracking-wider transition-all cursor-pointer"
            >
              Explore Open Careers
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
