import MainPage from './Components/MainPage/MainPage';
import React from 'react';
import { useHistory } from "react-router-dom"
import { Switch, Route } from "react-router-dom";
import { API_URL } from './appsettings';
import ResultPage from "./Components/ResultPage/ResultPage";
import { AppState, AppProps} from './Interfaces';
import { LongWeekendDto} from './datatypes';



function App (props: AppProps ){
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [longWeekendsList, setLongWeekendsList] = React.useState(new Array<LongWeekendDto>());
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedCountryKey, setSelectedCountryKey] = React.useState('');
  // constructor(props:any) {
  //   super(props);
  //   this.state = {
  //     isLoaded: false,
  //     longWeekendsList: new Array<LongWeekendDto>(),
  //     selectedCountry: '',
  //     selectedCountryKey: ''
  //   }
  // } 

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.value);
    setSelectedCountryKey(event.key);
    // this.setState( { 
    //   selectedCountry : event.value,
    //   selectedCountryKey: event.key });
    console.log('Selected event object is=%', event); 
  }
  

 

  const handleButtonClick = (event: any) => {
    const userRequest = `${API_URL}${selectedCountryKey}`;
    console.log('Selected country  key is=', event.key);
    console.log('SuserRequest=', userRequest);
    console.log("i am starting to fetch!");
    fetch(userRequest)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('I am getting result and writing to state!');
          console.log('result=', result);
          setIsLoaded(true);
          setLongWeekendsList(result);
          // this.setState({
          //   isLoaded: true,
          //   longWeekendsList: result
          // });
          // redirectToResultPage();
        },
        (error) => {
          setIsLoaded(false);
          // this.setState({
          //   isLoaded: false
          // });
          console.log(error);
        }
      )
  }
  

    return (
      <Switch>
        <Route path="/" exact 
        render= {(props) => <MainPage {...props}
        handleCountryChange={handleCountryChange}
        handleButtonClick={handleButtonClick}
         /> } />
        <Route path="/ResultPage"
          render={(props) => <ResultPage  {...props} 
          longWeekendsList={longWeekendsList} 
          isLoaded={isLoaded}
          selectedCountry={selectedCountry}
          />  } />
      </Switch>
    );
  
}

export default App;
