import React from 'react';
import { useHistory } from "react-router-dom"
import './StartButton.css';

export function StartButton(props: any) {
    const redirectToResultPage = () => {
        props.handleButtonClick();

        // let history = useHistory();
        const { history } = props;
        console.log('history=%', history);
        console.log("redirect works");
        history.push('/ResultPage');
      }

    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={redirectToResultPage} >Show Long Weekends</button>
        </div>
    )
}