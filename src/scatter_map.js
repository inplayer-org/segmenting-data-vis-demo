// ===============



import React from "react";
import { render } from "react-dom";
import {VictoryScatter, VictoryTheme,  VictoryGroup, VictoryLabel, VictoryTooltip } from "victory";




import { getData} from "./sample_data.js"
import { themes} from "./themes.js"


const get_center = function(datum){ 
	return {x: datum.x, y:20+datum.y } }



export  class ScatterMap extends React.Component {


constructor(props){
  super(props);
this.data = getData(props.className);
this.classN = props.className;

    this.state = {
      scatterData: getData(props.className)
    };

}

 getSpecData(classN) {


    return  this.data[classN].map((datum) => {


      return {
        x: datum.x,
        y: datum.y,
        size: datum.color

      }

    }  )
      }
   componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
      scatterData: getData(this.classN)
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

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
  data={this.state.scatterData[0] } 
  size={22}

       style={{ data: {fill:    ({ datum }) => datum.color }  }}
   />





  <VictoryScatter 
  data={this.state.scatterData[1] } 
  size={({datum}) => (11)  }

	labels={({ datum }) => ( 
		datum.segment+ "\n"+
		datum.feature+ "\n" +
	"Avg. value: "+datum.real_value+"  \n" +
		"Avg. centered value: "+datum.center_mean+"  \n" 
	)
							
  } 
	labelComponent={



    <VictoryTooltip dy={1} 
      center={ (datum) => ( { x: datum.x, y: 10+datum.y } ) }

	 />


  }

       style={{ data: {fill:    ({ datum }) => datum.color },
				labels: { fill: "white", fontSize: 8}
     }}


   />







</VictoryGroup>
</div>


   );

    }
}


