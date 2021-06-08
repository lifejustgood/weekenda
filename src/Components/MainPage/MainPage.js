import React from 'react';
import './MainPage.css';
import { StartButton } from '../StartButton/StartButton';

export function MainPage() {
    return (
        <div className='mainPageHeader'>
            <div className='motivationQuestion'>
                <h1>Are you tired of work,</h1>
                <h1>but have limited vacation days?</h1>
                <h2 className='secondParagraph'>Plan your vacation wisely!</h2>
                <h2>Push the button and inspire yourself!</h2>
            </div>
            <StartButton />
        </div>
    )
}