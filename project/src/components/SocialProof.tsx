import React from 'react';
import { Award, Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Gustavo Moreira',
      text: 'Com a IA4Sales, conseguimos escalar para mais de 60 reuniões por semana sem contratar ninguém a mais no time de vendas. A estrutura ficou muito mais leve, e a máquina roda sozinha. É surreal como economiza tempo e entrega resultado.'
    },
    {
      name: 'Carla Menezes',
      text: 'Antes, os leads que chegavam no fim de semana só eram atendidos na segunda — aí a maioria esfriava. Hoje a IA atende em segundos, marca reunião e ainda coleta as infos certinhas. Mudou completamente nossa taxa de agendamento.'
    },
    {
      name: 'Paulo Arantes',
      text: 'Eu testei várias ferramentas antes, mas nenhuma dava visão real da operação. A IA4Sales resolve o atendimento e ainda entrega dados, previsibilidade e controle. Sem dúvidas, o melhor custo-benefício que já vi. Nada no mercado é parecido.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Já operamos sistemas de venda invisíveis para os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
              maiores grupos do Brasil
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-gray-900/60 to-purple-900/20 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-400 opacity-60" />
              </div>
              
              <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mr-3">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-purple-300 text-xs sm:text-sm">
                    Cliente IA4SALES
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical authority */}
        <div className="text-center">
          <div className="inline-block p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-lg sm:text-xl font-semibold text-purple-300 mb-4">
              Usamos IA real, com engenharia RAG, orquestrando múltiplos canais e sistemas.
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              Nada de bots com respostas prontas.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { number: '500K+', label: 'Leads processados' },
            { number: '89%', label: 'Taxa de qualificação' },
            { number: '3.2x', label: 'ROI médio' },
            { number: '24/7', label: 'Uptime garantido' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mb-2">
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

export default SocialProof;