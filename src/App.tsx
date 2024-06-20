import React, {ChangeEvent, useEffect, useLayoutEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button/Button";
import {CurrentValue} from "./layout/CurrentValue/CurrentValue";
import {Input} from "./components/Input/Input";
import {WrapperBorder} from "./components/WrapperBorder";
import {WrapperContent} from "./components/WrapperContent";

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
  const isDisabledBtnSet = error || setDisabled;
  const isDisabledBtnIncrement = typeof value === 'string' || value >= maxValue;
  const isDisabledBtnReset = typeof value === 'string' || value === minValue;
  const classNameForCurrentValue = error || value === maxValue;

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
      <WrapperContent>
        <div>
          <WrapperBorder direction={'column'}>
            <Input id={'maxValue'} title={'max value: '} value={maxValue} onChange={updateMaxValue} error={errorMaxValue}/>
            <Input id={'startValue'} title={'start value: '} value={minValue} onChange={updateMinValue} error={errorMinValue}/>
          </WrapperBorder>
          <WrapperBorder>
            <Button onClick={() => setRange(minValue, maxValue)} disabled={isDisabledBtnSet} title={'Set'}/>
          </WrapperBorder>
        </div>
        <div>
          <WrapperBorder>
            <CurrentValue value={value} minValue={minValue} maxValue={maxValue} error={classNameForCurrentValue}/>
          </WrapperBorder>
          <WrapperBorder>
            <Button onClick={() => increment(value)} disabled={isDisabledBtnIncrement} title={'Increment'}/>
            <Button onClick={() => reset(value)} disabled={isDisabledBtnReset} title={'Reset'}/>
          </WrapperBorder>
        </div>
      </WrapperContent>
    </div>
  );
}

export default App;

