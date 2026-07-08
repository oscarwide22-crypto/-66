import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Users, Globe, ArrowUpRight, CheckCircle2, 
  Layers, ChevronRight, MessageSquare 
} from 'lucide-react';
import { OFFICES } from '../../data';
import { Office } from '../../types';

export default function OfficesView() {
  const [activeOffice, setActiveOffice] = useState<string>(OFFICES[0].id);

  const activeOfficeData = OFFICES.find(o => o.id === activeOffice) || OFFICES[0];

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
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Sovereign Networks</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Global <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Offices</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Operating across {OFFICES.length} major economic junctions. We secure global transaction structures and maintain physical access to leading laboratory research clusters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        
        {/* Interactive SVG World Map View */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-4 mb-2">
            <span className="text-zinc-500 uppercase tracking-wider">Interactive Sovereign Hubs Map</span>
            <span className="text-gold-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping inline-block" />
              Click pins or cards to focus hub
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full bg-[#080808]/90 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-4">
            {/* Ambient map glow grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#151515_1px,transparent_1px)] [background-size:16px_16px] opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none" />

            {/* Stylized vector SVG world outline */}
            <svg
              className="w-full h-full text-zinc-800/20 fill-current opacity-80"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Minimalist vector continents representation */}
              <path d="M150,150 Q200,100 250,120 T300,100 T350,150 T400,200 L350,300 L250,320 L150,250 Z" /> {/* North America */}
              <path d="M250,320 Q280,360 300,420 T320,480 L280,450 L240,360 Z" /> {/* South America */}
              <path d="M450,120 Q500,80 550,100 T600,120 L580,200 L500,180 Z" /> {/* Europe */}
              <path d="M480,180 Q520,220 550,280 T560,380 L500,350 L460,240 Z" /> {/* Africa */}
              <path d="M560,100 Q650,50 780,100 T850,200 L800,320 L700,300 L600,250 Z" /> {/* Asia */}
              <path d="M780,350 Q820,380 850,420 L800,410 L760,360 Z" /> {/* Australia */}
            </svg>

            {/* PULSING INTERACTIVE PINS */}
            {OFFICES.map((office) => {
              const isActive = office.id === activeOffice;
              return (
                <button
                  id={`map-pin-${office.id}`}
                  key={office.id}
                  onClick={() => setActiveOffice(office.id)}
                  style={{ left: `${office.coordinates.x}%`, top: `${office.coordinates.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                >
                  {/* Pulse Ring */}
                  <span className={`absolute w-8 h-8 rounded-full bg-gold-500/10 border border-gold-400/20 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-[2] ${isActive ? 'animate-ping' : 'group-hover:animate-ping'}`} />
                  
                  {/* Pin Dot */}
                  <div className={`w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gold-400 scale-[1.3]' : 'bg-zinc-600 group-hover:bg-gold-500'}`} />

                  {/* Popover Title */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded bg-[#0f0f0f] border border-white/10 text-[9px] font-mono tracking-wider uppercase text-white whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'}`}>
                    {office.city}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Office Details Column */}
        <div className="lg:col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              id="selected-office-details"
              key={activeOffice}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Office Photo preview */}
              <div className="h-44 w-full overflow-hidden relative">
                <img
                  src={activeOfficeData.photo}
                  alt={activeOfficeData.city}
                  className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block mb-0.5">
                    Global Office Node
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white tracking-wide">
                    {activeOfficeData.city} Hub
                  </h3>
                </div>
              </div>

              {/* Specifications */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Physical Address</span>
                  <span className="text-xs text-zinc-300 leading-relaxed font-sans">{activeOfficeData.address}</span>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Hub Team Size</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-gold-400" />
                      {activeOfficeData.teamSize} Professionals
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Sourcing Focus</span>
                    <span className="text-xs font-semibold text-zinc-200 mt-1 font-sans flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-gold-400" />
                      Frontier Tier
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Strategic Markets Serviced</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeOfficeData.markets.map((market, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-white/2 border border-white/5 px-2.5 py-1 rounded text-zinc-400">
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Technical Allocation Focus</span>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{activeOfficeData.focus}</p>
                </div>

                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full text-xs font-mono transition-colors mt-2 flex items-center justify-center gap-1.5 cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                  Connect With Regional Rep
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Grid of Other Office Cards */}
      <section id="offices-grid">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Sovereign Directory</span>
          <h2 className="text-2xl font-display font-semibold text-white">Our {OFFICES.length} Global Hubs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {OFFICES.map((office) => {
            const isActive = office.id === activeOffice;
            return (
              <div
                id={`office-card-${office.id}`}
                key={office.id}
                onClick={() => {
                  setActiveOffice(office.id);
                  const mapElement = document.getElementById('selected-office-details');
                  if (mapElement) mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] ${
                  isActive
                    ? 'bg-gold-950/20 border-gold-500/50 shadow-xl'
                    : 'bg-[#080808] border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">{office.city} Node</span>
                    <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-zinc-600'}`} />
                  </div>
                  <h4 className="text-sm font-display font-semibold text-white mb-1">{office.city}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">{office.focus}</p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-gold-400 border-t border-white/5 pt-3 mt-3">
                  <span>{office.teamSize} Partners &amp; Staff</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </motion.div>
  );
}
