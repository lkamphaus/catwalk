import React from 'react';
import styles from "./Reviews.module.css";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked');
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    var image = this.state.clicked ?
      <div className={styles.modal}>
        <img className={styles.largeImg} src={`${this.props.source}`} onClick={this.handleClick} />
      </div> :
        <img className={styles.smallImg} src={`${this.props.source}`} onClick={this.handleClick} />

    return (
      <div className={styles.thumbnails}>
        {image}
      </div>
    )
  }
}

export default Thumbnail;