import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ProgressBar } from './ProgressBar';
import React, {ChangeEvent, useState} from "react";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const FirstStory: Story = {
  args: {
    percent: 0
  }
}

export const ProgressBarDemo = () => {
  const [percent, setPercent] = useState<number>(0);

  function changePercent(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.currentTarget.value);
    if(newValue >= 0 && newValue <= 100) {
      setPercent(newValue)
    }
  }
  return (
    <>
      <input type={'number'} value={percent} onChange={changePercent}/>
      <ProgressBar percent={percent}/>
    </>
    )
}

export const ProgressBar0 = () => {
  return (
      <ProgressBar percent={0}/>
  )
}
export const ProgressBar10 = () => {
  return (
    <ProgressBar percent={10}/>
  )
}
export const ProgressBar20 = () => {
  return (
    <ProgressBar percent={20}/>
  )
}
export const ProgressBar40 = () => {
  return (
    <ProgressBar percent={40}/>
  )
}
export const ProgressBar60 = () => {
  return (
    <ProgressBar percent={60}/>
  )
}
export const ProgressBar80 = () => {
  return (
    <ProgressBar percent={80}/>
  )
}
export const ProgressBar100 = () => {
  return (
    <ProgressBar percent={100}/>
  )
}

