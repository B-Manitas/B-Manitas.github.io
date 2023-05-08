// Import React components
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// Imports custom components
import { FaGithub } from "react-icons/fa";

// Imports styles
import styles from "../../assets/css/modules/Projectbox.module.css";
import ToolsList from "./ToolsList";

const Projectsbox = ({ title, description, link, image, tools }) => (
  <div className={styles.project_box}>
    {image && (
      <div className={styles.image}>
        <input type="checkbox" />
        <img src={require("../../assets/img/" + image)} alt={title} />
      </div>
    )}

    <div className={styles.info}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <FaGithub size={30} className={styles.icon} />
          </a>
        )}
      </div>

      <ReactMarkdown className={styles.markdown}>{description}</ReactMarkdown>

      <ToolsList tools={tools} />
    </div>
  </div>
);

export default Projectsbox;
