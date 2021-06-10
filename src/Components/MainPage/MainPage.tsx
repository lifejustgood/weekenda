import React from 'react';
import './MainPage.css';
import  { StartButton }  from '../StartButton/StartButton';
import { API_URL } from '../../appsettings';
import { useHistory, withRouter  } from 'react-router-dom';

export type LongWeekendDto =
{
   dayCount: string;
   endDate: string;
   needBridgeDay: boolean;
   startDate: Date;
}

interface IProps {
  history: any
}

interface IState {
  error?: string | null,
  isLoaded?: boolean,
  longWeekendsList?: Array<LongWeekendDto>
}

  class MainPage extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        longWeekendsList: new Array<LongWeekendDto>()
      }
    }    

    redirectToResultPage = () => {
      const { history } = this.props;
      console.log("redirect works");
      //if(history) 
      history.push('/ResultPage');
     }

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            longWeekendsList: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }
  
  handleClick = () => {
    console.log("olagagg")
    //history.push('/ResultPage');
  }

  render() {
    const { history } = this.props;

    return <div className='mainPageHeader'>
      <div className='motivationQuestion'>
        <h1>Are you tired of work,</h1>
        <h1>but have limited vacation days?</h1>
        <h2 className='secondParagraph'>Plan your vacation wisely!</h2>
        <h2>Push the button and inspire yourself!</h2>
      </div>
      <StartButton isLoaded={ this.state.isLoaded } 
                  longWeekendsList={this.state.longWeekendsList} 
                  onClick={this.redirectToResultPage}
                  />
    </div>
  }
}

export default MainPage;