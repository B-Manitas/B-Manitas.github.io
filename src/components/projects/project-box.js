// Import React components
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FaGithub } from "react-icons/fa";

// Imports custom components
import GenTools from "components/modules/gen-tools";

// Imports styles
import "styles/projects/project-box.css";

/**
 * Module for the project box.
 * @param {string} title - The title of the project.
 * @param {string} description - The description of the project.
 * @param {string} src - The link to the project.
 * @param {string} image - The image of the project.
 * @param {list} tools - The tools used in the project.
 * @returns {JSX.Element}
 */
const ProjectBox = ({ title, description, src, image, tools }) => (
  <div className="project-box">
    {image && (
      <div className="project-box_image">
        <input type="checkbox" />
        <img src={require("../../assets/images/" + image)} alt={title} />
      </div>
    )}

    <div className="project-box_info">
      <div className="project-box_header">
        <h2>{title}</h2>

        {src && (
          <a href={src} target="_blank" rel="noreferrer">
            <FaGithub size={30} className="project-box_icon" />
          </a>
        )}
      </div>

      <ReactMarkdown className="project-box_description">
        {description}
      </ReactMarkdown>

      <GenTools tools={tools} />
    </div>
  </div>
);

export default ProjectBox;
