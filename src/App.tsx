import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {InputItem} from "./components/InputItem/InputItem";
import {Button} from "./components/Button/Button";
import {CounterValue} from "./components/CounterValue/CounterValue";
import styled from "styled-components";
import {BorderWrapper} from "./components/BorderWrapper";

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

  const setInEditModeBtnDisabled = minValue < 0 || minValue >= maxValue;
  const incrementBtnDisabled = value >= maxValue;
  const resetBtnDisabled = value === minValue;
  const inputItemMinValueError = minValue < 0 || minValue >= maxValue;
  const inputItemMaxValueError = maxValue < 0 || minValue >= maxValue;
  const valueIsMaxValue = value >= maxValue;

  return (
    <div className="App">
      <WrapperContent>
        {editMode
          ? (
            <BorderWrapper>
              <InputItem id={'maxValue'} value={maxValue} onChange={changeMaxValue} labelTitle={'Max value: '}
                         error={inputItemMaxValueError}/>
              <InputItem id={'startValue'} value={minValue} onChange={changeMinValue} labelTitle={'Start value: '}
                         error={inputItemMinValueError}/>
            </BorderWrapper>
          )
          : (
            <CounterValue value={value} error={valueIsMaxValue}/>
          )}
        {editMode ? <BorderWrapper>
          <Button disabled={setInEditModeBtnDisabled} onClick={saveSettings} title={'Set'}/>
        </BorderWrapper> : <BorderWrapper>
          <Button onClick={incrementValue} disabled={incrementBtnDisabled} title={'Inc'}/>
          <Button onClick={resetValue} disabled={resetBtnDisabled} title={'Reset'}/>
          <Button onClick={changeEditMode} title={'Set'}/>
        </BorderWrapper>}
      </WrapperContent>
    </div>
  );
}

export default App;

const WrapperContent = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`