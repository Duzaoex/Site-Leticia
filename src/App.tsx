import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Servicos from './Pages/Servicos/Servicos';
import Localizacao from './Pages/Localizacao/Localizacao';
import SobreMim from './Pages/SobreMim/SobreMim';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Servicos" element={<Servicos />} />
      <Route path="/Localizacao" element={<Localizacao />} />
      <Route path="/SobreMim" element={<SobreMim />} />
    </Routes>
  );
}

export default App;
