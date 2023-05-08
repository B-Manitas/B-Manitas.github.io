// Import React components
import React from "react";

// Imports styles
import styles from "../../assets/css/modules/GlowBtn.module.css";

const GlowBtn = ({ text, link, download }) => (
  <div className={styles.content}>
    <a href={link} target="_blank" rel="noreferrer" download={download}>
      {text}    
    </a>
  </div>
);

export default GlowBtn;
