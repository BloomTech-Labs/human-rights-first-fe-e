import React, { useState } from 'react';

import json from './all_sources_json.json';
import './About.css';

function CheckBoxes(props) {
  const [isChecked, setIsChecked] = useState({});

  const { xAndYValues, selectedGraphs, setSelectedGraphs } = props;

  // displays checkboxes
  const force = json.data.map(allForceCat => allForceCat.force_cat);
  const condensedForces = [...new Set(force)];
  
  // when a State is checked, isolate that State's data
  function filterExcessForces(data, inputState) {
    return [...data].filter(
      selectedState => selectedState.force_cat === inputState
    );
  }

  // take the isolated data, subtract if from initial state
  // do opposite if checking box
  function handleChange(event) {
    let selectedState = xAndYValues(
      filterExcessForces(json.data, event.target.name)
    );

    let newGraph = [];

    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });

    if (event.target.checked === false) {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = selectedGraphs[i].y - selectedState[i].y;
        selectedGraphs[i].label = selectedGraphs[i].y
        newGraph.push(selectedGraphs[i]);
      }
    } else {
      for (let i = 0; i < selectedGraphs.length; i++) {
        selectedGraphs[i].y = selectedGraphs[i].y + selectedState[i].y;
        selectedGraphs[i].label = selectedGraphs[i].y
        newGraph.push(selectedGraphs[i]);
      }
    }
    setSelectedGraphs(newGraph);
  }

  return (
    <div className="checkboxes">
      {condensedForces.map(stateCheckBox => (
        <label className="checkbox">
          <input
            type="checkbox"
            key={stateCheckBox}
            name={`${stateCheckBox}`}
            value={isChecked}
            defaultChecked={isChecked}
            onChange={handleChange}
          />
          {`${stateCheckBox}`}
        </label>
      ))}
    </div>
  );
}

export default CheckBoxes;
