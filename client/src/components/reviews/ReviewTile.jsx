import React from "react";
import styles from "./Reviews.module.css";
import Thumbnail from "./Thumbnail.jsx";
import Stars from "./Stars.jsx";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRest: false,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      showRest: !this.state.showRest,
    });
  }

  render() {
    var date = new Date(this.props.review.date);
    var month = date.toLocaleString("default", { month: "long" });
    var formatted = date.toDateString().split(" ");
    var day = formatted[2][0] === "0" ? formatted[2].slice(1) : formatted[2];
    date = `${month} ${day}, ${formatted[3]}`;

    var body = this.props.review.body;

    if (body.length > 250) {
      var reviewText = body.slice(0, 250);
      var rest = body.slice(250, body.length - 1);
    } else {
      var reviewText = body;
    }

    var thumbnails = this.props.review.photos.map((photo) => (
      <Thumbnail key={photo.id} source={photo.url} />
    ));

    var reviewText =
      this.props.review.body.length > 250
        ? this.props.review.body.slice(0, 250) + "..."
        : this.props.review.body;

    return (
      <div className={styles.reviewTile}>
        <Stars rating = {this.props.review.rating}/>
        <div className={styles.userDate}>
          {`${this.props.review.reviewer_name}, ${date}`}
        </div>
        <div className={styles.reviewSummary}>{this.props.review.summary}</div>
        <div>
          {reviewText}
          <a
            className={styles.showMore}
            style={{ display: body.length > 250 ? "block" : "none" }}
            onClick={this.showMore}
          >
            Show more
          </a>
          <div style={{ display: this.state.showRest ? "block" : "none" }}>
            {rest}
          </div>
        </div>
        <div>{thumbnails}</div>
      </div>
    );
  }
}

export default ReviewTile;
