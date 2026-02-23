import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import TarjetaProyecto from "../components/TarjetaProyecto";
import FormularioProyecto from "../components/FormularioProyecto";
import clienteAxios from "../api/clienteAxios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cerrarSesion = () => {
    localStorage.removeItem("token_admin"); 
    navigate("/"); 
  };

  const cargar = async () => {
    setCargando(true);
    try {
      const res = await clienteAxios.get('/proyectos');
      setProyectos(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false); 
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que querés borrar este proyecto?")) {
      try {
        await clienteAxios.delete(`/proyectos/${id}`);
        cargar();
      } catch (error) {
        alert("No pudiste borrarlo. ¿Segura que sos la Mastermind? 🐍");
      }
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-black text-white">Panel de Control 🛠️</h2>
        <button 
          onClick={cerrarSesion}
          className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-5 py-2 rounded-full border border-red-500/50 transition-all font-medium"
        >
          Cerrar Sesión 🚪
        </button>
      </div>

      <FormularioProyecto alCargarProyecto={cargar} />
      
      <div className="mt-16">
        {cargando ? (
          // El Loader (Spinner)
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-slate-400 animate-pulse">Cargando proyectos bejeweled...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((p) => (
              <div key={p.ID} className="relative group">
                <TarjetaProyecto proyecto={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
