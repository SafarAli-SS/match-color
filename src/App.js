import React, { Component } from "react";
import Heading from "./components/heading";

import Inputs from "./components/Inputs/inputs";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Heading />
        <Inputs />
      </div>
    );
  }
}

export default App;
