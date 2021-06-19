import React from "react";
import Modal from "./Modal.jsx";
import styles from "./Reviews.module.css";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    var modal = this.state.clicked ? (
      <Modal>
        <div className={styles.modal}>
          <img src={`${this.props.source}`} onClick={this.handleClick} />
        </div>
      </Modal>
    ) : null;

    return (
      <div className={styles.thumbnails}>
        <img
          className={styles.smallImg}
          src={`${this.props.source}`}
          onClick={this.handleClick}
        />
        {modal}
      </div>
    );
  }
}

export default Thumbnail;
