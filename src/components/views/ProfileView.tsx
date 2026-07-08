import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, ShieldCheck, Target, Award, Globe, HelpCircle, 
  Download, Copy, Check, ChevronRight, FileText, Calendar, 
  ArrowUpRight, Compass, Users, CheckCircle2, History, Scale
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2005',
    title: 'Inception of Spark Capital',
    description: 'Founded as a leading multi-stage venture capital firm in Boston and San Francisco, aiming to invest in transformational technology, enterprise software, and consumer sectors.'
  },
  {
    year: '2012',
    title: 'Fintech & Enterprise Expansion',
    description: 'Expanded sector coverage to capitalize on emerging cloud services, financial technologies, and the rise of digital consumer applications.'
  },
  {
    year: '2018',
    title: 'The AI & Core Infrastructure Wave',
    description: 'Dedicated major allocations to early-stage deep machine learning, high-scale infrastructure systems, and developer-centric software platforms.'
  },
  {
    year: '2022',
    title: 'Multi-Stage Global Growth',
    description: 'Strengthened growth-stage investment frameworks to offer comprehensive capital support from Series A to late-stage IPO preparation.'
  },
  {
    year: '2026',
    title: 'Closing of Fund V ($1.8B)',
    description: 'Announced the close of our flagship, over-subscribed Fund V to back exceptional leaders shaping artificial intelligence, fintech, enterprise solutions, and consumer tech globally.'
  }
];

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState<'overview' | 'principles' | 'history'>('overview');
  const [downloadingProfile, setDownloadingProfile] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleDownloadProfile = () => {
    setDownloadingProfile(true);
    setTimeout(() => {
      setDownloadingProfile(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="w-full text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Toast Notifications */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-zinc-950 border border-emerald-500/40 px-5 py-3 rounded-full text-xs font-mono text-emerald-400 flex items-center gap-2.5 shadow-2xl z-50"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            Initiated download: Spark_Capital_Corporate_Profile_2026.pdf
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Title */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Firm Overview</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Company <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Profile</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Founded in 2005, Spark Capital is a leading multi-stage venture capital firm investing across technology, AI, fintech, enterprise software, infrastructure, and consumer sectors.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex border-b border-white/5 mb-12">
        {[
          { id: 'overview', label: 'Overview', icon: Building2 },
          { id: 'principles', label: 'Core Principles', icon: Scale },
          { id: 'history', label: 'Our Milestones', icon: History }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 text-xs md:text-sm font-mono tracking-wider px-6 py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-gold-400 text-gold-400 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Main Left Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {activeTab === 'overview' && (
              <div className="flex flex-col gap-6">
                {/* Introduction Section */}
                <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-950/20">
                  <h3 className="text-lg font-display font-semibold text-white mb-4">Firm Mission &amp; Mandate</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                    Founded in 2005, Spark Capital operates as a leading multi-stage venture capital firm designed to support builders at every milestone of their journey. We deploy institutional capital and active operational partnership to transform breakthrough ideas into global market leaders.
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    With key hubs across major technology corridors, we maintain specialized focus groups in Artificial Intelligence, Financial Technology, Enterprise Software, Scalable Infrastructure, and high-impact Consumer Brands. Our multi-stage capability allows us to partner with founders from early seed incubation to late-stage public listings.
                  </p>
                </div>

                {/* Grid of Key Strengths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-gold-950/20 border border-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 font-display">Multi-Stage Strategy</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Flexible mandate to invest from early-stage seed rounds through to late-stage growth capital, providing continuous partnership as portfolio companies scale.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-gold-950/20 border border-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 font-display">AI &amp; Core Infrastructure</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Deep commitments to artificial intelligence models, cloud infrastructure, developer tooling, and security platforms securing the future digital economy.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-gold-950/20 border border-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 font-display">Fintech &amp; Enterprise Software</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Backing foundational platforms in transactional software, banking infrastructure, enterprise management suites, and digital workflows.
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-gold-950/20 border border-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 font-display">Consumer &amp; Retail Innovation</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Supporting disruptive direct-to-consumer models, social ecosystems, digital marketplaces, and consumer software that capture global behavior.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'principles' && (
              <div className="flex flex-col gap-6">
                <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-950/20">
                  <h3 className="text-lg font-display font-semibold text-white mb-6">Our Foundational Thesis</h3>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <span className="text-sm font-mono text-gold-400 font-semibold mt-1">01/</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1.5 font-display">Multi-Stage Commitment</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          We build enduring relationships across a company's lifecycle. From inception and seed rounds to growth equity and late-stage scaling, we provide steady, patient capital and strategic resources.
                        </p>
                      </div>
                    </div>

                    <div className="h-[1px] bg-white/5" />

                    <div className="flex gap-4">
                      <span className="text-sm font-mono text-gold-400 font-semibold mt-1">02/</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1.5 font-display">Synergistic Sector Focus</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          Innovation exists at the intersections. By tracking cross-currents between artificial intelligence, financial technologies, enterprise software, and consumer behaviors, we uncover non-obvious compounding opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="h-[1px] bg-white/5" />

                    <div className="flex gap-4">
                      <span className="text-sm font-mono text-gold-400 font-semibold mt-1">03/</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1.5 font-display">Operational Enablement</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          Venture capital is more than capital; it is execution. We actively assist our portfolio companies with senior talent acquisition, go-to-market advisory, system architecture planning, and international scaling strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="glass-panel p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-display font-semibold text-white mb-8">Evolution of Spark Capital</h3>
                
                <div className="relative border-l border-white/10 ml-4 pl-8 flex flex-col gap-8">
                  {MILESTONES.map((milestone, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-41px] top-1 w-[18px] h-[18px] rounded-full border-2 border-gold-400 bg-zinc-950 group-hover:bg-gold-500 transition-colors z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full group-hover:bg-black transition-colors" />
                      </div>
                      
                      <span className="text-sm font-mono text-gold-400 font-bold block mb-1">
                        {milestone.year}
                      </span>
                      <h4 className="text-sm font-semibold text-white font-display mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar - Info & Actions */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Stats Sheet */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-zinc-950/40">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Quick Factsheet</span>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-zinc-400">Incorporation</span>
                  <span className="text-xs font-semibold text-white">Spark Capital LLC</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-zinc-400">Founded Year</span>
                  <span className="text-xs font-semibold text-white">2005</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-zinc-400">Headquarters</span>
                  <span className="text-xs font-semibold text-white">Boston &amp; San Francisco</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-zinc-400">Active Capital Vehicle</span>
                  <span className="text-xs font-semibold text-gold-400">$1.8B Fund V</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono text-zinc-400">Operating Sectors</span>
                  <span className="text-xs font-semibold text-white">Tech, AI, Fintech, SaaS, Consumer, Infra</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-zinc-400">Stage Focus</span>
                  <span className="text-xs font-semibold text-white">Multi-stage (Seed to IPO)</span>
                </div>
              </div>
            </div>

            {/* Download PDF Card */}
            <div className="glass-panel p-6 rounded-2xl border border-gold-500/10 bg-gradient-to-b from-gold-950/5 via-transparent to-transparent flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 blur-2xl rounded-full pointer-events-none" />
              
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 text-gold-400">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 font-display">Official Corporate Profile</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-5">
                  Secure access to our comprehensive institutional firm profile brief (PDF format) covering investment structures, historical milestones, and cross-sector deployment frameworks.
                </p>
              </div>

              <button
                onClick={handleDownloadProfile}
                disabled={downloadingProfile}
                className="w-full bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold py-2.5 rounded-full tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {downloadingProfile ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Assembling Brief...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download PDF Profile
                  </>
                )}
              </button>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
