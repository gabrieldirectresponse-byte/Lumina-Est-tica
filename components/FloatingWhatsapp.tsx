import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5548999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-sans font-bold whitespace-nowrap">
        Agendar Agora
      </span>
    </a>
  );
};

export default FloatingWhatsapp;