import React from 'react';
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

class NewGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      policeForceData: {
        x: new Date(),
        y: 300,
        label: 'a',
      },
    };
  }

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  dateHelper(data) {
    let splitDates = data.split('-');
    let returnVal = [];
    splitDates.forEach(date => {
      returnVal.push(parseInt(date));
    });
    return returnVal;
  }

  // mapData(policeForce) {
  //   this.setState({
  //     policeForceData : policeForce.data.map(pfd => (
  //       {
  //         x: new Date(this.dateHelper(pfd.date)),
  //         y: 300,
  //         label: pfd.title
  //       }
  //    ))})

  // }

  render() {
    return (
      <div className="graph-container">
        <VictoryChart
          width={700}
          height={500}
          scale={{ x: 'time' }}
          containerComponent={
            <VictoryZoomContainer
              responsive={true}
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            labelComponent={<VictoryTooltip />}
            style={{
              data: { stroke: 'tomato' },
            }}
            data={DummyData.data.map(policeForce => ({
              x: new Date(this.dateHelper(policeForce.date)),
              y: 300,
              label: policeForce.state,
            }))}
          />
          <VictoryScatter
            data={DummyData.data.map(policeForce => ({
              x: new Date(this.dateHelper(policeForce.date)),
              y: 300,
              label: policeForce.state,
            }))}
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
          <VictoryAxis
            tickFormat={x => new Date(x).getFullYear()}
            // tickValues={
            //   1980,
            //   2020
            // }
          />
          <VictoryAxis dependentAxis tickFormat={[200, 300, 400, 500, 600]} />
        </VictoryChart>

        <VictoryChart
          width={800}
          height={90}
          scale={{ x: 'time' }}
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          containerComponent={
            <VictoryBrushContainer
              responsive={true}
              brushDimension="x"
              brushDomain={this.state.selectedDomain}
              onBrushDomainChange={this.handleBrush.bind(this)}
            />
          }
        >
          <VictoryAxis
            tickValues={[
              new Date(1985, 1, 1),
              new Date(1990, 1, 1),
              new Date(1995, 1, 1),
              new Date(2000, 1, 1),
              new Date(2005, 1, 1),
              new Date(2010, 1, 1),
              new Date(2015, 1, 1),
            ]}
            tickFormat={x => new Date(x).getFullYear()}
          />
          <VictoryLine
            style={{
              data: { stroke: 'tomato' },
            }}
            data={DummyData.data.map(policeForce => ({
              x: new Date(this.dateHelper(policeForce.date)),
              y: 300,
              label: policeForce.state,
            }))}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default NewGraph;
