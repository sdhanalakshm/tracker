import React, { useState } from 'react'
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
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

  const Hourly = () => {
    return <h1>Hourly</h1>
  };
  const Regualr = () => {
    return <h1>Regular</h1>
  };
  const Dashboard2 = () => {
    return <h1>Dashboard2</h1>
  };
  return (
    <div className="App">
      <div className="main-app">
        <Router >

          <div className={`container ${inactive ? "inactive" : ""} `}>
            <Switch>
              <Route exact path={'/dashboard'}> <LandingPage /></Route>
              <Route exact path={'/'}> <Login /></Route>
              <Route exact path={'/contact'}> <Contact/></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
