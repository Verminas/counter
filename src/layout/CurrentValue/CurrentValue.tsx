import s from "../../App.module.css";
import React from "react";
import styled from "styled-components";
import {ProgressBar} from "../../components/ProgressBar/ProgressBar";
import {theme} from "../../styles/theme";

type Props = {
  error: boolean
  value: number | string
  maxValue: number
  minValue: number
};
export const CurrentValue = ({value, maxValue,error, minValue}: Props) => {
  const percent = typeof value === 'number' ? ((value - minValue) / (maxValue - minValue)) * 100 : false;
  console.log(percent)
  return (
    <Wrapper>
      <Title error={error}>{value}</Title>
      <ProgressBar percent={percent <= 100 ? percent : 100}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2<{error: boolean}>`
    min-height: 45px;
    color: ${props => props.error ? `${theme.errors.secondary}` : `${theme.colors.primary}`};
    transform: ${props => props.error ? `scale(1.2)` : `scale(1.0)`};
    font-size: 18px;
    margin: 0;
`