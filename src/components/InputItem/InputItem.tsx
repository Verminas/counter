import React from "react";
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Props = {
  id: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelTitle: string
  error: boolean
};
export const InputItem = ({id, value, onChange, labelTitle, error}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{labelTitle}</label>
      <StyledInput id={id} type={'number'} value={value} onChange={onChange} error={error}/>
    </div>
  );
};

const StyledInput = styled.input<{ error: boolean}>`
    background-color: ${props => props.error ? 'red' : 'transparent'};
    border: ${props => props.error ? '1px solid red' : '1px solid black'};
    max-width: 100px;

    &:focus-visible {
        outline: ${props => props.error ? '1px solid red' : '1px solid black'};
    }
`