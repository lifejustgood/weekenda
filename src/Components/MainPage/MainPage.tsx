import React from 'react';
import './MainPage.css';
import { MainPageHeader } from './MainPageHeader';
import { StartButton } from '../StartButton/StartButton';
import { SelectCountryProps } from '../../Interfaces';
import  { CountrySelect } from './CountrySelect';

class MainPage extends React.PureComponent<SelectCountryProps> {
   redirectToResultPage = () => {
    let { history} = this.props;
    this.props.handleApiRequest(this.props.selectedCountryKey); 
    history.push('/ResultPage');

    console.log("redirect works");
  }
  

  render() {
    return (
      <div className='mainPageHeader'>
        <MainPageHeader />
        <CountrySelect 
        handleCountryChange={this.props.handleCountryChange}/> 
        <StartButton 
        redirectToResultPage={this.redirectToResultPage} 
        selectedCountryKey={this.props.selectedCountryKey}/>
      </div>
    )


  }
}

export default MainPage;