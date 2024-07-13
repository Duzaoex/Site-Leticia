import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Localizacao from './Pages/Localizacao/Localizacao';
import SobreMim from './Pages/SobreMim/SobreMim';
import Atuacao from './Pages/Atuacao/Atuacao';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Atuacao" element={<Atuacao />} />
      <Route path="/Localizacao" element={<Localizacao />} />
      <Route path="/SobreMim" element={<SobreMim />} />
    </Routes>
  );
}

export default App;
