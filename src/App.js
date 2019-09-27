import logo from './logo.svg';
import inplayer_logo from './inplayer-logo.svg';

import './App.css';

import React, { Component } from "react";
import { render } from "react-dom";
import {VictoryPie, VictoryChart, VictoryTheme, VictoryStack, VictoryArea } from "victory";


import _ from 'lodash';


import { AreaChart} from "./area_chart.js"
import {HeatMapComp} from "./heatmap.js"
import { themeRed, themeYellow, themeBlue} from "./themes.js"


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
                          themeName="themeYellow"

                 />

                 <h2> Heatmap</h2>
                 <HeatMapComp 
                  className="heat_map"
                 />


        </div>
        </div>
      

    </div>
  );
}





class PieChart extends Component {
  render() {
    return <VictoryPie />;
  }
}

export default App;
