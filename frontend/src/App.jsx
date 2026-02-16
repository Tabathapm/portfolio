import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    // Función para traer los proyectos
    const obtenerProyectos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:8080/proyectos')
        setProyectos(respuesta.data)
      } catch (error) {
        console.error("Error conectando al backend:", error)
      }
    }

    obtenerProyectos()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Status del Portfolio 🚀</h1>
      
      <div className="bg-blue-600 p-8 rounded-2xl shadow-2xl text-center">
        <p className="text-xl">
          ¡Conexión Full-Stack Exitosa! ✨
        </p>
        <p className="mt-4 font-mono text-2xl">
          Proyectos en la DB: <span className="bg-white text-blue-600 px-3 rounded-lg font-bold">{proyectos.length}</span>
        </p>
      </div>

      {proyectos.length > 0 && (
        <p className="mt-6 text-slate-400 italic">
          Último proyecto: "{proyectos[proyectos.length - 1].titulo}"
        </p>
      )}
    </div>
  )
}

export default App