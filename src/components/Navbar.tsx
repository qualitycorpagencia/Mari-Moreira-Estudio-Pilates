import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Nosso Espaço', path: '/espaco' },
  { name: 'Planos', path: '/planos' },
  { name: 'Treinadores', path: '/equipe' },
  { name: 'Contato', path: '/contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const textColorClass = 'text-primary';
  const activeColorClass = 'text-primary font-bold';
  const hoverColorClass = 'hover:text-primary-hover';

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4 md:py-6 pointer-events-none">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center pointer-events-auto">
        <Link to="/" className={`flex items-center shrink-0 ${isHome ? 'drop-shadow-xl' : 'drop-shadow-md'}`}>
          <img 
            src="https://lh3.googleusercontent.com/d/1H6iKrs-QUjTwbtldzbHnOuJj8eMq3A7g" 
            alt="Logo" 
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-[13px] xl:text-[15px] uppercase tracking-[0.1em] font-bold whitespace-nowrap transition-all duration-300 hover:scale-105 relative group drop-shadow-sm ${hoverColorClass} ${
                (location.pathname === link.path) || (location.pathname + location.hash === link.path)
                  ? activeColorClass
                  : textColorClass
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                (location.pathname === link.path) || (location.pathname + location.hash === link.path) ? 'w-full' : ''
              }`} />
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates.%20Pode%20me%20ajudar?"
            target="_blank"
            rel="noreferrer"
            className={`btn-primary py-3 px-6 xl:px-10 text-[12px] xl:text-[13px] uppercase tracking-widest font-bold whitespace-nowrap shadow-2xl active:scale-95 transition-all shrink-0`}
          >
            Agendar Aula
          </a>
        </div>

      {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="lg:hidden text-primary p-2 rounded-full hover:bg-primary/5 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[-1] lg:hidden pointer-events-auto"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-primary/10 overflow-hidden pointer-events-auto"
            >
              <div className="py-8 px-6 flex flex-col space-y-6 items-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-sans text-xl uppercase tracking-widest transition-all ${
                        (location.pathname === link.path) || (location.pathname + location.hash === link.path)
                          ? 'text-primary font-bold scale-105'
                          : 'text-primary/80'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  className="w-full max-w-xs"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates.%20Pode%20me%20ajudar?"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full block text-center"
                  >
                    Agendar Aula
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.2 }}
                  className="flex space-x-6 pt-4 text-primary"
                >
                  <Instagram size={24} className="hover:scale-110 transition-transform cursor-pointer" />
                  <Facebook size={24} className="hover:scale-110 transition-transform cursor-pointer" />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
