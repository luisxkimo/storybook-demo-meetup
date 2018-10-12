import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, selectV2, text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'
import Dropdown from '../components/dropdown/Dropdown'
import DropdownRecompose from '../components/dropdown/DropdownRecompose'

const options = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large'
}

storiesOf('Dropdown', module)
  .add('Dropdown regular', () => (
    <Dropdown
      buttonText={text('Button text', '🎉 Toggle me!')}
      isClosed={boolean('Is closed', true)}
      typeWidth={selectV2('Type width', options, 'medium')}
      onButtonClick={action('Button clicked!')}
    >
      <p>⚛️ I want to try React + Storybook</p>
      <p>🍕 Ok, the speech is fine but I want pizza</p>
      <p>🍺 Come on! Shut up and let's go for beers</p>
    </Dropdown>
  ))
  .add('Dropdown with Recompose', () => (
    <DropdownRecompose
      buttonText={text('Button text', '🎉 Toggle me!')}
      isClosed={boolean('Is closed', true)}
      typeWidth={selectV2('Type width', options, 'medium')}
    >
      <p>⚛️ I want to try React + Storybook</p>
      <p>🍕 Ok, the speech is fine but I want pizza</p>
      <p>🍺 Come on! Shut up and let's go for beers</p>
    </DropdownRecompose>
  ))
  .add('Dropdown with Addon Info',
    withInfo({
      header: false,
      inline: true
    })(() =>(
      <Dropdown
        buttonText={text('Button text', '🎉 Toggle me!')}
        isClosed={boolean('Is closed', true)}
        typeWidth={selectV2('Type width', options, 'medium')}
        onButtonClick={action('Button clicked!')}
      >
        <p>⚛️ I want to try React + Storybook</p>
        <p>🍕 Ok, the speech is fine but I want pizza</p>
        <p>🍺 Come on! Shut up and let's go for beers</p>
      </Dropdown>
    ))
  )
