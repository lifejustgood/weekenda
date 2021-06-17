import React from 'react';
import '../HeaderResultPage/HeaderResultPage.css';

import Logo from '../../images/logo.png';

export function HeaderResultPage() {
    return (
        <div className='headerSection'>
            <div id='headerLogo'>
                <img src={Logo} alt='logoWeekenda' id='logo'></img> 
            </div>
            <h2>LIST OF LONG WEEKENDS</h2>
            <h3>UKRAINE, 2021</h3>
        </div>
    )
}