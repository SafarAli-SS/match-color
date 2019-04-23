import React from "react";

export const LeftColor = props => {
  return (
    <div className="left-color" style={props.style}>
      <p className="left-innertext">{props.leftColorValue}</p>
    </div>
  );
};
