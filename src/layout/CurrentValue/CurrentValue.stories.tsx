import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CurrentValue } from './CurrentValue';
import React, {ChangeEvent, useState} from "react";

const meta: Meta<typeof CurrentValue> = {
  component: CurrentValue,
};

export default meta;

type Story = StoryObj<typeof CurrentValue>;

export const FirstStory: Story = {
  args: {
    value: 1,
    minValue: 0,
    maxValue: 10,
    error: false
  }
}

export const CurrentValueDemo = () => {
  return <CurrentValue error={false} value={5} maxValue={10} minValue={1}/>
}

export const CurrentValueError = () => {
  return <CurrentValue error={true} value={11} maxValue={10} minValue={1}/>
}