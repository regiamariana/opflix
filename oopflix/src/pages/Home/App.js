import React from 'react';

import './App.css';

import { Link } from "react-router-dom";

import fundo from '../../assets/faixa-png-1273.png';
import flechinha from '../../assets/flechinha.png';
function App() {
  return (
    <div className="App">
      <Link to="/">[Login]</Link>
      <Link to="/cadastrar">[Cadastrar]</Link>

      {/* <img src={fundo} /> */}
      <h1>OpFlix</h1>

      <nav>
        <Link to="/principal">[Home]</Link>
        <Link to="/filmes">[Filmes]</Link>
        <Link to="/series">[Series]</Link>
        <Link to="/cinema">[Cinema]</Link>
        <Link to="/netflix">[Netflix]</Link>
        
      </nav>

      <h2>OS MELHORES FILMES E SÉRIES DE 2019</h2>

      <Link to="/comecar">
      <h3>Começar</h3>
      <img src={flechinha} />
      </Link>
    </div>
  );
}

export default App;
