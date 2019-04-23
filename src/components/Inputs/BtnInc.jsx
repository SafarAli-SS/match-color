import React from "react";

export default function BtnInc(props) {
  return (
    <button className="btn btn-inc" onClick={props.handleInc}>
      +
    </button>
  );
}
