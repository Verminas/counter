import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import React, {useState} from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const callback = action('onClick');

export const FirstStory: Story = {
  args: {
    title: 'Button',
    disabled: false,
    onClick: callback,
  }
}

export const ButtonDemo = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  return <Button title={'Button Demo'} disabled={isDisabled} onClick={() => setIsDisabled(!isDisabled)}/>
}

export const ButtonDisabled = () => {
  return <Button title={'Button Disabled'} disabled={true} onClick={callback}/>
}

export const ButtonPrimary = () => {
  return <Button title={'Button Primary'} disabled={false} onClick={callback}/>
}

