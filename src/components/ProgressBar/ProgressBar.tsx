import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/theme";

type Props = {
  percent: number | boolean
};
export const ProgressBar = ({percent}: Props) => {
  return (
    <StyledProgressBar percent={percent}></StyledProgressBar>
  );
};

const StyledProgressBar = styled.span<{ percent: number | boolean }>`
    display: ${props => props.percent === false ? 'none' : 'inline-block'};
    width: 100px;
    height: 5px;
    border-radius: 5px;
    border: 1px solid grey;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.percent !== false ? `${props.percent}%` : `0`};
        height: 100%;
        border-radius: 5px;
        background-color: ${props => props.percent <= 20
                ? 'rgb(91,207,142)'
                : props.percent <= 40
                        ? 'rgb(211,188,65)' :
                        props.percent <= 60
                                ? 'rgb(230,147,39)' :
                                props.percent <= 80
                                        ? 'rgb(237,103,72)' 
                                        : 'rgb(209,50,1)'
        };
        transition: all 0.4s ease-in-out;
    }
`