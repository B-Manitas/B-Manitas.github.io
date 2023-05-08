// Import React components
import React from "react";

// Import styles
import styles from "../../assets/css/modules/Timebox.module.css";

const Timebox = ({ title, school, location, date_to, link }) => (
  <div className={styles.content}>
    <span className={styles.date}>{date_to}</span>

    <div className={styles.line}>
      <div className={styles.point}></div>
    </div>

    <div className={styles.box} id="box">
      <h2>{title}</h2>

      <p>
        <a href={link} target="_blank" rel="noreferrer">
          {school}
        </a>{" "}
        in {location}.
      </p>
    </div>
  </div>
);

export default Timebox;
