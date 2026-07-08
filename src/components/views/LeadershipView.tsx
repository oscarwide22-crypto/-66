import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, Mail, ArrowUpRight, GraduationCap, 
  Layers, Users, ShieldAlert, Award, Compass 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../../data';
import { TeamMember } from '../../types';

export default function LeadershipView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'committee' | 'advisory'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (activeFilter === 'all') return true;
    return member.roleType === activeFilter;
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
      {/* Editorial Title */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Board of Governance</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Executive <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Leadership</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Spark Capital is governed by a multidisciplinary council of Ph.D. scientists, experienced venture financiers, and sovereign security policy advisors.
        </p>
      </div>

      {/* Toggle Filter Header */}
      <div id="leadership-filters" className="flex items-center gap-4 border-b border-white/5 pb-8 mb-12">
        <button
          id="btn-filter-all"
          onClick={() => setActiveFilter('all')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          All Leadership ({TEAM_MEMBERS.length})
        </button>
        <button
          id="btn-filter-committee"
          onClick={() => setActiveFilter('committee')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeFilter === 'committee'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          Investment Committee
        </button>
        <button
          id="btn-filter-advisory"
          onClick={() => setActiveFilter('advisory')}
          className={`text-xs font-mono font-medium tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
            activeFilter === 'advisory'
              ? 'bg-gold-500 border-gold-500 text-black font-semibold'
              : 'bg-transparent border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
          }`}
        >
          Scientific Advisory Board
        </button>
      </div>

      {/* Leadership Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          id="leadership-grid"
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member) => (
            <motion.div
              id={`leadership-card-${member.id}`}
              key={member.id}
              variants={cardVariants}
              onClick={() => setSelectedMember(member)}
              className="glass-panel rounded-2xl border border-white/5 overflow-hidden group hover:border-gold-500/20 glow-hover flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Profile Portrait */}
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-900 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                  
                  {/* Small tag */}
                  <span className="absolute bottom-4 left-5 text-[10px] font-mono text-gold-300 uppercase tracking-widest bg-black/40 border border-white/5 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {member.yearsOfExperience} yrs experience
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex flex-col mb-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                      {member.roleType === 'committee' ? 'Investment Committee' : 'Advisory Board'}
                    </span>
                    <h3 className="text-base font-display font-semibold text-white tracking-wide group-hover:text-gold-300 transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gold-400/80 font-mono mt-0.5">{member.title}</span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-3 font-sans leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer with quick specialties */}
              <div className="px-5 py-4 border-t border-white/5 flex flex-col gap-3 bg-white/1">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Primary Specialty</span>
                  <span className="text-xs text-zinc-300 truncate font-sans font-medium mt-0.5">{member.specialty}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-1">
                  <span className="text-[10px] hover:text-white transition-colors">Inspect Biography</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-gold-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Expandable Member Details Panel (Overlay Modal) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            id="leadership-modal"
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
                id="close-leadership-modal"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-black/40 text-white hover:text-gold-400 transition-colors w-8 h-8 rounded-full flex items-center justify-center border border-white/10 z-10 cursor-pointer"
              >
                &times;
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Photo Column */}
                <div className="md:col-span-5 relative aspect-square md:aspect-auto md:h-full bg-zinc-900 filter grayscale">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                </div>

                {/* Right Metadata Column */}
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col gap-6 max-h-[580px] overflow-y-auto">
                  <div>
                    <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest">
                      {selectedMember.roleType === 'committee' ? 'Investment Committee' : 'Advisory Board'}
                    </span>
                    <h2 className="text-2xl font-display font-semibold text-white tracking-wide mt-1">
                      {selectedMember.name}
                    </h2>
                    <span className="text-xs text-gold-400 font-mono block mt-1">{selectedMember.title}</span>
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {selectedMember.bio}
                  </p>

                  {selectedMember.executiveProfile && (
                    <div className="flex flex-col gap-2 bg-white/2 border border-white/5 p-4 rounded-xl">
                      <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest">Executive Profile</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {selectedMember.executiveProfile.map((prof, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                            <span className="text-[11px] font-mono text-zinc-300 font-medium">{prof}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scientific Specialties & Education */}
                  <div className="flex flex-col gap-3.5 border-t border-white/5 pt-5">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Scientific Allocation specialty</span>
                      <span className="text-xs text-zinc-300 font-sans mt-1">{selectedMember.specialty}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Academic Pedigree
                      </span>
                      <span className="text-xs text-zinc-300 font-sans mt-1">{selectedMember.education}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Former Affiliations</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {selectedMember.previousCompanies.map((company, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-white/2 border border-white/5 px-2 py-0.5 rounded text-zinc-400">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Areas of Expertise</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {selectedMember.expertise.map((item, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-gold-500/5 border border-gold-500/10 px-2.5 py-0.5 rounded text-gold-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedMember.responsibilities && (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Key Responsibilities</span>
                        <ul className="list-disc pl-4 text-xs text-zinc-400 font-sans space-y-1">
                          {selectedMember.responsibilities.map((resp, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 border-t border-white/5 pt-5 mt-2">
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-xs font-mono text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex-1 py-2.5 bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono font-semibold text-center flex items-center justify-center gap-1.5 rounded-full transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Secure Email
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
