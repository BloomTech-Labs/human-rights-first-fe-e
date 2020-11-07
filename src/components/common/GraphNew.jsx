import React, {useState} from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
} from 'victory';

import './About.css';
import DummyData from './DummyData.json';
import CheckBoxes from './CheckBoxes'



function GraphNew() {
  const [showPhysical, setShowPhysical] = useState(true)
  const [zoomDomain, setZoomDomain] = useState(null)

  // assign initial state then change it depending on what is checked
  const initialData = (
    xAndYValues(DummyData.data).map(useOfForcePerMonth => ({
      x: useOfForcePerMonth.month,
      y: useOfForcePerMonth.amount
    }))
  )
  const [selectedGraphs, setSelectedGraphs] = useState(initialData)

  
  function amountOfInstancesPerMonth(data, inputMonth) {
    const len = data.filter(month => month.date_text.split(' ').includes(inputMonth))
    return len.length
  }
  
  function xAndYValues(data) {
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let ans = []
    
    months.forEach(monthsForce => {
      ans.push({month: monthsForce, amount: amountOfInstancesPerMonth(data, monthsForce)})
    })

    return ans
  }
  
  function handleCheck(e){
    e.preventDefault()
    console.log(e.target.name)
    // setSelectedGraphs(xAndYValues(filterByState(DummyData.data, e.target.name).map(graph => ({
    //   x: graph.month,
    //   y: graph.amount
    // }))))
  }

  function handleZoom(domain) {
    setShowPhysical({ selectedDomain: domain })
  }

  return (
    <div className="graph-container">
      
      <VictoryChart
          width={700}
          height={500}
          domainPadding={{ x: 15}}
          // scale={{ x: 'month' }}
          containerComponent={
            <VictoryZoomContainer
              responsive={true}
              zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            padding={20}
            style={{
              data: { stroke: 'tomato' },
            }}
            // x ='DummyData.data.date'
            // y ='DummyData.data'
            data={selectedGraphs}
          />
          <VictoryScatter
            data={xAndYValues(DummyData.data).map(useOfForcePerMonth => ({
              x: useOfForcePerMonth.month,
              y: useOfForcePerMonth.amount
            }))}
            padding={20}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        mutation: props => {
                          return {
                            style: Object.assign({}, props.style, {
                              fill: 'tomato',
                            }),
                          };
                        },
                      },
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        mutation: () => {
                          return null;
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
  
        </VictoryChart>
      <CheckBoxes handleCheck={handleCheck} xAndYValues={xAndYValues} selectedGraphs={selectedGraphs} setSelectedGraphs={setSelectedGraphs} />
    </div>
  )
}

export default GraphNew
