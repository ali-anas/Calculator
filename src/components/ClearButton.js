import React from "react";

import "../styles/ClearButton.css";

const ClearButton = (props) => {
  return (
    <div className="clearButton" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
