import React from 'react';
import '../HeaderResultPage/HeaderResultPage.css';

export function HeaderResultPage() {
    return (
        <div className='headerSection'>
            <div id='headerLogo'>
                <img src={window.location.origin + '/logo.png'} alt='logoWeekenda' id='logo'></img> 
            </div>
            <h1>LIST OF LONG WEEKENDS</h1>
            <h3>UKRAINE, 2021</h3>
        </div>
    )
}