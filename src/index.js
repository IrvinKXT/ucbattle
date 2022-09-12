import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, BrowserRouter, Route} from "react-router-dom"
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="ucbattle/" element={<App />} />
      <Route exact path="V1" element={<V1 />} />
      <Route exact path="V2" element={<V2 />} />
      <Route exact path="V3" element={<V3 />} />
      <Route exact path="V4" element={<V4 />} />
      <Route exact path="V5" element={<V5 />} />
      <Route exact path="Treino" element={<Treino />} />
      <Route exact path="Book" element={<Book />} />
      <Route exact path="HQCenarios" element={<HQCenarios />} />
      <Route exact path="HQDiagrama" element={<HQDiagrama />} />
      <Route exact path="HQGeneralizacao" element={<HQGeneralizacao />} />
      <Route exact path="HQInEx" element={<HQInEx />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
