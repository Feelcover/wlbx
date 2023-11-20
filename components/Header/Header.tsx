import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <Logo/>
      </div>
      <div className={styles.rightContainer}></div>
    </header>
  );
};

export default Header;