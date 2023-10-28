import React, { useState } from 'react'
import SideMenu from '../SideMenu';
import Navbar from '../Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Contact from './Contact';

function LandingPage() {
    const [inactive, setInactive] = useState(false);
    return (
        <div className="App">
            <div className="main-app">
                <Router>
                    <SideMenu onCollapse={(inactive) => {
                        setInactive(inactive);
                    }} />
                    <Navbar inactive={inactive} />
                    <div className={`container ${inactive ? "inactive" : ""} `}>
                        <Switch>
                            <Route path={'/contact'}> <Contact inactive={inactive} /></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default LandingPage;
