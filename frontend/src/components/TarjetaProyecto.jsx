import { motion } from "framer-motion";

const TarjetaProyecto = ({ proyecto }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0px 0px 25px 5px rgba(96, 165, 250, 0.5)", // Resplandor azulado vibrante
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg transition-all h-full flex flex-col"
    >
      <img
        src={proyecto.imagen_url || "https://via.placeholder.com/400x200"}
        alt={proyecto.titulo}
        className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
      />

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-blue-400 mb-2">
          {proyecto.titulo}
        </h3>

        <p className="text-slate-300 text-sm mb-4 line-clamp-3 flex-grow">
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {proyecto.tecnologias.split(",").map((tecnologia, indice) => (
            <span
              key={indice}
              className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-800"
            >
              {tecnologia.trim()}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <a
            href={proyecto.github_url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            GitHub
          </a>
          {proyecto.deploy_url && (
            <a
              href={proyecto.deploy_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Ver Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TarjetaProyecto;
