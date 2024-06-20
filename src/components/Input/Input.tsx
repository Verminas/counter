import s from "../../App.module.css";
import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {theme} from "../../styles/theme";

type Props = {
  id: string
  value: number
  onChange: (e:  ChangeEvent<HTMLInputElement>) => void
  error: boolean
  title: string
};
export const Input = ({value, error, onChange, title, id}: Props) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id} error={error}>{title}</StyledLabel>
      <StyledInput id={id} type="number" value={value} onChange={onChange} error={error} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    white-space: wrap;
    align-items: center;
`

const StyledInput = styled.input<{error: boolean}>`
    max-width: 100px;
    color: ${props => props.error ? `${theme.errors.secondary}` : `${theme.colors.primary}`};
    background-color: ${props => props.error ? `${theme.errors.primary}` : `transparent`};
    border: ${props => props.error ? `1px solid ${theme.errors.secondary}` : `1px solid ${theme.borders.primary}`};
    border-radius: 5px;
    padding: 3px;
    
    &:focus-visible{
        outline: ${props => props.error ? `1px solid ${theme.errors.secondary}` : `1px solid ${theme.borders.primary}`};
    }
`

const StyledLabel = styled.label<{error: boolean}>`
    color: ${props => props.error ? `${theme.errors.secondary}` : `${theme.colors.primary}`};
`