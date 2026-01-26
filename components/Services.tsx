import React from 'react';
import { Sparkles, Smile, PersonStanding } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      title: "Pele Renovada e Iluminada",
      description: "Limpeza de pele profunda com tecnologia avançada para quem quer ver diferença de verdade — não só no dia, mas com continuidade.",
      image: "https://images.unsplash.com/photo-1609188076864-c35269136b09?q=80&w=2070&auto=format&fit=crop",
      icon: Sparkles
    },
    {
      title: "Rosto Mais Leve e Natural",
      description: "Botox e harmonização feitos com precisão, sem exageros. Porque beleza não é mudar quem você é — é realçar.",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop",
      icon: Smile
    },
    {
      title: "Corpo Definido e Autoestima",
      description: "Depilação a laser e protocolos de emagrecimento pensados para quem quer se sentir confortável no próprio corpo.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
      icon: PersonStanding
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-muted mb-4">
              O que você pode conquistar aqui
            </h2>
            <p className="font-sans text-gray-500 max-w-2xl mx-auto">
              Protocolos exclusivos desenhados para a mulher moderna.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="group cursor-default h-full">
                <div className="relative overflow-hidden rounded-t-[3rem] mb-6 h-80">
                  <div className="absolute inset-0 bg-charcoal-muted/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg">
                    <service.icon className="w-6 h-6 text-dusty-rose-dark" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-charcoal-muted mb-3 group-hover:text-dusty-rose-dark transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;