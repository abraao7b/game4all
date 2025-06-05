
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: "📩",
      title: "Contato",
      description: "Você faz o contato e informa a data do evento."
    },
    {
      icon: "📦",
      title: "Preparação",
      description: "Nós preparamos os equipamentos personalizados."
    },
    {
      icon: "🚚",
      title: "Entrega",
      description: "Levamos até o local do evento."
    },
    {
      icon: "🕹️",
      title: "Instalação",
      description: "Garantimos a instalação e funcionamento."
    },
    {
      icon: "🎉",
      title: "Aproveite",
      description: "Você e seus convidados aproveitam sem preocupação!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-game4all-dark/80 to-black/80 relative">
      {/* Soft decorative elements */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-game4all-purple/30 via-game4all-blue/30 to-game4all-pink/30 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block p-3 glass-container mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-blue px-6">
              <span className="text-game4all-pink mr-2">📅</span> Como Funciona?
            </h2>
          </div>
          <p className="font-sans text-white/80 max-w-2xl mx-auto mt-4">
            Nosso processo é simples e descomplicado! Veja como garantir
            diversão para seu evento em apenas 5 passos:
          </p>
        </div>
        
        {/* Timeline for larger screens - Modern, clean approach */}
        <div className="hidden md:block relative max-w-4xl mx-auto mb-16">
          {/* Timeline line - subtle gradient */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-game4all-purple/50 via-game4all-blue/50 to-game4all-pink/50 rounded-full"></div>
          
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center w-32">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center glass-container z-10 text-2xl`}>
                  {step.icon}
                </div>
                
                <div className={`mt-6 text-center`}>
                  <h3 className="font-sans font-bold text-lg mb-1 text-white">{step.title}</h3>
                  <p className="text-white/70 text-sm font-sans">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* List for mobile - More readable */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 friendly-card">
              <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center glass-container text-xl`}>
                {step.icon}
              </div>
              
              <div>
                <h3 className="font-sans font-bold text-lg mb-1 text-white">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm font-sans">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto glass-container p-8">
          <h3 className="font-sans font-bold text-xl text-white mb-6 text-center">Por que escolher a Game4All?</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 text-game4all-purple" />
              <span className="text-white/90 font-sans">Equipamentos exclusivos e personalizados para seu evento</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 text-game4all-blue" />
              <span className="text-white/90 font-sans">Entrega, instalação e retirada incluídas no pacote</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 text-game4all-pink" />
              <span className="text-white/90 font-sans">Suporte técnico durante todo o evento para sua tranquilidade</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 text-green-400" />
              <span className="text-white/90 font-sans">Experiência nostálgica com tecnologia atual para todas as idades</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
