import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [minValue, setMinValue] = useState<number>(() => {
    const min = localStorage.getItem('minValue')
    if(min) {
      return JSON.parse(min);
    } else {
      return 0;
    }
  });
  const [maxValue, setMaxValue] = useState<number>(() => {
    const max = localStorage.getItem('maxValue')
    if(max) {
      return JSON.parse(max);
    } else {
      return 5;
    }
  });

  const [editMode, setEditMode] = useState<boolean>(false);

  function changeEditMode() {
    setEditMode(!editMode)
  }

  function changeMinValue(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = Number(e.currentTarget.value);
    if(currentValue >= -1) {
      setMinValue(currentValue)
    }
  }

  function changeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = Number(e.currentTarget.value);
    if(currentValue >= -1 || currentValue > minValue) {
      setMaxValue(currentValue)
    }
  }

  const setInEditModeDisabled = minValue < 0 || minValue > maxValue;

  return (
    <div className="App">
    <div>
      {editMode ? <div>
        <div>
          <label htmlFor={'maxValue'}>Max value: </label>
          <input id={'maxValue'} type={'number'} value={maxValue} onChange={changeMaxValue}/>
        </div>
        <div>
          <label htmlFor={'startValue'}>Start value: </label>
          <input id={'startValue'} type={'number'} value={minValue} onChange={changeMinValue}/>
        </div>

      </div> : <div>
        <h2>{value}</h2>
      </div>}
      {editMode ? <div>
        <button disabled={setInEditModeDisabled}>Set</button>
      </div> : <div>
        <button>Inc</button>
        <button>Reset</button>
        <button onClick={changeEditMode}>Set</button>
      </div>}
    </div>
    </div>
  );
}

export default App;
