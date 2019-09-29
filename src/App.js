import inplayer_logo from './inplayer-logo.svg';

import './App.css';

import React from "react";




import { AreaChart} from "./area_chart.js"
import {ScatterMap} from "./scatter_map.js"


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={inplayer_logo} className="App-logo" alt="logo" />
   
      
      </header>

      <div >
<div >


          <h3>Click Me</h3>


          
          <h2>Monetary (sum in dollars)</h2>

        <AreaChart className="monetary"
          themeName="themeRed"
         />

                   <h2>Count of logins </h2>
                <AreaChart className="count" 
          themeName="themeBlue"

                 />


                           <h2>First transation (age in days)</h2>
                <AreaChart className="first_trans" 
                          themeName="themeGreen"

                 />

                 <h2> Circlemap</h2>
                 <ScatterMap 
                  className="heat_map"
                   themeName="themeGreen"
                 />


        </div>
        </div>
      

    </div>
  );
}



export default App;
