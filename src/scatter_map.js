// ===============



import React from "react";
import { render } from "react-dom";
import {VictoryScatter, VictoryTheme,  VictoryGroup, VictoryLabel } from "victory";




import { getData} from "./sample_data.js"
import { themes} from "./themes.js"




export  class ScatterMap extends React.Component {


  

  render() {

      return (


  <div style={{ margin: 50 }}>

      <VictoryGroup
        theme={VictoryTheme.material}
              animate={{
  duration: 4000, easing: "bounce" 

}}      

      >


       
  <VictoryScatter 
  data={getData(this.props.className) } 
  size={17}

       style={{ data: {fill:    ({ datum }) => datum.fill }  }}
   />


  <VictoryScatter 
  data={getData(this.props.className+"2") } 
  size={10}

	labels={({ datum }) => datum.y.toFixed(2)} 
	labelComponent={<VictoryLabel dy={4}  />}

       style={{ data: {fill:    ({ datum }) => datum.fill },
				labels: { fill: "white", fontSize: 8}
     }}


   />
</VictoryGroup>
</div>


   );

    }
}


