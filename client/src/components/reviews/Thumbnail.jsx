import React from "react";
import Modal from "react-modal";
import styles from "./Reviews.module.css";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className={styles.thumbnails}>
        <img className={styles.smallImg} src={`${this.props.source}`} onClick={this.handleClick} />
        <Modal
          isOpen={this.state.clicked}
          onRequestClose={this.handleClick}
          contentLabel="Large image">
          <img src={`${this.props.source}`} onClick={this.handleClick} />
        </Modal>
      </div>
    )
  }
}

export default Thumbnail;