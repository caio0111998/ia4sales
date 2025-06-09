import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const WhatsAppFloat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLeadSubmit = (data: { name: string; company: string; phone: string }) => {
    const message = encodeURIComponent(
      `Olá, aqui é o ${data.name}! Acabei de ver os dados do meu negócio com a IA4Sales e quero entender como isso pode funcionar comigo.`
    );
    const whatsappUrl = `https://wa.me/5551989648007?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-110 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale com nossa equipe agora
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLeadSubmit}
        title="Fale com nossa equipe"
        description="Preencha seus dados para conversar diretamente conosco no WhatsApp"
      />
    </>
  );
};

export default WhatsAppFloat;