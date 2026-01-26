import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Mulher elegante se olhando no espelho com confiança" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0EB]/90 via-[#F5F0EB]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20 pb-10">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-dusty-rose-dark uppercase tracking-[0.2em] text-sm md:text-base font-bold mb-4">
            O cuidado estético que faz você se sentir bonita, segura e confiante
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-charcoal-muted mb-6">
            Resultados Reais, <br/>
            <span className="italic text-dusty-rose-dark">Naturais</span> e Feitos <br/>
            Para Você.
          </h1>

          <p className="font-sans text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Você não quer “mais um procedimento”. Você quer se olhar no espelho e gostar do que vê. 
            Aqui em <span className="font-semibold text-dusty-rose-dark">Florianópolis</span>, ajudamos mulheres que buscam segurança, acolhimento e tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="group bg-dusty-rose-dark hover:bg-[#96766F] text-white font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;