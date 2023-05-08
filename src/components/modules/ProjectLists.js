// Import React components
import React from "react";

// Imports custom components
import Projectbox from "../modules/Projectbox";
import { slice_projects_left, slice_projects_right } from "../../model/model";

// Imports styles
import styles from "../../assets/css/modules/Projectlists.module.css";

const ProjectLists = ({ title, projects }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.projects}>
        <div className={styles.left}>
          {slice_projects_left(projects).map((project, index) => (
            <Projectbox {...project} key={index} />
          ))}
        </div>

        <div className={styles.right}>
          {slice_projects_right(projects).map((project, index) => (
            <Projectbox {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;
