import React from 'react';
import '../HeaderResultPage/HeaderResultPage.css';
import Logo from '../../images/logo.png';
import { CountryProps } from '../../Interfaces';

export function HeaderResultPage(props: CountryProps) {
    return (
        <div className='headerContainer'>
            <div id='headerLogo'>
                <img src={Logo} alt='logoWeekenda' id='logo'></img> 
            </div>
            <h3>LIST OF LONG WEEKENDS IN ${props.selectedCountry}</h3>
            <h4>UKRAINE</h4>
        </div>
    )
}