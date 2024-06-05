import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  gap?: string
  border?: string

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    padding: 5px;
    border: ${props => props.border || `2px solid ${theme.borders.primary}`};
    border-radius: 5px;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap || '15px'};
`