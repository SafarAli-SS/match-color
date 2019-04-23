import React from "react";

export const RedInputRange = props => {
  return (
    <input
      type="range"
      min="0"
      max="255"
      id="red"
      onChange={props.handleChange}
      value={props.value}
    />
  );
};

export const GreenInputRange = props => {
  return (
    <input
      type="range"
      min="0"
      max="255"
      id="green"
      onChange={props.handleChange}
      value={props.value}
    />
  );
};

export const BlueInputRange = props => {
  return (
    <input
      type="range"
      min="0"
      max="255"
      id="blue"
      onChange={props.handleChange}
      value={props.value}
    />
  );
};
