import React, { Component } from "react";
import {
  RedInputRange,
  GreenInputRange,
  BlueInputRange
} from "./input-range/input-range";
import BtnDec from "./btn-dec/BtnDec";
import BtnInc from "./btn-inc/BtnInc";
import {
  RedInputValue,
  GreenInputValue,
  BlueInputValue
} from "./input-value/InputValue";

export class Inputs extends Component {
  state = {
    red: null,
    green: null,
    blue: null
  };

  handleChange() {
    let redValue = document.querySelector("#red").value;
    let greenValue = document.querySelector("#green").value;
    let blueValue = document.querySelector("#blue").value;
    this.setState({
      red: +redValue,
      green: +greenValue,
      blue: +blueValue
    });
    console.log(this.state);
  }
  render() {
    let { red, green, blue } = this.state;
    return (
      <div className="inputs">
        <div className="upper">
          <BtnDec />
          <RedInputValue currentRedValue={red} />
          <BtnInc />
        </div>
        <RedInputRange
          handleChange={() => {
            this.handleChange();
          }}
        />
        <div className="upper">
          <BtnDec />
          <GreenInputValue currentGreenValue={green} />
          <BtnInc />
        </div>
        <GreenInputRange
          handleChange={() => {
            this.handleChange();
          }}
        />
        <div className="upper">
          <BtnDec />
          <BlueInputValue currentBlueValue={blue} />
          <BtnInc />
        </div>
        <BlueInputRange
          handleChange={() => {
            this.handleChange();
          }}
        />
      </div>
    );
  }
}

export default Inputs;
