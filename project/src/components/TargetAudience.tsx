import React from 'react';
import { Building2, Users, Calendar, DollarSign } from 'lucide-react';

const TargetAudience = () => {
  const criteria = [
    {
      icon: Building2,
      text: 'B2B ou B2C com alto volume de leads'
    },
    {
      icon: Users,
      text: 'Times comerciais entre 3 e 300 pessoas'
    },
    {
      icon: Calendar,
      text: 'Empresas que dependem de agendamento'
    },
    {
      icon: DollarSign,
      text: 'Quem gasta R$ 10k+ por mês em marketing e quer ROI real'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Serve para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              sua empresa?
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className="group flex items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-blue-900/10 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 mr-4 sm:mr-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-500">
                    <criterion.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <p className="text-base sm:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                  {criterion.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional qualifying questions */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">
              Se você respondeu SIM para pelo menos 2 itens acima...
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Sua empresa está pronta para multiplicar resultados com IA4SALES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;