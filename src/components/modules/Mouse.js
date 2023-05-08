// Import React components
import React from "react";

// Import styles
import styles from "../../assets/css/modules/Mouse.module.css";

// Import animation
import { goTo } from "../../assets/anim/animation";

const Mouse = () => (
  <div className={styles.mouse_scroll} onClick={() => goTo("body")}>
    <div className={styles.mouse}>
      <div className={styles.wheel}></div>
    </div>
    <div>
      <span className={styles.m_scroll_arrows} id={styles.first}></span>
      <span className={styles.m_scroll_arrows} id={styles.snd}></span>
      <span className={styles.m_scroll_arrows} id={styles.third}></span>
    </div>
  </div>
);

export default Mouse;
