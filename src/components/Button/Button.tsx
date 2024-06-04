import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme";

type ButtonPropsType = {
  children: string
  onClick: () => void
}

export const Button = ({children, onClick}: ButtonPropsType) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

const StyledButton = styled.button<ButtonPropsType>`
    width: fit-content;
    padding: 5px;
    margin: 10px;
    border: 1px solid ${theme.borders.primary};
    border-radius: 5px;
    text-align: center;
    font-size: 25px;
    background-color: ${theme.backgrounds.third};
    color: ${theme.fonts.secondary}
`