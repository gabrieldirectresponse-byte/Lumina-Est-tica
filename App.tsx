import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden selection:bg-dusty-rose selection:text-white">
      <Hero />
      <PainPoints />
      <Philosophy />
      <Services />
      <Benefits />
      <FAQ />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;