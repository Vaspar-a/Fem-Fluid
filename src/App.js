import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
  }
}

export default App;
