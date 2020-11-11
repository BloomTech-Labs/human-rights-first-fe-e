import React, { useState, useEffect } from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
  VictoryAxis,
} from 'victory';

import './About.css';
import CheckBoxes from './CheckBoxes';

function GraphNew(props) {
  const {data, initialData, setData} = props

  // console.log('xandydata', xAndYData)
  const [selectedGraphs, setSelectedGraphs] = useState([]);
  // const xAndYData = xAndYValues([...initialData]);

  const categoryColor = {
    'empty hand control': 'blue',
    'chemical': 'orange',
    'blunt impact': 'green',
    'officer presence': 'black',
    'conducted energy device': 'yellow',
    'lethal force': 'purple',
  };

  // take the length of instances per month
  function amountOfInstancesPerMonth(data, inputMonth) {
    const len = data.filter(month =>
      month.date_text.includes(inputMonth)
    );
    return len.length;
  }
  // convert it to a readable format - x:data, y:data
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
  function xAndYValuesOnRender(data) {
    let xAndY = months.map(monthsForce => ({
        x: monthsForce,
        y: amountOfInstancesPerMonth(data, monthsForce),
        label: amountOfInstancesPerMonth(data, monthsForce),
    }))

    setSelectedGraphs(xAndY);
  }
  function xAndYValues(data) {
    let xAndY = months.map(monthsForce => ({
        x: monthsForce,
        y: amountOfInstancesPerMonth(data, monthsForce),
        label: amountOfInstancesPerMonth(data, monthsForce),
    }))

    return xAndY;
  }

  useEffect(()=>{
    xAndYValuesOnRender(initialData)
  }, [])
  return (
    <div className="graph-checkbox-container">
      <VictoryChart width={700} height={500}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        {months.map(line => (
          <VictoryLine 
            style={{
              data: {stroke: 'yellow'}
            }}
            data={selectedGraphs}
          />
        ))}
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'tomato' },
          }}
          data={selectedGraphs}
        />
        <VictoryScatter
          labelComponent={<VictoryTooltip />}
          data={selectedGraphs}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
      <CheckBoxes
        xAndYValues={xAndYValues}
        selectedGraphs={selectedGraphs}
        setSelectedGraphs={setSelectedGraphs}
        initialData={initialData}
      />
    </div>
  );
}

export default GraphNew;
