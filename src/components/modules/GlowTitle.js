// Import React components
import React from "react";

// Import custom components
import GlowCheckbox from "./GlowCheckbox";

// Imports styles
import styles from "../../assets/css/modules/GlowTitle.module.css";

const GlowTitle = ({ title }) => (
  <div className={styles.content}>
    {title.split("").map((l, id) => (
      <GlowCheckbox text={l} key={id} />
    ))}
  </div>
);

export default GlowTitle;
