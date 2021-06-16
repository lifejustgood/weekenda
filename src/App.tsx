import MainPage from './Components/MainPage/MainPage';
import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import { API_URL } from './appsettings';
import ResultPage from "./Components/ResultPage/ResultPage";
import { LongWeekendDto, IState } from './Interfaces';


class App extends React.Component<any, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      longWeekendsList: new Array<LongWeekendDto>()
    }
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
  
  render() {

    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/ResultPage"
          render={(props) => <ResultPage {...props}  
          longWeekendsList={this.state.longWeekendsList} 
          isLoaded={this.state.isLoaded}
          />  } />
      </Switch>
    );
  }

}

export default App;
