import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import TarjetaProyecto from '../components/TarjetaProyecto';

const Inicio = () => {
  const [proyectos, setProyectos] = useState([]);
  const navigate = useNavigate(); // Se inicializa el navegador

  // Cargar proyectos de la DB
  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await axios.get('http://localhost:8080/proyectos');
        setProyectos(res.data);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };
    cargar();
  }, []);

  
  useEffect(() => {
    let teclasPresionadas = "";
    
    const detectarSwiftie = (e) => {
      teclasPresionadas += e.key;

      // Se mantiene solo los últimos 2 caracteres
      if (teclasPresionadas.length > 2) {
        teclasPresionadas = teclasPresionadas.slice(-2);
      }

      if (teclasPresionadas === "13") {
        const password = prompt("¿Cuál es la clave, Mastermind? 💎");
        
        if (password === import.meta.env.VITE_ADMIN_TOKEN) {
          localStorage.setItem('token_admin', password);
          navigate('/admin');
        } else {
          alert("You need to calm down, esa no es la clave. 🧣");
        }
        teclasPresionadas = ""; // Se limpia para el próximo intento
      }
    };

    window.addEventListener('keydown', detectarSwiftie);
    return () => window.removeEventListener('keydown', detectarSwiftie);
  }, [navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-8"
    >
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-4">
          Tabatha Peralta
        </h1>
        <p className="text-slate-400 text-xl italic">Diseñando el futuro, un commit a la vez. 🧣</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((p, i) => (
          <motion.div
            key={p.ID}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <TarjetaProyecto proyecto={p} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Inicio;