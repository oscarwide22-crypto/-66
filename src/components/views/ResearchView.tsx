import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, ArrowDownToLine, ArrowUpRight, CheckCircle2, 
  MapPin, Flame, Leaf, GraduationCap, Lock, Calendar, 
  ChevronRight, Compass, ShieldAlert, Award, FileText,
  Cpu, Network, Database, Workflow, Atom, Dna, Bot, Sun,
  Coins, Server, ShieldCheck, ChevronLeft, Activity, Layers, Check
} from 'lucide-react';
import { RESEARCH_REPORTS, ROADMAP_MILESTONES, ESG_INITIATIVES } from '../../data';
import { ResearchReport, RoadmapMilestone } from '../../types';

export default function ResearchView() {
  const [activeSubTab, setActiveSubTab] = useState<'reports' | 'roadmap' | 'esg' | 'landscapes'>('reports');
  const [selectedReport, setSelectedReport] = useState<ResearchReport | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<string>('rm-1');

  // Technology Landscapes Active States
  const [webEra, setWebEra] = useState<'web1' | 'web2' | 'web3'>('web3');
  const [activeEcosystemCategory, setActiveEcosystemCategory] = useState<string>('l1');
  const [activeAiBcCore, setActiveAiBcCore] = useState<string>('compute');
  const [activeEmergingSector, setActiveEmergingSector] = useState<string>('agents');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const esgIconMap: { [key: string]: any } = {
    Leaf: Leaf,
    GraduationCap: GraduationCap,
    Lock: Lock,
  };

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
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Spark Intellectual Portal</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Research, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Insights &amp; Vision</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          We believe that venture capital is built on physical proofs. Review our deep-tech briefings, ESG compliance registries, and interactive long-term roadmap.
        </p>
      </div>

      {/* Sub tabs controllers */}
      <div id="research-subtabs" className="flex items-center gap-3 border-b border-white/5 pb-8 mb-12 overflow-x-auto whitespace-nowrap scrollbar-none">
        <button
          id="btn-subtab-reports"
          onClick={() => setActiveSubTab('reports')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeSubTab === 'reports'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          Intelligence Briefings ({RESEARCH_REPORTS.length})
        </button>
        <button
          id="btn-subtab-roadmap"
          onClick={() => setActiveSubTab('roadmap')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeSubTab === 'roadmap'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          2026–2036 Future Vision Roadmap
        </button>
        <button
          id="btn-subtab-esg"
          onClick={() => setActiveSubTab('esg')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeSubTab === 'esg'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          Sovereign ESG Compliance
        </button>
        <button
          id="btn-subtab-landscapes"
          onClick={() => setActiveSubTab('landscapes')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeSubTab === 'landscapes'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          Technology Landscapes
        </button>
      </div>

      <AnimatePresence mode="wait">
        
        {/* SUB-VIEW: REPORTS */}
        {activeSubTab === 'reports' && (
          <motion.div
            id="subview-reports-container"
            key="reports"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {RESEARCH_REPORTS.map((report) => (
              <motion.div
                id={`report-card-${report.id}`}
                key={report.id}
                variants={itemVariants}
                onClick={() => setSelectedReport(report)}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden group hover:border-gold-500/20 glow-hover flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={report.coverImage}
                      alt={report.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    <span className="absolute top-4 left-4 bg-black/60 border border-white/5 px-3 py-1 rounded text-[9px] font-mono uppercase tracking-widest text-gold-300">
                      {report.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mb-3">
                      <span>{report.date}</span>
                      <span>&bull;</span>
                      <span>{report.readTime}</span>
                    </div>

                    <h3 className="text-base font-display font-semibold text-white tracking-wide leading-snug group-hover:text-gold-300 transition-colors mb-3">
                      {report.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-3 font-sans leading-relaxed">
                      {report.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-white/5 bg-white/1 flex items-center justify-between text-xs font-mono text-gold-400 group-hover:bg-gold-950/10 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-gold-500" />
                    Read Briefing Report
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* SUB-VIEW: INTERACTIVE ROADMAP */}
        {activeSubTab === 'roadmap' && (
          <motion.div
            id="subview-roadmap-container"
            key="roadmap"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Visual Timeline Sidebar Tracker */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
                Roadmap Navigation
              </span>
              
              <div className="flex flex-col gap-3.5 relative border-l border-white/10 pl-6 py-2">
                {ROADMAP_MILESTONES.map((milestone) => {
                  const isActive = activeMilestone === milestone.id;
                  return (
                    <button
                      id={`roadmap-btn-${milestone.id}`}
                      key={milestone.id}
                      onClick={() => setActiveMilestone(milestone.id)}
                      className="text-left group relative focus:outline-none cursor-pointer"
                    >
                      {/* Active Left Node Dot */}
                      <span className={`absolute -left-[31px] top-2 w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                        isActive 
                          ? 'bg-gold-400 border-gold-400 scale-[1.3]' 
                          : 'bg-zinc-800 border-zinc-700 group-hover:bg-gold-500'
                      }`} />

                      <div className="flex flex-col">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${
                          isActive ? 'text-gold-400' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}>
                          {milestone.phase} ({milestone.period})
                        </span>
                        <h4 className={`text-sm font-display font-semibold transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}>
                          {milestone.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Graphical representation metric */}
              <div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/1 mt-4">
                <span className="text-[9px] font-mono text-zinc-500 uppercase">Interactive Timeline Goal</span>
                <span className="text-xs text-zinc-300 font-sans block mt-1 leading-relaxed">
                  Hover or click phases to explore milestone directives spanning Fund IV and Fund V allocations out to 2036.
                </span>
              </div>
            </div>

            {/* Selected Phase Detail Pane */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {(() => {
                  const selectedData = ROADMAP_MILESTONES.find(rm => rm.id === activeMilestone) || ROADMAP_MILESTONES[0];
                  return (
                    <motion.div
                      id="selected-roadmap-detail"
                      key={activeMilestone}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="glass-panel p-8 rounded-2xl border border-white/5 relative"
                    >
                      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                            {selectedData.phase} Directives
                          </span>
                          <h3 className="text-xl font-display font-semibold text-white tracking-wide mt-1">
                            {selectedData.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/5 px-3 py-1 rounded">
                          {selectedData.period}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-8">
                        {selectedData.description}
                      </p>

                      <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-gold-400" />
                          Validated Milestones Set
                        </span>
                        
                        <div className="flex flex-col gap-3.5">
                          {selectedData.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex gap-3 items-start bg-white/1 p-3.5 rounded-xl border border-white/2 hover:border-gold-500/10 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-zinc-300 font-sans leading-relaxed">
                                {milestone}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* SUB-VIEW: ESG COMPLIANCE */}
        {activeSubTab === 'esg' && (
          <motion.div
            id="subview-esg-container"
            key="esg"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ESG_INITIATIVES.map((item) => {
                const IconComponent = esgIconMap[item.icon] || Leaf;
                return (
                  <div
                    key={item.id}
                    className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[220px] relative group hover:border-gold-500/20 glow-hover"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gold-950/20 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-900/40 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-white tracking-wide mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-4">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">Audit Impact Metric</span>
                      <span className="text-xs font-semibold text-gold-300 mt-1 font-mono">{item.metric}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sovereign ESG Statement */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 bg-[#080808]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Regulatory Governance</span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white">
                    Our Allied Integrity Framework
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Spark Capital strictly complies with EFDR Article 9 frameworks and sovereign security policies of NATO-allied regions. We execute absolute transparency across biological vectors, silicon pathways, and fusion deployments.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <button className="px-6 py-3 bg-white text-black hover:bg-zinc-200 text-xs font-mono font-semibold rounded-full flex items-center gap-1.5 transition-colors cursor-pointer">
                    Request ESG ADV Report <ArrowDownToLine className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUB-VIEW: TECHNOLOGY LANDSCAPES */}
        {activeSubTab === 'landscapes' && (
          <motion.div
            id="subview-landscapes-container"
            key="landscapes"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="flex flex-col gap-16 animate-fade-in"
          >
            {/* Visual Module 1: Web Evolution Timeline */}
            <div id="web-evolution-timeline" className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#050505]/30 flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Protocol Paradigm Shift
                  </span>
                  <h2 className="text-xl md:text-2xl font-display font-light text-white">
                    1. Web Evolution <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Timeline &amp; Topology</span>
                  </h2>
                </div>
                {/* Switchers */}
                <div className="flex items-center gap-2 bg-black/60 p-1 rounded-full border border-white/5 self-start md:self-auto">
                  {(['web1', 'web2', 'web3'] as const).map((era) => (
                    <button
                      key={era}
                      onClick={() => setWebEra(era)}
                      className={`text-[10px] font-mono uppercase px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                        webEra === era
                          ? 'bg-gold-500 text-black font-semibold'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {era === 'web1' ? 'Web1 (Read)' : era === 'web2' ? 'Web2 (Read-Write)' : 'Web3 (Sovereign)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Details Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  {webEra === 'web1' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">CORE PHILOSOPHY</span>
                        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                          Decentralized but passive. Static documents hosted on independent academic or corporate servers. Content was unidirectional, providing read-only gateways with no dynamic user input or platform interaction.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Primary Value Driver</span>
                          <span className="text-xs font-semibold text-white font-display">Information Delivery &amp; Cataloging</span>
                        </div>
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Trust Model</span>
                          <span className="text-xs font-semibold text-white font-display">Pure Protocol Layers (HTTP/SMTP)</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">KEY ENABLING TECHNOLOGIES</span>
                        <div className="flex flex-wrap gap-2">
                          {["HTTP & HTML", "FTP Servers", "SMTP Mail Protocol", "Static Portals (Netscape)"].map((tech) => (
                            <span key={tech} className="text-[10px] font-mono bg-zinc-900/50 text-zinc-400 border border-white/5 px-2.5 py-1 rounded-md">
                              &gt; {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {webEra === 'web2' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">CORE PHILOSOPHY</span>
                        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                          Interactive but heavily enclosed. Web2 enabled social networking, content creation, and real-time collaboration. However, giant cloud platforms monopolized and weaponized user profiles, data access, and Attention-Yield.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Primary Value Driver</span>
                          <span className="text-xs font-semibold text-white font-display">Ad-revenue Monetization &amp; Profile Extraction</span>
                        </div>
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Trust Model</span>
                          <span className="text-xs font-semibold text-white font-display">Centralized Intermediate Clouds (AWS/GCP)</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">KEY ENABLING TECHNOLOGIES</span>
                        <div className="flex flex-wrap gap-2">
                          {["AJAX & JSON Async Layers", "Centralized Databases (NoSQL)", "OAuth Single Sign-On", "SaaS Infrastructure"].map((tech) => (
                            <span key={tech} className="text-[10px] font-mono bg-zinc-900/50 text-zinc-400 border border-white/5 px-2.5 py-1 rounded-md">
                              &gt; {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {webEra === 'web3' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">CORE PHILOSOPHY</span>
                        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                          Sovereign, trustless, and stateful. Web3 introduces a native global state layer using decentralized ledgers. Digital assets, code execution, and private data belong strictly to the end-user rather than intermediary platforms.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Primary Value Driver</span>
                          <span className="text-xs font-semibold text-white font-display">Sovereign Asset Ownership &amp; Network Tokenomics</span>
                        </div>
                        <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                          <span className="text-[9px] font-mono text-gold-400 uppercase">Trust Model</span>
                          <span className="text-xs font-semibold text-white font-display">Decentralized Cryptographic Proof &amp; Consensus</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">KEY ENABLING TECHNOLOGIES</span>
                        <div className="flex flex-wrap gap-2">
                          {["Zero-Knowledge Rollups", "Sovereign Smart Contracts (EVM/SVM)", "Self-Sovereign Identity (DID)", "DePIN Hardware Layers"].map((tech) => (
                            <span key={tech} className="text-[10px] font-mono bg-gold-950/20 text-gold-400 border border-gold-500/20 px-2.5 py-1 rounded-md">
                              &gt; {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Interactive SVG Topology Map (5 cols) */}
                <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col gap-4 relative">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2 text-left">
                    // PLATFORM TOPOLOGY SCHEMATIC
                  </span>
                  
                  <div className="w-full h-44 bg-black/60 rounded border border-white/5 relative flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 200 120" className="w-full h-full text-zinc-600">
                      {/* Grid Background */}
                      <defs>
                        <pattern id="grid-pattern-lan" width="12" height="12" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="1" fill="#ffffff" fillOpacity="0.04" />
                        </pattern>
                      </defs>
                      <rect width="200" height="120" fill="url(#grid-pattern-lan)" />

                      {webEra === 'web1' && (
                        <>
                          <line x1="100" y1="60" x2="40" y2="30" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="100" y1="60" x2="160" y2="30" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="100" y1="60" x2="100" y2="100" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3,3" />
                          
                          <circle cx="100" cy="60" r="12" fill="#09090b" stroke="#52525b" strokeWidth="1.5" />
                          <text x="100" y="63" textAnchor="middle" fill="#71717a" fontSize="6" fontFamily="monospace">WEB_SVR</text>
                          
                          <circle cx="40" cy="30" r="7" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
                          <text x="40" y="32" textAnchor="middle" fill="#52525b" fontSize="5" fontFamily="monospace">CLI_A</text>
                          
                          <circle cx="160" cy="30" r="7" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
                          <text x="160" y="32" textAnchor="middle" fill="#52525b" fontSize="5" fontFamily="monospace">CLI_B</text>

                          <circle cx="100" cy="100" r="7" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
                          <text x="100" y="102" textAnchor="middle" fill="#52525b" fontSize="5" fontFamily="monospace">CLI_C</text>

                          <circle cx="100" cy="60" r="2.5" fill="#d4af37">
                            <animate attributeName="cx" values="100;40" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="60;30" dur="2s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="100" cy="60" r="2.5" fill="#d4af37">
                            <animate attributeName="cx" values="100;160" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="60;30" dur="2.5s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}

                      {webEra === 'web2' && (
                        <>
                          <line x1="100" y1="50" x2="40" y2="25" stroke="#3f3f46" strokeWidth="1" />
                          <line x1="100" y1="50" x2="160" y2="25" stroke="#3f3f46" strokeWidth="1" />
                          <line x1="100" y1="50" x2="100" y2="95" stroke="#3f3f46" strokeWidth="1" />
                          
                          <rect x="76" y="40" width="48" height="20" rx="3" fill="#09090b" stroke="#d4af37" strokeWidth="1.5" />
                          <text x="100" y="52" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">DATA_CLOUD</text>
                          
                          <circle cx="40" cy="25" r="8" fill="#09090b" stroke="#52525b" strokeWidth="1" />
                          <circle cx="40" cy="25" r="11" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="1,2" strokeOpacity="0.4" />
                          <text x="40" y="27" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">USER_1</text>
                          
                          <circle cx="160" cy="25" r="8" fill="#09090b" stroke="#52525b" strokeWidth="1" />
                          <circle cx="160" cy="25" r="11" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="1,2" strokeOpacity="0.4" />
                          <text x="160" y="27" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">USER_2</text>

                          <circle cx="100" cy="95" r="8" fill="#09090b" stroke="#52525b" strokeWidth="1" />
                          <circle cx="100" cy="95" r="11" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="1,2" strokeOpacity="0.4" />
                          <text x="100" y="97" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">USER_3</text>

                          <circle cx="40" cy="25" r="2" fill="#ef4444">
                            <animate attributeName="cx" values="40;100" dur="1.8s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="25;50" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="100" cy="50" r="2" fill="#22c55e">
                            <animate attributeName="cx" values="100;160" dur="2.2s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="50;25" dur="2.2s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}

                      {webEra === 'web3' && (
                        <>
                          <line x1="50" y1="30" x2="150" y2="30" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="50" y1="30" x2="100" y2="85" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="150" y1="30" x2="100" y2="85" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />
                          
                          <line x1="30" y1="20" x2="50" y2="30" stroke="#52525b" strokeWidth="0.75" />
                          <line x1="170" y1="20" x2="150" y2="30" stroke="#52525b" strokeWidth="0.75" />
                          <line x1="100" y1="105" x2="100" y2="85" stroke="#52525b" strokeWidth="0.75" />

                          <circle cx="50" cy="30" r="10" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="50" y="33" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">NODE_1</text>
                          
                          <circle cx="150" cy="30" r="10" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="150" y="33" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">NODE_2</text>

                          <circle cx="100" cy="85" r="10" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="100" y="88" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">NODE_3</text>

                          <circle cx="30" cy="20" r="4" fill="#09090b" stroke="#a1a1aa" strokeWidth="1" />
                          <circle cx="170" cy="20" r="4" fill="#09090b" stroke="#a1a1aa" strokeWidth="1" />
                          <circle cx="100" cy="105" r="4" fill="#09090b" stroke="#a1a1aa" strokeWidth="1" />

                          <circle cx="50" cy="30" r="2.5" fill="#d4af37" fillOpacity="0.8">
                            <animate attributeName="cx" values="50;150;100;50" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="cy" values="30;30;85;30" dur="4s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span>STATE_ENCLOSURE: {webEra === 'web3' ? '0.0% (TRUSTLESS)' : webEra === 'web2' ? '100% (MONOPOLY)' : '0.0% (STATIC)'}</span>
                    <span>FINALITY: {webEra === 'web3' ? 'SUB-SECOND' : 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Module 2: Web3 Ecosystem Landscape */}
            <div id="web3-ecosystem-landscape" className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#050505]/30 flex flex-col gap-8">
              <div className="flex flex-col gap-1.5 border-b border-white/5 pb-6 text-left">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5" />
                  Ecosystem Categorization
                </span>
                <h2 className="text-xl md:text-2xl font-display font-light text-white">
                  2. Web3 Ecosystem <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Landscape Matrix</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Selector List (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-2 max-h-[460px] overflow-y-auto pr-2 border-r border-white/5 text-left scrollbar-thin">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-2 block">SELECT ECOSYSTEM LAYER</span>
                  {[
                    {
                      id: 'l1',
                      name: 'Layer 1 Protocols',
                      tagline: 'Foundational Consensus & Security Budgets',
                      thesis: 'L1 networks are sovereign financial and execution layers. They dictate the ultimate security budget, gas constraints, and execution finality of all upper-tier platforms. We allocate capital to networks maximizing throughput without compromising decentralization.',
                      projects: ['Ethereum', 'Solana', 'Monad', 'Aptos'],
                      kpi: 'Transaction fee volume & TVL settlement security',
                      interopRole: 'L1 anchors cryptographically verified security blocks.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect width="160" height="100" fill="none" />
                          <rect x="20" y="35" width="120" height="30" rx="4" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="80" y="52" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">LAYER 1 LEDGER</text>
                          <path d="M80,15 L80,35 M80,65 L80,85" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                          <circle cx="80" cy="15" r="4" fill="#09090b" stroke="#52525b" />
                          <circle cx="80" cy="85" r="4" fill="#09090b" stroke="#52525b" />
                          <text x="80" y="23" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Smart Contracts</text>
                          <text x="80" y="93" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Base Consensus</text>
                        </svg>
                      )
                    },
                    {
                      id: 'l2',
                      name: 'Layer 2 Scalability',
                      tagline: 'Execution Compression & Off-Chain Rollups',
                      thesis: 'L2 networks solve execution limitations of robust L1 chains. By packing and summarizing thousands of transactions into compact cryptographic state proofs, L2s scale transactional capacity from tens of transactions to tens of thousands.',
                      projects: ['Arbitrum One', 'Base', 'Starknet', 'zkSync Era'],
                      kpi: 'Sequencer margin, gas cost reduction, active addresses',
                      interopRole: 'L2 rolls up state transitions, anchoring proofs to L1.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect width="160" height="100" fill="none" />
                          <rect x="20" y="20" width="120" height="24" rx="4" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="80" y="34" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">L2 COMPRESSION</text>
                          <path d="M80,44 L80,70" stroke="#d4af37" strokeWidth="1" />
                          <polygon points="80,70 77,66 83,66" fill="#d4af37" />
                          <rect x="20" y="70" width="120" height="20" rx="4" fill="#09090b" stroke="#52525b" />
                          <text x="80" y="82" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">L1 Settlement</text>
                        </svg>
                      )
                    },
                    {
                      id: 'defi',
                      name: 'Decentralized Finance',
                      tagline: 'Capital-Efficient Non-Custodial Liquidity',
                      thesis: 'Financial primitives executed by autonomous, mathematical code instead of centralized banks. DeFi eliminates high broker margins and enables sovereign collateral custody, continuous liquidity provisioning, and transparent borrowing markets.',
                      projects: ['Uniswap', 'Aave', 'MakerDAO', 'Curve Finance'],
                      kpi: 'Total Value Locked (TVL), capitalization efficiency',
                      interopRole: 'Liquidity settles peer-to-peer over decentralized smart routers.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="20" fill="#09090b" stroke="#52525b" />
                          <circle cx="110" cy="50" r="20" fill="#09090b" stroke="#d4af37" />
                          <text x="50" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">Pool A</text>
                          <text x="110" y="53" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">Pool B</text>
                          <path d="M70,50 L90,50" stroke="#d4af37" strokeWidth="1.25" />
                          <polygon points="90,50 86,47 86,53" fill="#d4af37" />
                          <polygon points="70,50 74,47 74,53" fill="#d4af37" />
                          <text x="80" y="44" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">Liquidity Router</text>
                        </svg>
                      )
                    },
                    {
                      id: 'rwa',
                      name: 'Real World Assets',
                      tagline: 'Bridging Physical Capital into Digital Rail Trees',
                      thesis: 'Tokenizing real-world yields (such as sovereign debt, credit facilities, and prime real estate) brings multi-trillion dollar liquidity onto transparent ledgers. This unlocks around-the-clock fractional trading and automated composability.',
                      projects: ['Ondo Finance', 'Centrifuge', 'Goldfinch', 'Backed Finance'],
                      kpi: 'Tokenized AUM, yield percentage, compliance coverage',
                      interopRole: 'Smart smart-contracts issue collateral claims to digital lenders.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect x="20" y="25" width="45" height="45" rx="3" fill="#09090b" stroke="#52525b" />
                          <text x="42" y="45" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Physical</text>
                          <text x="42" y="55" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Treasury</text>
                          <path d="M65,47 L95,47" stroke="#d4af37" strokeWidth="1.25" />
                          <polygon points="95,47 91,44 91,50" fill="#d4af37" />
                          <rect x="95" y="25" width="45" height="45" rx="3" fill="#09090b" stroke="#d4af37" />
                          <text x="117" y="45" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">On-Chain</text>
                          <text x="117" y="55" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">RWA Token</text>
                        </svg>
                      )
                    },
                    {
                      id: 'stablecoins',
                      name: 'Stablecoins & Yield',
                      tagline: 'Foundational Liquidity & Collateral Baskets',
                      thesis: 'Stable digital assets constitute the financial plumbing of public chains. We target capital-preservation designs and over-collateralized models that resist hyper-inflationary events while securing instant, cross-border payment finality.',
                      projects: ['USDC (Circle)', 'LUSD (Liquity)', 'USDT (Tether)', 'USDe (Ethena)'],
                      kpi: 'Sovereign backing, peg stability index, mint/burn volumes',
                      interopRole: 'Sovereign digital dollars anchor global cross-border payments.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect x="15" y="35" width="50" height="30" rx="3" fill="#09090b" stroke="#52525b" />
                          <text x="40" y="52" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">Pegged Basket</text>
                          <path d="M65,50 L95,50" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="3,3" />
                          <rect x="95" y="35" width="50" height="30" rx="3" fill="#09090b" stroke="#d4af37" />
                          <text x="120" y="52" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">$1.00 USD Stable</text>
                        </svg>
                      )
                    },
                    {
                      id: 'infra',
                      name: 'Infrastructure & Oracles',
                      tagline: 'Middleware Bridges & Decentralized Security',
                      thesis: 'Bridges, secure oracles, and restaking layers are the structural mortar of Web3. Oracles safely pull high-frequency real-world financial signals, while restaking mechanisms dynamically distribute security budgets to active validation services.',
                      projects: ['Chainlink', 'EigenLayer', 'Pyth Network', 'Axelar'],
                      kpi: 'Secured TVL, data update frequency, slashing security',
                      interopRole: 'Provides robust off-chain data feeds and validates bridge state.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <circle cx="40" cy="50" r="12" fill="#09090b" stroke="#52525b" />
                          <text x="40" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Offchain</text>
                          <path d="M52,50 L108,50" stroke="#d4af37" strokeWidth="1.25" />
                          <rect x="64" y="41" width="32" height="18" rx="2" fill="#09090b" stroke="#d4af37" />
                          <text x="80" y="52" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">ORACLE</text>
                          <circle cx="120" cy="50" r="12" fill="#09090b" stroke="#52525b" />
                          <text x="120" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Onchain</text>
                        </svg>
                      )
                    },
                    {
                      id: 'wallets',
                      name: 'Wallets & Access Gates',
                      tagline: 'Sovereign Account Abstraction & Key Custody',
                      thesis: 'User experience is the critical onboarding filter. We invest in smart-contract wallets and embedded account-abstraction infrastructures that allow mass login via traditional social portals while retaining hardware-level user custody.',
                      projects: ['Safe', 'MetaMask', 'Phantom', 'Privy'],
                      kpi: 'Monthly active account creations, smart contract wallet usage',
                      interopRole: 'Access gate and primary cryptographic key-signing client.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect x="40" y="30" width="80" height="40" rx="5" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="80" y="48" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">SMART WALLET</text>
                          <circle cx="80" cy="60" r="4" fill="#d4af37" />
                          <path d="M40,50 L20,50 M120,50 L140,50" stroke="#52525b" strokeWidth="1" strokeDasharray="2,2" />
                        </svg>
                      )
                    },
                    {
                      id: 'identity',
                      name: 'Decentralized Identity',
                      tagline: 'Sovereign Sybil Resistance & Human Validation',
                      thesis: 'In an era dominated by AI agent automation, cryptographically verifiable human proof-of-personhood is essential. We back zero-knowledge identity protocols that secure credit scores, academic achievements, and voting rights without exposing raw private data.',
                      projects: ['ENS Domain Registry', 'Worldcoin', 'Gitcoin Passport', 'Veramo'],
                      kpi: 'Verified identity credentials issued, sybil attack block rate',
                      interopRole: 'Verifies user authenticity and assigns sovereign metadata profiles.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <circle cx="80" cy="40" r="15" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <path d="M72,48 Q80,42 88,48" stroke="#d4af37" strokeWidth="1" fill="none" />
                          <circle cx="80" cy="35" r="4" fill="#d4af37" />
                          <text x="80" y="70" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">ZK HUMAN PROOF</text>
                        </svg>
                      )
                    },
                    {
                      id: 'ai',
                      name: 'AI & Decentralized Compute',
                      tagline: 'Democratizing Silicon Power & Machine Intelligence',
                      thesis: 'Artificial intelligence training requires astronomical hardware capacity. Decentralized computation networks link globally idle GPU nodes, offering open-market access to machine learning training loops that bypass big tech monopolistic chokeholds.',
                      projects: ['Bittensor', 'Render Network', 'Akash Network', 'gensyn'],
                      kpi: 'Active GPU node cluster count, computation cost per petaflop',
                      interopRole: 'Provides distributed computation resources for neural models.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <rect x="25" y="30" width="30" height="40" rx="3" fill="#09090b" stroke="#52525b" />
                          <text x="40" y="52" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">GPU Node</text>
                          <path d="M55,50 L105,50" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="3,3" />
                          <circle cx="115" cy="50" r="12" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="115" y="53" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">AI Core</text>
                        </svg>
                      )
                    },
                    {
                      id: 'gaming',
                      name: 'Sovereign Gaming',
                      tagline: 'Permanent Player Ownership & Game Logic Assets',
                      thesis: 'Traditional game platforms lock player economies and assets into enclosed server databases. Sovereign gaming deploys game engines, item parameters, and trade dynamics directly onto high-integrity blockchains, empowering players with genuine assets.',
                      projects: ['Illuvium', 'Star Atlas', 'Immutable', 'Parallel'],
                      kpi: 'Daily active player volumes, on-chain asset volume traded',
                      interopRole: 'Asset parameters are securely verified on transparent state rails.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <circle cx="45" cy="50" r="16" fill="#09090b" stroke="#52525b" />
                          <text x="45" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Game State</text>
                          <path d="M61,50 L99,50" stroke="#d4af37" strokeWidth="1.25" />
                          <rect x="99" y="35" width="45" height="30" rx="3" fill="#09090b" stroke="#d4af37" />
                          <text x="121" y="52" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">User Asset</text>
                        </svg>
                      )
                    },
                    {
                      id: 'social',
                      name: 'Decentralized Social',
                      tagline: 'Sovereign Audience Control & Graph Portability',
                      thesis: 'Attention merchants control search feeds and limit client reach. Decentralized social protocols allow content creators to store and port their follower connection graphs across separate user applications, ending single-platform audience hostage loops.',
                      projects: ['Farcaster', 'Lens Protocol', 'Bluesky', 'CyberConnect'],
                      kpi: 'Daily cast/post count, profile registration volume, interop apps',
                      interopRole: 'Stores dynamic follower connection maps on immutable databases.',
                      svgFlow: (
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <circle cx="40" cy="50" r="10" fill="#09090b" stroke="#52525b" />
                          <circle cx="120" cy="50" r="10" fill="#09090b" stroke="#52525b" />
                          <circle cx="80" cy="50" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                          <text x="80" y="53" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">SVRN GRAPH</text>
                          <path d="M50,50 L66,50 M94,50 L110,50" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                        </svg>
                      )
                    }
                  ].map((cat) => {
                    const isSelected = activeEcosystemCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveEcosystemCategory(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between group ${
                          isSelected
                            ? 'bg-gold-500/10 border-gold-500/30 text-white font-semibold'
                            : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/2'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold font-display">{cat.name}</span>
                          <span className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-400 leading-none mt-1">
                            {cat.projects[0]}, {cat.projects[1]}...
                          </span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? 'text-gold-400 translate-x-0.5' : 'text-zinc-600 group-hover:text-zinc-400'
                        }`} />
                      </button>
                    );
                  })}
                </div>

                {/* Analytical Card Panel (8 cols) */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const list = [
                        {
                          id: 'l1',
                          name: 'Layer 1 Protocols',
                          tagline: 'Foundational Consensus & Security Budgets',
                          thesis: 'L1 networks are sovereign financial and execution layers. They dictate the ultimate security budget, gas constraints, and execution finality of all upper-tier platforms. We allocate capital to networks maximizing throughput without compromising decentralization.',
                          projects: ['Ethereum', 'Solana', 'Monad', 'Aptos'],
                          kpi: 'Transaction fee volume & TVL settlement security',
                          interopRole: 'L1 anchors cryptographically verified security blocks.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect width="160" height="100" fill="none" />
                              <rect x="20" y="35" width="120" height="30" rx="4" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <text x="80" y="52" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">LAYER 1 LEDGER</text>
                              <path d="M80,15 L80,35 M80,65 L80,85" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                              <circle cx="80" cy="15" r="4" fill="#09090b" stroke="#52525b" />
                              <circle cx="80" cy="85" r="4" fill="#09090b" stroke="#52525b" />
                              <text x="80" y="23" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Smart Contracts</text>
                              <text x="80" y="93" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Base Consensus</text>
                            </svg>
                          )
                        },
                        {
                          id: 'l2',
                          name: 'Layer 2 Scalability',
                          tagline: 'Execution Compression & Off-Chain Rollups',
                          thesis: 'L2 networks solve execution limitations of robust L1 chains. By packing and summarizing thousands of transactions into compact cryptographic state proofs, L2s scale transactional capacity from tens of transactions to tens of thousands.',
                          projects: ['Arbitrum One', 'Base', 'Starknet', 'zkSync Era'],
                          kpi: 'Sequencer margin, gas cost reduction, active addresses',
                          interopRole: 'L2 rolls up state transitions, anchoring proofs to L1.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect width="160" height="100" fill="none" />
                              <rect x="20" y="20" width="120" height="24" rx="4" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <text x="80" y="34" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">L2 COMPRESSION</text>
                              <path d="M80,44 L80,70" stroke="#d4af37" strokeWidth="1" />
                              <polygon points="80,70 77,66 83,66" fill="#d4af37" />
                              <rect x="20" y="70" width="120" height="20" rx="4" fill="#09090b" stroke="#52525b" />
                              <text x="80" y="82" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">L1 Settlement</text>
                            </svg>
                          )
                        },
                        {
                          id: 'defi',
                          name: 'Decentralized Finance',
                          tagline: 'Capital-Efficient Non-Custodial Liquidity',
                          thesis: 'Financial primitives executed by autonomous, mathematical code instead of centralized banks. DeFi eliminates high broker margins and enables sovereign collateral custody, continuous liquidity provisioning, and transparent borrowing markets.',
                          projects: ['Uniswap', 'Aave', 'MakerDAO', 'Curve Finance'],
                          kpi: 'Total Value Locked (TVL), capitalization efficiency',
                          interopRole: 'Liquidity settles peer-to-peer over decentralized smart routers.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <circle cx="50" cy="50" r="20" fill="#09090b" stroke="#52525b" />
                              <circle cx="110" cy="50" r="20" fill="#09090b" stroke="#d4af37" />
                              <text x="50" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">Pool A</text>
                              <text x="110" y="53" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">Pool B</text>
                              <path d="M70,50 L90,50" stroke="#d4af37" strokeWidth="1.25" />
                              <polygon points="90,50 86,47 86,53" fill="#d4af37" />
                              <polygon points="70,50 74,47 74,53" fill="#d4af37" />
                              <text x="80" y="44" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">Liquidity Router</text>
                            </svg>
                          )
                        },
                        {
                          id: 'rwa',
                          name: 'Real World Assets',
                          tagline: 'Bridging Physical Capital into Digital Rail Trees',
                          thesis: 'Tokenizing real-world yields (such as sovereign debt, credit facilities, and prime real estate) brings multi-trillion dollar liquidity onto transparent ledgers. This unlocks around-the-clock fractional trading and automated composability.',
                          projects: ['Ondo Finance', 'Centrifuge', 'Goldfinch', 'Backed Finance'],
                          kpi: 'Tokenized AUM, yield percentage, compliance coverage',
                          interopRole: 'Smart smart-contracts issue collateral claims to digital lenders.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect x="20" y="25" width="45" height="45" rx="3" fill="#09090b" stroke="#52525b" />
                              <text x="42" y="45" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Physical</text>
                              <text x="42" y="55" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Treasury</text>
                              <path d="M65,47 L95,47" stroke="#d4af37" strokeWidth="1.25" />
                              <polygon points="95,47 91,44 91,50" fill="#d4af37" />
                              <rect x="95" y="25" width="45" height="45" rx="3" fill="#09090b" stroke="#d4af37" />
                              <text x="117" y="45" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">On-Chain</text>
                              <text x="117" y="55" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">RWA Token</text>
                            </svg>
                          )
                        },
                        {
                          id: 'stablecoins',
                          name: 'Stablecoins & Yield',
                          tagline: 'Foundational Liquidity & Collateral Baskets',
                          thesis: 'Stable digital assets constitute the financial plumbing of public chains. We target capital-preservation designs and over-collateralized models that resist hyper-inflationary events while securing instant, cross-border payment finality.',
                          projects: ['USDC (Circle)', 'LUSD (Liquity)', 'USDT (Tether)', 'USDe (Ethena)'],
                          kpi: 'Sovereign backing, peg stability index, mint/burn volumes',
                          interopRole: 'Sovereign digital dollars anchor global cross-border payments.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect x="15" y="35" width="50" height="30" rx="3" fill="#09090b" stroke="#52525b" />
                              <text x="40" y="52" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">Pegged Basket</text>
                              <path d="M65,50 L95,50" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="3,3" />
                              <rect x="95" y="35" width="50" height="30" rx="3" fill="#09090b" stroke="#d4af37" />
                              <text x="120" y="52" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">$1.00 USD Stable</text>
                            </svg>
                          )
                        },
                        {
                          id: 'infra',
                          name: 'Infrastructure & Oracles',
                          tagline: 'Middleware Bridges & Decentralized Security',
                          thesis: 'Bridges, secure oracles, and restaking layers are the structural mortar of Web3. Oracles safely pull high-frequency real-world financial signals, while restaking mechanisms dynamically distribute security budgets to active validation services.',
                          projects: ['Chainlink', 'EigenLayer', 'Pyth Network', 'Axelar'],
                          kpi: 'Secured TVL, data update frequency, slashing security',
                          interopRole: 'Provides robust off-chain data feeds and validates bridge state.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <circle cx="40" cy="50" r="12" fill="#09090b" stroke="#52525b" />
                              <text x="40" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Offchain</text>
                              <path d="M52,50 L108,50" stroke="#d4af37" strokeWidth="1.25" />
                              <rect x="64" y="41" width="32" height="18" rx="2" fill="#09090b" stroke="#d4af37" />
                              <text x="80" y="52" textAnchor="middle" fill="#d4af37" fontSize="5" fontFamily="monospace">ORACLE</text>
                              <circle cx="120" cy="50" r="12" fill="#09090b" stroke="#52525b" />
                              <text x="120" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Onchain</text>
                            </svg>
                          )
                        },
                        {
                          id: 'wallets',
                          name: 'Wallets & Access Gates',
                          tagline: 'Sovereign Account Abstraction & Key Custody',
                          thesis: 'User experience is the critical onboarding filter. We invest in smart-contract wallets and embedded account-abstraction infrastructures that allow mass login via traditional social portals while retaining hardware-level user custody.',
                          projects: ['Safe', 'MetaMask', 'Phantom', 'Privy'],
                          kpi: 'Monthly active account creations, smart contract wallet usage',
                          interopRole: 'Access gate and primary cryptographic key-signing client.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect x="40" y="30" width="80" height="40" rx="5" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <text x="80" y="48" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">SMART WALLET</text>
                              <circle cx="80" cy="60" r="4" fill="#d4af37" />
                              <path d="M40,50 L20,50 M120,50 L140,50" stroke="#52525b" strokeWidth="1" strokeDasharray="2,2" />
                            </svg>
                          )
                        },
                        {
                          id: 'identity',
                          name: 'Decentralized Identity',
                          tagline: 'Sovereign Sybil Resistance & Human Validation',
                          thesis: 'In an era dominated by AI agent automation, cryptographically verifiable human proof-of-personhood is essential. We back zero-knowledge identity protocols that secure credit scores, academic achievements, and voting rights without exposing raw private data.',
                          projects: ['ENS Domain Registry', 'Worldcoin', 'Gitcoin Passport', 'Veramo'],
                          kpi: 'Verified identity credentials issued, sybil attack block rate',
                          interopRole: 'Verifies user authenticity and assigns sovereign metadata profiles.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <circle cx="80" cy="40" r="15" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <path d="M72,48 Q80,42 88,48" stroke="#d4af37" strokeWidth="1" fill="none" />
                              <circle cx="80" cy="35" r="4" fill="#d4af37" />
                              <text x="80" y="70" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">ZK HUMAN PROOF</text>
                            </svg>
                          )
                        },
                        {
                          id: 'ai',
                          name: 'AI & Decentralized Compute',
                          tagline: 'Democratizing Silicon Power & Machine Intelligence',
                          thesis: 'Artificial intelligence training requires astronomical hardware capacity. Decentralized computation networks link globally idle GPU nodes, offering open-market access to machine learning training loops that bypass big tech monopolistic chokeholds.',
                          projects: ['Bittensor', 'Render Network', 'Akash Network', 'gensyn'],
                          kpi: 'Active GPU node cluster count, computation cost per petaflop',
                          interopRole: 'Provides distributed computation resources for neural models.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <rect x="25" y="30" width="30" height="40" rx="3" fill="#09090b" stroke="#52525b" />
                              <text x="40" y="52" textAnchor="middle" fill="#a1a1aa" fontSize="6" fontFamily="monospace">GPU Node</text>
                              <path d="M55,50 L105,50" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="3,3" />
                              <circle cx="115" cy="50" r="12" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <text x="115" y="53" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="monospace">AI Core</text>
                            </svg>
                          )
                        },
                        {
                          id: 'gaming',
                          name: 'Sovereign Gaming',
                          tagline: 'Permanent Player Ownership & Game Logic Assets',
                          thesis: 'Traditional game platforms lock player economies and assets into enclosed server databases. Sovereign gaming deploys game engines, item parameters, and trade dynamics directly onto high-integrity blockchains, empowering players with genuine assets.',
                          projects: ['Illuvium', 'Star Atlas', 'Immutable', 'Parallel'],
                          kpi: 'Daily active player volumes, on-chain asset volume traded',
                          interopRole: 'Asset parameters are securely verified on transparent state rails.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <circle cx="45" cy="50" r="16" fill="#09090b" stroke="#52525b" />
                              <text x="45" y="53" textAnchor="middle" fill="#a1a1aa" fontSize="5" fontFamily="monospace">Game State</text>
                              <path d="M61,50 L99,50" stroke="#d4af37" strokeWidth="1.25" />
                              <rect x="99" y="35" width="45" height="30" rx="3" fill="#09090b" stroke="#d4af37" />
                              <text x="121" y="52" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">User Asset</text>
                            </svg>
                          )
                        },
                        {
                          id: 'social',
                          name: 'Decentralized Social',
                          tagline: 'Sovereign Audience Control & Graph Portability',
                          thesis: 'Attention merchants control search feeds and limit client reach. Decentralized social protocols allow content creators to store and port their follower connection graphs across separate user applications, ending single-platform audience hostage loops.',
                          projects: ['Farcaster', 'Lens Protocol', 'Bluesky', 'CyberConnect'],
                          kpi: 'Daily cast/post count, profile registration volume, interop apps',
                          interopRole: 'Stores dynamic follower connection maps on immutable databases.',
                          svgFlow: (
                            <svg viewBox="0 0 160 100" className="w-full h-full">
                              <circle cx="40" cy="50" r="10" fill="#09090b" stroke="#52525b" />
                              <circle cx="120" cy="50" r="10" fill="#09090b" stroke="#52525b" />
                              <circle cx="80" cy="50" r="14" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                              <text x="80" y="53" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">SVRN GRAPH</text>
                              <path d="M50,50 L66,50 M94,50 L110,50" stroke="#d4af37" strokeWidth="1" strokeDasharray="2,2" />
                            </svg>
                          )
                        }
                      ];
                      const selected = list.find((c) => c.id === activeEcosystemCategory) || list[0];
                      return (
                        <motion.div
                          key={selected.id}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-6 text-left"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">{selected.tagline}</span>
                            <h3 className="text-lg font-display font-bold text-white">{selected.name}</h3>
                          </div>

                          <div className="bg-black/60 border border-white/5 rounded-xl p-5 flex flex-col gap-4">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">// VENTURE CAPITAL ALLOCATION THESIS</span>
                            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                              {selected.thesis}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            {/* Representative Protocols */}
                            <div className="flex flex-col gap-3">
                              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">REPRESENTATIVE PROTOCOLS</span>
                              <div className="flex flex-col gap-2">
                                {selected.projects.map((proj, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-2.5 bg-white/1 px-3 py-2 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                                    <span className="text-xs font-semibold text-zinc-200 font-display">{proj}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Live Flow Diagram */}
                            <div className="bg-[#050505] border border-white/5 rounded-xl p-4 flex flex-col gap-2 h-44 items-center justify-center relative overflow-hidden">
                              <span className="text-[8px] font-mono text-zinc-500 uppercase absolute top-2.5 left-3">// GRAPHIC state flow</span>
                              <div className="w-full h-full flex items-center justify-center">
                                {selected.svgFlow}
                              </div>
                            </div>
                          </div>

                          {/* Technical Metrics Bottom Banner */}
                          <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] font-mono text-zinc-500">
                            <span>PRIMARY KPI: <span className="text-gold-400 font-semibold">{selected.kpi}</span></span>
                            <span>MAPPING: <span className="text-zinc-400">{selected.interopRole}</span></span>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Visual Module 3: AI x Blockchain Technology Landscape */}
            <div id="ai-blockchain-landscape" className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#050505]/30 flex flex-col gap-8">
              <div className="flex flex-col gap-1.5 border-b border-white/5 pb-6 text-left">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  Sovereign Computations &amp; Models
                </span>
                <h2 className="text-xl md:text-2xl font-display font-light text-white">
                  3. AI × Blockchain <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Technology Landscape</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Details Left Card (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-lg border border-white/5 self-start">
                    {[
                      { id: 'compute', label: 'Compute' },
                      { id: 'data', label: 'Data Provenance' },
                      { id: 'agents', label: 'Smart Agents' },
                      { id: 'incentives', label: 'Incentives' }
                    ].map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveAiBcCore(node.id)}
                        className={`text-[9px] font-mono uppercase px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                          activeAiBcCore === node.id
                            ? 'bg-gold-500/10 border border-gold-500/20 text-gold-400'
                            : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                        }`}
                      >
                        {node.label}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {(() => {
                      const list = [
                        {
                          id: 'compute',
                          name: 'Decentralized Compute (Hardware Layer)',
                          description: 'Shattering hyperscaler cloud monopolies by orchestrating idle globally-distributed GPU hardware. High-performance ML training is divided into decentralized micro-tasks, backed by cryptographic execution guarantees.',
                          focus: 'FHE (Fully Homomorphic Encryption) during model training, distributed orchestration layers, and verifiable hardware proofs.',
                          projects: ['Bittensor (Decentralized Intelligence)', 'Render Network (GPU Rendering Grid)', 'Akash Network (Decentralized Cloud)'],
                          kpi: 'Computation cost per Petaflop vs central hyperscalers',
                          designParadigm: 'Decentralized Proof-of-Useful-Work (PoUW)'
                        },
                        {
                          id: 'data',
                          name: 'Decentralized Data & Provenance (Privacy Layer)',
                          description: 'Ensuring AI models are trained on authentic, un-manipulated data. Smart contracts trace the origin, license, and authenticity of training sets, protecting content creators against copyright theft.',
                          focus: 'Zero-knowledge dataset validation, cryptographic watermarking, and IP tokenization pools.',
                          projects: ['FHE databases', 'Zero-knowledge data provenance ledgers', 'Decentralized dataset storage'],
                          kpi: 'Verifiable dataset authenticity audit success rate',
                          designParadigm: 'Zero-Knowledge Cryptographic Watermarks'
                        },
                        {
                          id: 'agents',
                          name: 'Sovereign Smart Agents (Autonomous Layer)',
                          description: 'Autonomous AI entities with dedicated on-chain smart accounts. These agents possess their own capital, negotiate micro-contracts, interact with DeFi liquidity pools, and execute transactions without human intervention.',
                          focus: 'Multi-agent coordinator protocols, embedded MPC wallet SDKs for non-human entities, and autonomous treasury frameworks.',
                          projects: ['Agentic treasuries', 'Auto-yield optimization multi-agents', 'Sovereign machine-to-machine wallets'],
                          kpi: 'Total Agentic transaction volume & autonomous capital allocation',
                          designParadigm: 'Smart-Contract Governed Non-Custodial Agent Wallets'
                        },
                        {
                          id: 'incentives',
                          name: 'Tokenized Incentive Economies (Incentive Layer)',
                          description: 'Aligning human and machine incentives at global scale. Rewarding distributed developers for refining model weights, validating data pipelines, and submitting reinforcement learning feedback (RLHF).',
                          focus: 'Staking-based model verification (e.g., Bittensor subnets), automated inference micropayment channels, and decentralized model marketplaces.',
                          projects: ['Bittensor Subnets', 'Distributed RLHF micro-reward rails', 'Inference marketplaces'],
                          kpi: 'Developer reward distributions & open-source ML optimization rate',
                          designParadigm: 'Continuous Stake-Weighted Inflation Incentives'
                        }
                      ];
                      const selected = list.find((n) => n.id === activeAiBcCore) || list[0];
                      return (
                        <motion.div
                          key={selected.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-5"
                        >
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">// SELECTED INTEGRATION VECTOR</span>
                            <h3 className="text-lg font-display font-bold text-white">{selected.name}</h3>
                          </div>

                          <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                            {selected.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                              <span className="text-[9px] font-mono text-gold-400 uppercase">Core Design Paradigm</span>
                              <span className="text-xs font-semibold text-white font-display">{selected.designParadigm}</span>
                            </div>
                            <div className="bg-white/1 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                              <span className="text-[9px] font-mono text-gold-400 uppercase">Primary KPI Metric</span>
                              <span className="text-xs font-semibold text-white font-display">{selected.kpi}</span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">CRITICAL RESEARCH &amp; INFRASTRUCTURE DIRECTIVES</span>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans bg-black/40 p-3 rounded-lg border border-white/5">
                              {selected.focus}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">INNOVATIVE CASE ALLOCATIONS</span>
                            <div className="flex flex-wrap gap-2">
                              {selected.projects.map((proj) => (
                                <span key={proj} className="text-[10px] font-mono bg-gold-500/5 text-gold-400/90 border border-gold-500/15 px-2.5 py-1 rounded-md">
                                  {proj}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>

                {/* SVG Concentric Map (5 cols) */}
                <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col gap-4 relative">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-white/5 pb-2 text-left">
                    // AI x BLOCKCHAIN RADAR CONVERGENCE
                  </span>
                  
                  <div className="w-full h-56 bg-black/60 rounded border border-white/5 relative flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-zinc-600">
                      {/* Grid background */}
                      <rect width="200" height="200" fill="url(#grid-pattern-lan)" />

                      {/* Concentric rings */}
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#27272a" strokeWidth="0.75" />
                      <circle cx="100" cy="100" r="55" fill="none" stroke="#27272a" strokeWidth="0.75" />
                      <circle cx="100" cy="100" r="30" fill="none" stroke="#27272a" strokeWidth="0.75" />

                      {/* Radar lines */}
                      <line x1="100" y1="20" x2="100" y2="180" stroke="#27272a" strokeWidth="0.5" strokeDasharray="1,2" />
                      <line x1="20" y1="100" x2="180" y2="100" stroke="#27272a" strokeWidth="0.5" strokeDasharray="1,2" />

                      {/* Highlight rings based on active state */}
                      {activeAiBcCore === 'compute' && (
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="4,4" />
                      )}
                      {activeAiBcCore === 'data' && (
                        <circle cx="100" cy="100" r="55" fill="none" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="4,4" />
                      )}
                      {activeAiBcCore === 'agents' && (
                        <circle cx="100" cy="100" r="30" fill="none" stroke="#d4af37" strokeWidth="1.25" strokeDasharray="4,4" />
                      )}
                      {activeAiBcCore === 'incentives' && (
                        <>
                          <line x1="100" y1="20" x2="100" y2="180" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="3,1" />
                          <line x1="20" y1="100" x2="180" y2="100" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="3,1" />
                        </>
                      )}

                      {/* Core Node: AI x Blockchain convergence */}
                      <circle cx="100" cy="100" r="10" fill="#09090b" stroke="#d4af37" strokeWidth="1.5" />
                      <circle cx="100" cy="100" r="6" fill="#d4af37" fillOpacity="0.1">
                        <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="100" cy="100" r="2.5" fill="#d4af37" />

                      {/* Orbiting nodes representing layers */}
                      {/* Compute node on outer ring */}
                      <g opacity={activeAiBcCore === 'compute' ? 1 : 0.4} className="cursor-pointer" onClick={() => setActiveAiBcCore('compute')}>
                        <circle cx="100" cy="20" r="6" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                        <circle cx="100" cy="20" r="2" fill="#d4af37" />
                        <text x="100" y="12" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">COMPUTE_HARDWARE</text>
                      </g>

                      {/* Data provenance on middle ring */}
                      <g opacity={activeAiBcCore === 'data' ? 1 : 0.4} className="cursor-pointer" onClick={() => setActiveAiBcCore('data')}>
                        <circle cx="155" cy="100" r="6" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                        <circle cx="155" cy="100" r="2" fill="#d4af37" />
                        <text x="155" y="92" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">DATA_PROVENANCE</text>
                      </g>

                      {/* Smart Agent on inner ring */}
                      <g opacity={activeAiBcCore === 'agents' ? 1 : 0.4} className="cursor-pointer" onClick={() => setActiveAiBcCore('agents')}>
                        <circle cx="100" cy="130" r="6" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                        <circle cx="100" cy="130" r="2" fill="#d4af37" />
                        <text x="100" y="142" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">SMART_AGENT</text>
                      </g>

                      {/* Incentive economic model on diagonal vector */}
                      <g opacity={activeAiBcCore === 'incentives' ? 1 : 0.4} className="cursor-pointer" onClick={() => setActiveAiBcCore('incentives')}>
                        <circle cx="43" cy="157" r="6" fill="#09090b" stroke="#d4af37" strokeWidth="1.25" />
                        <circle cx="43" cy="157" r="2" fill="#d4af37" />
                        <text x="43" y="169" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="monospace">INCENTIVES_MARKETS</text>
                      </g>
                    </svg>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span>SECTOR_STATE: {activeAiBcCore === 'compute' ? 'DEPLOYED' : activeAiBcCore === 'data' ? 'AUDITED' : activeAiBcCore === 'agents' ? 'AUTONOMOUS' : 'ACTIVE_INFLATION'}</span>
                    <span>COORDINATION: MULTI_AGENT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Module 4: Future Technology Roadmap (2025–2035) */}
            <div id="future-technology-roadmap" className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#050505]/30 flex flex-col gap-8">
              <div className="flex flex-col gap-1.5 border-b border-white/5 pb-6 text-left">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Horizon 3 Deep Tech Directives
                </span>
                <h2 className="text-xl md:text-2xl font-display font-light text-white">
                  4. Future Technology <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Roadmap (2025–2035)</span>
                </h2>
              </div>

              {/* Horizontal Bento Slider timeline */}
              <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-thin text-left">
                {[
                  {
                    id: 'agents',
                    sector: 'AI Agents & Swarms',
                    timeline: '2025 — 2027',
                    focus: 'Autonomous multi-agent task execution, peer-to-peer agent coordination, and specialized on-chain micro-treasuries.',
                    thesis: 'Venture scale lies in self-directed software agents capable of executing micro-billing, code refactoring, and server maintenance autonomously. This eliminates middle-management friction in digital-native enterprises.',
                    cap: '$5.0T USD by 2030',
                    conviction: 'Triple-A Sovereign Conviction',
                    barrier: 'Ensuring agent deterministic safety constraints, alignment with user intent, and sub-second multi-agent communication latency.'
                  },
                  {
                    id: 'robotics',
                    sector: 'Sovereign Robotics & Edge Silicon',
                    timeline: '2027 — 2029',
                    focus: 'Decentralized hardware control layers, spatial intelligence processors, and secure edge-computing chips.',
                    thesis: 'Embodied physical intelligence requires highly secure, ultra-low power silicon that cannot be remotely seized or bricked by centralized cloud operators. We back open physical compute standards.',
                    cap: '$2.5T USD by 2031',
                    conviction: 'Double-A High Conviction',
                    barrier: 'Global silicon foundries bottlenecking raw wafer supplies, and spatial tactile sensor physical micro-accuracy thresholds.'
                  },
                  {
                    id: 'quantum',
                    sector: 'Quantum Computing & Cryptography',
                    timeline: '2029 — 2031',
                    focus: 'Post-quantum cryptographic algorithms, optical high-throughput networking, and topological quantum processor modules.',
                    thesis: 'As quantum processing approaches decryption scale, protecting sovereign treasuries and state data requires immediate deployment of lattice-based cryptography and secure multi-party optical computations.',
                    cap: '$1.2T USD by 2033',
                    conviction: 'Sovereign Strategic Imperative',
                    barrier: 'Physical cooling stability at sub-Kelvin states and mitigating quantum coherence noise errors over optical systems.'
                  },
                  {
                    id: 'biology',
                    sector: 'Synthetic Biology & Genomics',
                    timeline: '2031 — 2033',
                    focus: 'Programmable genetic medicine compilers, targeted tissue transfection networks, and organoid drug pre-screening platforms.',
                    thesis: 'Treating human biology as a software stack. Funding computational genomics platforms that draft, simulate, and compile custom therapies to cure chronic cellular degradations.',
                    cap: '$4.2T USD by 2035',
                    conviction: 'Triple-A Allocator Core',
                    barrier: 'Clinical validation lead times, in-vivo delivery carrier accuracy, and multi-jurisdictional medical regulatory frameworks.'
                  },
                  {
                    id: 'space',
                    sector: 'Off-World Space Technology',
                    timeline: '2033 — 2035',
                    focus: 'Laser cross-link satellite telemetries, in-orbit manufacturing automation, and advanced radiation shielding.',
                    thesis: 'Extending humanity\'s data and energy footprint to orbit. We allocate capital to physical launch networks, sovereign satellite clusters, and lunar power relays.',
                    cap: '$3.0T USD by 2040',
                    conviction: 'Strategic Allied Backing',
                    barrier: 'High capital expenditures per launch, orbit constellation clutter, and mechanical failure risks under high-radiation conditions.'
                  },
                  {
                    id: 'climate',
                    sector: 'Sovereign Climate Technology',
                    timeline: '2025 — 2035',
                    focus: 'Supercritical geothermal drilling, aneutronic fusion baseload systems, and thermal fluid carbon storage cells.',
                    thesis: 'Deep physical decarbonization. Funding baseload energy generators that can run continuously independent of solar or wind intermittency to feed next-generation data computation clusters.',
                    cap: '$6.0T USD cumulative',
                    conviction: 'High-Impact Decarbonization Core',
                    barrier: 'Extremely high-temperature material physical degradation and scaling plasma confinement in magnetic reactor vessels.'
                  },
                  {
                    id: 'infrastructure',
                    sector: 'Autonomous Sovereign Infrastructure',
                    timeline: '2025 — 2035',
                    focus: 'Autonomous power grid relays, decentralized water purification networks, and self-repairing logistics grids.',
                    thesis: 'As state-backed infrastructure faces cyber-vulnerabilities, decentralized physical infrastructure networks (DePIN) provide localized, tamper-resistant municipal utilities.',
                    cap: '$2.8T USD cumulative',
                    conviction: 'Allied Resiliency Standard',
                    barrier: 'Outdated local zoning codes and legacy energy/water monopoly lobbying across municipalities.'
                  }
                ].map((item) => {
                  const isSelected = activeEmergingSector === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveEmergingSector(item.id)}
                      className={`min-w-[200px] text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-2 relative ${
                        isSelected
                          ? 'bg-gold-500/10 border-gold-500/40 text-white'
                          : 'bg-[#080808] border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span className={`text-[9px] font-mono tracking-widest ${isSelected ? 'text-gold-400' : 'text-zinc-500'}`}>
                        {item.timeline}
                      </span>
                      <h4 className="text-xs font-semibold font-display truncate">{item.sector}</h4>
                      <p className="text-[10px] text-zinc-500 font-sans line-clamp-1 leading-snug">{item.focus}</p>
                    </button>
                  );
                })}
              </div>

              {/* Premium Strategic Memo detail panel */}
              <AnimatePresence mode="wait">
                {(() => {
                  const list = [
                    {
                      id: 'agents',
                      sector: 'AI Agents & Swarms',
                      timeline: '2025 — 2027',
                      focus: 'Autonomous multi-agent task execution, peer-to-peer agent coordination, and specialized on-chain micro-treasuries.',
                      thesis: 'Venture scale lies in self-directed software agents capable of executing micro-billing, code refactoring, and server maintenance autonomously. This eliminates middle-management friction in digital-native enterprises.',
                      cap: '$5.0T USD by 2030',
                      conviction: 'Triple-A Sovereign Conviction',
                      barrier: 'Ensuring agent deterministic safety constraints, alignment with user intent, and sub-second multi-agent communication latency.'
                    },
                    {
                      id: 'robotics',
                      sector: 'Sovereign Robotics & Edge Silicon',
                      timeline: '2027 — 2029',
                      focus: 'Decentralized hardware control layers, spatial intelligence processors, and secure edge-computing chips.',
                      thesis: 'Embodied physical intelligence requires highly secure, ultra-low power silicon that cannot be remotely seized or bricked by centralized cloud operators. We back open physical compute standards.',
                      cap: '$2.5T USD by 2031',
                      conviction: 'Double-A High Conviction',
                      barrier: 'Global silicon foundries bottlenecking raw wafer supplies, and spatial tactile sensor physical micro-accuracy thresholds.'
                    },
                    {
                      id: 'quantum',
                      sector: 'Quantum Computing & Cryptography',
                      timeline: '2029 — 2031',
                      focus: 'Post-quantum cryptographic algorithms, optical high-throughput networking, and topological quantum processor modules.',
                      thesis: 'As quantum processing approaches decryption scale, protecting sovereign treasuries and state data requires immediate deployment of lattice-based cryptography and secure multi-party optical computations.',
                      cap: '$1.2T USD by 2033',
                      conviction: 'Sovereign Strategic Imperative',
                      barrier: 'Physical cooling stability at sub-Kelvin states and mitigating quantum coherence noise errors over optical systems.'
                    },
                    {
                      id: 'biology',
                      sector: 'Synthetic Biology & Genomics',
                      timeline: '2031 — 2033',
                      focus: 'Programmable genetic medicine compilers, targeted tissue transfection networks, and organoid drug pre-screening platforms.',
                      thesis: 'Treating human biology as a software stack. Funding computational genomics platforms that draft, simulate, and compile custom therapies to cure chronic cellular degradations.',
                      cap: '$4.2T USD by 2035',
                      conviction: 'Triple-A Allocator Core',
                      barrier: 'Clinical validation lead times, in-vivo delivery carrier accuracy, and multi-jurisdictional medical regulatory frameworks.'
                    },
                    {
                      id: 'space',
                      sector: 'Off-World Space Technology',
                      timeline: '2033 — 2035',
                      focus: 'Laser cross-link satellite telemetries, in-orbit manufacturing automation, and advanced radiation shielding.',
                      thesis: 'Extending humanity\'s data and energy footprint to orbit. We allocate capital to physical launch networks, sovereign satellite clusters, and lunar power relays.',
                      cap: '$3.0T USD by 2040',
                      conviction: 'Strategic Allied Backing',
                      barrier: 'High capital expenditures per launch, orbit constellation clutter, and mechanical failure risks under high-radiation conditions.'
                    },
                    {
                      id: 'climate',
                      sector: 'Sovereign Climate Technology',
                      timeline: '2025 — 2035',
                      focus: 'Supercritical geothermal drilling, aneutronic fusion baseload systems, and thermal fluid carbon storage cells.',
                      thesis: 'Deep physical decarbonization. Funding baseload energy generators that can run continuously independent of solar or wind intermittency to feed next-generation data computation clusters.',
                      cap: '$6.0T USD cumulative',
                      conviction: 'High-Impact Decarbonization Core',
                      barrier: 'Extremely high-temperature material physical degradation and scaling plasma confinement in magnetic reactor vessels.'
                    },
                    {
                      id: 'infrastructure',
                      sector: 'Autonomous Sovereign Infrastructure',
                      timeline: '2025 — 2035',
                      focus: 'Autonomous power grid relays, decentralized water purification networks, and self-repairing logistics grids.',
                      thesis: 'As state-backed infrastructure faces cyber-vulnerabilities, decentralized physical infrastructure networks (DePIN) provide localized, tamper-resistant municipal utilities.',
                      cap: '$2.8T USD cumulative',
                      conviction: 'Allied Resiliency Standard',
                      barrier: 'Outdated local zoning codes and legacy energy/water monopoly lobbying across municipalities.'
                    }
                  ];
                  const selected = list.find((x) => x.id === activeEmergingSector) || list[0];
                  return (
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black/60 border border-white/5 rounded-xl p-6 flex flex-col gap-6 text-left relative overflow-hidden"
                    >
                      {/* Top Row header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">// ALIGNED STRATEGIC MEMORANDUM</span>
                          <h3 className="text-base font-semibold font-display text-white">{selected.sector} • {selected.timeline}</h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase">ALLOCATOR GRADE:</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-gold-500/20 bg-gold-500/10 text-gold-400 uppercase tracking-widest">
                            {selected.conviction}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Left thesis columns (8 cols) */}
                        <div className="md:col-span-8 flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">INVESTMENT CONVICTION THESIS</span>
                            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                              {selected.thesis}
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">CRITICAL ENABLEMENT DIRECTIVE</span>
                            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                              {selected.focus}
                            </p>
                          </div>
                        </div>

                        {/* Right metric panels (4 cols) */}
                        <div className="md:col-span-4 flex flex-col gap-4">
                          <div className="bg-white/1 p-4 rounded-lg border border-white/5 flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono text-gold-400 uppercase">Expected Market Potential</span>
                            <span className="text-sm font-bold text-white font-display tracking-tight">{selected.cap}</span>
                          </div>

                          <div className="bg-white/1 p-4 rounded-lg border border-white/5 flex flex-col gap-1.5">
                            <span className="text-[9px] font-mono text-red-400 uppercase">PRIMARY CHOKE POINT TO RESOLVE</span>
                            <span className="text-[11px] font-sans text-zinc-400 leading-normal">{selected.barrier}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* REPORT OVERLAY SHEET MODAL */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            id="report-modal"
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
                id="close-report-modal"
                onClick={() => setSelectedReport(null)}
                className="absolute top-4 right-4 bg-black/40 text-white hover:text-gold-400 transition-colors w-8 h-8 rounded-full flex items-center justify-center border border-white/10 z-10 cursor-pointer"
              >
                &times;
              </button>

              <div className="h-40 w-full overflow-hidden relative">
                <img
                  src={selectedReport.coverImage}
                  alt={selectedReport.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block mb-0.5">
                    {selectedReport.category} &bull; Research
                  </span>
                  <h2 className="text-xl font-display font-semibold text-white tracking-wide line-clamp-1">
                    {selectedReport.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-6 max-h-[440px] overflow-y-auto">
                <div className="flex items-center gap-4 text-xs border-b border-white/5 pb-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Author Partner</span>
                    <span className="text-zinc-200 font-sans font-medium mt-0.5">{selectedReport.author}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{selectedReport.authorTitle}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Release Date</span>
                    <span className="text-zinc-200 font-sans font-medium mt-0.5">{selectedReport.date}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Reading metrics</span>
                    <span className="text-zinc-200 font-sans font-medium mt-0.5">{selectedReport.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Executive Abstract</span>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                    {selectedReport.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Key Structural Takeaways</span>
                  <div className="flex flex-col gap-2">
                    {selectedReport.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-xs text-zinc-400 font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-2 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="flex-1 py-3 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors cursor-pointer"
                  >
                    Close Sheet
                  </button>
                  <button
                    onClick={() => alert("Report brief download initiated successfully.")}
                    className="flex-1 py-3 text-xs font-mono bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
