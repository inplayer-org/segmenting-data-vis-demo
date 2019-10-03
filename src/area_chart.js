
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
                          return (      <VictoryChart key={"tet"}  animate={{ duration: 2500 }}

                      >

                                  <VictoryStack>
                                   <VictoryArea        
                                    theme={themes['themeGreen']}
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




       <VictoryAxis crossAxis
       tickValues={[0.5,50,100,150,200]}

   maxDomain={{ x: 201 }}
   minDomain={{ x: 0.3 }}

  />

 <VictoryAxis dependentAxis
   tickValues={[-0.1, -0.05 , 0, 0.05, 0.1]}

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


