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
    this.updateHelpfulness = this.updateHelpfulness.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
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
        this.updateHelpfulness
      );
    }
  }

  updateHelpfulness() {
    fetch(
      `/api/reviews/${this.props.review.review_id}/helpful`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  render() {
    var date = new Date(this.props.review.date);
    var month = date.toLocaleString("default", { month: "long" });
    var formatted = date.toDateString().split(" ");
    var day = formatted[2][0] === "0" ? formatted[2].slice(1) : formatted[2];
    date = `${month} ${day}, ${formatted[3]}`;

    var shortened = this.props.review.body.slice(0, 250);

    var bodyText =
      this.props.review.body.length < 250 ? (
        <div>{this.props.review.body}</div>
      ) : this.state.showRest ? (
        <div>
          <span>{this.props.review.body} </span>
          <span
            className={styles.showMore}
            onClick={this.showMore}
          >
              Show less
          </span>
        </div>
      ) : (
        <div>
          <span>{shortened}</span>
          <span
            className={styles.showMore}
            onClick={this.showMore}
          >
            ...Show more
          </span>
        </div>
      );

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

    return (
      <div className={styles.reviewTile}>
        <Stars rating={this.props.review.rating} />
        <div className={styles.userDate}>
          {`${this.props.review.reviewer_name}, ${date}`}
        </div>
        <div className={styles.reviewSummary}>{this.props.review.summary}</div>
        <div>
          {bodyText}
          <br />
          {recommend}
          {response}
        </div>
        <div>{thumbnails}</div>
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <span>Was this review helpful? </span>
          <span
            onClick={this.markHelpful}
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
