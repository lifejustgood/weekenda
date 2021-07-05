import React from 'react';
import './MainPage.css';
import { MainPageHeader } from './MainPageHeader';
import { StartButton } from '../StartButton/StartButton';
import { SelectCountryProps } from '../../Interfaces';
import  { SelectCountryForm } from './SelectCountryForm';

class MainPage extends React.PureComponent<SelectCountryProps> {

  

  render() {
    return (
      <div className='mainPageHeader'>
        <MainPageHeader />
        <SelectCountryForm handleCountryChange={this.props.handleCountryChange}/> 
        <StartButton handleButtonClick={this.props.handleButtonClick} />
      </div>
    )


  }
}

export default MainPage;