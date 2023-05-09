// Import React components
import React from "react";

// Import custom components
import GlowCheckbox from "./glow-checkbox";

// Imports styles
import "styles/glow/glow-checkbox-gen.css";

/**
 * Module for the glow checkbox generator.
 * @param {string} text - The text to display.
 * @returns {JSX.Element}
 */
const GlowCheckboxGen = ({ text }) => (
  <div className="glow-checkbox-gen">
    {text.split("").map((letter, id) => (
      <GlowCheckbox text={letter} key={id} />
    ))}
  </div>
);

export default GlowCheckboxGen;
