/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ text = "Button", variant, color, size, state, className, divClassName }) => {
  return (
    <button className={`button ${state} ${size} ${variant} ${color} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "soft", "outline"]),
  color: PropTypes.oneOf(["warning", "danger", "info", "success", "secondary", "primary"]),
  size: PropTypes.oneOf(["l", "m", "s"]),
  state: PropTypes.oneOf(["hovered", "disabled", "enabled"]),
};
