
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    console.log('Formulário enviado:', formData);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Retornaremos em breve.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-game4all-dark relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-game4all-purple via-game4all-blue to-game4all-pink"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTcsNzAsMjM5LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-1 border-2 border-game4all-pink rounded-lg mb-4">
            <h2 className="font-arcade text-2xl md:text-3xl text-game4all-pink px-4 animate-neon-pulse">
              <span className="text-game4all-blue mr-2">📬</span> Fale com a Game4All
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div>
            <div className="bg-game4all-dark/70 backdrop-blur-sm border border-game4all-pink/30 rounded-lg p-6 shadow-lg shadow-game4all-pink/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-white block text-sm">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-game4all-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-purple"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-white block text-sm">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/50 border border-game4all-blue/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-blue"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-white block text-sm">Telefone (WhatsApp)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/50 border border-game4all-blue/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-blue"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="service" className="text-white block text-sm">Tipo de serviço desejado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-game4all-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-purple"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="fliperama">Fliperamas Retrô</option>
                    <option value="jukebox">Jukebox Digital</option>
                    <option value="karaoke">Karaokê Interativo</option>
                    <option value="hds">HDs com Jogos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="date" className="text-white block text-sm">Data do evento</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-game4all-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-purple"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-white block text-sm">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-game4all-blue/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-game4all-blue"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-game4all-purple to-game4all-blue hover:from-game4all-blue hover:to-game4all-purple text-white font-bold py-3 rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          {/* Informações de contato */}
          <div className="flex flex-col justify-center">
            <div className="bg-game4all-dark/50 backdrop-blur-sm border border-game4all-blue/30 rounded-lg p-6 shadow-lg shadow-game4all-blue/10 mb-8">
              <h3 className="font-arcade text-xl text-game4all-blue mb-6">Outras formas de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-game4all-dark border border-game4all-pink flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-game4all-pink" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">(XX) XXXXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-game4all-dark border border-game4all-purple flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-game4all-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <p className="text-white">@game4all.fun</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-game4all-dark border border-game4all-blue flex items-center justify-center">
                    <Mail className="w-6 h-6 text-game4all-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">E-mail</p>
                    <p className="text-white">contato@game4all.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-game4all-purple/20 to-game4all-pink/20 backdrop-blur-sm border border-game4all-pink/30 rounded-lg p-6">
              <h3 className="font-arcade text-xl text-white mb-4">Atendemos em toda região:</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-game4all-purple"></span>
                  <span>São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-game4all-blue"></span>
                  <span>Guarulhos - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-game4all-pink"></span>
                  <span>Osasco - SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-game4all-purple"></span>
                  <span>ABC - SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão de whatsapp fixo - REDUCED SIZE */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/SEUNUMEROAQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-1.5 px-3 rounded-full shadow-lg transition-all hover:shadow-xl animate-pulse hover:animate-none text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
