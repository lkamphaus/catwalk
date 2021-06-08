import React from 'react';
import styles from "./Reviews.module.css";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var date = new Date(this.props.review.date);
    var month = date.toLocaleString('default', { month: 'long' });
    var formatted = date.toDateString().split(' ');
    var day = formatted[2][0] === '0' ? formatted[2].slice(1) : formatted[2];
    date = `${month} ${day}, ${formatted[3]}`;

    return (
      <div className={styles.reviewTile}>
        <div className={styles.userDate}>
          {`${this.props.review.reviewer_name}, ${date}`}
        </div>
        <div className={styles.reviewSummary}>
          {this.props.review.summary}
        </div>
        <br />
        <div>
          {this.props.review.body}
        </div>
      </div>
    )
  };
}

export default ReviewTile;