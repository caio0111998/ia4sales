import React from 'react';
import { Check, TrendingDown, TrendingUp, Zap, Users, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      text: 'Diminua seu custo por aquisição em até 50%'
    },
    {
      icon: TrendingUp,
      text: 'Dobre o número de agendamentos semanais'
    },
    {
      icon: Zap,
      text: 'Acelere ciclos de venda e escale com menos equipe'
    },
    {
      icon: Users,
      text: 'Elimine o gargalo entre Marketing e Vendas'
    },
    {
      icon: Clock,
      text: 'Implante em poucos dias, sem depender de devs'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            O que você ganha com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              IA4SALES
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 mr-4 sm:mr-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-500">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                </div>
                
                <div className="flex-grow flex items-center">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '50%', label: 'Redução de custos' },
            { number: '2x', label: 'Mais agendamentos' },
            { number: '72h', label: 'Para implementar' },
            { number: '24/7', label: 'Atendimento ativo' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;