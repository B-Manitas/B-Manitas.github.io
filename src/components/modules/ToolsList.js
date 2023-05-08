// Import React components
import React from "react";

// Imports styles
import styles from "../../assets/css/modules/ToolsList.module.css";

const ToolsList = ({ tools }) => (
  <div className={styles.content}>
    <span>Tools :</span>
    <ul>{tools && tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
  </div>
);

export default ToolsList;
