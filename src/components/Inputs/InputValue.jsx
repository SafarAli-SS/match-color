import React from "react";

export const RedInputValue = props => {
  return (
    <span className="red-input-value" style={{ color: "red" }}>
      Red: {props.currentRedValue}
    </span>
  );
};

export const GreenInputValue = props => {
  return (
    <span className="green-input-value" style={{ color: "green" }}>
      Green: {props.currentGreenValue}
    </span>
  );
};

export const BlueInputValue = props => {
  return (
    <span className="blue-input-value" style={{ color: "blue" }}>
      Blue: {props.currentBlueValue}
    </span>
  );
};
