
import './App.css';

import React  from "react";
import { render } from "react-dom";
import {VictoryPie, VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryAxis, VictoryStack } from "victory";

import { getData} from "./sample_data.js"
import { themes} from "./themes.js"

import {img} from "./inplayer-logo.svg"

const violinClick = function(){
          return [
            {
              eventKey: "all",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "red" ? null : { style: { fill: "red" } };
              }
            }
          ];
};

export  class AreaChart extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { data: getData(props.className) };
  }

  componentWillMound(){

  }

  ViolPlots(){
       this.data = getData(this.props.className)
       console.log('len adata', this.data)
    return this.data.map(
                          (data_row) => {
                            var leftData =data_row[0],rightData = data_row[1];
                             console.log("this", rightData);
                             console.log('kkk', leftData);
                          return (  





<svg viewBox="0 0 400 400" >









                 

                                  <VictoryStack standalone={false}>
                                   <VictoryArea        
                                    theme={themes['themeRed']}
                          data= {leftData} interpolation={"basis"} 
                    events={[{
                      target: "data",
                      eventHandlers: {
                        onClick: violinClick
                      }
                    }]}
                              >

      
                              </VictoryArea>


         
                                   <VictoryArea        
                                    theme={themes['themeRed']}
                          data= {rightData} interpolation={"basis"} 
                    events={[{
                      target: "data",
                      eventHandlers: {
                        onClick: violinClick
                      }
                    }]}
                              >

      
                              </VictoryArea>




    
</VictoryStack>


</svg>




                        );
                          })
                   
  }

  render() {
    return (
    <div style={{ margin: 50 }}>

    
       

        { this.ViolPlots() }









</div>





    );
  }
}


