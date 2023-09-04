// Import React components
import React from "react";

// Imports custom components
import BtnMouse from "components/modules/btn-mouse";
import GlowButton from "components/glow/glow-button";
import GlowCheckboxGen from "components/glow/glow-checkbox-gen";

// Import styles
import "styles/sections/header.css";

/**
 * Header section.
 * @returns {JSX.Element}
 */
const Header = () => (
  <div>
    <header>
      <nav>
        <GlowButton text="GitHub" src="https://github.com/B-Manitas" />
        <GlowButton text="LinkedIn" src="https://www.linkedin.com/in/b-manitas/" />
      </nav>

      <div className="header-title">
        <GlowCheckboxGen text="MANITAS" />
        <GlowCheckboxGen text="BAHRI" />
      </div>
    </header>

    <div className="header-mouse">
      <BtnMouse />
    </div>
  </div>
);

export default Header;
