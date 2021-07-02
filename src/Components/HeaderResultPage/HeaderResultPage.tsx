import React from 'react';
import '../HeaderResultPage/HeaderResultPage.css';

import Logo from '../../images/logo.png';

export function HeaderResultPage() {
    return (
        <div className='headerContainer'>
            <div id='headerLogo'>
                <img src={Logo} alt='logoWeekenda' id='logo'></img> 
            </div>
            <h3>LIST OF LONG WEEKENDS</h3>
            <h4>UKRAINE</h4>
        </div>
    )
}