import {BorderWrapper} from "../../components/BorderWrapper";
import {CounterValue} from "../../components/CounterValue/CounterValue";
import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {theme} from "../../styles/theme";
import {EditInputRange} from "../EditInputRange/EditInputRange";
import {ButtonSetWrapper} from "../ButtonSetWrapper/ButtonSetWrapper";
import {ButtonsWrapper} from "../ButtonsWrapper/ButtonsWrapper";

type Props = {
  value: number
  maxValue: number
  minValue: number
  editMode: boolean
  changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeEditMode: () => void
  resetValue: () => void
  incrementValue: () => void
  saveSettings: () => void
};
export const Counter = ({
                          value,
                          minValue,
                          maxValue,
                          editMode,
                          changeMinValue,
                          changeMaxValue,
                          changeEditMode,
                          incrementValue,
                          resetValue,
                          saveSettings
                        }: Props) => {

  const setInEditModeBtnDisabled = minValue < 0 || minValue >= maxValue;
  const incrementBtnDisabled = value >= maxValue;
  const resetBtnDisabled = value === minValue;
  const inputItemMinValueError = minValue < 0 || minValue >= maxValue;
  const inputItemMaxValueError = maxValue < 0 || minValue >= maxValue;
  const valueIsMaxValue = value >= maxValue;

  return (
    <WrapperContent>
      <BorderWrapperContent>
        {editMode
          ? <EditInputRange minValue={minValue}
                            maxValue={maxValue}
                            changeMaxValue={changeMaxValue}
                            changeMinValue={changeMinValue}
                            inputItemMinValueError={inputItemMinValueError}
                            inputItemMaxValueError={inputItemMaxValueError}
          />
          : <CounterValue value={value} error={valueIsMaxValue}/>
        }
        {editMode
          ? <ButtonSetWrapper onClick={saveSettings} disabled={setInEditModeBtnDisabled}/>
          : <ButtonsWrapper changeEditMode={changeEditMode}
                            incrementBtnDisabled={incrementBtnDisabled}
                            incrementValue={incrementValue}
                            resetBtnDisabled={resetBtnDisabled}
                            resetValue={resetValue}/>
        }
      </BorderWrapperContent>
    </WrapperContent>
  );
};

const WrapperContent = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    background-color: ${theme.bgcolor.primary};
`

const BorderWrapperContent = styled(BorderWrapper)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    max-width: 300px;
`