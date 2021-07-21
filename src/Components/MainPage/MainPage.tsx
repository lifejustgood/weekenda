import React from 'react';
import './MainPage.css';
import { MainPageHeader } from './MainPageHeader';
import { StartButton } from '../StartButton/StartButton';
import { CountrySelect } from './CountrySelect';
import { HandleApiRequestFunction, HandleCountryChangeFunction } from '../../datatypes';


interface MainPageProps {
  selectedCountryKey: string;
  history: any;
  handleCountryChange: HandleCountryChangeFunction;
  handleApiRequest: HandleApiRequestFunction;
}

class MainPage extends React.PureComponent<MainPageProps> {
  redirectToResultPage = () => {
    let { history } = this.props;
    this.props.handleApiRequest(this.props.selectedCountryKey);
    history.push('/ResultPage', );
    console.log("redirect works");
  }

  render() {
    return (
      <div className='mainPageHeader'>
        <MainPageHeader />
        <CountrySelect
          handleCountryChange={this.props.handleCountryChange} />
        <StartButton
          redirectToResultPage={this.redirectToResultPage} />
      </div>
    )


  }
}

export default MainPage;