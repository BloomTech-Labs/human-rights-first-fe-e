import React, { useState } from 'react';

import './About.css';

function CheckBoxes(props) {
  const [isChecked, setIsChecked] = useState({});

  const { initialData, xAndYValues, selectedGraphs, setSelectedGraphs, setGraphData, graphData, color} = props;

  // displays checkboxes
  const force = initialData.map(allForceCat => allForceCat.force_cat);
  const condensedForces = [...new Set(force)];
  
  // when a State is checked, isolate that State's data
  function filterExcessForces(data, inputForceCat) {
    return data.filter(
      selectedState => selectedState.force_cat === inputForceCat
    );
  }

  // take the isolated data, subtract if from initial force_cat
  // do opposite if checking box
  function handleChange(event) {
    let selectedForceCat = xAndYValues(
      filterExcessForces(initialData, event.target.name)
    );
    setGraphData({
      ...graphData,
      [event.target.name]: event.target.checked
    })
    console.log('initialData', filterExcessForces(initialData, event.target.name))
    console.log('event.target.name', event.target.name)
    let newGraph = [];

    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
    console.log('selectedGraph', selectedGraphs)
    console.log('selectedforce_cat', selectedForceCat)
    if (event.target.checked === false) {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = selectedGraphs[i].y - selectedForceCat[i].y;
        selectedGraphs[i].label = selectedGraphs[i].y
        newGraph.push(selectedGraphs[i]);
      }
    } else {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = selectedGraphs[i].y + selectedForceCat[i].y;
        selectedGraphs[i].label = selectedGraphs[i].y
        newGraph.push(selectedGraphs[i]);
      }
    }
    setSelectedGraphs(newGraph);
  }

  return (
    <div className="checkboxes">
      {condensedForces.map(stateCheckBox => {
        let borderColor = color[stateCheckBox] || 'pink';
        return (
        <label className="checkbox">
          <input
            type="checkbox"
            key={stateCheckBox}
            name={`${stateCheckBox}`}
            value={isChecked}
            // defaultChecked={isChecked}
            onChange={handleChange}
          />
          <span style={{borderBottom: `2px solid ${borderColor}`}}>{stateCheckBox ? stateCheckBox : 'Null'}</span>
        </label>)
      })}
    </div>
  );
}

export default CheckBoxes;
