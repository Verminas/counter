import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import s from './App.module.css';

function App() {
  const warningMessage = 'Please enter a value range and click "set"';
  const errorMessage = 'Invalid value'

  const [value, setValue] = useState<number | string>(initializationValue);
  const [minValue, setMinValue] = useState(initializationMinValue);
  const [maxValue, setMaxValue] = useState(initializationMaxValue);

  const [error, setError] = useState(false);
  const [setDisabled, setSetDisabled] = useState<boolean>(true);

  const errorMinValue = minValue < 0 || minValue >= maxValue;
  const errorMaxValue = maxValue < 0 || minValue >= maxValue;
  const isDisabledBtnIncrement = typeof value === 'string' || value >= maxValue;
  const isDisabledBtnReset = typeof value === 'string' || value === minValue;

  useEffect(() => {
    if(typeof value !== 'string') {
      localStorage.setItem('counterValue', JSON.stringify(value));
    }
  }, [value]);

  useEffect(() => {
    if(minValue < 0 || maxValue < 0 || minValue >= maxValue) {
      setError(true)
      setValue(errorMessage)
    } else {
      setError(false)
      const [minLS, maxLS ] = getMinMaxFromLocalStorage()
      if(minLS !== minValue || maxLS !==maxValue){
        setValue(warningMessage)
        setSetDisabled(false)
      }
    }
  }, [minValue, maxValue]);

  function initializationValue() {
    const valueLS = localStorage.getItem('counterValue');
    if (valueLS) {
      return JSON.parse(valueLS);
    }
    return warningMessage;
  }

  function initializationMinValue() {
    const minValueLS = localStorage.getItem('minValue');
    if(minValueLS){
      return JSON.parse(minValueLS);
    }
    return 1;
  }

  function initializationMaxValue() {
    const maxValueLS = localStorage.getItem('maxValue');
    if(maxValueLS){
      return JSON.parse(maxValueLS);
    }
    return 5;
  }

  function getMinMaxFromLocalStorage() {
    const min = localStorage.getItem('minValue');
    const max = localStorage.getItem('maxValue');

    if(min && max) {
      return [(JSON.parse(min)),(JSON.parse(max))]
    }
    return []
  }

  function setRange(min: number, max: number) {
    if(!error) {
      localStorage.setItem('minValue', JSON.stringify(min));
      localStorage.setItem('maxValue', JSON.stringify(max));
      localStorage.setItem('counterValue', JSON.stringify(min));

      setValue(min);
      setSetDisabled(true)
    }
  }

  function increment(value: number | string) {
    if (typeof value === 'number' && value < maxValue) {
      setValue(value + 1);
    }
  }

  function reset(value: number | string) {
    if (typeof value === 'number') {
      setValue(minValue);
    }
  }

  function updateMinValue(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.currentTarget.value);
    if(newValue >= -1) {
      setMinValue(newValue)
    }
  }

  function updateMaxValue(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.currentTarget.value);
    if(newValue >= -1) {
      setMaxValue(newValue)
    }
  }

  return (
    <div className={s.App}>
      <h1>Counter</h1>
      <div>
        <input type="number" value={minValue} onChange={updateMinValue} className={errorMinValue ? s.errorInput : ''}/>
        <input type="number" value={maxValue} onChange={updateMaxValue} className={errorMaxValue ? s.errorInput : ''}/>
      </div>
      <button onClick={() => setRange(minValue, maxValue)} disabled={error || setDisabled}>Set value range</button>

      <div>
        <h2 className={error || value === maxValue ? s.errorCounter : s.counter}>{value}</h2>
        <button onClick={() => increment(value)} disabled={isDisabledBtnIncrement}>Increment</button>
        <button onClick={() => reset(value)} disabled={isDisabledBtnReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

