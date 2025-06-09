import React, { useState } from 'react';
import { ArrowDown, Bot, Zap, Target } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-capture');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLeadSubmit = (data: { name: string; company: string; phone: string }) => {
    const message = encodeURIComponent(
      `Olá, aqui é o ${data.name}! Acabei de ver os dados do meu negócio com a IA4Sales e quero entender como isso pode funcionar comigo.`
    );
    const whatsappUrl = `https://wa.me/5551989648007?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
                SUA NOVA{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  MÁQUINA DE VENDAS
                </span>{' '}
                POR ASSINATURA
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A inteligência invisível que automatiza sua operação comercial e multiplica seus agendamentos qualificados — sem depender de SDRs ou gestores pressionando planilhas.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-center">Quero transformar minha operação agora</span>
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Right side - Visual with Logo */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                {/* Main circle */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"></div>
                  
                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt="IA4SALES Logo" 
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  {/* Floating icons */}
                  <div className="absolute top-6 sm:top-8 right-6 sm:right-8 animate-bounce delay-300">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300" />
                  </div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 animate-bounce delay-700">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLeadSubmit}
        title="Transforme sua operação agora"
        description="Preencha seus dados e vamos te mostrar como funciona na prática"
      />
    </>
  );
};

export default Hero;