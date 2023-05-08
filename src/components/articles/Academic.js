// Imports React components
import React from "react";

// Imports custom components
import Timeline from "../modules/Timeline";

// Imports styles
import "../../assets/css/articles/articles.css";
import styles from "../../assets/css/articles/Academic.module.css";

// Imports data
import data from "../../data/academic";

const Academic = () => (
  <div className={styles.contentWrapper}>
    <div className={styles.content} id="content">
      <h1>My educational background</h1>

      <Timeline data={data} />
    </div>
  </div>
);

export default Academic;
