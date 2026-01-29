import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";

// Configuração da IA
const systemInstruction = `
Você é a Clara, a assistente virtual da Lumina Estética.
Seu tom de voz é: Elegante, Acolhedor, Empático e Profissional (Soft Luxury).
Seu objetivo: Ajudar a cliente a agendar uma avaliação ou procedimento.

1. Cumprimente a cliente gentilmente.
2. Descubra o nome dela.
3. Entenda qual serviço ela busca (Limpeza de pele, Botox, Harmonização, Bioestimuladores, ou se ela quer apenas uma avaliação geral).
4. Pergunte qual a preferência de horário (Manhã, Tarde ou Noite) e dia da semana.
5. Quando tiver Nome, Serviço e Preferência de Horário, utilize a ferramenta "agendar_whatsapp" para finalizar.

Não seja insistente. Use emojis delicados (✨, 🤍, 🌿). Responda de forma concisa.
Se a cliente perguntar preços, diga que valores variam conforme a avaliação personalizada e tente agendar a avaliação.
`;

const scheduleTool: FunctionDeclaration = {
  name: "agendar_whatsapp",
  description: "Gera o link do WhatsApp com os dados do agendamento quando a cliente confirmar as informações.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      nome_cliente: { type: Type.STRING, description: "Nome da cliente" },
      servico_interesse: { type: Type.STRING, description: "Serviço ou procedimento de interesse" },
      preferencia_horario: { type: Type.STRING, description: "Dia e turno de preferência (ex: Terça à tarde)" },
    },
    required: ["nome_cliente", "servico_interesse"],
  },
};

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou a Clara, assistente da Lumina. ✨ Como posso realçar sua beleza hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializa o chat APENAS quando necessário para economizar recursos e garantir chave atualizada
  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Reconstrói o histórico para a API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash-latest',
        config: {
          systemInstruction: systemInstruction,
          tools: [{ functionDeclarations: [scheduleTool] }],
        },
        history: history
      });

      const result = await chat.sendMessage({ message: userMsg });
      
      // Verifica chamadas de função (ferramentas)
      const functionCalls = result.functionCalls;
      
      if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        if (call.name === 'agendar_whatsapp') {
           const args = call.args as any;
           const text = `Olá! Sou *${args.nome_cliente}*. Gostaria de saber mais sobre *${args.servico_interesse}*. Minha preferência é: ${args.preferencia_horario || 'a combinar'}.`;
           const url = `https://wa.me/5548999999999?text=${encodeURIComponent(text)}`;
           
           setMessages(prev => [...prev, { 
             role: 'model', 
             text: `Perfeito, ${args.nome_cliente}! ✨ Preparei tudo para você. Por favor, clique no botão abaixo para confirmar seu horário diretamente com nossa recepção.` 
           }]);
           
           // Abre o WhatsApp
           window.open(url, '_blank');
        }
      } else if (result.text) {
        setMessages(prev => [...prev, { role: 'model', text: result.text }]);
      }

    } catch (error) {
      console.error("Erro na IA:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um pequeno momento de distração. Podemos tentar novamente? 🤍' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Janela do Chat */}
      <div className={`
        bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right mb-4 border border-dusty-rose/20
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none absolute'}
      `}>
        {/* Cabeçalho */}
        <div className="bg-dusty-rose-dark p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-lg leading-tight">Clara</h3>
              <p className="text-xs text-white/80 font-light tracking-wide uppercase">Lumina Assistant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 p-4 overflow-y-auto bg-soft-nude/30 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-dusty-rose text-white rounded-tr-none' 
                  : 'bg-white text-charcoal-muted rounded-tl-none border border-gray-100'}
              `}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-dusty-rose animate-spin" />
                <span className="text-xs text-gray-400">Digitando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-dusty-rose focus-within:ring-1 focus-within:ring-dusty-rose/50 transition-all">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent outline-none text-sm text-charcoal-muted placeholder-gray-400"
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="text-dusty-rose-dark hover:text-dusty-rose transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Botão Flutuante (Toggle) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110
          ${isOpen ? 'bg-charcoal-muted rotate-90' : 'bg-dusty-rose-dark hover:bg-[#96766F]'}
        `}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform duration-300 -rotate-90" />
        ) : (
          <>
             <MessageCircle className="w-7 h-7 text-white fill-current" />
             {/* Ping Animation */}
             <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-soft-gold border-2 border-white"></span>
            </span>
          </>
        )}
      </button>
      
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white px-4 py-2 rounded-xl shadow-lg border border-dusty-rose/10 animate-fade-in-up w-max max-w-[200px]">
          <p className="text-sm font-serif text-charcoal-muted">Agende sua avaliação com IA ✨</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-b border-r border-dusty-rose/10"></div>
        </div>
      )}

    </div>
  );
};

export default ChatWidget;