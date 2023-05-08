// Imports React components
import React from "react";

// Imports styles
import "../../assets/css/articles/articles.css";
import styles from "../../assets/css/articles/Projects.module.css";

// Imports data
import projects from "../../data/projets";
import ProjectLists from "../modules/ProjectLists";

const Projects = () => (
  <div className={styles.content} id="content">
    <h1>My personal projects</h1>

    {projects.map((o, id) => (
      <ProjectLists title={o.language} projects={o.projets} key={id} />
    ))}
  </div>
);

export default Projects;
