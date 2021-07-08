import MainPage from './Components/MainPage/MainPage';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import { API_URL } from './appsettings';
import ResultPage from "./Components/ResultPage/ResultPage";
import { AppProps } from './Interfaces';
import { LongWeekendDto } from './datatypes';



function App(props: AppProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [longWeekendsList, setLongWeekendsList] = React.useState(new Array<LongWeekendDto>());
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedCountryKey, setSelectedCountryKey] = React.useState('');

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.value);
    setSelectedCountryKey(event.key);
  }

  const handleApiRequest = (selectedCountryKey: string) => {
    const userRequest = `${API_URL}${selectedCountryKey}`;
    console.log('SuserRequest=', userRequest);
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
