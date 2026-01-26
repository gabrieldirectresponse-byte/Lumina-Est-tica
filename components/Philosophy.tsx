import React from 'react';
import ScrollReveal from './ScrollReveal';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-soft-nude">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <ScrollReveal>
              <div className="absolute -top-4 -left-4 w-full h-full border border-soft-gold rounded-tr-[4rem] rounded-bl-[4rem] z-0 hidden md:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe acolhedora atendendo cliente" 
                className="relative z-10 w-full h-[500px] object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl grayscale-[10%] sepia-[10%]"
              />
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={200}>
              <span className="text-dusty-rose-dark font-sans font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                Nossa Essência
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal-muted mb-8 leading-tight">
                Um lugar onde você se sente acolhida — <span className="italic text-dusty-rose-dark">e vê resultados.</span>
              </h2>

              <div className="space-y-6 font-sans text-lg text-gray-600 leading-relaxed">
                <p>
                  Aqui, cada tratamento começa com escuta. Nada de pacotes empurrados ou promessas irreais.
                </p>
                <p>
                  Trabalhamos com estética avançada, equipamentos de última geração e foco total em resultados naturais — respeitando seu rosto, seu corpo e sua essência.
                </p>
                <p className="font-serif text-2xl text-charcoal-muted italic border-l-4 border-soft-gold pl-6 py-2 bg-white/50">
                  "Você não sai 'outra pessoa'. Você sai se sentindo a melhor versão de si mesma."
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;