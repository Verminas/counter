import React, {ChangeEvent} from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../styles/theme";
import {FieldEnter} from "../../components/FieldEnter/FieldEnter";
import {FieldOutput} from "../../components/FieldOutput/FieldOutput";
import {ErrorMessage} from "../../App";

type CounterPropsType = {
  counterValue: number
  maxValue: number
  minValue: number
  changeMinValue: (value: string) => void
  changeMaxValue: (value: string) => void
  incrementCounterValue: () => void
  resetCounterValue: () => void
  setCounterRange: () => void
  errorCounterValue: null | ErrorMessage
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
                          errorCounterValue
                        }: CounterPropsType) => {
  return (
    <StyledCounter>
      <Container>
        <FlexWrapper>
          <FieldEnter maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      minValue={minValue}
                      changeMinValue={changeMinValue}
                      setCounterRange={setCounterRange}
          />
          <FieldOutput counterValue={counterValue}
                       incrementCounterValue={incrementCounterValue}
                       resetCounterValue={resetCounterValue}
                       errorCounterValue={errorCounterValue}
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