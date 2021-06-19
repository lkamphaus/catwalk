import React, { useState } from "react";
import styles from ".././style.css";

const Navbar = (props) => {
  return (
    <div>
      <div className={styles.topSearchBar}>
        <div className={styles.fireLogo}>
          <i class="fas fa-fire"></i>
        </div>
        <input className={styles.searchInput} type="text"></input>
        <div className={styles.searchBarIcon}>
          <i class="fas fa-search"></i>
        </div>
        <div className={props.darkModeStyle} onClick={props.toggleDarkMode}>
          {props.darkModeText}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
