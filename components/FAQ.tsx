import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Os procedimentos são seguros?",
      answer: "Sim. Trabalhamos apenas com técnicas e equipamentos modernos, seguindo todos os protocolos de segurança rigorosos para garantir seu bem-estar."
    },
    {
      question: "Os resultados ficam naturais?",
      answer: "Esse é nosso foco principal. Nada de exageros ou mudanças artificiais. Realçamos sua beleza natural para que você se reconheça no espelho."
    },
    {
      question: "Preciso saber qual procedimento fazer?",
      answer: "Não. Na avaliação, analisamos suas características e objetivos para indicar o tratamento ideal e personalizado para o seu caso."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-soft-nude">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-charcoal-muted">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md' : 'shadow-sm'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-serif text-xl text-charcoal-muted">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-dusty-rose-dark" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 font-sans text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;