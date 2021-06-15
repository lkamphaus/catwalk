import React from "react";
import styles from ".././style.css";
import { HiSearch } from "react-icons/hi";
import { HiFire } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div>
      <div className={styles.topSearchBar}>
        <div className={styles.fireLogo}><HiFire /></div>
        <input className={styles.searchInput}
          type="text">
        </input>
        <div className={styles.searchBarIcon}><HiSearch /></div>
      </div>
    </div>
  )
}

export default SearchBar;