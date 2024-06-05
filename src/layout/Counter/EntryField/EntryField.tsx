import React, {ChangeEvent} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {InputField} from "../../../components/InputField/InputField";
import {Button} from "../../../components/Button/Button";
import {ErrorMessage} from "../../../App";

type EntryFieldPropsType = {
  maxValue: number
  changeMaxValue: (value: string) => void
  minValue: number
  changeMinValue: (value: string) => void
  setCounterRange: () => void
  errorCounterValue: null | ErrorMessage
}

export const EntryField = ({maxValue, changeMaxValue, minValue, changeMinValue, setCounterRange, errorCounterValue}: EntryFieldPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper>
        <InputField title={'Max value: '}
                    value={maxValue}
                    onChange={(e) => changeMaxValue(e.currentTarget.value)}
                    error={!!errorCounterValue}
        />
        <InputField title={'Start value: '}
                    value={minValue}
                    onChange={(e) => changeMinValue(e.currentTarget.value)}
                    error={!!errorCounterValue}
        />
      </FlexWrapper>
      <FlexWrapper>
        <Button children={'set'} onClick={setCounterRange} disabled={!!errorCounterValue}/>
      </FlexWrapper>
    </FlexWrapper>
  );
};