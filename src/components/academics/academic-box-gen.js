// Import React components
import React from "react";

// Imports custom components
import AcademicBoxInternship from "./academic-box-internship";
import AcademicBoxDegree from "./academic-box-degree";

/**
 * Module for the academic box generator.
 * @param {object} data - The data to display.
 * @returns {JSX.Element}
 */
const AcademicBoxGen = ({ data }) =>
  data.map((item, id) => {
    if (item.type === "internship") {
      return <AcademicBoxInternship {...item} key={id} />;
    } else {
      return <AcademicBoxDegree {...item} key={id} />;
    }
  });

export default AcademicBoxGen;
