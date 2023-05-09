// Import React components
import React from "react";

// Import styles
import "styles/academics/academic-box.css";

/**
 * Module for the academic box.
 * @param {object} data - The data to display.
 * @returns {JSX.Element}
 */
const AcademicBox = (data) => (
  <div className="academic-box">
    <span className="academic-box_date">{data.date_to}</span>

    <div className="academic-box_line">
      <div className="academic-box_point"></div>
    </div>

    <div className="academic-box_info">
      <h2>{data.title}</h2>

      <p>
        <a href={data.src} target="_blank" rel="noreferrer">
          {data.school}
        </a>{" "}
        in {data.location}.
      </p>
    </div>
  </div>
);

export default AcademicBox;
