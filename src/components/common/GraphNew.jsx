import React, {useState} from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryLine,
  VictoryBrushContainer,
  VictoryTooltip,
  VictoryScatter,
} from 'victory';

import './About.css';
import DummyData from './DummyData.json';
import DummyData2 from '../../database/data2.json'
import { ContactlessTwoTone } from '@material-ui/icons';

function GraphNew() {
  const [showPhysical, setShowPhysical] = useState(true)
  const [zoomDomain, setZoomDomain] = useState(null)
  const [showState, setShowState] = useState(true)

  const handleZoom = (domain) => {
    setShowPhysical({ selectedDomain: domain })
  }

  const handleBush = (domain) => {
    setZoomDomain({ zoomDomain: domain })
  }

  const amountOfInstancesPerMonth = (data, inputMonth) => {
    const len = data.filter(month => month.date_text.split(' ').includes(inputMonth))
    return len.length
  }

  const handleCheck = (e) => {
    e.target.
  }

  const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let ans = []
    months.forEach(monthsForce => {
      ans.push({month: monthsForce, amount: amountOfInstancesPerMonth(DummyData.data, monthsForce)})
    })

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
          data={ans.map(useOfForcePerMonth => ({
            x: useOfForcePerMonth.month,
            y: useOfForcePerMonth.amount
          }))}
        />
        <VictoryScatter
          data={ans.map(useOfForcePerMonth => ({
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
        {/* <VictoryAxis />

          {/* // tickFormat={x => new Date(x).getMonth()} */}
          {/* // tickValues={[ */}
          {/* //   new Date(1995, 1, 1),
          //   new Date(2000, 1, 1),
          //   new Date(2005, 1, 1),
          //   new Date(2010, 1, 1),
          //   new Date(2015, 1, 1),
          //   new Date(2020, 1, 1),
          // ]}  */}
        
        {/* <VictoryAxis dependentAxis tickFormat={[50, 100, 150, 200]} /> */}

      </VictoryChart>

      {/* <VictoryChart
        width={800}
        height={90}
        scale={{ x: 'time' }}
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            responsive={true}
            brushDimension="x"
            brushDomain={state.selectedDomain}
            onBrushDomainChange={handleBrush.bind(this)}
          />
        }
      > */}
        {/* <VictoryAxis
          tickValues={[
            new Date(1995, 1, 1),
            new Date(2000, 1, 1),
            new Date(2005, 1, 1),
            new Date(2010, 1, 1),
            new Date(2015, 1, 1),
            new Date(2020, 1, 1),
          ]}
          tickFormat={x => new Date(x).getFullYear()}
        /> */}
        {/* <VictoryLine
          style={{
            data: { stroke: 'tomato' },
          }}
          data={ans.map(useOfForcePerMonth => ({
            x: useOfForcePerMonth.month,
            y: useOfForcePerMonth.amount
          }))}
        /> */}
      {/* </VictoryChart> */}
    </div>
  )
}

export default GraphNew
