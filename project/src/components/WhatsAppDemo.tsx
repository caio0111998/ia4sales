import React, { useState } from 'react';
import { QrCode, MessageCircle, Sparkles, Clock, TrendingUp, Calendar } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const WhatsAppDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    description: ''
  });

  const handleCardClick = (title: string, description: string) => {
    setModalConfig({ title, description });
    setIsModalOpen(true);
  };

  const handleLeadSubmit = (data: { name: string; company: string; phone: string }) => {
    const message = encodeURIComponent(
      `Olá, aqui é o ${data.name}! Acabei de ver os dados do meu negócio com a IA4Sales e quero entender como isso pode funcionar comigo.`
    );
    const whatsappUrl = `https://wa.me/5551989648007?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const cards = [
    {
      icon: QrCode,
      title: 'Integração instantânea',
      description: 'Aponte a câmera para o QR Code, escolha sua área de atuação e comece agora mesmo com seu assistente inteligente. Sem fricção.',
      cta: 'Ativar agora',
      modalTitle: 'Ativar assistente agora',
      modalDescription: 'Vamos configurar seu assistente virtual em poucos minutos'
    },
    {
      icon: MessageCircle,
      title: 'Atendimento 100% natural',
      description: 'Nossa IA responde de forma humana e personalizada. Parece que foi você mesmo quem escreveu — só que 10x mais rápido.',
      cta: 'Veja funcionando',
      modalTitle: 'Ver demonstração',
      modalDescription: 'Converse com nosso assistente e veja como funciona na prática'
    },
    {
      icon: Sparkles,
      title: 'WhatsApp que vende por você',
      description: 'Responde dúvidas, faz briefing, e agenda reuniões — tudo sozinho. Enquanto sua equipe foca no que realmente importa.',
      cta: 'Testar assistente',
      modalTitle: 'Testar assistente virtual',
      modalDescription: 'Experimente nosso assistente em ação no seu WhatsApp'
    },
    {
      icon: TrendingUp,
      title: '+40% de conversão',
      description: 'Quanto mais rápido você responde, maior sua chance de fechar negócio. Nossa IA acelera isso pra você todos os dias.',
      cta: 'Calcular meu aumento',
      modalTitle: 'Calcular seu aumento',
      modalDescription: 'Vamos calcular o potencial de aumento na sua conversão'
    }
  ];

  return (
    <>
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Seu assistente virtual que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                vende 24h por dia
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como funciona na prática: atendimento humanizado, qualificação inteligente e agendamentos automáticos
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
            {/* Cards laterais - esquerda */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cards.slice(0, 2).map((card, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-green-900/10 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500">
                      <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <button
                        onClick={() => handleCardClick(card.modalTitle, card.modalDescription)}
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium text-xs sm:text-sm hover:bg-gradient-to-r hover:from-green-500/30 hover:to-cyan-500/30 hover:border-green-400/50 transition-all duration-300"
                      >
                        {card.cta}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* iPhone Mockup - centro */}
            <div className="lg:col-span-1 flex justify-center order-first lg:order-none">
              <div className="relative">
                {/* iPhone frame */}
                <div className="w-56 sm:w-64 h-[450px] sm:h-[520px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800">
                      <span className="text-white text-xs sm:text-sm font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                        <div className="w-4 sm:w-6 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                        <div className="w-4 sm:w-6 h-1.5 sm:h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* WhatsApp header */}
                    <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-green-600">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-300 rounded-full mr-2 sm:mr-3"></div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">IA4SALES Assistente</div>
                        <div className="text-green-100 text-xs">online</div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 p-3 sm:p-4 space-y-2 sm:space-y-3 bg-gray-100 h-[320px] sm:h-[400px] overflow-y-auto">
                      {/* Mensagem do assistente */}
                      <div className="flex">
                        <div className="bg-white rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 max-w-[80%] shadow-sm">
                          <p className="text-gray-800 text-xs sm:text-sm">
                            Olá! 👋 Aqui é o assistente virtual da TechCorp. Como posso ajudar você hoje?
                          </p>
                          <span className="text-xs text-gray-500">14:32</span>
                        </div>
                      </div>

                      {/* Mensagem do usuário */}
                      <div className="flex justify-end">
                        <div className="bg-green-500 rounded-2xl rounded-br-md px-3 sm:px-4 py-2 max-w-[80%]">
                          <p className="text-white text-xs sm:text-sm">
                            Quero saber sobre automação de vendas
                          </p>
                          <span className="text-xs text-green-100">14:33</span>
                        </div>
                      </div>

                      {/* Resposta do assistente */}
                      <div className="flex">
                        <div className="bg-white rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 max-w-[80%] shadow-sm">
                          <p className="text-gray-800 text-xs sm:text-sm">
                            Perfeito! 🚀 Posso te ajudar com isso. Qual é o principal desafio da sua operação hoje?
                          </p>
                          <span className="text-xs text-gray-500">14:33</span>
                        </div>
                      </div>

                      {/* Mensagem com agendamento */}
                      <div className="flex">
                        <div className="bg-white rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 max-w-[80%] shadow-sm">
                          <p className="text-gray-800 text-xs sm:text-sm mb-2">
                            Que tal agendarmos 15 minutos para eu te mostrar como funciona? 📅
                          </p>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                            <p className="text-blue-800 text-xs font-medium">📅 Agendar reunião</p>
                            <p className="text-blue-600 text-xs">Clique para escolher horário</p>
                          </div>
                          <span className="text-xs text-gray-500">14:34</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-green-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Cards laterais - direita */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cards.slice(2, 4).map((card, index) => (
                <div
                  key={index + 2}
                  className="group p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-green-900/10 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500">
                      <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <button
                        onClick={() => handleCardClick(card.modalTitle, card.modalDescription)}
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium text-xs sm:text-sm hover:bg-gradient-to-r hover:from-green-500/30 hover:to-cyan-500/30 hover:border-green-400/50 transition-all duration-300"
                      >
                        {card.cta}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé do bloco */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/30">
              <p className="text-xl sm:text-2xl font-bold text-green-300 mb-4 sm:mb-6">
                Quer ver isso na prática? Fale com um assistente virtual agora mesmo no WhatsApp.
              </p>
              <button
                onClick={() => handleCardClick('Iniciar conversa', 'Fale agora com nosso assistente virtual no WhatsApp')}
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-black bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Iniciar conversa no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLeadSubmit}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    </>
  );
};

export default WhatsAppDemo;