import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }



  render() {
    let mass = UserService.getPublicContent();
    // console.log();
    // let pr = new Promise(mass)
    // pr.then(i => console.log(i))
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to Home</h3>
        </header>
      </div>
    );
  }
}
