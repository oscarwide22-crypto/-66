import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, FileText, FileArchive, Image, Copy, Check, 
  Filter, Search, Calendar, Mail, ArrowUpRight, Info, 
  User, ExternalLink, ChevronRight, CheckCircle2, Award
} from 'lucide-react';

interface PressItem {
  id: string;
  title: string;
  date: string;
  category: 'release' | 'news' | 'announcement';
  categoryLabel: string;
  source?: string;
  readTime: string;
  summary: string;
  content: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    id: 'pr-1',
    title: 'Spark Capital Closes Fund V at $1.8B Over-Subscribed Limit to Fuel Planetary Deep-Tech Scaling',
    date: 'June 18, 2026',
    category: 'release',
    categoryLabel: 'Official Press Release',
    source: 'Spark Capital Operations',
    readTime: '4 min read',
    summary: 'The newly closed vehicle will be allocated exclusively to Series A and B infrastructure scaling in clean fusion baseload, neuromorphic silicon architectures, and programmable genetic therapies.',
    content: `**BOSTON, MA — June 18, 2026** — Spark Capital LLC, a pioneer in foundational scientific venture finance, today announced the final close of Spark Capital Fund V at its hard cap of $1.8 Billion. The fund was heavily oversubscribed, receiving strong backing from international pension schemes, sovereign wealth funds, and leading university endowments.\n\nFund V represents a significant expansion of the firm’s deployment capacity, remaining strictly dedicated to backing elite scientific teams transitioning technology from academic labs into the global industrial supply chain. \n\n"We do not chase transient consumer software bubbles," said Victoria Thorne, Managing Partner. "True structural sovereignty is built at the physical, biological, and computational layers. Fund V will provide both the capital and the mechanical execution expertise necessary to scale solutions to the planet’s most severe challenges."\n\nSpark Capital has already initiated deployments from Fund V, leading recent financing rounds in advanced magnetics and orbital payload refuel networks.`
  },
  {
    id: 'pr-2',
    title: 'Spark Capital Partners with MIT Plasma Science and Fusion Center on Aneutronic Magnetics Validation',
    date: 'May 05, 2026',
    category: 'announcement',
    categoryLabel: 'Corporate Announcement',
    source: 'Spark Capital Physics Group',
    readTime: '5 min read',
    summary: 'A joint scientific audit initiative established to certify real-world industrial durability standards for commercial magnet configurations in proton-boron fusion chambers.',
    content: `**BOSTON, MA — May 05, 2026** — Spark Capital’s Climate and Fusion Technology mandates have established a formal research collaboration with leading academic physicists to validate extreme-durability magnetics.\n\nThe research focuses on commercial-grade high-temperature superconductor configurations designed for proton-boron fusion chambers. This joint initiative aims to establish standardized testing protocols, accelerating the commercial viability of aneutronic fusion baseload networks.\n\n"Developing baseline thermodynamics proofs and hardware certification methods is essential to transition fusion from an experimental dream to a commercial reality," stated Aris Thorne, Technology Partner. "This partnership secures our portfolio companies access to unparalleled diagnostic systems and elite academic expertise."`
  },
  {
    id: 'news-1',
    title: 'How Spark Capital Became the Sovereign Guard of European Biotech Infrastructure',
    date: 'April 14, 2026',
    category: 'news',
    categoryLabel: 'In The News',
    source: 'The Financial Times',
    readTime: '6 min read',
    summary: 'An inside look into Spark Capital’s strategic coordination with preclinical-stage genetic therapy networks to guarantee biological security and manufacturing independence.',
    content: `**LONDON, UK — April 14, 2026** — (In the News) In an in-depth feature published by leading financial journals, Spark Capital’s unique investment strategy in precision biotech was profiled.\n\nAs Europe navigates critical supply chain stresses, Spark Capital has emerged as a cornerstone investor in programmable biology. By financing local manufacturing platforms and backing specialized vector delivery systems, the firm is building a robust, sovereign biotechnology shield.\n\nHelena Rostova, General Partner at Spark Capital, remarked: "Biological independence is as critical to sovereign resilience as energy security. We are not just funding therapeutic therapeutics, we are building the physical production facilities that ensure these therapies can be manufactured and distributed safely in any crisis."`
  },
  {
    id: 'pr-3',
    title: 'Spark Capital Expands Footprint to Boston with New Academic & Biotechnology Research Hub',
    date: 'March 22, 2026',
    category: 'release',
    categoryLabel: 'Official Press Release',
    source: 'Spark Capital Operations',
    readTime: '3 min read',
    summary: 'Located on the 59th Floor of 200 Clarendon Street, the new office will facilitate deep technical partnerships with elite Ivy League research labs and early-stage biotechnology innovators.',
    content: `**BOSTON, MA — March 22, 2026** — Spark Capital today announced the opening of its eighth global hub in Boston, Massachusetts, further strengthening its access to world-class scientific research institutions and early-stage biotech talent.\n\nThe Boston office, situated at 200 Clarendon Street, Floor 59, will house a dedicated technical review panel and investment team specialized in programmable genetic therapies, quantum-resistant cryptography, and advanced materials.\n\n"Boston represents the absolute epicenter of life sciences and university-led research," said Victoria Thorne, Managing Partner. "Establishing a physical presence here allows us to collaborate directly with founders, academics, and research clinics at the very moment breakthroughs leave the laboratory bench."`
  },
  {
    id: 'pr-4',
    title: 'Spark DePIN Compute Initiative Reaches Phase 1 Milestone: 15,000 GPU Equivalents Aligned',
    date: 'January 29, 2026',
    category: 'release',
    categoryLabel: 'Official Press Release',
    source: 'Spark Tech Committee',
    readTime: '4 min read',
    summary: 'The decentralized supercomputing cluster achieves complete operational sync, offering sovereign high-performance computing to portfolio teams and allied research hubs.',
    content: `**SAN FRANCISCO, CA — January 29, 2026** — Spark Capital’s decentralized compute incubation, Spark DePIN GPU Compute Cluster, has successfully completed its Phase 1 pilot rollout, achieving synchronization across 15,000 high-performance GPU equivalents.\n\nThis sovereign computing cluster provides unparalleled high-performance compute capacity tailored for secure deep learning training and massive molecular dynamics simulations.\n\n"Sovereign compute capacity is the cornerstone of 21st-century technological leadership," said Marcus Vance, General Partner. "By utilizing distributed ledger coordination, we have built a highly secure, high-throughput compute layer that our portfolio companies can access at a fraction of the cost of legacy cloud monopolies."`
  }
];

