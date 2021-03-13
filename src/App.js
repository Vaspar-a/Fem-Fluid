import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
