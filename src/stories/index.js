import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'
import Dropdown from '../components/dropdown/Dropdown'

storiesOf('Dropdown', module)
  .add('Dropdown regular', () => (
    <Dropdown
      buttonText={text('Button text', 'Click me!')}
      onButtonClick={action('Button click!')}
    />
  ))
