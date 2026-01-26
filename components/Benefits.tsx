import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Benefits: React.FC = () => {
  const benefits = [
    "Tecnologia de ponta",
    "Atendimento humano e sem pressa",
    "Resultados visíveis e seguros",
    "Um espaço feito para mulheres que se cuidam"
  ];

  return (
    <section className="py-24 bg-charcoal-muted relative overflow-hidden text-white">
      {/* Background Texture/Image */}
      <img 
        src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1974&auto=format&fit=crop" 
        alt="Interior ambiente" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Você está no <br/>
              <span className="text-soft-gold italic">lugar certo</span> se procura:
            </h2>
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-soft-gold/20 flex items-center justify-center flex-shrink-0 border border-soft-gold/50">
                    <Check className="w-5 h-5 text-soft-gold" />
                  </div>
                  <span className="font-sans text-xl text-gray-100 font-light">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full md:w-1/3">
           <ScrollReveal delay={300}>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors duration-500">
               <h3 className="font-serif text-3xl mb-4 text-white">Dê o primeiro passo</h3>
               <p className="font-sans text-gray-300 mb-8 font-light">
                 A avaliação é o momento de entender você, seus objetivos e o melhor caminho — sem pressão.
               </p>
               <a 
                 href="https://wa.me/5548999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação."
                 target="_blank"
                 rel="noreferrer"
                 className="inline-block w-full bg-soft-gold hover:bg-[#b08d4b] text-white font-sans text-sm tracking-widest uppercase py-4 px-6 rounded-full transition-colors duration-300 shadow-lg"
               >
                 Quero Agendar pelo WhatsApp
               </a>
               <p className="mt-4 text-xs text-gray-400">
                 *As vagas são limitadas para garantir atendimento personalizado.
               </p>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Benefits;