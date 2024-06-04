import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./layout/Counter/Counter";

export type ErrorMessage = 'Incorrect value';

function App() {
  console.log('rendering...')
  const [maxValue, setMaxValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [counterValue, setCounterValue] = useState(minValue);
  const [errorCounterValue, setErrorCounterValue] = useState<null | ErrorMessage>(null);
  const counterRange = {
    min: 0,
    max: maxValue,
  }

  function incrementCounterValue() {
    if(!errorCounterValue) {
      if(counterValue < counterRange.max){
        setCounterValue(counterValue + 1);
      } else {
        setCounterValue(counterRange.max)
      }
    }
    //setCounterValue(counterValue + 1);
  }

  function resetCounterValue() {
    setErrorCounterValue(null)
    setCounterValue(0);
  }

  function setCounterRange() {
    console.log(minValue)
    if(minValue >= 0) {
      counterRange.min = minValue;
      counterRange.max = maxValue;
      setCounterValue(minValue);
    } else {
      setErrorCounterValue("Incorrect value");
    }
  }

  function changeMaxValue(value: string) {
    if(Number(value) >= 0) {
      setMaxValue(Number(value));
    } else {
      setMaxValue(-1);
    }
    checkErrorCounterValue()
  }

  function changeMinValue(value: string) {
    if(Number(value) >= 0) {
      setMinValue(Number(value));
    } else {
      checkErrorCounterValue()
      setMinValue(-1);
    }
    checkErrorCounterValue()
  }

  function checkErrorCounterValue() {
    if (minValue < 0 || maxValue < 0) {
      setErrorCounterValue("Incorrect value");
    } else {
      setErrorCounterValue(null);
    }
  }


console.log(errorCounterValue)

  return (
    <div className="App">
      <Counter counterValue={counterValue}
               maxValue={maxValue}
               changeMaxValue={changeMaxValue}
               minValue={minValue}
               changeMinValue={changeMinValue}
               incrementCounterValue={incrementCounterValue}
               resetCounterValue={resetCounterValue}
               setCounterRange={setCounterRange}
               errorCounterValue={errorCounterValue}
      />
    </div>
  );
}

export default App;
