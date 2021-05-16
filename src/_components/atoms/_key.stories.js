import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import Key from './_key'
import { action } from '@storybook/addon-actions'
export default {
    component: Key,
    title: "Keys",
    decorators: [withKnobs]
}

export const KeyStory = () => {
    return (
        <Key value={text("value", "1")} />
    )
}