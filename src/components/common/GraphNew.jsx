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
  const {data, initialData, setData} = props;
  const [graphData, setGraphData] = useState({
    'empty hand control': false,
    'chemical': false,
    'blunt impact': false,
    'officer presence': false,
    'conducted energy device': false,
    'lethal force': false,
    'other': false
  });

  // console.log('xandydata', xAndYData)
  const [selectedGraphs, setSelectedGraphs] = useState([]);
  // const xAndYData = xAndYValues([...initialData]);

  const categoryColor = {
    'empty hand control': 'blue',
    'chemical': 'orange',
    'blunt impact': 'green',
    'officer presence': 'teal',
    'conducted energy device': 'yellow',
    'lethal force': 'purple',
    'Null': 'pink'
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
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  function filterExcessForces(data, inputForceCat) {
    return data.filter(
      selectedState => selectedState.force_cat === inputForceCat
    );
  }

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

        {<VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'tomato' },
          }}
          data={selectedGraphs}
        />}

        {/*EMPTY HAND CONTROL*/}
        {graphData['empty hand control'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'blue'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'empty hand control'))}
        />}
        {graphData['empty hand control'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'empty hand control'))}
        labels={({ datum }) => datum.y}
        />}

        {/*CHEMICAL*/}
        {graphData['chemical'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'orange'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'chemical'))}
        />}
        {graphData['chemical'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'chemical'))}
        labels={({ datum }) => datum.y}
        />}

        {/*BLUNT IMPACT*/}
        {graphData['blunt impact'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'green'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'blunt impact'))}
        />}
        {graphData['blunt impact'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'blunt impact'))}
        labels={({ datum }) => datum.y}
        />}

        {/*OFFICER PRESENCE*/}
        {graphData['officer presence'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'teal'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'officer presence'))}
        />} 
        {graphData['officer presence'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'officer presence'))}
        labels={({ datum }) => datum.y}
        />}

        {/*NULL*/}
        {graphData['other'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'grey'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, null))}
        />}
        {graphData['null'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, null))}
        labels={({ datum }) => datum.y}
        />}

        {/*CONDUCTED ENERGY DEVICE*/}
        {graphData['conducted energy device'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'yellow'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'conducted energy device'))}
        />}
        {graphData['conducted energy device'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'conducted energy device'))}
        labels={({ datum }) => datum.y}
        />}

        {/*LETHAL FORCE*/}
        {graphData['lethal force'] && <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: 'purple'}
          }}
          data={ xAndYValues(filterExcessForces(initialData, 'lethal force'))}
        />}
        {graphData['lethal force'] && <VictoryScatter
        labelComponent={<VictoryTooltip />}
        data={ xAndYValues(filterExcessForces(initialData, 'lethal force'))}
        labels={({ datum }) => datum.y}
        />}

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
        setGraphData={setGraphData}
        graphData={graphData}
        color={categoryColor}
      />
    </div>
  );
}

export default GraphNew;
