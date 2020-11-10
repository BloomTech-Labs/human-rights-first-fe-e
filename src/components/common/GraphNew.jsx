import React, { useState } from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
  VictoryAxis,
} from 'victory';

import './About.css';
import DummyData from './DummyData.json';
import CheckBoxes from './CheckBoxes';

function GraphNew() {
  const initialData = xAndYValues(DummyData.data);
  const [selectedGraphs, setSelectedGraphs] = useState(initialData);

  // take the length of instances per month
  function amountOfInstancesPerMonth(data, inputMonth) {
    const len = data.filter(month =>
      month.date_text.split(' ').includes(inputMonth)
    );
    return len.length;
  }
  // convert it to a readable format - x:data, y:data
  function xAndYValues(data) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let xAndY = [];

    months.forEach(monthsForce => {
      xAndY.push({
        x: monthsForce,
        y: amountOfInstancesPerMonth(data, monthsForce),
        label: amountOfInstancesPerMonth(data, monthsForce)
      });
    });

    return xAndY;
  }

  return (
    <div className="graph-checkbox-container">
        <VictoryChart
          width={700}
          height={500}
        >
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            style={{
              data: { stroke: 'tomato' },
            }}
        
            data={selectedGraphs}
          />
          <VictoryScatter
            labelComponent={
              <VictoryTooltip/>
            }
            data={selectedGraphs}
            labels={({ datum }) => datum.y}
        
          />
        </VictoryChart>
      <CheckBoxes
         xAndYValues={xAndYValues} 
         selectedGraphs={selectedGraphs} 
         setSelectedGraphs={setSelectedGraphs} 
       />
    </div>
  );
}

export default GraphNew;
