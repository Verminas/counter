import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./layout/Counter/Counter";

export type ErrorMessage = 'Incorrect value';
export type WarningMessage = 'Enter values and press "set"';

function App() {
  console.log('rendering...')
  const [maxValue, setMaxValue] = useState(() => {
    if(!!localStorage.getItem('maxCounterRange')) {
      return Number(localStorage.getItem('maxCounterRange'));
    } else {
      return 5;
    }
  });
  const [minValue, setMinValue] = useState(() => {
    if(!!localStorage.getItem('minCounterRange')) {
      return Number(localStorage.getItem('minCounterRange'));
    } else {
      return 0;
    }
  });
  const [counterValue, setCounterValue] = useState<number | WarningMessage>(minValue);
  const [counterIsMax, setCounterIsMax] = useState(false);
  const [errorCounterValue, setErrorCounterValue] = useState<null | ErrorMessage>(null);
  const errorMessage: ErrorMessage = 'Incorrect value';
  const warningMessage = 'Enter values and press "set"'

  function incrementCounterValue() {
    console.log(`before +: ${counterValue}`)
    if(!errorCounterValue) {
      if(typeof counterValue === 'number' &&  counterValue < Number(localStorage.getItem('maxCounterRange'))){
        setCounterIsMax(false);
        setCounterValue(counterValue + 1);
        console.log(`after +: ${counterValue}`)
      } else {
        setCounterValue(Number(localStorage.getItem('maxCounterRange')))
        setCounterIsMax(true);
      }
    }
    //setCounterValue(counterValue + 1);
  }
  console.log(`out function +: ${counterValue}`)

  function resetCounterValue() {
    setErrorCounterValue(null)
    setCounterValue(Number(localStorage.getItem('minCounterRange')));
    setCounterIsMax(false);
  }

  function setCounterRange() {
    resetCounterValue();
    if(minValue >= 0 && minValue < maxValue) {
      localStorage.setItem('minCounterRange', JSON.stringify(minValue));
      localStorage.setItem('maxCounterRange', JSON.stringify(maxValue));
      setCounterValue(minValue);
    } else {
      setErrorCounterValue(errorMessage);
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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function changeMinValue(value: string) {
    checkMinValueFromLS();

    if(Number(value) >= 0) {
      setMinValue(Number(value));
    } else {
      checkErrorCounterValue()
      setErrorCounterValue(errorMessage);
      setMinValue(-1);
    }
    checkErrorCounterValue()
  }

  function checkMinValueFromLS() {
    checkComparisonMinMaxCounterRange();
    if(minValue !== Number(localStorage.getItem('minCounterRange'))) {
      setCounterValue(warningMessage);
      setErrorCounterValue(errorMessage)
    } else {
      setCounterValue(minValue);
    }
  }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function checkComparisonMinMaxCounterRange() {
    if(minValue > maxValue) {
      setErrorCounterValue(errorMessage)
    }
  }

  function checkErrorCounterValue() {
    if (minValue < 0 || maxValue < 0) {
      setErrorCounterValue(errorMessage);
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
               counterIsMax={counterIsMax}
      />
    </div>
  );
}

export default App;
