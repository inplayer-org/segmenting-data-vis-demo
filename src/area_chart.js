
import './App.css';

import React  from "react";
import { render } from "react-dom";
import {VictoryPie, VictoryChart, VictoryTheme, VictoryStack, VictoryArea } from "victory";

import { getData} from "./sample_data.js"
import { themes} from "./themes.js"


export  class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: getData(props.className) };
  }

  

  render() {
    return (
    <div style={{ margin: 50 }}>

      <VictoryChart
        theme={themes[this.props.themeName]}
                animate={{ duration: 3000 }}

      >
        <VictoryStack
        theme = {themes[this.props.themeName]}
        >

          <VictoryArea
          data= {getData(this.props.className)}
                interpolation={"basis"}
              
    events={[{
      target: "data",
      eventHandlers: {
        onClick: () => {
          return [
            {
              eventKey: "all",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "red" ? null : { style: { fill: "red" } };
              }
            }
          ];
        }
      }
    }]}
              />



</VictoryStack>
</VictoryChart>
</div>





    );
  }
}


