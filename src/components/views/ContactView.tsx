import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, Mail, Phone, Lock, Upload, CheckCircle2, 
  MapPin, ShieldAlert, ArrowUpRight, Compass, HelpCircle 
} from 'lucide-react';
import { OFFICES } from '../../data';

export default function ContactView() {
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'investment',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setFormData({ name: '', email: '', institution: '', subject: 'investment', message: '' });
    }, 3000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="w-full text-white pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Title */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Sovereign Channels</span>
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white leading-tight">
          Secure <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-300">Inquiry &amp; Access</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Establish cryptographic connection with our global offices. Whether a sovereign partner, institutional allocator, or frontier founder, select your secure channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Institutional Integrity Block */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-emerald-950/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-4">
              <Lock className="w-3.5 h-3.5" />
              AES-256 Secured Sourcing
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2 leading-snug">
              Institutional Investor Relations
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
              All communications processed via this portal are cryptographically validated and routed directly to our private vault storage. Limited Partner (LP) assets, compliance reporting, and technology disclosures remain secure.
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-300 font-mono border-t border-white/5 pt-4">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="text-[10px] text-zinc-500 uppercase">General:</span>
                <a href="mailto:contactus@sparkcapiital.com" className="hover:text-gold-400 transition-colors">contactus@sparkcapiital.com</a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="text-[10px] text-zinc-500 uppercase">Relations:</span>
                <a href="mailto:ir@sparkcapital.com" className="hover:text-gold-400 transition-colors">ir@sparkcapital.com</a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-[10px] text-zinc-500 uppercase">Secure Line:</span>
                +1 (415) 555-0190
              </span>
            </div>
          </div>

          {/* Sourcing Guidelines FAQ */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Sourcing FAQ
            </h4>
            
            <div className="flex flex-col gap-3.5">
              <div className="border border-white/5 bg-white/1 p-4 rounded-xl">
                <h5 className="text-xs font-semibold text-white mb-1">What stage do you allocate capital?</h5>
                <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                  We lead Series A and B rounds. However, our frontier seed program commits $1M to $5M for exceptional Ph.D. founders with peer-reviewed laboratory proofs.
                </p>
              </div>

              <div className="border border-white/5 bg-white/1 p-4 rounded-xl">
                <h5 className="text-xs font-semibold text-white mb-1">Are you affiliated with sovereign funds?</h5>
                <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                  We align co-investments with major NATO-allied sovereign wealth groups, guaranteeing complete compliance with international trade and defense standards.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5">
            {inquirySuccess ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-gold-400 animate-pulse" />
                <h3 className="text-xl font-display font-semibold text-white">Transmission Established</h3>
                <p className="text-xs text-zinc-400 max-w-sm font-sans leading-relaxed">
                  Your inquiry file has been securely routed. Our compliance team will review your institution and establish contact within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-500">Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Arthur Pendragon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-500">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="pendragon@excalibur.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase text-zinc-500">Institution / Entity</label>
                  <input
                    type="text"
                    required
                    placeholder="Sovereign Trust LLC / Stanford Lab"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase text-zinc-500">Inquiry Channel Focus</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-gold-500/50 transition-colors font-sans"
                  >
                    <option value="investment">Limited Partner (LP) Relations</option>
                    <option value="founder">Frontier Founder Pitch</option>
                    <option value="sovereign">Sovereign Alliance Cooperation</option>
                    <option value="career">Academic &amp; Grant Support</option>
                  </select>
                </div>

                {/* Pitch Deck upload placeholder */}
                {formData.subject === 'founder' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-500">Pitch Deck &amp; Physics Proofs (.pdf)</label>
                    <div className="border border-dashed border-white/10 hover:border-gold-500/30 transition-colors p-5 rounded-xl flex flex-col items-center gap-2 bg-white/1 cursor-pointer">
                      <Upload className="w-5 h-5 text-zinc-500" />
                      <span className="text-[10px] font-mono text-zinc-400">Drag investment brief or click to browse</span>
                      <span className="text-[8px] text-zinc-600">Max size 50MB (Encrypted PDF only)</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono uppercase text-zinc-500">Secure Message Brief</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Detail your thermodynamic variables, genetic delivery vector proofs, or sovereign co-investment targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/2 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/50 transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-gold-500/10"
                >
                  Encrypt &amp; Establish Connection <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </motion.div>
  );
}
