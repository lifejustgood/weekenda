import MainPage from './Components/MainPage/MainPage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import ResultPage from "./Components/ResultPage/ResultPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/ResultPage" component={ResultPage} />
    </Switch>
  );
}

export default App;
