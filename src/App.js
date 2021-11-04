import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from './components/Home/Home';
import NoRoute from './components/NoRoute/NoRoute';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/name/:countryName">
          <CountryDetails />
        </Route>
        <Route path="*">
          <NoRoute />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
