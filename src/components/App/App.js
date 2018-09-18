import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main className="container">
          <h1> Hello World! </h1>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
