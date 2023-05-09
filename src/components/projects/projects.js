// Imports React components
import React from "react";

// Imports custom components
import ProjectBoxGen from "./project-box-gen";

// Imports styles
import "styles/articles.css"
import "styles/projects/projects.css"

// Imports data
import projects from "data/projets";

/**
 * Module for the projects article.
 * @returns {JSX.Element}
 */
const Projects = () => (
  <div className="article">
    <h1>My personal projects</h1>

    {projects.map((o, id) => (
      <ProjectBoxGen title={o.language} projects={o.projets} key={id} />
    ))}
  </div>
);

export default Projects;
