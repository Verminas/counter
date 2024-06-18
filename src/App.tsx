import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./layout/Counter/Counter";

function App() {
  const [minValue, setMinValue] = useState<number>(setInitialMinValue);
  const [maxValue, setMaxValue] = useState<number>(setInitialMaxValue);
  const [value, setValue] = useState(minValue);

  const [editMode, setEditMode] = useState<boolean>(false);

  function setInitialMinValue() {
    const min = localStorage.getItem('minValue')
    if (min) {
      return JSON.parse(min);
    } else {
      return 0;
    }
  }

  function setInitialMaxValue() {
    const max = localStorage.getItem('maxValue')
    if (max) {
      return JSON.parse(max);
    } else {
      return 5;
    }
  }

  function changeEditMode() {
    setEditMode(!editMode)
  }

  function saveSettings() {
    localStorage.setItem('minValue', JSON.stringify(minValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    setValue(minValue);
    changeEditMode();
  }

  function changeMinValue(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = Number(e.currentTarget.value);
    if (currentValue >= -1) {
      setMinValue(currentValue)
    }
  }

  function changeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = Number(e.currentTarget.value);
    if (currentValue >= -1 || currentValue > minValue) {
      setMaxValue(currentValue)
    }
  }

  function incrementValue() {
    if (value < maxValue) {
      setValue(value + 1)
    }
  }

  function resetValue() {
    setValue(minValue)
  }

  return (
    <div className="App">
     <Counter value={value}
              maxValue={maxValue}
              minValue={minValue}
              editMode={editMode}
              changeMinValue={changeMinValue}
              changeMaxValue={changeMaxValue}
              changeEditMode={changeEditMode}
              incrementValue={incrementValue}
              resetValue={resetValue}
              saveSettings={saveSettings}

     />
    </div>
  );
}

export default App;

