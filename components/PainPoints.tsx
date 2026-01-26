import React from 'react';
import { Frown, AlertCircle, Eye, ShieldCheck, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PainPoints: React.FC = () => {
  const points = [
    { icon: Frown, text: "“Nada do que eu faço dá resultado”" },
    { icon: AlertCircle, text: "“Já gastei dinheiro e não vi diferença”" },
    { icon: Eye, text: "“Quero um resultado visível, mas natural”" },
    { icon: ShieldCheck, text: "“Tenho medo de procedimento que não funciona”" },
    { icon: Heart, text: "“Quero um lugar de confiança”" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-soft-gold text-sm tracking-widest uppercase font-bold mb-2 block">Reflexão</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-muted mb-6">
              Você já se sentiu assim?
            </h2>
            <div className="w-24 h-0.5 bg-dusty-rose mx-auto"></div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {points.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div className="bg-soft-nude/50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-dusty-rose/30 flex flex-col items-center text-center h-full">
                <item.icon className="w-10 h-10 text-dusty-rose-dark mb-4 opacity-80" strokeWidth={1.5} />
                <p className="font-serif text-xl text-charcoal-muted italic">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
          {/* Fills the grid nicely */}
          <ScrollReveal delay={500} className="hidden lg:block h-full">
            <div className="bg-dusty-rose-dark/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-dusty-rose/20 h-full">
               <p className="font-sans font-bold text-dusty-rose-dark text-lg uppercase tracking-wide">
                 Nós entendemos você
               </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto text-center">
             <h3 className="font-serif text-3xl md:text-4xl leading-relaxed text-charcoal-muted">
               Se alguma dessas frases parece com você, saiba: <br className="hidden md:block" />
               <span className="text-dusty-rose-dark italic">o problema não é você — é o método errado.</span>
             </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPoints;