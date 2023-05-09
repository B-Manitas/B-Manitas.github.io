// Import React components
import React from "react";

// Import styles
import "styles/modules/btn-mouse.css";

// Import animation
import { goTo } from "assets/animations/animation";

/**
 * Module for the mouse button.
 * @returns {JSX.Element}
 */
const BtnMouse = () => (
  <div className="btn-mouse" onClick={() => goTo("body")}>
    <div className="mouse">
      <div className="wheel"></div>
    </div>

    <div>
      <span className="arrow" id="arrow-fst"></span>
      <span className="arrow" id="arrow-snd"></span>
      <span className="arrow" id="arrow-thd"></span>
    </div>
  </div>
);

export default BtnMouse;
