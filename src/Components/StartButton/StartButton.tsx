import React from 'react';
import './StartButton.css';

export function StartButton(props: any) {


    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={props.redirectToResultPage} >Show Long Weekends</button>
        </div>
    )
}