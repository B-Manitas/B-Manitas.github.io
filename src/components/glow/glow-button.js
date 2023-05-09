// Import React components
import React from "react";

// Imports styles
import "styles/glow/glow-buttton.css";

/**
 * Module for the glow button.
 * @param {string} text - The text to display.
 * @param {string} src - The link to redirect to.
 * @param {boolean} download - Whether the link is a download link.
 * @returns {JSX.Element}
 */
const GlowButton = ({ text, src, download }) => (
  <div className="glow-button">
    <a href={src} target="_blank" rel="noreferrer" download={download}>
      {text}
    </a>
  </div>
);

export default GlowButton;
