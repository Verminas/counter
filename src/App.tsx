import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';

const getValuesFromLocalStorage = ()=>{
  const minValue = localStorage.getItem('minValue');
  const maxValue = localStorage.getItem('maxValue');

  if(minValue && maxValue) {
   return [(JSON.parse(minValue)),(JSON.parse(maxValue))]
  }
  return []
}
function App() {
  const warningMessage = 'Please enter a value range and click "set"';
  const errorMessage = 'Invalid value'

  const [value, setValue] = useState<number | string>(warningMessage);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);

  const [error, setError] = useState(false);
  const [setDisabled, setSetDisabled] = useState<boolean>(false);

  const errorMinValue = minValue < 0 || minValue >= maxValue;
  const errorMaxValue = maxValue < 0 || minValue >= maxValue;
  const isDisabledBtnIncrement = typeof value === 'string' || value >= maxValue;
  const isDisabledBtnReset = typeof value === 'string' || value === minValue;

  useEffect(() => {
    // debugger
    const counterValue = localStorage.getItem('counterValue');
    if (counterValue) {
      setValue(JSON.parse(counterValue));
    }
  }, [])

  useEffect(() => {
    const minValue = localStorage.getItem('minValue');
    const maxValue = localStorage.getItem('maxValue');

    if(minValue && maxValue) {
      setMinValue(JSON.parse(minValue));
      setMaxValue(JSON.parse(maxValue));
    }
  }, []);

  useEffect(() => {
    if(typeof value !== 'string') {
      localStorage.setItem('counterValue', JSON.stringify(value));
    }
  }, [value]);

  useEffect(() => {
    if(minValue < 0 || maxValue < 0 || minValue >= maxValue) {
      setError(true)
      setValue(errorMessage)
      if(minValue < 0) {
        setMinValue(-1)
      }
      if(maxValue < 0) {
        setMaxValue(-1)
      }
    } else {
      setError(false)
      // !!!!!!!!!!!!!!!!!!!!!!!!!!
      const [minLSValue, maxLSValue ] = getValuesFromLocalStorage()
      if(minLSValue !== minValue || maxLSValue !==maxValue){
        setValue(warningMessage)
      }
      setSetDisabled(false)
    }
  }, [minValue, maxValue]);


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
    setMinValue(Number(e.currentTarget.value))
  }

  function updateMaxValue(e: ChangeEvent<HTMLInputElement>) {
    setMaxValue(Number(e.currentTarget.value))
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

