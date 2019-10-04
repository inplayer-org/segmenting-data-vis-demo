
import './App.css';

import React  from "react";
import { render } from "react-dom";
import {VictoryPie, VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryAxis, VictoryStack } from "victory";

import { getData} from "./sample_data.js"
import { themes} from "./themes.js"



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
                          return (      <VictoryChart key={"tet"} 
                                    theme={themes['themeRed']}

                           animate={{ duration: 2500 }}

                      >

                                  <VictoryStack>
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




       <VictoryAxis 



dependentAxis

       tickValues={[-0.4,-0.2,0,0.2,0.3]}
offsetY={0}
   maxDomain={{ x: 300 }}
   minDomain={{ x: 0.3 }}

  />

 <VictoryAxis   


crossAxis

 offsetX={0}

   tickValues={[3, -1 , 0, 1,3]}


   maxDomain={{ y: 0.3 }}
   minDomain={{ y: -0.3 }}

  />  
</VictoryStack>
                </VictoryChart>


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


