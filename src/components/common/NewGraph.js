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
        {console.log(this.mapData(DummyData))}
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
            data={this.mapData(DummyData)}
          />
          <VictoryScatter
            data={[
              { x: new Date(1982, 1, 1), y: 125, label: 'a' },
              { x: new Date(1987, 1, 1), y: 257, label: 'a' },
              { x: new Date(1993, 1, 1), y: 345, label: 'a' },
              { x: new Date(1997, 1, 1), y: 515, label: 'a' },
              { x: new Date(2001, 1, 1), y: 132, label: 'a' },
              { x: new Date(2005, 1, 1), y: 305, label: 'a' },
              { x: new Date(2011, 1, 1), y: 270, label: 'a' },
              { x: new Date(2015, 1, 1), y: 470, label: 'a' },
            ]}
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
            data={[
              { x: new Date(1982, 1, 1), y: 125 },
              { x: new Date(1987, 1, 1), y: 257 },
              { x: new Date(1993, 1, 1), y: 345 },
              { x: new Date(1997, 1, 1), y: 515 },
              { x: new Date(2001, 1, 1), y: 132 },
              { x: new Date(2005, 1, 1), y: 305 },
              { x: new Date(2011, 1, 1), y: 270 },
              { x: new Date(2015, 1, 1), y: 470 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default NewGraph;
