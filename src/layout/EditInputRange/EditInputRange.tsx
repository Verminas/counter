import {InputItem} from "../../components/InputItem/InputItem";
import {BorderWrapper} from "../../components/BorderWrapper";
import React, {ChangeEvent} from "react";

type Props = {
  minValue: number
  maxValue: number
  changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  inputItemMinValueError: boolean
  inputItemMaxValueError: boolean

};
export const EditInputRange = ({maxValue, changeMaxValue, changeMinValue, minValue, inputItemMinValueError, inputItemMaxValueError}: Props) => {
  return (
    <BorderWrapper>
      <InputItem id={'maxValue'} value={maxValue} onChange={changeMaxValue} labelTitle={'Max value: '}
                 error={inputItemMaxValueError}/>
      <InputItem id={'startValue'} value={minValue} onChange={changeMinValue} labelTitle={'Start value: '}
                 error={inputItemMinValueError}/>
    </BorderWrapper>
  );
};