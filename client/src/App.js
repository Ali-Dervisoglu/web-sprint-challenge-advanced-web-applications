import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import BubblePage from "./components/BubblePage.js";
import PrivateRoute from "./PrivateRoute.js";
import ContactUs from "./components/ContactUs.js";
import ContactSuccess from "./components/ContactSuccess"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/contact-success" component={ContactSuccess} />
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
