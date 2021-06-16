import React,  { useState } from "react";
import styles from ".././style.css";
import { HiSearch } from "react-icons/hi";
import { HiFire } from "react-icons/hi";

const Navbar = (props) => {
  return (
    <div>
      <div className={styles.topSearchBar}>
        <div className={styles.fireLogo}><HiFire /></div>
        <input className={styles.searchInput}
          type="text">
        </input>
        <div className={styles.searchBarIcon}><HiSearch /></div>
        <div
          className={props.darkModeStyle}
          onClick={props.toggleDarkMode}>{props.darkModeText}</div>
      </div>
    </div>
  )
}

export default Navbar;