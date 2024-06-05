import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme";

type InputFieldPropsType = {
  title: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
   error?: boolean
}

export const InputField = ({title, value, onChange, error}: InputFieldPropsType) => {
  return (
    <Wrapper>
      <StyledLabel>{title}<StyledInput type={'number'}
                                       value={value}
                                       onChange={onChange}
                                       className={value < 0 || error ? 'error' : ''}
      /></StyledLabel>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    width: fit-content;
    padding: 5px;
`

const StyledLabel = styled.label`
    color: ${theme.fonts.primary};
    font-size: 18px;
`
const StyledInput = styled.input`
    background-color: ${theme.backgrounds.secondary};
    margin-left: 15px;
    border: 2px solid ${theme.borders.primary};
    border-radius: 5px;
    
    &.error{
        background-color: ${theme.error};
        border: 2px solid ${theme.error};
    }
`