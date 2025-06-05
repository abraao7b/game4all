
const Footer = () => {
  return (
    <footer className="bg-game4all-dark border-t border-game4all-purple/20 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-arcade text-game4all-purple whitespace-nowrap">
              Game<span className="text-game4all-blue">4</span><span className="text-game4all-pink">All</span>
            </span>
            <p className="text-gray-400 mt-2 text-sm">Diversão garantida em qualquer evento!</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className="text-gray-400 hover:text-game4all-purple transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-game4all-purple transition-colors">Sobre</a>
            <a href="#services" className="text-gray-400 hover:text-game4all-purple transition-colors">Serviços</a>
            <a href="#gallery" className="text-gray-400 hover:text-game4all-purple transition-colors">Galeria</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-game4all-purple transition-colors">Como Funciona</a>
            <a href="#contact" className="text-gray-400 hover:text-game4all-purple transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Game4All. Todos os direitos reservados.</p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 rounded-full bg-game4all-dark border border-game4all-purple/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game4all-purple">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 rounded-full bg-game4all-dark border border-game4all-blue/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game4all-blue">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 rounded-full bg-game4all-dark border border-game4all-pink/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-game4all-pink">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
