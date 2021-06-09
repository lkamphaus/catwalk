import React from "react";
import styles from "./Reviews.module.css";
import ReviewTile from "./ReviewTile.jsx"

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      display: [],
      sort: 'relevant',
    }

    this.getReviews = this.getReviews.bind(this);
    this.getMore = this.getMore.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.total !== prevProps.total) {
      this.getReviews()
    }
  }

  getReviews() {
    // console.log(this.props.total);
    fetch(`http://localhost:3246/api/reviews/${this.props.id}/${1}/${this.props.total}/${this.state.sort}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        reviews: data,
        display: data.slice(0, 2)
      }))
      .catch(err => console.log("err", err))
  }

  getMore() {
    var current = this.state.display.length;
    this.setState({
      display: this.state.display.concat(this.state.reviews.slice(current, current + 2))
    })
  }

  render() {
    var reviews = this.state.display.map((review) =>
      <ReviewTile key={review.review_id} review={review} />
    );

    var total = this.state.reviews.length > 0 ?
      <span>{`${this.state.reviews.length} reviews, sorted by relevance`}</span> : <div></div>

    var moreReviews = this.state.display.length < this.state.reviews.length ?
      <button className={styles.reviewButtons} onClick={this.getMore}>MORE REVIEWS</button> : <div></div>

    return (
      <div>
        {total}
        {reviews}
        {moreReviews}
        <button className={styles.reviewButtons}>ADD A REVIEW  +</button>
      </div>
    )
  }
}

export default ReviewsList;