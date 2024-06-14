import s from "../../App.module.css";
import React, {ChangeEvent} from "react";

type Props = {
  value: number
  onChange: (e:  ChangeEvent<HTMLInputElement>) => void
  className?: string
};
export const Input = ({value, className, onChange}: Props) => {
  return (
    <input type="number" value={value} onChange={onChange} className={className}/>
  );
};