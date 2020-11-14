import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import ChannelStats from "./components/ChannelStats";
import TutorialsList from "./components/TutorialsList";
import VideoComments from "./components/VideoComments";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Suspect-Tracker
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/st/yt/videoComments"} className="nav-link">
                Video Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/st/yt/channelStats"} className="nav-link">
                Channel Stats
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/suspectTracker"]} component={Home} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/st/yt/channelStats" component={ChannelStats} />
            <Route path="/st/yt/videoComments" component={VideoComments} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
