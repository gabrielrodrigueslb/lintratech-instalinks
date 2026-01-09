import { IoChatbubbleOutline } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import './App.css';

function App() {
  const links = [
    {
      id: 1,
      text: 'Fale conosco no WhatsApp',
      subtext: 'Desenvolva sua solução digital', // Adicionei um subtítulo opcional
      link: 'https://api.whatsapp.com/send?phone=5531984056082&text=Ol%C3%A1%21%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20de%20uma%20solu%C3%A7%C3%A3o%20digital%20para%20o%20meu%20neg%C3%B3cio.%20Podemos%20falar%3F',
      icon: 'whatsapp', // Identificador para ícone
      primary: true // Destaque para o botão principal
    },
    // Exemplo de outro link para ver como fica a lista
    {
      id: 2,
      text: 'Visite nosso Site',
      link: 'https://lintratech.cloud',
      icon: <BsGlobeAmericas/>,
      primary: false
    },
    {
      id: 2,
      text: 'Acesse nosso Blog',
      link: 'https://lintratech.cloud/blog',
      icon: <FaRegNewspaper/>,
      primary: false
    }
  ];

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background com Imagem e Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div> {/* Camada escura para contraste */}
        <div className="w-full h-full bg-[url('/bg.jpeg')] bg-cover bg-center blur-sm scale-105"></div>
      </div>

      <section className="relative z-10 w-full max-w-md mx-auto px-6 py-10 flex flex-col gap-8 animate-fade-in-up">
        
        {/* Cabeçalho do Perfil */}
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <div className="relative group">
            {/* Efeito de brilho atrás da logo */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
            
            {/* Logo */}
            <div className="relative bg-black rounded-full p-1">
               <div className="h-24 w-24 bg-[url('/logo.png')] bg-contain bg-center bg-no-repeat rounded-full bg-black/50"></div>
            </div>
          </div>

          <div className="flex flex-col items-center text-white">
            <h1 className="font-bold text-3xl tracking-tight">Lintra Tech</h1>
            <a
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium mt-1 flex items-center gap-2"
              href="https://www.instagram.com/lintratech/"
              target="_blank"
              rel="noreferrer"
            >
              @lintratech
            </a>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              Transformando ideias em soluções digitais de alta performance.
            </p>
          </div>
        </div>

        {/* Lista de Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((button) => (
            <a
              key={button.id}
              href={button.link}
              target="_blank"
              rel="noreferrer"
              className={`
                group relative w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300
                border border-white/10 hover:border-blue-500/50
                ${button.primary 
                  ? 'bg-blue-600/20 hover:bg-blue-600/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
                  : 'bg-white/5 hover:bg-white/10'}
                hover:scale-[1.02]
              `}
            >
              {/* Ícone (SVG Inline para não depender de lib externa) */}
              <div className="text-2xl text-white">
                {button.icon === 'whatsapp' ? (
                 <IoChatbubbleOutline />
                ) : button.icon == '' ? (
                  <CiLink />
                ) : (button.icon)}
              </div>

              <div className="flex flex-col items-start flex-1">
                <span className="font-bold text-white text-base">{button.text}</span>
                {button.subtext && (
                  <span className="text-xs text-gray-400 font-light">{button.subtext}</span>
                )}
              </div>

              {/* Seta indicativa no final do botão */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2.5 group-hover:translate-x-0 transition-all duration-300 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </a>
          ))}
        </div>

      </section>

      {/* Footerzinho simples */}
      <footer className="absolute bottom-4 text-gray-500 text-xs">
        © 2025 Lintra Tech. All rights reserved.
      </footer>
    </main>
  );
}

export default App;