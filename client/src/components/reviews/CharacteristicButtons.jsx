import React from "react";
import styles from "./Reviews.module.css";

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

class CharacteristicButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fit: "",
      Length: "",
      Comfort: "",
      Quality: "",
      Size: "",
      Width: "",
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e, characteristic) {
    var val = e.target.value;

    var selection = selectionMeanings[characteristic][val - 1];

    this.setState({
      [characteristic]: selection,
    });
  }

  render() {
    var characteristics = Object.keys(this.props.characteristics);

    var ids = {
      Fit: this.props.characteristics && this.props.characteristics["Fit"],
      Length:
        this.props.characteristics && this.props.characteristics["Length"],
      Comfort:
        this.props.characteristics && this.props.characteristics["Comfort"],
      Quality:
        this.props.characteristics && this.props.characteristics["Quality"],
      Size: this.props.characteristics && this.props.characteristics["Size"],
      Width: this.props.characteristics && this.props.characteristics["Width"],
    };

    var rows = characteristics.map((characteristic) => {
      return (
        <div>
          <form className={styles.characteristicRow}>
            <span
              style={{ width: "5%", display: "inline-block" }}
            >{`${characteristic}:  `}</span>
            <label className={styles.characteristic}>
              1{" "}
              <input
                type="radio"
                onClick={(e) => {
                  this.props.onClick(e), this.onClick(e, characteristic);
                }}
                value={1}
                name={ids[characteristic].id}
              />
            </label>
            <label className={styles.characteristic}>
              2{" "}
              <input
                type="radio"
                onClick={(e) => {
                  this.props.onClick(e), this.onClick(e, characteristic);
                }}
                value={2}
                name={ids[characteristic].id}
              />
            </label>
            <label className={styles.characteristic}>
              3{" "}
              <input
                type="radio"
                onClick={(e) => {
                  this.props.onClick(e), this.onClick(e, characteristic);
                }}
                value={3}
                name={ids[characteristic].id}
              />
            </label>
            <label className={styles.characteristic}>
              4{" "}
              <input
                type="radio"
                onClick={(e) => {
                  this.props.onClick(e), this.onClick(e, characteristic);
                }}
                value={4}
                name={ids[characteristic].id}
              />
            </label>
            <label className={styles.characteristic}>
              5{" "}
              <input
                type="radio"
                onClick={(e) => {
                  this.props.onClick(e), this.onClick(e, characteristic);
                }}
                value={5}
                name={ids[characteristic].id}
              />
            </label>
          </form>

          {this.state[characteristic] ? (
            <div className={styles.characteristicSelection}>
              {this.state[characteristic]}
            </div>
          ) : (
            <div className={styles.characteristicSelection}>None selected</div>
          )}
        </div>
      );
    });

    return rows;
  }
}

export default CharacteristicButtons;
