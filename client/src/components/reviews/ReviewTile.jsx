import React from "react";
import styles from "./Reviews.module.css";
import Thumbnail from "./Thumbnail.jsx";
import Stars from "./Stars.jsx";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRest: false,
      markedHelpful: false,
      helpful: this.props.review.helpfulness,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      showRest: !this.state.showRest,
    });
  }

  markHelpful() {
    if (!this.state.markedHelpful) {
      this.setState(
        {
          helpful: this.state.helpful + 1,
          markedHelpful: true,
        },
        () => this.updateHelpfulness()
      );
    }
  }

  updateHelpfulness() {
    fetch(
      `http://localhost:3246/api/reviews/${this.props.review.review_id}/helpful`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  render() {
    console.log(this.props.review.review_id);
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

    var recommend = this.props.review.recommend ? (
      <div style={{ margin: "10px" }}>✔️ I recommend this product</div>
    ) : null;

    var response = this.props.review.response ? (
      <div className={styles.response}>
        <div style={{ fontWeight: "bold" }}>Response from seller:</div>
        <br />
        <div>{JSON.parse(this.props.review.response)}</div>
      </div>
    ) : null;

    var thumbnails = this.props.review.photos.map((photo) => (
      <Thumbnail key={photo.id} source={photo.url} />
    ));

    var reviewText =
      this.props.review.body.length > 250
        ? this.props.review.body.slice(0, 250) + "..."
        : this.props.review.body;

    return (
      <div className={styles.reviewTile}>
        <Stars rating={this.props.review.rating} />
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
          <br />
          {recommend}
          {response}
        </div>
        <div>{thumbnails}</div>
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <span>Was this review helpful? </span>
          <span
            onClick={() => this.markHelpful()}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#d96c06",
            }}
          >
            {`Yes (${this.state.helpful})`}
          </span>
        </div>
      </div>
    );
  }
}

export default ReviewTile;
