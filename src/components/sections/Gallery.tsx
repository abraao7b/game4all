
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {

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
              <span className="text-game4all-blue mr-2">🎥</span> Vídeo Tutorial
            </h2>
          </div>
          <p className="font-quicksand text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
            Assista nosso vídeo tutorial e veja como nossos equipamentos funcionam.
            Aprenda tudo sobre nossas soluções de entretenimento!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl friendly-card">
                {/* <div className="w-full h-full bg-game4all-dark/60 border-2 border-game4all-blue/30 border-dashed flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-4 text-game4all-blue/60">🎥</div>
                  <h3 className="text-xl font-arcade text-game4all-pink mb-2">Vídeo Tutorial</h3>
                  <p className="text-white/70 font-quicksand text-center max-w-md">
                    Adicione seu vídeo tutorial na pasta do projeto para que os visitantes possam aprender sobre nossos equipamentos
                  </p>
                  <div className="mt-4 px-4 py-2 bg-black/30 rounded-lg">
                    <code className="text-game4all-blue text-sm font-mono">
                      /public/videos/tutorial.mp4
                    </code>
                  </div>
                </div> */}
                <div className="w-full h-full bg-game4all-dark/60 border-2 border-game4all-blue/30 border-dashed flex flex-col items-center justify-center p-8">
                  <iframe width="768" height="546" src="https://www.youtube.com/embed/A-BFPurW6hk?si=ZE3uH29f71mTpbFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  {/* <video src=""></video> */}
                </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic font-quicksand">
            * Adicione o arquivo de vídeo na pasta indicada para exibir o tutorial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
