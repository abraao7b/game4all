
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-game4all-dark/90 to-black/90 relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTUsMTM1LDI0NSwwLjA3KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-block p-3 glass-container mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-purple px-6">
              <span className="text-game4all-pink mr-2">👾</span> Quem Somos
            </h2>
          </div>
          <p className="font-sans text-white/80 max-w-2xl mx-auto mt-4">
            Conheça a equipe por trás da Game4All e nossa paixão por unir diversão retrô 
            e tecnologia moderna para criar experiências memoráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="glass-container p-6 rounded-xl mb-6">
              <p className="text-white/90 text-lg leading-relaxed font-sans">
                Somos David, Abraao, Kaiky e Thaynara, estudantes do curso Técnico em Manutenção e 
                Suporte em Informática com foco em hardware e redes.
              </p>
              <p className="text-white/90 text-lg leading-relaxed font-sans mt-4">
                Criamos a Game4All para levar diversão e nostalgia a todos os tipos de eventos, 
                com equipamentos personalizados, pensados por nós do zero.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-game4all-purple/20 to-transparent backdrop-blur-sm border-game4all-purple/30">
                <CardContent className="p-6">
                  <h3 className="font-sans font-bold text-xl text-game4all-purple mb-3">Missão</h3>
                  <p className="text-white/80 font-sans">
                    Levar experiências únicas e interativas com tecnologia acessível para todos os públicos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-game4all-pink/20 to-transparent backdrop-blur-sm border-game4all-pink/30">
                <CardContent className="p-6">
                  <h3 className="font-sans font-bold text-xl text-game4all-pink mb-3">Visão</h3>
                  <p className="text-white/80 font-sans">
                    Ser referência regional em entretenimento interativo para eventos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Modern team representation */}
            <div className="glass-container p-8 rounded-xl w-full max-w-md">
              <h3 className="font-sans font-bold text-xl text-white mb-6 text-center">Nossa Equipe</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "David", color: "purple" },
                  { name: "Abraoo", color: "blue" },
                  { name: "Kaiky", color: "pink" },
                  { name: "Thaynara", color: "green" }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-game4all-dark/60 border-2 border-game4all-${member.color} mb-3 flex items-center justify-center overflow-hidden`}>
                      <div className="text-3xl">{member.name.charAt(0)}</div>
                    </div>
                    <p className="font-sans font-medium text-white">{member.name}</p>
                    <p className="text-white/70 text-xs font-sans mt-1">Técnico em TI</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-white/80 font-sans">
                  "Unidos pela paixão de criar experiências que conectam tecnologia e diversão"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
