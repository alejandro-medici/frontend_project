import React from 'react'
import PromptButton from './PromptButton'

export default function UserPrompt() {
    return (
        <div className='UserPrompt'>
            <PromptButton to='/pets' name='Pets' styleName='dark'/>
            <PromptButton to='/home' name='Home' styleName='light'/>
        </div>
    )
}
