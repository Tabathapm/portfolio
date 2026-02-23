import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './views/Inicio';
import Admin from './views/Admin';
import RutaProtegida from './security/RutaProtegida'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          {/* Solo entran los que pasen por el filtro */}
          <Route 
            path="/admin" 
            element={
              <RutaProtegida>
                <Admin />
              </RutaProtegida>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;