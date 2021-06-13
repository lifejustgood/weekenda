import React from 'react';
import './MainPage.css';
import { StartButton } from '../StartButton/StartButton';
import { useHistory, withRouter } from 'react-router-dom';
import { IPropsHistory } from '../../Interfaces';

class MainPage extends React.PureComponent<IPropsHistory> {

  redirectToResultPage = () => {
    const { history } = this.props;
    console.log("redirect works");
    //if(history) 
    history.push('/ResultPage');
  }

  render() {
    // const { history } = this.props;

    return <div className='mainPageHeader'>
      <div className='motivationQuestion'>
        <h1>Are you tired of work,</h1>
        <h1>but have limited vacation days?</h1>
        <h2 className='secondParagraph'>Plan your vacation wisely!</h2>
        <h2>Push the button and inspire yourself!</h2>
      </div>
      <StartButton onClick={this.redirectToResultPage} />
    </div>
  }
}

export default MainPage;