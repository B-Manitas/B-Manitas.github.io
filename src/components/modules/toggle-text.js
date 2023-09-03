// Import React components
import React from "react";

// Import styles
import "styles/modules/toggle-text.css";

const ToggleText = ({ textTrue, textFalse, onClick, state, style }) => (
  <span onClick={() => onClick(!state)} className="toggle-text">
    {state ? textTrue : textFalse}
  </span>
);
export default ToggleText;
