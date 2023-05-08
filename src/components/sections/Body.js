// Import react components
import React from "react";

// Imports custom components
import Academic from "../articles/Academic";
import Projects from "../articles/Projects";

// Imports styles
import styles from "../../assets/css/sections/Body.module.css";

const Body = () => (
  <div className={styles.content} id="body">
    <Academic />
    <Projects />
  </div>
);

export default Body;
