import React, {ChangeEvent} from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {InputField} from "../InputField/InputField";
import {Button} from "../Button/Button";

type FieldEnterPropsType = {
  maxValue: number
  changeMaxValue: (value: string) => void
  minValue: number
  changeMinValue: (value: string) => void
  setCounterRange: () => void
}

export const FieldEnter = ({maxValue, changeMaxValue, minValue, changeMinValue, setCounterRange}: FieldEnterPropsType) => {
  return (
    <FlexWrapper gap={'1000px'}>
      <FlexWrapper>
        <InputField title={'Max value: '}
                    value={maxValue}
                    onChange={(e) => changeMaxValue(e.currentTarget.value)}
        />
        <InputField title={'Start value: '}
                    value={minValue}
                    onChange={(e) => changeMinValue(e.currentTarget.value)}
        />
      </FlexWrapper>
      <FlexWrapper>
        <Button children={'set'} onClick={setCounterRange}/>
      </FlexWrapper>
    </FlexWrapper>
  );
};