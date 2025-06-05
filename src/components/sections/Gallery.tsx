
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  // Imagens locais da pasta public/images/
  const galleryImages = [
    {
      src: "/images/arcade.jpeg",
      alt: "Fliperama com iluminação neon",
      category: "Arcade"
    },
    {
      src: "/images/detalhe.jpg",
      alt: "Detalhe do fliperama retrô",
      category: "Detalhe"
    },
    {
      src: "/images/jukebox.jpg",
      alt: "Jukebox Digital em evento",
      category: "Jukebox"
    },
    {
      src: "/images/tecnologia.jpg",
      alt: "Detalhe da eletrônica dos equipamentos",
      category: "Tecnologia"
    },
    {
      src: "/images/karaoke.jpg",
      alt: "Karaokê em evento",
      category: "Karaokê"
    },
    {
      src: "/images/evento.jpg",
      alt: "Evento com equipamentos Game4All",
      category: "Evento"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black/80 to-game4all-dark/80 relative">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-game4all-dark/50 via-black/40 to-game4all-dark/60 z-0"></div>

      {/* Grid background with subtle blur */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTcsNzAsMjM5LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-20 backdrop-blur-[1px]"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block p-3 glass-container mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-pink px-6">
              <span className="text-game4all-blue mr-2">📷</span> Galeria de Equipamentos
            </h2>
          </div>
          <p className="font-quicksand text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
            Conheça nossos equipamentos exclusivos customizados para seus eventos. 
            Design moderno com a nostalgia que todo mundo ama!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden friendly-card cursor-pointer"
            >
              <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-quicksand text-white/90">{image.category}</span>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>

              {/* Info overlay - more readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-quicksand font-medium text-lg">{image.alt}</p>
                <p className="text-gray-300 text-sm mt-2 font-quicksand">Clique para ver mais detalhes</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic font-quicksand">
            * As imagens são ilustrativas. Entre em contato para ver nosso catálogo completo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
