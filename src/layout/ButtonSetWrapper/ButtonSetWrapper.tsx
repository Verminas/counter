import {Button} from "../../components/Button/Button";
import {BorderWrapper} from "../../components/BorderWrapper";
import React from "react";

type Props = {
  onClick: () => void
  disabled: boolean
};
export const ButtonSetWrapper = ({onClick, disabled}: Props) => {
  return (
    <BorderWrapper>
      <Button disabled={disabled} onClick={onClick} title={'Set'}/>
    </BorderWrapper>
  );
};