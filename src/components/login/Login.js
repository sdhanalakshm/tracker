import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, NavLink, useHistory } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

import "./Login.css";
import LandingPage from "../Dashboard/LandingPage";
export default function Login() {
  const history = useHistory();
  const [loginState, setLoginState] = useState('');

  useEffect(() => {

  }, [loginState])

  return (
    <Router >
      <div className="App">

        <Route exact path={'/dashboard'}> <LandingPage /></Route>
        {
          loginState !== 'loggedIn' ? <>
            <div className="appAside">  </div>
            <div className="appForm" >
              <div className="pageSwitcher">
                <NavLink
                  to="/"
                  exact
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  Sign In
                </NavLink>
                <NavLink

                  to="/sign-up"
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  Sign Up
                </NavLink>
              </div>
              <Route exact path={"/sign-up"}> <SignUpForm loginState={setLoginState} /></Route>
              <Route exact path={"/"} > <SignInForm loginState={setLoginState} /></Route>
            </div>
          </> : ''
        }
      </div>
    </Router>
  );
}

