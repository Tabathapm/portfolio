import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 hover:scale-105 transition-transform">
          TP
        </Link>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#educacion" className="hover:text-white transition-colors">Educación</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;