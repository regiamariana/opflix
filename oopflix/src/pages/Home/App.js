import React from 'react';

import './App.css';

import { Link } from "react-router-dom";
//import Oswald from "https://fonts.googleapis.com/css?family=Oswald&display=swap"
import fundo from '../../assets/faixa-png-1273.png';
import flechinha from '../../assets/flechinha.png';
function App() {
  return (
    <div className="App">
      
      <Link to="/">[Login]</Link>
      <Link to="/cadastrar">[Cadastrar]</Link>

      {/* <img src={fundo} /> */}
      <div id="faixavermelha">
          <div id="z">
                <h1 id="a">OpFlix</h1>
                <h1 id="b">OpFlix</h1>
          </div>
            
      </div>

      
        

        <Link className="oi" to="/principal">[Home]</Link>
        <Link className="oi" to="/filmes">[Filmes]</Link>
        <Link className="oi" to="/series">[Series]</Link>
        <Link className="oi" to="/cinema">[Cinema]</Link>
        <Link className="oi" to="/netflix">[Netflix]</Link>
        
      
        
        

        <section id="sub">

<h2 id="h2">OS MELHORES FILMES E SÉRIES DE 2019</h2>


      </section>

      <section id="continuacao">
        <p id="p1">Lorem ipsum dolor sit amet, consectetur adipisc
          ing elit. Vestibulum malesuada, lectus sit amet 
          lorem ut placerat aliquam, mi est sollicitudin
          libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus 
           lorem ut placerat aliquam, mi est sollicitudin
           libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus et netus
           Pellentesque habitant morbi tristique senectus et netus 
           lorem ut placerat aliquam, mi est sollicitudin
           libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus et netus  
           </p>
            
            <p id="p2">Lorem ipsum dolor sit amet, consectetur adipisc
          ing elit. Vestibulum malesuada, lectus sit amet tincidunt 
          lorem ut placerat aliquam, mi est sollicitudin
           libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus et netus 
           lorem ut placerat aliquam, mi est sollicitudin
           libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus et netus 
           Pellentesque habitant morbi tristique senectus et netus 
           lorem ut placerat aliquam, mi est sollicitudin
           libero, et efficitur sem augue sit amet quam. 
           Pellentesque habitant morbi tristique senectus et netus 
         </p>
      </section>

      <Link to="/comecar" id="m">
      <h3>Começar</h3>
      <img src={flechinha} /> 
      </Link>
    </div>
  );
}

export default App;
