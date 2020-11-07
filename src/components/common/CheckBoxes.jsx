import React, { useState, useEffect } from 'react'

import DummyData from './DummyData.json'

function CheckBoxes(props) {
  const [isChecked, setIsChecked] = useState({})
  
  const {handleCheck, xAndYValues, selectedGraphs, setSelectedGraphs} = props


  // console.log(xAndYValues(filterOutState(DummyData.data, 'Washington')))
  // console.log(xAndYValues(DummyData.data))
  // console.log(selectedGraphs)
  // useEffect(() => {
    
    // setSelectedGraphs(...selectedGraphs, xAndYValues(filterOutState(DummyData.data, 'Washington')))
  //   setSelectedGraphs({month: "January", amount: 0},
  //   {month: "February", amount: 0},
  //   {month: "March", amount: 0},
  //   {month: "April", amount: 0},
  //    {month: "May", amount: 63},
  //  {month: "June", amount: 68},
  //    {month: "July", amount: 13},
  //    {month: "August", amount: 24},
  //   {month: "September", amount: 14},
  //   {month: "October", amount: 4},
  //    {month: "November", amount: 0},
  //    {month: "December", amount: 0})

  // }, [])
  // console.log(selectedGraphs)

  const states = DummyData.data.map(allStates => allStates.state)
  const condensedStates = [...new Set(states)]

  function filterOutState(data, inputState) {
    return data.filter(selectedState => selectedState.state != inputState)
  }

  function handleChange(event) {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <div>
      {condensedStates.map(stateCheckBox => (
        <>
        <input
          type='checkbox' 
          key={condensedStates.indexOf(stateCheckBox)}
          name={`${stateCheckBox}`}
          value={isChecked}
          defaultChecked={isChecked}
          onChange={handleChange}
        />
        <label>{`${stateCheckBox}`}</label> 
        </>
      ))}

    </div>
  )
}

export default CheckBoxes

