import React from 'react';
import './StartButton.css';

interface IProps {
    isLoaded?: boolean,
    longWeekendsList?: Array<any>
}


export function StartButton(props: IProps) {
    // const {isLoaded, longWeekendsList} = props;
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