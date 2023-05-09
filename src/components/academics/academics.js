// Imports React components
import React from "react";

// Imports custom components
import AcademicBoxGen from "./academic-box-gen";

// Imports styles
import "styles/articles.css";
import "styles/academics/academics.css";

// Imports data
import data from "data/academic";

/**
 * Module for the academic article.
 * @returns {JSX.Element}
 */
const Academic = () => (
  <div className="academic-wrapper">
    <div className="article">
      <h1>My educational background</h1>

      <AcademicBoxGen data={data} />
    </div>
  </div>
);

export default Academic;
