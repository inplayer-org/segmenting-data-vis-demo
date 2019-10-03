import inplayer_logo from './inplayer-logo.svg';

import './App.css';

import React from "react";


import { encode, decode} from "@msgpack/msgpack";

import { AreaChart} from "./area_chart.js";
import {ScatterMap} from "./scatter_map.js";


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={inplayer_logo} className="App-logo" alt="logo" />
      
      </header>

<div >


          <h3>Click Me</h3>


          
          <h2>Monetary (sum in dollars)</h2>

        <AreaChart className="violin_plots"
          themeName="themeRed"   />



                 <h2> Circlemap</h2>
                 <ScatterMap 
                  className="heat_map"
                   themeName="themeGreen"
                 />


        </div>
      

    </div>
  );
}



export default App;
