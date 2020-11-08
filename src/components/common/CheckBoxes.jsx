import React, { useState, useEffect } from 'react'

import DummyData from './DummyData.json'
import './About.css'

function CheckBoxes(props) {
  const [isChecked, setIsChecked] = useState({})
  
  const {xAndYValues, selectedGraphs, setSelectedGraphs} = props


  // Displays Checkboxes
  const states = DummyData.data.map(allStates => allStates.state)
  const condensedStates = [...new Set(states)]



  function filterOutState(data, inputState) {
    return [...data].filter(selectedState => selectedState.state === inputState)
  }
  
  function handleChange(event) {
    let selectedState = xAndYValues(filterOutState(DummyData.data, event.target.name))
    
    let newGraph = []

    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked
    })
    
    if(event.target.checked === false) {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = (selectedGraphs[i].y - selectedState[i].y)
        newGraph.push(selectedGraphs[i])
      } 
    } else {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = (selectedGraphs[i].y + selectedState[i].y)
        newGraph.push(selectedGraphs[i])
      } 
    }
    setSelectedGraphs(newGraph)
  }

  return (
    <div className='checkboxes'>
      {condensedStates.map((stateCheckBox) => (       
        <label className="checkbox" >
          <input
            type='checkbox' 
            key={stateCheckBox.id}
            name={`${stateCheckBox}`}
            value={isChecked}
            defaultChecked={isChecked}
            onChange={handleChange}
          />
        {`${stateCheckBox}`}
        </label>         
      ))}
    </div>
  )
}

export default CheckBoxes

