import DummyData from './DummyData.json'

function dateHelper(data) {
  let splitDates = data.split('-')
  let returnVal = []
  splitDates.forEach(date => {
    returnVal.push(parseInt(date))
  })
  return returnVal
}

export const GraphData = [
  DummyData.data.map(data => (
    { 
      x: data.date,
      y: 100,
      label: data.state
     }
  ))
  // { x: new Date(1982, 1, 1), y: 125, label:'a' },
  // { x: new Date(1987, 1, 1), y: 257, label:'a' },
  // { x: new Date(1993, 1, 1), y: 345, label:'a' },
  // { x: new Date(1997, 1, 1), y: 515, label:'a' },
  // { x: new Date(2001, 1, 1), y: 132, label:'a' },
  // { x: new Date(2005, 1, 1), y: 305, label:'a' },
  // { x: new Date(2011, 1, 1), y: 270, label:'a' },
  // { x: new Date(2015, 1, 1), y: 470, label:'a' },
]

export const dumData = DummyData.data.map(policeForce => (
  {x: new Date(dateHelper(policeForce.date)),
  y: 100,
  label: policeForce.title}
))