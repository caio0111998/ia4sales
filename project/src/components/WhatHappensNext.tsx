import React from 'react';
import { Search, Map, Zap } from 'lucide-react';

const WhatHappensNext = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analisamos sua operação',
      description: 'Identificamos gargalos e oportunidades de automação'
    },
    {
      icon: Map,
      title: 'Mostramos o mapa ideal',
      description: 'Apresentamos a estratégia personalizada para seu negócio'
    },
    {
      icon: Zap,
      title: 'Definimos pontos de impacto',
      description: 'Priorizamos implementações de maior retorno imediato'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ao preencher, você verá como aplicamos nossa IA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              no seu contexto
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-green-900/10 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/30">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Analisamos sua operação, mostramos o mapa ideal de automação e os pontos de maior impacto imediato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;