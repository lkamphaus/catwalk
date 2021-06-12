import React from "react";
import styles from "./Reviews.module.css";

function CharacteristicButtons(props) {
  var characteristics = Object.keys(props.characteristics);

  var ids = {
    Fit: props.characteristics["Fit"],
    Length: props.characteristics["Length"],
    Comfort: props.characteristics["Comfort"],
    Quality: props.characteristics["Quality"],
    Size: props.characteristics["Size"],
    Width: props.characterisics["Width"]
  }

  var selectionMeanings = {
    Size: [
      "a size too small",
      "1/2 a size too small",
      "perfect",
      "1/2 a size too big",
      "a size too wide",
    ],
    Width: [
      "too narrow",
      "slightly narrow",
      "perfect",
      "slightly wide",
      "too wide",
    ],
    Comfort: [
      "uncomfortable",
      "slightly uncomfortable",
      "ok",
      "comfortable",
      "perfect",
    ],
    Quality: [
      "poor",
      "below average",
      "what I expected",
      "pretty great",
      "perfect",
    ],
    Length: [
      "runs short",
      "runs slightly short",
      "perfect",
      "runs slightly long",
      "runs long",
    ],
    Fit: [
      "runs tight",
      "runs slightly tight",
      "perfect",
      "runs slightly long",
      "runs long",
    ],
  };

  var rows = characteristics.map((characteristic) => {
    return (
      <div className={styles.characteristicRow}>
        <span
          style={{ width: "10%", display: "inline-block" }}
        >{`${characteristic}:  `}</span>
        <label className={styles.characteristic}>
          1 <input type="radio" value={0} name={ids[characteristic]} />
        </label>
        <label className={styles.characteristic}>
          2 <input type="radio" value={1} name={ids[characteristic]} />
        </label>
        <label className={styles.characteristic}>
          3 <input type="radio" value={2} name={ids[characteristic]} />
        </label>
        <label className={styles.characteristic}>
          4 <input type="radio" value={3} name={ids[characteristic]} />
        </label>
        <label className={styles.characteristic}>
          5 <input type="radio" value={4} name={ids[characteristic]} />
        </label>
      </div>
    );
  });

  return rows;
}

export default CharacteristicButtons;
