import React from "react";
import styles from "./Reviews.module.css";
import BarFiller from "./BarFiller.jsx";

function RatingBar(props) {
  return (
    <div className={styles.bar}>
      <BarFiller percentage={props.percentage} />
    </div>
  );
}

export default RatingBar;
