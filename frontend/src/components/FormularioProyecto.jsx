import { useState } from 'react';
import axios from 'axios';
import clienteAxios from '../api/clienteAxios';

const FormularioProyecto = ({ alCargarProyecto }) => {
  const [datos, setDatos] = useState({
    titulo: '',
    descripcion: '',
    tecnologias: '',
    imagen_url: '',
    github_url: '',
    deploy_url: ''
  });

  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.post('/proyectos', datos); 
      alert("¡Proyecto guardado! 🎉");
      alCargarProyecto();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={enviarFormulario} className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-10 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Añadir Nuevo Proyecto 🛠️</h3>
      
      <div className="grid grid-cols-1 gap-4">
        <input 
          name="titulo" placeholder="Título del proyecto" value={datos.titulo} onChange={manejarCambio} required
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white"
        />
        <textarea 
          name="descripcion" placeholder="Descripción" value={datos.descripcion} onChange={manejarCambio} required
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white h-24"
        />
        <input 
          name="tecnologias" placeholder="Tecnologías (ej: React, Go, Docker)" value={datos.tecnologias} onChange={manejarCambio}
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white"
        />
        <input 
          name="imagen_url" placeholder="URL de la imagen" value={datos.imagen_url} onChange={manejarCambio}
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white"
        />
        <input 
          name="github_url" placeholder="URL de GitHub" value={datos.github_url} onChange={manejarCambio}
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white"
        />
        <input 
          name="deploy_url" placeholder="URL de Demo (opcional)" value={datos.deploy_url} onChange={manejarCambio}
          className="bg-slate-900 border border-slate-700 p-2 rounded text-white"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-colors">
          Guardar Proyecto
        </button>
      </div>
    </form>
  );
};

export default FormularioProyecto;