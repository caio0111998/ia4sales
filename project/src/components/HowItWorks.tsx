import React from 'react';
import { Target, Brain, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: 'Atende',
      description: 'automaticamente seus leads em todos os canais'
    },
    {
      icon: Brain,
      title: 'Qualifica e agenda',
      description: 'reuniões com precisão cirúrgica'
    },
    {
      icon: BarChart3,
      title: 'Entrega dados e previsibilidade',
      description: 'em tempo real'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Seu time de vendas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              nunca mais será o mesmo
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Connection line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform translate-x-4"></div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced visual section with both mockups */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Interface mockup */}
          <div className="text-center">
            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50">
              <div className="w-full max-w-md mx-auto bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">IA4SALES Interface</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-sm text-gray-300">Lead: João Silva</span>
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">Qualificado</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-sm text-gray-300">Reunião agendada</span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Confirmada</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-sm text-gray-300">Follow-up automático</span>
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Executando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - System screens */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-gray-800/30 p-4">
              <img 
                src="/ACME INDUSTRY.png" 
                alt="IA4SALES - Sistema All-in-One de Vendas" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              {/* Overlay with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <span className="text-xs sm:text-sm font-bold text-white">ALL-IN-ONE DE VERDADE</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Description below the images */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">IA, CRM e campanhas</span> que trabalham{' '}
              <span className="text-green-400 font-semibold">24h</span> pra você{' '}
              <span className="text-cyan-400 font-semibold">vender mais</span> — no piloto automático.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;