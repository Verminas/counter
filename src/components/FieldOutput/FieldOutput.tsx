import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {InputField} from "../InputField/InputField";
import {Button} from "../Button/Button";
import styled from "styled-components";
import {theme} from "../../styles/theme";
import {ErrorMessage} from "../../App";

type FieldOutputPropsType = {
  counterValue: number
  incrementCounterValue: () => void
  resetCounterValue: () => void
  errorCounterValue: null | ErrorMessage
}

export const FieldOutput = ({
                              counterValue,
                              incrementCounterValue,
                              resetCounterValue,
                              errorCounterValue
                            }: FieldOutputPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper>
        <StyledSpan className={errorCounterValue ? 'error' : ''}>{errorCounterValue || counterValue}</StyledSpan>
      </FlexWrapper>
      <FlexWrapper>
        <Button children={'inc'} onClick={incrementCounterValue}/>
        <Button children={'reset'} onClick={resetCounterValue}/>
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