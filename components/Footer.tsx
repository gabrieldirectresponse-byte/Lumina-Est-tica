import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-dusty-rose/20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl text-charcoal-muted mb-2">Lumina Estética</h2>
          <p className="font-sans text-gray-500 text-sm tracking-widest uppercase">Florianópolis, SC</p>
        </div>

        <div className="text-center md:text-right">
          <p className="font-serif text-xl text-charcoal-muted mb-6">
            Agende sua avaliação pelo WhatsApp <br/> e fale direto com nossa equipe.
          </p>
          <a 
            href="https://wa.me/5548999999999?text=Olá,%20quero%20agendar%20minha%20avaliação."
            className="inline-flex items-center gap-2 bg-dusty-rose-dark hover:bg-[#96766F] text-white font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-full transition-colors shadow-lg mb-8"
          >
            Agendar pelo WhatsApp
          </a>
          
          <div className="flex items-center justify-center md:justify-end gap-6 text-gray-400">
            <a href="#" className="hover:text-dusty-rose-dark transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-dusty-rose-dark transition-colors"><MapPin className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="font-sans text-xs text-gray-400">
          © {new Date().getFullYear()} Lumina Estética. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;