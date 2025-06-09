import React from 'react';

const LogoBanner = () => {
  const logos = [
    { src: '/whatsapp-logo.png', alt: 'WhatsApp' },
    { src: '/gpt-logo.png', alt: 'OpenAI GPT' },
    { src: '/logo.png', alt: 'IA4SALES' },
    { src: '/whatsapp-logo.png', alt: 'WhatsApp' },
    { src: '/gpt-logo.png', alt: 'OpenAI GPT' },
    { src: '/logo.png', alt: 'IA4SALES' },
    { src: '/whatsapp-logo.png', alt: 'WhatsApp' },
    { src: '/gpt-logo.png', alt: 'OpenAI GPT' },
    { src: '/logo.png', alt: 'IA4SALES' },
    { src: '/whatsapp-logo.png', alt: 'WhatsApp' },
    { src: '/gpt-logo.png', alt: 'OpenAI GPT' },
    { src: '/logo.png', alt: 'IA4SALES' }
  ];

  return (
    <div className="py-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border-y border-gray-700/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-infinite">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[42px] w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 filter brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default LogoBanner;