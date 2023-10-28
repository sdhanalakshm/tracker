import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/Dashboard/LandingPage';
import Login from './components/login/Login';
import Contact from './components/Dashboard/Contact';


function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <div className="main-app">
        <Router >
          <div className={`container ${inactive ? "inactive" : ""} `}>
            <Switch>
              <Route path={'/dashboard'}> <LandingPage /></Route>
              <Route exact path={'/'}> <Login /></Route>
              <Route exact path={'/contact'}> <Contact /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
