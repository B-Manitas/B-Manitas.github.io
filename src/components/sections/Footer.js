// Import React components
import React from "react";

// Imports styles
import styles from "../../assets/css/sections/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>© 2023</span>
      <span>-</span>
      <span>Manitas Bahri</span>
      <span>-</span>
      <span><a href="mailto:manitas.bhr@gmail.com" target="_blank" rel="noreferrer">manitas.bhr@gmail.com</a></span>
    </div>
  </footer>
);

export default Footer;
