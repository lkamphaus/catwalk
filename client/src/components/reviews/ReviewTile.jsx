import React from 'react';
import styles from "./Reviews.module.css";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={styles.reviewTile}>{this.props.body}</div>);
  }
}

export default ReviewTile;