// Import React components
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// Imports custom components
import ToggleText from "components/modules/toggle-text";

// Import styles
import "styles/academics/academic-box.css";

/**
 * Module for the academic box.
 * @param {object} data - The data to display.
 * @returns {JSX.Element}
 */
const AcademicBoxInternship = (data) => {
  const [show, setShow] = useState(false);
  const date = data.date_to.replace(/[\D]/g, "");

  return (
    <div className="academic-box">
      <span className="academic-box_date">{date}</span>

      <div className="academic-box_info">
        <div className="academic-box_point" />
        <h2>{data.title}</h2>

        <p>
          <span className="emoji">🏢</span>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.company}
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

        {data.description && (
          <div className="academic-box_description">
            {show && (
              <div className="academic-box_description_show">
                <span className="title">Description :</span>
                <ReactMarkdown className="description">
                  {data.description}
                </ReactMarkdown>
              </div>
            )}

            <ToggleText
              textFalse="Show more ..."
              textTrue="Show less ..."
              onClick={setShow}
              state={show}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicBoxInternship;
