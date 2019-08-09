import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./component/App.js";
export default class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        <Route  path="/" component={App} />
      </Router>
    );
  }
}