export default function MediaView() {
  const [filter, setFilter] = useState<'all' | 'release' | 'news' | 'announcement'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPR, setSelectedPR] = useState<PressItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    outlet: '',
    email: '',
    urgency: 'standard',
    message: ''
  });

  // Success Notification States
  const [copiedAsset, setCopiedAsset] = useState<string | null>(null);
  const [downloadingKit, setDownloadingKit] = useState(false);
  const [downloadedAsset, setDownloadedAsset] = useState<string | null>(null);

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

  // Filter & Search Press Releases
  const filteredItems = PRESS_ITEMS.filter((item) => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAsset(label);
    setTimeout(() => setCopiedAsset(null), 2000);
  };

  const handleDownloadSimulator = (fileName: string) => {
    setDownloadedAsset(fileName);
    setTimeout(() => setDownloadedAsset(null), 2500);
  };

  const triggerMediaKitDownload = () => {
    setDownloadingKit(true);
    setTimeout(() => {
      setDownloadingKit(false);
      handleDownloadSimulator('Spark_Capital_Media_Kit_v2.zip');
    }, 1500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryForm({ name: '', outlet: '', email: '', urgency: 'standard', message: '' });
    }, 4000);
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
        {copiedAsset && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-zinc-900 border border-gold-500/50 px-5 py-3 rounded-full text-xs font-mono text-gold-400 flex items-center gap-2.5 shadow-2xl z-50"
          >
            <Check className="w-4 h-4 text-gold-400" />
            Copied {copiedAsset} to clipboard
          </motion.div>
        )}
        {downloadedAsset && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-zinc-950 border border-emerald-500/40 px-5 py-3 rounded-full text-xs font-mono text-emerald-400 flex items-center gap-2.5 shadow-2xl z-50"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            Initiating secure download: {downloadedAsset}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Title */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Media Relations</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          News &amp; <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Media Center</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Access official corporate announcements, verified investment press releases, publication-grade executive portraits, and vector brand assets.
        </p>
      </div>

      {/* Bento Fact Sheet Block - Institutional Authority */}
      <section id="media-factsheet" className="mb-20">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Firm Facts</span>
          <h2 className="text-2xl font-display font-semibold text-white">Spark Capital Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Total Assets Under Management</span>
              <span className="text-2xl font-display font-bold text-white">$1.8B Fund V</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans">
              Deploying sovereign frontier venture capital across physical-layer deep technology configurations.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Core Sectors Active</span>
              <span className="text-2xl font-display font-bold text-white">13 Industries</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans">
              Strategically targeted domains including aneutronic fusion baseload, precision genomics, and DePIN compute networks.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Governance Standard</span>
              <span className="text-2xl font-display font-bold text-white">Article 9 compliant</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans">
              Highest level of integration compliance reflecting NATO-allied geopolitical security values.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Operational Footprint</span>
              <span className="text-2xl font-display font-bold text-white">8 Global Hubs</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans">
              Headquartered in SF/Boston, with active investment offices throughout the US, Europe, Middle East, and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Media Kit, Brand Assets & Downloads */}
      <section id="brand-assets" className="mb-20">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Verified Assets</span>
          <h2 className="text-2xl font-display font-semibold text-white">Institutional Media Kit</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Logo & Color Kit Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Vector Brand Assets Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Brand Logomarks</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Dark Monogram */}
                <div className="bg-zinc-950 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-between text-center min-h-[160px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-950/20">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 8.5c1-1.5 2.5-2.5 4.5-2.5s4 1.5 4 3.5c0 3-6 3.5-6 6.5 0 2 1.5 3.5 4 3.5s4-1.5 4.5-2.5" />
                        <circle cx="17.5" cy="6" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-display font-semibold tracking-[0.25em] text-white">SPARK</span>
                      <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500">CAPITAL</span>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full mt-4">
                    <button 
                      onClick={() => handleDownloadSimulator('Spark_Logo_Vector_Light_Bg.svg')}
                      className="flex-1 bg-white/2 hover:bg-white/5 border border-white/10 text-[10px] font-mono py-1.5 rounded-lg text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-gold-400" /> Vector SVG
                    </button>
                    <button 
                      onClick={() => handleCopyText('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8.5 8.5c1-1.5 2.5-2.5 4.5-2.5s4 1.5 4..."></path></svg>', 'Logo SVG Code')}
                      className="bg-white/2 hover:bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                      title="Copy SVG Code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Golden Seal Alternative */}
                <div className="bg-[#0b0a08] border border-gold-500/10 rounded-xl p-6 flex flex-col items-center justify-between text-center min-h-[160px]">
                  <div className="flex flex-col items-center mb-3">
                    <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center bg-gold-950/40 shadow-lg shadow-gold-500/5 mb-2">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 8.5c1-1.5 2.5-2.5 4.5-2.5s4 1.5 4 3.5c0 3-6 3.5-6 6.5 0 2 1.5 3.5 4 3.5s4-1.5 4.5-2.5" />
                        <circle cx="17.5" cy="6" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-mono tracking-[0.25em] text-gold-400 uppercase">Sovereign Insignia</span>
                  </div>
                  <div className="flex gap-2 w-full mt-4">
                    <button 
                      onClick={() => handleDownloadSimulator('Spark_Insignia_Gold.svg')}
                      className="flex-1 bg-gold-500/5 hover:bg-gold-500/10 border border-gold-500/20 text-[10px] font-mono py-1.5 rounded-lg text-gold-400 hover:text-gold-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-gold-400" /> Insignia SVG
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Official Colors Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Official Brand Palette</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Swatch 1 */}
                <div className="border border-white/5 rounded-xl p-4 bg-zinc-950 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#050505] border border-white/10 shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-white block">Sovereign Black</span>
                    <span className="text-[10px] font-mono text-zinc-500 block">#050505</span>
                  </div>
                  <button 
                    onClick={() => handleCopyText('#050505', 'Sovereign Black HEX')}
                    className="text-zinc-500 hover:text-white transition-colors p-1 cursor-pointer"
                    title="Copy HEX"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Swatch 2 */}
                <div className="border border-white/5 rounded-xl p-4 bg-zinc-950 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ab8250] shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-white block">Spark Gold</span>
                    <span className="text-[10px] font-mono text-zinc-500 block">#AB8250</span>
                  </div>
                  <button 
                    onClick={() => handleCopyText('#ab8250', 'Spark Gold HEX')}
                    className="text-zinc-500 hover:text-white transition-colors p-1 cursor-pointer"
                    title="Copy HEX"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Swatch 3 */}
                <div className="border border-white/5 rounded-xl p-4 bg-zinc-950 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-500 shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-white block">Atmosphere Zinc</span>
                    <span className="text-[10px] font-mono text-zinc-500 block">#71717A</span>
                  </div>
                  <button 
                    onClick={() => handleCopyText('#71717a', 'Atmosphere Zinc HEX')}
                    className="text-zinc-500 hover:text-white transition-colors p-1 cursor-pointer"
                    title="Copy HEX"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Download Complete Media Pack Column */}
          <div className="lg:col-span-4 flex">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-gold-500/10 bg-gradient-to-b from-gold-950/5 via-transparent to-transparent flex flex-col justify-between w-full relative overflow-hidden group">
              {/* Gold glow accent in background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 text-gold-400">
                  <FileArchive className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">Complete Media Pack</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                  Download the integrated digital resources package containing high-resolution vector logos, executive team biography summaries, regional office fact sheets, and publication-ready headshots.
                </p>
                
                <ul className="text-[11px] text-zinc-400 flex flex-col gap-2 font-mono border-t border-white/5 pt-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-gold-500" /> Vector Logo Kit (SVG &amp; PNG)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-gold-500" /> Institutional Facts Sheet (PDF)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-gold-500" /> Board Portraits (Hi-Res JPG)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-gold-500" /> Exec Biographies Document
                  </li>
                </ul>
              </div>

              <button
                onClick={triggerMediaKitDownload}
                disabled={downloadingKit}
                className="w-full bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold py-3.5 rounded-full tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {downloadingKit ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Packaging Assets...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download Complete Pack
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Executive Headshot Downloads */}
        <div className="mt-8">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">Press Photography Directory</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Victoria Thorne',
                role: 'Managing Partner',
                photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
              },
              {
                name: 'Marcus Vance',
                role: 'General Partner',
                photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
              },
              {
                name: 'Helena Rostova',
                role: 'General Partner',
                photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400'
              }
            ].map((exec, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-3 group">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/5 bg-zinc-950">
                  <img 
                    src={exec.photo} 
                    alt={exec.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div>
                    <span className="text-xs font-semibold text-white block">{exec.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 block">{exec.role}</span>
                  </div>
                  <button
                    onClick={() => handleDownloadSimulator(`Portrait_${exec.name.replace(' ', '_')}_HighRes.jpg`)}
                    className="bg-white/5 hover:bg-gold-500/10 border border-white/10 hover:border-gold-500/30 text-zinc-400 hover:text-gold-400 p-2 rounded-lg transition-colors cursor-pointer"
                    title="Download Hi-Res Headshot"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Chronological Feed of Press Releases */}
      <section id="press-releases-feed" className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-white/5 pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Chronological Feed</span>
            <h2 className="text-2xl font-display font-semibold text-white">Press Releases &amp; News</h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:flex-none md:w-64">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
                <Search className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                placeholder="Search releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-lg text-xs text-white focus:outline-none placeholder-zinc-500 transition-colors font-sans"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-zinc-950/60 p-1 border border-white/5 rounded-lg">
              {[
                { id: 'all', label: 'All Content' },
                { id: 'release', label: 'Releases' },
                { id: 'announcement', label: 'Announcements' },
                { id: 'news', label: 'In the News' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as any)}
                  className={`text-[10px] font-mono px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    filter === btn.id
                      ? 'bg-gold-500 text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chronological List of Releases */}
        <div className="flex flex-col gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  layout
                  id={`pr-card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedPR(item)}
                  className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-gold-500/20 glow-hover flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono mb-2">
                      <span className="text-gold-400 uppercase tracking-wider flex items-center gap-1 bg-gold-950/20 px-2 py-0.5 border border-gold-500/10 rounded">
                        {item.categoryLabel}
                      </span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </span>
                      {item.source && (
                        <span className="text-zinc-500 uppercase">
                          • {item.source}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-display font-semibold text-white group-hover:text-gold-300 transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-4xl">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-gold-400 transition-colors shrink-0">
                    <span>Read Release</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 border border-dashed border-white/5 rounded-2xl bg-zinc-950/10"
              >
                <Info className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">No matches found</span>
                <p className="text-xs text-zinc-600 font-sans max-w-sm mx-auto leading-relaxed">
                  Try clearing your search query or switching your publication filters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Press Inquiry Submission Form */}
      <section id="press-inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase block mb-2">PR Inquiries</span>
              <h2 className="text-3xl font-display font-light text-white leading-snug">
                Institutional <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Public Relations</span> Desk
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans mt-4">
                We accommodate accredited journalists, security analysts, and researchers seeking direct quotes, executive interviews, or structural details regarding active investment portfolios.
              </p>
            </div>

            <div className="border-t border-white/5 pt-8 mt-8 lg:mt-0 flex flex-col gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-600 block uppercase">Direct Press Mail</span>
                  <a href="mailto:media@sparkcapital.com" className="hover:text-gold-400 transition-colors">media@sparkcapital.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-center text-gold-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-600 block uppercase">Standard Review Hours</span>
                  <span>Mon-Fri: 09:00 - 18:00 EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-950/20">
              {inquirySubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-950/30 text-gold-400 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Inquiry Transmitted Successfully</h3>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
                    Your institutional press inquiry has been authenticated and routed to our Communications Committee. Standard review latency is under 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        placeholder="Johnathan Doe"
                        className="w-full px-4 py-3 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-xl text-xs text-white focus:outline-none placeholder-zinc-600 transition-colors font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase">Press Outlet / Publication</label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.outlet}
                        onChange={(e) => setInquiryForm({...inquiryForm, outlet: e.target.value})}
                        placeholder="Bloomberg News"
                        className="w-full px-4 py-3 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-xl text-xs text-white focus:outline-none placeholder-zinc-600 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase">Professional Email</label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="j.doe@bloomberg.com"
                        className="w-full px-4 py-3 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-xl text-xs text-white focus:outline-none placeholder-zinc-600 transition-colors font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase">Inquiry Urgency</label>
                      <select
                        value={inquiryForm.urgency}
                        onChange={(e) => setInquiryForm({...inquiryForm, urgency: e.target.value})}
                        className="w-full px-4 py-3 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-xl text-xs text-white focus:outline-none transition-colors font-sans"
                      >
                        <option value="standard" className="bg-zinc-950">Standard (within 24 hours)</option>
                        <option value="urgent" className="bg-zinc-950">Urgent Deadline (under 3 hours)</option>
                        <option value="scheduled" className="bg-zinc-950">Scheduled Interview Request</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Inquiry Scope / Outline</label>
                    <textarea
                      required
                      rows={4}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder="Detail your request, publishing timeline, and direct questions here..."
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/5 focus:border-gold-500/50 rounded-xl text-xs text-white focus:outline-none placeholder-zinc-600 transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold py-3.5 rounded-full tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                  >
                    Transmit Inquiry <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Press Release Reader Modal */}
      <AnimatePresence>
        {selectedPR && (
          <div id="pr-reader-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPR(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col relative z-10 shadow-2xl overflow-hidden"
            >
              {/* Header bar */}
              <div className="p-6 border-b border-white/5 flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mb-1">
                    <span className="text-gold-400 uppercase tracking-wider">{selectedPR.categoryLabel}</span>
                    <span>•</span>
                    <span>{selectedPR.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                    {selectedPR.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPR(null)}
                  className="bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Scrollable content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 font-sans text-xs md:text-sm text-zinc-300 leading-relaxed flex flex-col gap-4 whitespace-pre-wrap">
                {selectedPR.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('**')) {
                    // Extract bold prefix and text
                    const boldEnd = paragraph.indexOf('**', 2);
                    if (boldEnd !== -1) {
                      const boldText = paragraph.substring(2, boldEnd);
                      const normText = paragraph.substring(boldEnd + 2);
                      return (
                        <p key={idx}>
                          <strong className="text-white">{boldText}</strong>{normText}
                        </p>
                      );
                    }
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {/* Footer bar with actions */}
              <div className="p-6 border-t border-white/5 bg-zinc-950/40 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] font-mono text-zinc-500">
                  SECURE PORTAL VERIFIED • {selectedPR.readTime}
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      handleCopyText(`${selectedPR.title}\n\n${selectedPR.content}`, 'Press Release Text');
                    }}
                    className="flex-1 sm:flex-none bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy Text
                  </button>
                  <button
                    onClick={() => {
                      handleDownloadSimulator(`${selectedPR.id}_official_release.txt`);
                    }}
                    className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download TXT
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
