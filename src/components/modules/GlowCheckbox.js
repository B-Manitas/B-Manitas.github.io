// Import React components
import React from "react";

// Imports styles
import styles from "../../assets/css/modules/GlowCheckbox.module.css";

const GlowCheckbox = ({ text }) => {
  return (
    <div className={styles.content}>
      <input type="checkbox" />
      <div>{text}</div>
    </div>
  );
};

export default GlowCheckbox;
