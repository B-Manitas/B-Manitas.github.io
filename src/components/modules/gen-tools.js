// Import React components
import React from "react";

// Imports styles
import "styles/modules/gen-tools.css";

/**
  * Module for the gen tools.
  * @param {list} tools - The tools to display.
  * @returns {JSX.Element}
  */
const GenTools = ({ tools }) => (
  <div className="gen-tools">
    <span>Tools :</span>
    <ul>{tools && tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
  </div>
);

export default GenTools;
