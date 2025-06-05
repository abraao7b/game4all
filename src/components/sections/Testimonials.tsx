
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O fliperama da Game4All foi a atração da festa!",
      author: "Cliente satisfeito",
    },
    {
      quote: "Simplesmente incrível o karaokê deles, a galera amou.",
      author: "Organizador de evento",
    },
    {
      quote: "O atendimento é excelente e os equipamentos são de primeira qualidade.",
      author: "Cliente recorrente",
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-black relative">
      {/* Diagonal grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsLWdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjAgTDYwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTUsMTM1LDI0NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwtZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-1 border-2 border-game4all-purple rounded-lg mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-purple px-4 animate-neon-pulse">
              <span className="text-game4all-pink mr-2">💬</span> Depoimentos
            </h2>
          </div>
        </div>
        
        {/* Testimonial cards styled as mini arcade screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative bg-game4all-dark border-4 ${
                index === 0 
                  ? 'border-game4all-purple'
                  : index === 1
                    ? 'border-game4all-blue'
                    : 'border-game4all-pink'
              } rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform`}
            >
              {/* Screen scanlines */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHdpZHRoPSIyIiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+PC9zdmc+')] opacity-20"></div>
              
              {/* Content */}
              <div className="p-6 relative z-10 backdrop-blur-sm bg-gradient-to-br from-black/40 to-transparent">
                <Quote 
                  className={`w-10 h-10 mb-4 ${
                    index === 0 
                      ? 'text-game4all-purple'
                      : index === 1
                        ? 'text-game4all-blue'
                        : 'text-game4all-pink'
                  }`} 
                />
                
                <p className="text-white mb-6 italic">{testimonial.quote}</p>
                
                <div className="flex items-center justify-end mt-auto">
                  <p className={`font-arcade text-sm ${
                    index === 0 
                      ? 'text-game4all-purple'
                      : index === 1
                        ? 'text-game4all-blue'
                        : 'text-game4all-pink'
                  }`}>— {testimonial.author}</p>
                </div>
              </div>
              
              {/* Control lights */}
              <div className="absolute bottom-2 left-2 flex space-x-1">
                <div className={`w-2 h-2 rounded-full ${
                  index === 0 
                    ? 'bg-game4all-purple'
                    : index === 1
                      ? 'bg-game4all-blue'
                      : 'bg-game4all-pink'
                } animate-pulse`}></div>
                <div className={`w-2 h-2 rounded-full ${
                  index === 0 
                    ? 'bg-game4all-blue'
                    : index === 1
                      ? 'bg-game4all-pink'
                      : 'bg-game4all-purple'
                } animate-pulse delay-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
