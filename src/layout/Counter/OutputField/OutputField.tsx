import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {InputField} from "../../../components/InputField/InputField";
import {Button} from "../../../components/Button/Button";
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {ErrorMessage, WarningMessage} from "../../../App";

type OutputFieldPropsType = {
  counterValue: number | WarningMessage
  incrementCounterValue: () => void
  resetCounterValue: () => void
  errorCounterValue: null | ErrorMessage
  counterIsMax: boolean
}

export const OutputField = ({
                              counterValue,
                              incrementCounterValue,
                              resetCounterValue,
                              errorCounterValue,
                              counterIsMax
                            }: OutputFieldPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper>
        <StyledSpan className={errorCounterValue || counterIsMax ? 'error' : ''}>{errorCounterValue || counterValue}</StyledSpan>
      </FlexWrapper>
      <FlexWrapper>
        <Button children={'inc'} onClick={incrementCounterValue} disabled={counterIsMax || !!errorCounterValue || typeof counterValue !== 'number'}/>
        <Button children={'reset'} onClick={resetCounterValue} disabled={!!errorCounterValue || typeof counterValue !== 'number'}/>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledSpan = styled.span`
    display: inline-block;
    padding: 5px;
    font-size: 40px;
    color: ${theme.fonts.primary};
    
    &.error{
        color: ${theme.error};
    }
`