import React from 'react';
import './StartButton.css';

interface IStartButtonProps {
    redirectToResultPage() : void;
}

export function StartButton(props: IStartButtonProps) {


    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={props.redirectToResultPage} >Show Long Weekends</button>
        </div>
    )
}