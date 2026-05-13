import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <img 
              src="https://lh3.googleusercontent.com/d/1igEQKa7-gC39e7iOJy2zRPc2h5qPzskE" 
              alt="Logo" 
              className="w-48 h-auto object-contain drop-shadow-md"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <div className="flex space-x-4 text-primary pt-2">
            <a href="#" className="hover:text-primary-hover transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary-hover transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4 text-ink">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link to="/planos" className="hover:text-primary transition-colors">Planos e Preços</Link></li>
            <li><Link to="/equipe" className="hover:text-primary transition-colors">Nossos Treinadores</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4 text-ink">Contato</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>R. Uruguaiana, 1144/1152 <br /> Bosque, Campinas - SP</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>(19) 98374-1258</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>marimoreira.pilates@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4 text-ink">Horários</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start space-x-3">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-ink">Segunda a Quinta</p>
                <p>07h às 13h | 14h às 21h</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-ink">Sexta-feira</p>
                <p>07h às 13h | 14h às 20h</p>
              </div>
            </li>
            <li className="text-xs italic text-zinc-400">* Sábados e Domingos: Fechado</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 border-t border-primary/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center text-[10px] sm:text-xs text-muted">
          <p>© {new Date().getFullYear()} Mari Moreira Pilates. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://qualitycorpagencia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Quality Corp Agência</a></p>
        </div>
      </div>
    </footer>
  );
}
