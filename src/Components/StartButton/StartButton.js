import React from 'react';
import './StartButton.css';

export function StartButton(props) {
    const handleClick = () => {

    }
    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={handleClick} >Show Long Weekends</button>
        </div>
    )
}