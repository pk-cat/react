import React from "react";
import http from "../server";
// server
// import http from '../server'
import axios from "axios";
import qs from "qs";
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordArr: []
    };
  }

  componentDidMount() {
    axios
      .get("./test.json")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="test">
        <h1>this is a test</h1>
      </div>
    );
  }
}
export default Hero;
