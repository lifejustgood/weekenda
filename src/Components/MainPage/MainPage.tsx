import React from 'react';
import './MainPage.css';
import  { StartButton }  from '../StartButton/StartButton';
import { API_URL } from '../../appsettings';


interface IProps {
}
interface IState {
  error?: string | null,
  isLoaded?: boolean,
  longWeekendsList?: []
}
class MainPage extends React.PureComponent<IProps, IState> {
  constructor(props: IProps | Readonly<{}>) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      longWeekendsList: []
    }
  }

  componentDidMount() {
    fetch(API_URL, { mode: 'no-cors' })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            longWeekendsList: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return <div className='mainPageHeader'>
      <div className='motivationQuestion'>
        <h1>Are you tired of work,</h1>
        <h1>but have limited vacation days?</h1>
        <h2 className='secondParagraph'>Plan your vacation wisely!</h2>
        <h2>Push the button and inspire yourself!</h2>
      </div>
      <StartButton isLoaded={ this.state.isLoaded } longWeekendsList={this.state.longWeekendsList} />
    </div>
  }
}

export default MainPage;