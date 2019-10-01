// ===============



import React from "react";
import { render } from "react-dom";
import {VictoryScatter, VictoryTheme,  VictoryGroup, VictoryLabel, VictoryTooltip } from "victory";




import { getData} from "./sample_data.js"
import { themes} from "./themes.js"




export  class ScatterMap extends React.Component {


  

  render() {

      return (


  <div style={{ margin: 50 }}>

      <VictoryGroup
        theme={VictoryTheme.material}
              animate={{
  duration: 2000, easing: "bounce" 

}}      

      >





       
  <VictoryScatter 
  data={getData(this.props.className) } 
  size={22}

       style={{ data: {fill:    ({ datum }) => datum.color }  }}
   />





  <VictoryScatter 
  data={getData(this.props.className+"2") } 
  size={({datum}) => (11)  }

	labels={({ datum }) => ( 
		datum.segment+ "\n"+
		datum.feature+ "\n" +
	"Avg. value: "+datum.real_value+"  \n" +
		"Avg. centered value: "+datum.center_mean+"  \n" 
	)
							
  } 
	labelComponent={<VictoryTooltip dy={1} 
      center={ (datum) => ( { x: datum.x, y: 40+datum.y } ) }

	 />}

       style={{ data: {fill:    ({ datum }) => datum.color },
				labels: { fill: "white", fontSize: 8}
     }}


   />




  <VictoryScatter 
  data={getData(this.props.className+"3") } 
  size={6}

       style={{ data: {fill:    ({ datum }) => datum.color }  }}
   />


</VictoryGroup>
</div>


   );

    }
}


