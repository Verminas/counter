import React from "react";
import styled from "styled-components";

type Props = {
  percent: number | boolean
};
export const ProgressBar = ({percent}: Props) => {
  return (
    <StyledProgressBar percent={percent}></StyledProgressBar>
  );
};

const StyledProgressBar = styled.span<{percent: number | boolean}>`
    display: ${props => props.percent === false ? 'none' : 'inline-block'};
    width: 100px;
    height: 4px;
    border-radius: 5px;
    border: 1px solid grey;
    position: relative;
    
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.percent !== false ? `${props.percent}%` : `0`};
        height: 100%;
        border-radius: 5px;
        background-color: aquamarine;
        transition: all 0.4s ease-in-out;
    }
`