import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Servicos from './Pages/Servicos/Servicos';
import Localizacao from './Pages/Localizacao/Localizacao';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/servicos" element={<Servicos />} />
    <Route path="/localizacao" element={<Localizacao />} />
  </Routes>
  );
}

export default App;
