import React, {ChangeEvent} from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../styles/theme";
import {EntryField} from "./EntryField/EntryField";
import {OutputField} from "./OutputField/OutputField";
import {ErrorMessage, WarningMessage} from "../../App";

type CounterPropsType = {
  counterValue: number | WarningMessage
  maxValue: number
  minValue: number
  changeMinValue: (value: string) => void
  changeMaxValue: (value: string) => void
  incrementCounterValue: () => void
  resetCounterValue: () => void
  setCounterRange: () => void
  errorCounterValue: null | ErrorMessage
  counterIsMax: boolean
}

export const Counter = ({
                          counterValue,
                          maxValue,
                          changeMaxValue,
                          minValue,
                          changeMinValue,
                          incrementCounterValue,
                          resetCounterValue,
                          setCounterRange,
                          errorCounterValue,
                          counterIsMax
                        }: CounterPropsType) => {
  return (
    <StyledCounter>
      <Container>
        <FlexWrapper direction={'row'} align={'stretch'} border={'none'}>
          <EntryField maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      minValue={minValue}
                      changeMinValue={changeMinValue}
                      setCounterRange={setCounterRange}
                      errorCounterValue={errorCounterValue}
          />
          <OutputField counterValue={counterValue}
                       incrementCounterValue={incrementCounterValue}
                       resetCounterValue={resetCounterValue}
                       errorCounterValue={errorCounterValue}
                       counterIsMax={counterIsMax}
          />
        </FlexWrapper>
      </Container>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.backgrounds.primary};
`