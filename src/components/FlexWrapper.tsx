import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

type FlexWrapperPropsType = {
  children: React.ReactNode
  direction?: string
  justify?: string
  align?: string
  gap?: string
  border?: string

}

export const FlexWrapper = (props: FlexWrapperPropsType) => {
  return (
    <StyledFlexWrapper>
      {props.children}
    </StyledFlexWrapper>
  );
};

const StyledFlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    border: ${props => props.border || `2px solid ${theme.borders.primary}`};
    border-radius: 5px;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.justify || 'center'};
    gap: ${props => props.gap || '15px'};
`