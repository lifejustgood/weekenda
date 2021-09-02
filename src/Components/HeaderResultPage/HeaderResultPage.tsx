import React from 'react';
import '../HeaderResultPage/HeaderResultPage.css';
import Logo from '../../images/logo.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';


export function HeaderResultPage() {
    const selectedCountry: string = useSelector(
      (state: RootState) => state.selectedCountry?.selectedCountryName
    );
    return (
        <div className='headerContainer'>
            <div id='headerLogo'>
                <img src={Logo} alt='logoWeekenda' id='logo'></img> 
            </div>
            <h3>LIST OF LONG WEEKENDS</h3>
            <h4>{selectedCountry}</h4>
        </div>
    )
}

export default HeaderResultPage;