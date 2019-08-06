import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./component/App";
import Hero from "./component/hero/hero";
export default class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/hero:id" component={Hero} />
      </Router>
    );
  }
}
