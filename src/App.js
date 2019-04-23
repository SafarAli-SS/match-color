import React, { Component } from "react";
import Heading from "./components/heading/heading";
import { LeftColor } from "./components/left-color/leftColor";
import { RightColor } from "./components/right-color/rightColor";
import Inputs from "./components/Inputs/inputs";

class App extends Component {
  state = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };

  render() {
    const { r, g, b } = this.state;
    let currentColorValue = `rgb(${r}, ${g}, ${b})`;
    let style = {
      backgroundColor: currentColorValue,
      color: "#fff"
    };
    return (
      <div className="app">
        <Heading />
        <LeftColor style={style} />
        <Inputs />
        <RightColor />
      </div>
    );
  }
}

export default App;
