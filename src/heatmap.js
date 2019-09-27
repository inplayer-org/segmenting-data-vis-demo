import React, { Component } from "react";
import { getData} from "./sample_data.js"
import {HeatmapSeries, XYPlot, XAxis, YAxis} from 'react-vis'


export class HeatMapComp extends React.Component{
	  constructor(props) {
    super(props);
    this.myData = getData(this.props.className)
  }

  


	render(){
	return (

 <div style={{ margin: 50 }}>

<XYPlot
  width={600}
  height={600}>
  <XAxis />
  <YAxis />
  <HeatmapSeries
    className="heatmap-series-example"
    data={this.myData}/>
</XYPlot>

 </div>
		);

	}
}