// Import React components
import React from "react";

// Imports custom components
import AcademicBox from "./academic-box";

/**
 * Module for the academic box generator.
 * @param {object} data - The data to display.
 * @returns {JSX.Element}
 */
const AcademicBoxGen = ({ data }) =>
  data.map((item, id) => <AcademicBox {...item} key={id} />);

export default AcademicBoxGen;
