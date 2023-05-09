// Import React components
import React from "react";

// Imports styles
import "styles/glow/glow-checkbox.css";

/**
 * Module for the glow checkbox.
 * @param {string} text - The text to display.
 * @returns {JSX.Element}
 */
const GlowCheckbox = ({ text }) => {
  return (
    <div className="glow-checkbox">
      <input type="checkbox" />
      <div>{text}</div>
    </div>
  );
};

export default GlowCheckbox;
