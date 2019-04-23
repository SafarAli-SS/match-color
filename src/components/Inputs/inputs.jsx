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
import { RightColor } from "../../components/right-color/rightColor";
import { LeftColor } from "../../components/left-color/leftColor";
import { Reset, Show } from "../buttons/buttons";

export class Inputs extends Component {
  state = {
    red: 0,
    green: 0,
    blue: 0,
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
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
  }

  handleRedDec() {
    if (this.state.red > 0) {
      this.setState({
        red: this.state.red - 1
      });
    }
  }

  handleGreenDec() {
    if (this.state.green > 0) {
      this.setState({
        green: this.state.green - 1
      });
    }
  }

  handleBlueDec() {
    if (this.state.blue > 0) {
      this.setState({
        blue: this.state.blue - 1
      });
    }
  }

  handleRedInc() {
    if (this.state.red < 255) {
      this.setState({
        red: this.state.red + 1
      });
    }
  }

  handleGreenInc() {
    if (this.state.green < 255) {
      this.setState({
        green: this.state.green + 1
      });
    }
  }

  handleBlueInc() {
    if (this.state.blue < 255) {
      this.setState({
        blue: this.state.blue + 1
      });
    }
  }

  handleReset() {
    window.location.reload();
  }

  handleShow() {
    let leftInnertext = document.querySelector(".left-innertext");
    leftInnertext.style.display = "block";
  }

  render() {
    let { red, green, blue, r, g, b } = this.state;
    let leftColorValue = `rgb(${r}, ${g}, ${b})`;
    let leftStyle = {
      backgroundColor: leftColorValue,
      color: "#fff"
    };
    let rightColorValue = `rgb(${red}, ${green}, ${blue})`;
    let rightStyle = {
      backgroundColor: rightColorValue
    };
    return (
      <div>
        <div className="inputs">
          <div>
            <LeftColor style={leftStyle} leftColorValue={leftColorValue} />
          </div>
          <div className="ranges">
            <div className="upper">
              <BtnDec
                handleDec={() => {
                  this.handleRedDec();
                }}
              />
              <RedInputValue currentRedValue={red} />
              <BtnInc
                handleInc={() => {
                  this.handleRedInc();
                }}
              />
            </div>
            <RedInputRange
              handleChange={() => {
                this.handleChange();
              }}
              value={red}
            />
            <div className="upper">
              <BtnDec
                handleDec={() => {
                  this.handleGreenDec();
                }}
              />
              <GreenInputValue currentGreenValue={green} />
              <BtnInc
                handleInc={() => {
                  this.handleGreenInc();
                }}
              />
            </div>
            <GreenInputRange
              handleChange={() => {
                this.handleChange();
              }}
              value={green}
            />
            <div className="upper">
              <BtnDec
                handleDec={() => {
                  this.handleBlueDec();
                }}
              />
              <BlueInputValue currentBlueValue={blue} />
              <BtnInc
                handleInc={() => {
                  this.handleBlueInc();
                }}
              />
            </div>
            <BlueInputRange
              handleChange={() => {
                this.handleChange();
              }}
              value={blue}
            />
          </div>

          <div>
            <RightColor style={rightStyle} />
          </div>
        </div>
        <div className="buttons">
          <Reset
            reset={() => {
              this.handleReset();
            }}
          />
          <Show
            show={() => {
              this.handleShow();
            }}
          />
          <p className="hint-text" />
        </div>
      </div>
    );
  }
}

export default Inputs;
