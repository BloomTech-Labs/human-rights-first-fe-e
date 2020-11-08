import React, {useState} from 'react';
import {
  VictoryChart,
  VictoryContainer,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter,
  VictoryAxis,
} from 'victory';

import './About.css';
import DummyData from './DummyData.json';
import CheckBoxes from './CheckBoxes'



function GraphNew() {
  // assign initial state then change it depending on what is checked
  const initialData = (
    xAndYValues(DummyData.data)
  )
  const [selectedGraphs, setSelectedGraphs] = useState(initialData)

  // console.log('heres the initial data', initialData)
  
  function amountOfInstancesPerMonth(data, inputMonth) {
    const len = data.filter(month => month.date_text.split(' ').includes(inputMonth))
    return len.length
  }
  
  function xAndYValues(data) {
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let ans = []
    
    months.forEach(monthsForce => {
      ans.push({x: monthsForce, y: amountOfInstancesPerMonth(data, monthsForce)})
    })

    return ans
  }
  
 


  return (
    <div className="graph-checkbox-container">
      <div className='graph-container'>
        <VictoryChart
            width={700}
            height={500}
            // domainPadding={{ x: 15}}
            // scale={{ x: 'month' }}
            // containerComponent={

          //   <VictoryContainer
          //     responsive={true}
          //   //   //   // zoomDimension="x"
          //   //   //   // zoomDomain={zoomDomain}
          //   //   //   // onZoomDomainChange={handleZoom.bind(this)}
          //   />
          //   }
          >
            <VictoryAxis/>
            <VictoryAxis dependentAxis/>
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
                labelComponent={<VictoryTooltip  cornerRadius={({ datum }) => datum.x > 6 ? 0 : 20}
                pointerLength={({ datum }) => datum.y > 0 ? 5 : 20}
                                labelComponent={<VictoryTooltip />}/>}
                data={selectedGraphs}
                padding={20}
                labels={({datum}) => datum.y}
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
        </div>
      <CheckBoxes 
        xAndYValues={xAndYValues} 
        selectedGraphs={selectedGraphs} 
        setSelectedGraphs={setSelectedGraphs}
      />
    </div>
  )
}

export default GraphNew
