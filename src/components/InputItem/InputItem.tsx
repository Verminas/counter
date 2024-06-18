import React from "react";
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import {theme} from "../../styles/theme";

type Props = {
  id: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelTitle: string
  error: boolean
};
export const InputItem = ({id, value, onChange, labelTitle, error}: Props) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id} error={error}>{labelTitle}</StyledLabel>
      <StyledInput id={id} type={'number'} value={value} onChange={onChange} error={error}/>
    </Wrapper>
  );
};

const StyledInput = styled.input<{ error: boolean}>`
    background-color: ${props => props.error ? `${theme.error.primary}` : 'transparent'};
    border: ${props => props.error ? `1px solid ${theme.error.secondary}` : '1px solid black'};
    max-width: 100px;
    border-radius: 5px;
    font-size: 20px;
    color: ${theme.color.primary};

    &:focus-visible {
        outline: ${props => props.error ? '1px solid red' : '1px solid black'};
    }
`
const StyledLabel = styled.label<{ error: boolean}>`
    font-size: 20px;
    margin-right: 5px;
    color: ${props => props.error ? `${theme.error.secondary}` : `${theme.color.primary}`};
`
const Wrapper = styled.div`
   text-align: center;
    
    & + &{
        margin-top: 5px;
    }
`