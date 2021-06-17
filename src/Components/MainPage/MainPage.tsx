import React from 'react';
import './MainPage.css';
import { MainPageHeader } from './MainPageHeader';
import { StartButton } from '../StartButton/StartButton';
import { IPropsHistory } from '../../Interfaces';

class MainPage extends React.PureComponent<IPropsHistory> {

  redirectToResultPage = () => {
    const { history } = this.props;
    console.log("redirect works");

    history.push('/ResultPage');
  }

  render() {
    return (
      <div className='mainPageHeader'>
        <MainPageHeader />
        <StartButton onClick={this.redirectToResultPage} />
      </div>
    )


  }
}

export default MainPage;