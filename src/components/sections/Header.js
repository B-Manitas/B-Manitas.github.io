// Import React components
import React from "react";

// Import styles
import styles from "../../assets/css/sections/Header.module.css";
import GlowTitle from "../modules/GlowTitle";
import GlowBtn from "../modules/GlowBtn";
import Mouse from "../modules/Mouse";

const Header = () => (
  <div className={styles.contentWrapper}>
    <div className={styles.content}>
      <div className={styles.nav}>
        <GlowBtn text="Resume" download link="files/resume.pdf" />
        <GlowBtn text="GitHub" link="https://github.com/B-Manitas" />
      </div>

      <div className={styles.titles}>
        <GlowTitle title="MANITAS" />
        <GlowTitle title="BAHRI" />
      </div>
    </div>

    <div className={styles.mouse}>
      <Mouse />
    </div>
  </div>
);

export default Header;
