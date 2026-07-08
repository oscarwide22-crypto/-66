import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Views
import HomeView from './components/views/HomeView';
import StrategyView from './components/views/StrategyView';
import PortfolioView from './components/views/PortfolioView';
import LeadershipView from './components/views/LeadershipView';
import OfficesView from './components/views/OfficesView';
import ResearchView from './components/views/ResearchView';
import CareersView from './components/views/CareersView';
import ContactView from './components/views/ContactView';
import MediaView from './components/views/MediaView';
import ProfileView from './components/views/ProfileView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Smooth scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavChange={setActiveTab} />;
      case 'profile':
        return <ProfileView />;
      case 'strategy':
        return <StrategyView />;
      case 'portfolio':
        return <PortfolioView />;
      case 'leadership':
        return <LeadershipView />;
      case 'offices':
        return <OfficesView />;
      case 'research':
        return <ResearchView />;
      case 'careers':
        return <CareersView />;
      case 'media':
        return <MediaView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavChange={setActiveTab} />;
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-[#050505] text-white flex flex-col justify-between overflow-x-hidden selection:bg-gold-500/30 selection:text-white">
      {/* Editorial aesthetic ambient glow lines */}
      <div className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-50" />
      
      {/* Back glow light sources */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-950/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[45%] bg-zinc-900/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Header element */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Page Canvas */}
      <main id="primary-content-canvas" className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer element */}
      <Footer onNavClick={setActiveTab} />
    </div>
  );
}
