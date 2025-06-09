import React from 'react';
import { AlertTriangle, Clock, Users, BarChart, Wrench, DollarSign } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Leads que chegam e não são atendidos',
      description: 'Oportunidades perdidas por falta de resposta rápida'
    },
    {
      icon: Users,
      title: 'SDRs sobrecarregados e mal treinados',
      description: 'Equipe esgotada tentando dar conta de todo o volume'
    },
    {
      icon: AlertTriangle,
      title: 'Gerentes apagando incêndio todos os dias',
      description: 'Gestão reativa ao invés de estratégica'
    },
    {
      icon: BarChart,
      title: 'Ferramentas demais, visão de menos',
      description: 'Dados espalhados sem inteligência real'
    },
    {
      icon: Wrench,
      title: 'Vendedores sem tempo para vender',
      description: 'Tempo perdido em tarefas operacionais'
    },
    {
      icon: DollarSign,
      title: 'ROI do marketing despencando',
      description: 'Investimento alto com conversão baixa'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            O que está{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              matando as operações comerciais
            </span>{' '}
            no Brasil
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-red-900/10 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <p className="text-lg sm:text-xl font-semibold text-cyan-300 mb-4">
              A IA4SALES resolve tudo isso com uma só engrenagem.
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Transforme problemas operacionais em vantagem competitiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;