import MainPage from './Components/MainPage/MainPage';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import { API_URL } from './appsettings';
import ResultPage from "./Components/ResultPage/ResultPage";
import { HandleApiRequestFunction, HandleCountryChangeFunction, LongWeekendDto } from './datatypes';



function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [longWeekendsList, setLongWeekendsList] = React.useState(new Array<LongWeekendDto>());
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedCountryKey, setSelectedCountryKey] = React.useState('');

  const handleCountryChange: HandleCountryChangeFunction = (option) => {
    if (option !== null) {
      const newCountry  = option.value; 
    const newCountryKey = option.key;
    setSelectedCountry(newCountry);
    setSelectedCountryKey(newCountryKey);
    }
  }

  const handleApiRequest: HandleApiRequestFunction = (selectedCountryKey) => {
    const userRequest = `${API_URL}${selectedCountryKey}`;
    console.log('UserRequest=', userRequest);
    fetch(userRequest)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result=', result);
          setIsLoaded(true);
          setLongWeekendsList(result);
        },
        (error) => {
          setIsLoaded(false);
          console.log(error);
        }
      )
  }

  return (
    <Switch>
      <Route path="/" exact
        render={(props) => <MainPage {...props}
          handleCountryChange={handleCountryChange}
          handleApiRequest={handleApiRequest}
          selectedCountryKey={selectedCountryKey}
        />} />
      <Route path="/ResultPage"
        render={(props) => <ResultPage  {...props}
          longWeekendsList={longWeekendsList}
          isLoaded={isLoaded}
          selectedCountry={selectedCountry}
        />} />
    </Switch>
  );

}

export default App;
