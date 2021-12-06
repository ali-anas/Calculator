import React from "react";
import "./Button.css";

const isOperator = (val) => {
  return !isNaN(val) || val === ".";
};

const Button = (props) => {
  return (
    <div
      className={`${"btn-ele"} ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
