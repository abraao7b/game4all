
import { Gamepad, Music2, Mic, HardDrive, Camera } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Gamepad className="w-10 h-10 text-game4all-purple" />,
      title: "Fliperamas Retrô Personalizados",
      description: "Diversos jogos clássicos prontos para jogar!",
      color: "purple"
    },
    {
      icon: <Music2 className="w-10 h-10 text-game4all-blue" />,
      title: "Jukebox Digital",
      description: "Toque suas músicas favoritas no estilo antigo com tecnologia atual!",
      color: "blue"
    },
    {
      icon: <Mic className="w-10 h-10 text-game4all-pink" />,
      title: "Karaokê Interativo",
      description: "Cante com seus amigos e faça do seu evento um show à parte.",
      color: "pink"
    },
    {
      icon: <HardDrive className="w-10 h-10 text-green-400" />,
      title: "HDs com Jogos para Venda",
      description: "HDs completos com emuladores e jogos configurados para uso em casa!",
      color: "green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1MSwxOTUsMjQwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-1 border-2 border-game4all-blue rounded-2xl mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-blue px-6 py-1 animate-neon-pulse">
              <span className="text-game4all-pink mr-2">🚀</span> O que Oferecemos
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            let bgColor, borderColor, shadowColor;
            
            switch(service.color) {
              case "purple":
                bgColor = "from-game4all-purple/20 to-game4all-purple/5";
                borderColor = "border-game4all-purple";
                shadowColor = "shadow-game4all-purple/30";
                break;
              case "blue":
                bgColor = "from-game4all-blue/20 to-game4all-blue/5";
                borderColor = "border-game4all-blue";
                shadowColor = "shadow-game4all-blue/30";
                break;
              case "pink":
                bgColor = "from-game4all-pink/20 to-game4all-pink/5";
                borderColor = "border-game4all-pink";
                shadowColor = "shadow-game4all-pink/30";
                break;
              default:
                bgColor = "from-green-400/20 to-green-400/5";
                borderColor = "border-green-400";
                shadowColor = "shadow-green-400/30";
            }
            
            return (
              <div 
                key={index}
                className={`bg-gradient-to-b ${bgColor} backdrop-blur-sm border ${borderColor} rounded-2xl p-6 flex flex-col items-center shadow-lg ${shadowColor} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-game4all-dark border-2 border-white/10">
                  {service.icon}
                </div>
                <h3 className="font-arcade text-lg text-white mb-4 text-center">{service.title}</h3>
                <p className="font-quicksand text-gray-300 text-center">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
