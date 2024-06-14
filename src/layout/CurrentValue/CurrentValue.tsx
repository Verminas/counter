import s from "../../App.module.css";
import React from "react";
import styled from "styled-components";
import {ProgressBar} from "../../components/ProgressBar/ProgressBar";

type Props = {
  className?: string
  value: number | string
  maxValue: number
  minValue: number
};
export const CurrentValue = ({value, maxValue,className, minValue}: Props) => {
  const percent = typeof value === 'number' ? ((value - minValue) / (maxValue - minValue)) * 100 : false;
  console.log(percent)
  return (
    <Wrapper>
      <h2 className={className}>{value}</h2>
      <ProgressBar percent={percent}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    min-height: 60px;
`