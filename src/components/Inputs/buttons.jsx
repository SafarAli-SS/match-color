import React from "react";

export const Reset = props => {
  return (
    <button className="btn btn-reset" onClick={props.reset}>
      Reset
    </button>
  );
};

export const Show = props => {
  return (
    <button className="btn btn-show" onClick={props.show}>
      Show
    </button>
  );
};
