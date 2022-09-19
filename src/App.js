import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom"
//import React from 'react';
import React, { /*useEffect,*/ useState } from 'react';
//import axios from 'axios';
//import Aguardar from './components/Aguardar.js'
//import MenuIni from './MenuIni';
import MenuPrin from './MenuPrin';
import V1 from './V1';
import V5 from './V5';
import V2 from './V2';
import V3 from './V3';
import V4 from './V4';
import Treino from './Treino';
import Book from './Book';
import HQCenarios from './HQCenarios';
import HQDiagrama from './HQDiagrama';
import HQGeneralizacao from './HQGeneralizacao';
import HQInEx from './HQInEx';
import Ucbattle from './Ucbattle';
import Opcoes from './Opcoes';

//<Route exact path="/" element={<MenuIni />} />

function App(){
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [v5, setV5] = useState(false);
  const [ganharPerder, setGanharPerder] = useState(true);
  const [acertarErrar, setAcertarErrar] = useState(true);

  const alteraGanharPerder = () => {
    setGanharPerder(!ganharPerder);
  }

  const alteraAcertarErrar = () => {
    setAcertarErrar(!acertarErrar);
  }

  const alteraV2 = () => {
    setV2(true);
  }

  const alteraV3 = () => {
    setV3(true);
  }

  const alteraV4 = () => {
    setV4(true);
  }

  const alteraV5 = () => {
    setV5(true);
  }

  const resetProgress = () => {
    window.location.reload();
  }

    return(
        <BrowserRouter>
    <Routes>
      <Route exact path="ucbattle/" element={<Ucbattle v2={v2} resetProgress={() => resetProgress} />} />
      <Route exact path="/" element={<MenuPrin v2={v2} v3={v3} v4={v4} v5={v5} />} />
      <Route exact path="V1" element={<V1 v2={v2} alteraV2={alteraV2} acertarErrar={acertarErrar} ganharPerder={ganharPerder} />} />
      <Route exact path="V2" element={<V2 v3={v3} alteraV3={alteraV3} acertarErrar={acertarErrar} ganharPerder={ganharPerder} />} />
      <Route exact path="V3" element={<V3 v4={v4} alteraV4={alteraV4} acertarErrar={acertarErrar} ganharPerder={ganharPerder} />} />
      <Route exact path="V4" element={<V4 v5={v5} alteraV5={alteraV5} acertarErrar={acertarErrar} ganharPerder={ganharPerder} />} />
      <Route exact path="V5" element={<V5 acertarErrar={acertarErrar} ganharPerder={ganharPerder} />} />
      <Route exact path="Treino" element={<Treino />} />
      <Route exact path="Book" element={<Book />} />
      <Route exact path="HQCenarios" element={<HQCenarios />} />
      <Route exact path="HQDiagrama" element={<HQDiagrama />} />
      <Route exact path="HQGeneralizacao" element={<HQGeneralizacao />} />
      <Route exact path="HQInEx" element={<HQInEx />} />
      <Route exact path="Opcoes" element={<Opcoes acertarErrar={acertarErrar} ganharPerder={ganharPerder} alteraAcertarErrar={alteraAcertarErrar} alteraGanharPerder={alteraGanharPerder} />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;