import React from "react";

export default function BtnDec(props) {
  return (
    <button className="btn btn-dec" onClick={props.handleDec}>
      -
    </button>
  );
}
