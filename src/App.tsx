import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {
  const warningMessage = 'Please enter a value range and click "set"';
  const errorMessage = 'Invalid value'

  const [value, setValue] = useState<number | string>(warningMessage);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const counterValue = localStorage.getItem('counterValue');
    if (counterValue) {
      setValue(JSON.parse(counterValue));
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [])

  useEffect(() => {
    const minValue = localStorage.getItem('minValue');
    const maxValue = localStorage.getItem('maxValue');

    if(minValue && maxValue) {
      setMinValue(JSON.parse(minValue));
      setMaxValue(JSON.parse(maxValue));
      setIsDisabled(false);
    }
  }, []);

  useEffect(() => {
    if(typeof value !== 'string') {
      localStorage.setItem('counterValue', JSON.stringify(value));
      setIsDisabled(false)

      if(value >= maxValue) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }
  }, [value]);

  useEffect(() => {
    if(minValue >= maxValue || minValue < 0 || maxValue < 0) {
      setError(true);
      setIsDisabled(true);
      setValue(errorMessage)
      if(minValue < 0) {
        setMinValue(-1);
      }
      if(maxValue < 0) {
        setMaxValue(-1);
      }
    } else {
      setError(false);
      setIsDisabled(true);
      setValue(warningMessage)
    }
    console.log(error)
  }, [minValue, maxValue]);


  function setRange(min: number, max: number) {
    localStorage.setItem('minValue', JSON.stringify(min));
    localStorage.setItem('maxValue', JSON.stringify(max));
    localStorage.setItem('counterValue', JSON.stringify(min));

    setValue(min);
  }

  function increment(value: number | string) {
    if (typeof value === 'number') {
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
    <div className="App">
      <h1>Counter</h1>
      <div>
        <input type="number" value={minValue} onChange={updateMinValue}/>
        <input type="number" value={maxValue} onChange={updateMaxValue}/>
      </div>
      <button onClick={() => setRange(minValue, maxValue)} disabled={error}>Set value range</button>

      <div>
        <h2>{value}</h2>
        <button onClick={() => increment(value)} disabled={error || isDisabled}>Increment</button>
        <button onClick={() => reset(value)} disabled={typeof value === 'string'}>Reset</button>
      </div>
    </div>
  );
}

export default App;
