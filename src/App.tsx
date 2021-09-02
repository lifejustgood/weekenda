import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ResultPage from "./Components/ResultPage/ResultPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/configureStore";


function App() {
const isLoaded = useSelector((state: RootState) => state.isLoaded);
  
return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      
      { isLoaded && <Route path="/ResultPage" component={ResultPage} /> }
      { !isLoaded && <Redirect to="/" />}
      
    </Switch>
  );
}


export default App;

// isLoaded ? (
//   <ResultPage
//     {...props}
//     longWeekendsList={longWeekendsList}
//     isLoaded={isLoaded}
//     selectedCountry={selectedCountry}
//   />
// ) : (
//   <Redirect to="/" />
// );