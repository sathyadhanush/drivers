import React, { Component } from "react";
import Chart from "react-google-charts";


const data = [
  ['City', 'Owner', 'Driver'],
  ['Owner,Driver', 910, 600],
 
];

class GoogleChart extends Component {
  
 

  render() {
      return (
          <div className="container mt-5">
              <h2>Drivers Bar Chart </h2>

              <Chart
                  width={'700px'}
                  height={'320px'}
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={data}
                  options={{
                    title: 'Driver app Count',
                    chartArea: { width: '50%' },
                    hAxis: {
                      title: 'Total Drivers',
                      minValue: 0,
                    },
                    vAxis: {
                      title: 'User',
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />              
          </div>
      )
  }
}

export default GoogleChart;