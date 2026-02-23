import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  // Se chequea un valor en el localStorage
  const estaAutenticado = localStorage.getItem('token_admin') === import.meta.env.VITE_ADMIN_TOKEN;

  if (!estaAutenticado) {
    // Si no es, se redirige al login
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;