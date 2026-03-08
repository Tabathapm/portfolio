const Educacion = () => {
    return (
        <section id="educacion" className="py-20 border-b border-slate-800/50">
            <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-white mb-12">Educación 🎓</h2>

                {/* Contenedor principal*/}
                <div className="relative border-l border-purple-500/30 ml-3 md:ml-6">
          
                {/* Tecnicatura */}
                <div className="mb-12 ml-8 group">
                    {/* El puntito en la línea */}
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full -left-[9px] ring-4 ring-slate-900 mt-1.5 group-hover:bg-pink-400 transition-colors"></span>
            
                    <h3 className="text-xl font-bold text-blue-400">Tecnicatura Universitaria en Desarrollo Web</h3>
                    <p className="text-slate-300 font-medium text-lg">Universidad Nacional de La Matanza (UNLaM)</p>
                    <time className="block mb-4 text-sm font-normal leading-none text-slate-500">Graduada en 2024</time>
                    <p className="text-slate-400 text-base">
                    Fundamentos sólidos en programación, bases de datos y desarrollo Full Stack.
                    </p>
                </div>

                {/* Ingeniería */}
                <div className="ml-8 group">
                    {/* El puntito en la línea */}
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full -left-[9px] ring-4 ring-slate-900 mt-1.5 group-hover:bg-purple-400 transition-colors"></span>
                    
                    <h3 className="text-xl font-bold text-purple-400">Ingeniería Informática</h3>
                    <p className="text-slate-300 font-medium text-lg">Universidad Nacional de La Matanza (UNLaM)</p>
                    <time className="block mb-4 text-sm font-normal leading-none text-slate-500">En curso</time>
                    <p className="text-slate-400 text-base">
                    Ampliando horizontes hacia la arquitectura de sistemas, fundamentos de sistemas embebidos y computación de bajo nivel.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Educacion;