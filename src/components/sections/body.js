// Import react components
import React from "react";

// Imports custom components
import Academic from "components/academics/academics";
import Projects from "components/projects/projects";

/**
 * Section for the body.
 * @returns {JSX.Element}
 */
const Body = () => (
  <div id="body">
    <Academic />
    <Projects />
  </div>
);

export default Body;
