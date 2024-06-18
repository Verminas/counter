import s from "../../App.module.css";
import React, {ChangeEvent} from "react";
import styled from "styled-components";

type Props = {
  id: string
  value: number
  onChange: (e:  ChangeEvent<HTMLInputElement>) => void
  className?: string
  title: string
};
export const Input = ({value, className, onChange, title, id}: Props) => {
  return (
    <Wrapper>
      <label htmlFor={id} >{title}</label>
      <input id={id} type="number" value={value} onChange={onChange} className={className}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    word-break: keep-all;
    
    input{
        max-width: 100px;
    }
`