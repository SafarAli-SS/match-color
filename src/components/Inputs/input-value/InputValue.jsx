import React from "react";

export const RedInputValue = props => {
  return <span className="red-input-value">Red: {props.currentRedValue}</span>;
};

export const GreenInputValue = props => {
  return (
    <span className="green-input-value">Green: {props.currentGreenValue}</span>
  );
};

export const BlueInputValue = props => {
  return (
    <span className="blue-input-value">Blue: {props.currentBlueValue}</span>
  );
};
