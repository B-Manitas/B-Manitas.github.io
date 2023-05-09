// Import React components
import React from "react";

// Imports custom components
import ProjectBox from "./project-box";

// Import models
import { slice_projects_left, slice_projects_right } from "model/model";

// Imports styles
import "styles/projects/project-box-gen.css";

const ProjectBoxGen = ({ title, projects }) => {
  return (
    <div className="project-box-gen">
      <h2 className="project-box-gen_title">{title}</h2>

      <div className="project-box-gen_projects">
        <div className="project-box-gen_left">
          {slice_projects_left(projects).map((project, index) => (
            <ProjectBox {...project} key={index} />
          ))}
        </div>

        <div className="project-box-gen_right">
          {slice_projects_right(projects).map((project, index) => (
            <ProjectBox {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBoxGen;
