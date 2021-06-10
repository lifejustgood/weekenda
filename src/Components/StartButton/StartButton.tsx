import React from 'react';
import './StartButton.css';

export function StartButton(props: any) {
     const {isLoaded, longWeekendsList} = props;
    
    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={props.onClick} >Show Long Weekends</button>
        </div>
    )
}