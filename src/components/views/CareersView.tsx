import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, MapPin, Calendar, Clock, ChevronRight, 
  Send, Upload, CheckCircle2, FileText, ArrowUpRight 
} from 'lucide-react';
import { CAREER_POSITIONS } from '../../data';

export default function CareersView() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', linkedin: '', note: '' });

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

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', linkedin: '', note: '' });
    }, 2500);
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
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Scientific Careers</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Join Spark <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Capital</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          We combine physical science, legal rigors, and financial mechanics. Collaborate with world-class Ph.D. researchers, GTM operators, and investment pioneers.
        </p>
      </div>

      {/* Cultural Pillar Cards */}
      <section id="careers-culture" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-gold-500/10 transition-colors">
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Core Culture 01</span>
          <h3 className="text-base font-display font-semibold text-white mb-2">Scientific Rigor</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Every investment memo we generate reads like an academic paper. We evaluate systems based on mechanical integrity, thermodynamics proofs, and mathematical models, ensuring absolute alignment with technical truth.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-gold-500/10 transition-colors">
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Core Culture 02</span>
          <h3 className="text-base font-display font-semibold text-white mb-2">Sovereign Responsibility</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            We operate at the core of national security and critical infrastructure. Our employees understand the profound geopolitical weight of quantum networks, baseload grids, and biotechnology platforms.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-gold-500/10 transition-colors">
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-4">Core Culture 03</span>
          <h3 className="text-base font-display font-semibold text-white mb-2">Extreme Ownership</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Our teams work on high-stakes, long-term capital deployments. We value high intellectual independence, direct communication, and deep dedication to solving the physical problems holding humanity back.
          </p>
        </motion.div>
      </section>

      {/* Career Positions Grid */}
      <section id="open-roles">
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Active Search</span>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">Institutional Openings</h2>
        </div>

        <div className="flex flex-col gap-4">
          {CAREER_POSITIONS.map((job) => (
            <div
              id={`job-row-${job.id}`}
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-gold-500/20 glow-hover flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono mb-2">
                  <span className="text-gold-400 uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-zinc-400">{job.type}</span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-zinc-400">{job.experience}</span>
                </div>
                
                <h3 className="text-lg font-display font-semibold text-white tracking-wide mb-2">
                  {job.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-3xl">
                  {job.summary}
                </p>
              </div>

              <button
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors flex items-center gap-1 shrink-0 self-end md:self-auto cursor-pointer"
              >
                Apply Securely <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Sheet Modal Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            id="careers-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-[#0a0a0a] border border-white/10 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button
                id="close-careers-modal"
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 bg-black/40 text-white hover:text-gold-400 transition-colors w-8 h-8 rounded-full flex items-center justify-center border border-white/10 z-10 cursor-pointer"
              >
                &times;
              </button>

              <div className="p-8 flex flex-col gap-6">
                <div>
                  <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest">
                    Application Portal
                  </span>
                  <h2 className="text-xl font-display font-semibold text-white tracking-wide mt-1">
                    Apply for {selectedJob.title}
                  </h2>
                  <span className="text-xs text-zinc-400 font-mono block mt-1">{selectedJob.location}</span>
                </div>

                {applySuccess ? (
                  <div className="py-8 text-center flex flex-col items-center gap-4">
                    <CheckCircle2 className="w-12 h-12 text-gold-400 animate-pulse" />
                    <h3 className="text-base font-display font-semibold text-white">Application Securely Dispatched</h3>
                    <p className="text-xs text-zinc-400 max-w-xs font-sans">
                      Your credentials have been cryptographic encrypted and routed to our human capital committee.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono uppercase text-zinc-500">Full Legal Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Arthur Dent"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono uppercase text-zinc-500">Institutional Email</label>
                      <input
                        type="email"
                        required
                        placeholder="dent.a@mit.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono uppercase text-zinc-500">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/arthur-dent"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono uppercase text-zinc-500">CV / Resume &amp; Publications</label>
                      <div className="border border-dashed border-white/10 hover:border-gold-500/30 transition-colors p-5 rounded-xl flex flex-col items-center gap-2 cursor-pointer bg-white/1">
                        <Upload className="w-5 h-5 text-zinc-500" />
                        <span className="text-[10px] font-mono text-zinc-400">Drag CV PDF or click to browse</span>
                        <span className="text-[8px] text-zinc-600">Max size 25MB (Encrypted storage)</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono uppercase text-zinc-500">Brief Overview of Research (Max 500 words)</label>
                      <textarea
                        rows={3}
                        placeholder="Detail your thermodynamic thesis or preclinical molecular milestones..."
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans resize-none"
                      />
                    </div>

                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full text-xs font-mono transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full text-xs font-mono tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Submit Application <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
