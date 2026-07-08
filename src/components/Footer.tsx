import React, { useState } from 'react';
import { Compass, Mail, ArrowUpRight, Linkedin, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const officesList = [
    { city: 'San Francisco', market: 'North America / Silicon Valley Hub' },
    { city: 'New York', market: 'East Coast Capital' },
    { city: 'London', market: 'European Sovereign Hub' },
    { city: 'Zurich', market: 'Alpine Precision Hub' },
    { city: 'Dubai', market: 'Middle East & Sovereign' },
    { city: 'Singapore', market: 'Southeastern Growth Corridor' },
    { city: 'Tokyo', market: 'Frontier Robotics Hub' },
  ];

  return (
    <footer id="site-footer" className="bg-[#030303] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-950/20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Sleek S curve */}
                  <path d="M8.5 8.5c1-1.5 2.5-2.5 4.5-2.5s4 1.5 4 3.5c0 3-6 3.5-6 6.5 0 2 1.5 3.5 4 3.5s4-1.5 4.5-2.5" />
                  {/* Accent dot as spark */}
                  <circle cx="17.5" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-display font-semibold tracking-[0.25em] text-white">SPARK</span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase">CAPITAL</span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-sans">
              Investing in sovereign frontier technologies that redefine industrial structures, expand clean global energy capacities, and safeguard critical digital platforms.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-4">
              <h4 className="text-xs font-mono text-zinc-300 uppercase tracking-wider mb-3">
                Research &amp; Intelligence briefings
              </h4>
              {subscribed ? (
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Subscription validated. Welcome to Spark Capital Research.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex max-w-sm border border-white/10 rounded-full overflow-hidden bg-white/2 backdrop-blur-sm focus-within:border-gold-500/50 transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="institutional.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-400 text-black text-xs font-mono px-5 font-semibold tracking-wider transition-all duration-300 flex items-center gap-1 cursor-pointer"
                  >
                    Subscribe <ArrowUpRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Navigation</h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li>
                  <button onClick={() => onNavClick('home')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Homepage
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('profile')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Company Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('strategy')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Investment Strategy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('portfolio')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('leadership')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Executive Leadership
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('research')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Research &amp; ESG
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('careers')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavClick('media')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-left font-medium text-gold-400">
                    Media Center
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Governance</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-500">
                <li className="hover:text-white transition-colors cursor-pointer">LPs Relations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sovereign Alliance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Security Standards</li>
                <li className="hover:text-white transition-colors cursor-pointer">Academic Grants</li>
                <li className="hover:text-white transition-colors cursor-pointer">Advisory Advisory</li>
                <li>
                  <button onClick={() => onNavClick('media')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Media Room
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Offices List Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gold-500" />
              Global Presence
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {officesList.map((office) => (
                <div key={office.city} className="flex gap-2.5 items-start">
                  <MapPin className="w-3.5 h-3.5 text-gold-500/70 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-300 font-medium font-sans">{office.city}</span>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-tight leading-none">{office.market}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Spark Capital LLC. All rights reserved.</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-500">Sovereign Portal Synchronized</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            <span className="hover:text-white transition-colors cursor-pointer">Terms &amp; Disclosures</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Form ADV Part 2</span>
            <a href="https://linkedin.com/company/spark-capital" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
              <Linkedin className="w-3 h-3 text-gold-500/80" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:contactus@sparkcapiital.com" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-gold-500/80" />
              <span>contactus@sparkcapiital.com</span>
            </a>
            <a href="mailto:ir@sparkcapital.com" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-gold-500/80" />
              <span>ir@sparkcapital.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
