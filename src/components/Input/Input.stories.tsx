import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';
import React, {ChangeEvent, useState} from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const callback = action('onChange');

export const FirstStory: Story = {
  args: {
    title: 'Input',
    id: 'input',
    error: false,
    value: 0,
    onChange: callback
  }
}

export const InputDemo = () => {
  const [value, setValue] = useState(0);
  function changeValue(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.currentTarget.value);
    if(newValue >= -1) {
      setValue(newValue)
    }
  }
  return <Input id={'input-demo'} title={'Input Demo'} value={value} error={value <= -1} onChange={changeValue}/>
}

export const InputError = () => {
  return <Input id={'input-error'} title={'Input Error'} value={-1} error={true} onChange={callback}/>
}

export const InputDefault = () => {
  return <Input id={'input-default'} title={'Input Default'} value={1} error={false} onChange={callback}/>
}

