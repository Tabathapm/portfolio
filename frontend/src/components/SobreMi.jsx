
const SobreMi = () => {
  return (
    // El id="sobre-mi" es fundamental. Tiene que coincidir EXACTAMENTE con el href="#sobre-mi" del Navbar.
    <section id="sobre-mi" className="py-20 border-b border-slate-800/50">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Sobre Mí 📖</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Cargando la historia ...
        </p>
      </div>
    </section>
  );
};

export default SobreMi;