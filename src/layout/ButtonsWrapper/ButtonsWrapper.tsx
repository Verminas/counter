import {Button} from "../../components/Button/Button";
import {BorderWrapper} from "../../components/BorderWrapper";
import React from "react";

type Props = {
  incrementValue: () => void
  resetValue: () => void
  changeEditMode: () => void
  incrementBtnDisabled: boolean
  resetBtnDisabled: boolean
};
export const ButtonsWrapper = ({incrementValue, resetValue, changeEditMode, resetBtnDisabled, incrementBtnDisabled}: Props) => {
  return (
    <BorderWrapper>
      <Button onClick={incrementValue} disabled={incrementBtnDisabled} title={'Inc'}/>
      <Button onClick={resetValue} disabled={resetBtnDisabled} title={'Reset'}/>
      <Button onClick={changeEditMode} title={'Settings'}/>
    </BorderWrapper>
  );
};