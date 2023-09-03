// Import React components
import React from "react";

// Import styles
import "styles/academics/academic-box.css";

/**
 * Module for the academic box.
 * @param {object} data - The data to display.
 * @returns {JSX.Element}
 */
const AcademicBoxDegree = (data) => (
  <div className="academic-box">
    <span className="academic-box_date">{data.date_to}</span>

    <div className="academic-box_info">
      <div className="academic-box_point"></div>
      <h2>{data.title}</h2>

      <p>
        <span className="emoji">🏢</span>
        <a href={data.link} target="_blank" rel="noreferrer">
          {data.school}
        </a>
      </p>

      <p>
        <span className="emoji">📍</span>
        {data.location}.
      </p>


      <p>
        <span className="emoji">🗓️</span>
        From <span className="date">{data.date_from}</span> to{" "}
        <span className="date">{data.date_to}</span>.
      </p>
    </div>
  </div>
);

export default AcademicBoxDegree;
