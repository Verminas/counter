import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/theme";

type ButtonPropsType = {
  children: string
  onClick: () => void
  disabled?: boolean
}

export const Button = ({children, onClick, disabled}: ButtonPropsType) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>
  );
};

const StyledButton = styled.button<ButtonPropsType>`
    width: fit-content;
    padding: 10px;
    margin: 10px;
    border: 1px solid ${theme.borders.primary};
    border-radius: 5px;
    text-align: center;
    font-size: 25px;
    background-color: ${theme.backgrounds.third};
    color: ${theme.fonts.secondary};
    cursor: pointer;
    ${props => props.disabled && css`
        opacity: 0.5;
        cursor: auto;
    `}
`