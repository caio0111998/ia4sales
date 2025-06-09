import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, TrendingUp, Zap, RotateCcw, Calendar } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    attendants: '',
    leadsPerWeek: '',
    ticketMedio: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState({
    horasEconomizadas: 0,
    produtividadeMensal: 0,
    receitaPotencial: 0,
    eficienciaPercentual: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateImpact = () => {
    const attendants = parseInt(inputs.attendants) || 0;
    const leadsPerWeek = parseInt(inputs.leadsPerWeek) || 0;
    const ticketMedio = parseFloat(inputs.ticketMedio) || 0;

    // Cálculos conforme especificação
    const tempo_resposta_atual = 3; // 3 horas
    const tempo_resposta_ia = 0.0028; // 10 segundos em horas
    
    const tempo_economizado_por_lead = tempo_resposta_atual - tempo_resposta_ia;
    const horas_economizadas_semanais = tempo_economizado_por_lead * leadsPerWeek;
    const custo_hora_humana = 2500 / 160; // R$ 15.62
    
    const valor_produtividade_ia = horas_economizadas_semanais * custo_hora_humana;
    const leads_potencialmente_convertidos = leadsPerWeek * 0.30;
    const receita_adicional = leads_potencialmente_convertidos * ticketMedio;
    
    const custo_humano_total = attendants * 2500;
    const economia_operacional_potencial = (valor_produtividade_ia / custo_humano_total) * custo_humano_total;

    setResults({
      horasEconomizadas: Math.round(horas_economizadas_semanais),
      produtividadeMensal: Math.round(valor_produtividade_ia * 4), // mensal
      receitaPotencial: Math.round(receita_adicional * 4), // mensal
      eficienciaPercentual: Math.round((economia_operacional_potencial / custo_humano_total) * 100)
    });

    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
  };

  const handleLeadSubmit = (data: { name: string; company: string; phone: string }) => {
    const message = encodeURIComponent(
      `Olá, aqui é o ${data.name}! Acabei de ver os dados do meu negócio com a IA4Sales e quero entender como isso pode funcionar comigo.`
    );
    const whatsappUrl = `https://wa.me/5551989648007?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = inputs.attendants && inputs.leadsPerWeek && inputs.ticketMedio;

  return (
    <>
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Saiba quanto dinheiro está{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                deixando na mesa
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-6 sm:mb-8">
              Calculadora de ROI
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
              Preencha os campos abaixo e veja como a IA4Sales pode transformar produtividade em lucro real
            </p>
          </div>

          {/* Aviso contextual */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 text-center">
              <p className="text-cyan-300 text-xs sm:text-sm">
                🧮 Esta é uma calculadora interativa — os resultados são simulados com base em benchmarks de mercado para times de vendas com atendimento humano assistido por IA.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {!showResults ? (
              /* Inputs Section */
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-gray-900/60 to-blue-900/20 border border-gray-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Configure sua operação atual</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Atendentes */}
                  <div className="space-y-4">
                    <label className="block text-base sm:text-lg font-medium text-gray-300">
                      Quantos atendentes você tem hoje?
                    </label>
                    <input
                      type="number"
                      name="attendants"
                      value={inputs.attendants}
                      onChange={handleInputChange}
                      placeholder="Ex: 3"
                      min="1"
                      className="w-full px-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    />
                  </div>

                  {/* Leads por semana */}
                  <div className="space-y-4">
                    <label className="block text-base sm:text-lg font-medium text-gray-300">
                      Quantos leads você recebe por semana?
                    </label>
                    <input
                      type="number"
                      name="leadsPerWeek"
                      value={inputs.leadsPerWeek}
                      onChange={handleInputChange}
                      placeholder="Ex: 150"
                      min="1"
                      className="w-full px-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    />
                  </div>

                  {/* Ticket médio */}
                  <div className="space-y-4">
                    <label className="block text-base sm:text-lg font-medium text-gray-300">
                      Qual o ticket médio do seu principal produto?
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg">R$</span>
                      <input
                        type="number"
                        name="ticketMedio"
                        value={inputs.ticketMedio}
                        onChange={handleInputChange}
                        placeholder="Ex: 397"
                        min="1"
                        step="0.01"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Botão Calcular */}
                <div className="text-center">
                  <button
                    onClick={calculateImpact}
                    disabled={!isFormValid}
                    className={`px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 transform ${
                      isFormValid
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] hover:scale-105 cursor-pointer'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Zap className="inline-block w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Calcular Impacto
                  </button>
                </div>
              </div>
            ) : (
              /* Results Section */
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    📊 Seu Relatório de Impacto
                  </h3>
                  <p className="text-gray-300">
                    Veja como a IA4SALES transformaria sua operação
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Bloco 1 - Tempo */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/40 text-center transform hover:scale-105 transition-all duration-300">
                    <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">🕒 Tempo economizado</div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                      {results.horasEconomizadas} horas
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">
                      por semana com IA
                    </div>
                  </div>

                  {/* Bloco 2 - Produtividade */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/40 text-center transform hover:scale-105 transition-all duration-300">
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-4" />
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">💰 Produtividade mensal</div>
                    <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                      R$ {results.produtividadeMensal.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">
                      em valor gerado
                    </div>
                  </div>

                  {/* Bloco 3 - Receita */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/40 text-center transform hover:scale-105 transition-all duration-300">
                    <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">🚀 Receita potencial adicional</div>
                    <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                      R$ {results.receitaPotencial.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">
                      por mês
                    </div>
                  </div>

                  {/* Bloco 4 - Eficiência */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/40 text-center transform hover:scale-105 transition-all duration-300">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-4" />
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">⚡ Eficiência da equipe</div>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
                      +{results.eficienciaPercentual}%
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">
                      sem contratar mais ninguém
                    </div>
                  </div>
                </div>

                {/* Botão Refazer */}
                <div className="text-center mt-6 sm:mt-8">
                  <button
                    onClick={resetCalculator}
                    className="px-6 sm:px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <RotateCcw className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Refazer com outros números
                  </button>
                </div>

                {/* CTA Final */}
                <div className="mt-8 sm:mt-12 text-center">
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                    <h4 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                      🔍 Quer ver isso funcionando no seu negócio em tempo real?
                    </h4>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300 transform hover:scale-105"
                    >
                      <Calendar className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Agende um diagnóstico gratuito com nosso time
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLeadSubmit}
        title="Diagnóstico gratuito"
        description="Preencha seus dados e vamos analisar sua operação gratuitamente"
      />
    </>
  );
};

export default ROICalculator;