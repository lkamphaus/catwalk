import React from "react";
import styles from "./Reviews.module.css";
import ReviewTile from "./ReviewTile.jsx";
import AddReview from "./AddReview.jsx";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      display: [],
      sort: "relevant",
    };

    this.getReviews = this.getReviews.bind(this);
    this.getMore = this.getMore.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.total !== prevProps.total) {
      this.getReviews();
    }

    if (
      JSON.stringify(this.props.filters) !== JSON.stringify(prevProps.filters)
    ) {
      var display = this.filter(this.state.reviews, this.props.filters);

      this.setState({
        display: display.slice(0, Math.max(this.state.display.length, 2)),
      });
    }
  }

  filter(reviews, filters) {
    if (filters.length === 0) {
      return reviews;
    } else {
      return reviews.filter(
        (review) => filters.indexOf(String(review.rating)) > -1
      );
    }
  }

  getReviews() {
    fetch(
      `http://localhost:3246/api/reviews/${this.props.id}/${1}/${
        this.props.total
      }/${this.state.sort}?format=json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          reviews: data,
          display: this.filter(data, this.props.filters).slice(0, 2),
        })
      )
      .catch((err) => console.log("err", err));
  }

  getMore() {
    var current = this.state.display.length;
    var reviews = this.filter(this.state.reviews, this.props.filters);
    this.setState({
      display: this.state.display.concat(reviews.slice(current, current + 2)),
    });
  }

  handleSort(e) {
    var sort = e.target.value;

    this.setState(
      {
        sort: sort,
      },
      this.getReviews
    );
  }

  render() {
    var reviews = this.state.display.map((review) => (
      <ReviewTile key={review.review_id} review={review} />
    ));

    var dropDown = (
      <select
        className={styles.dropDown}
        value={`${this.state.sort}`}
        onChange={(e) => this.handleSort(e)}
      >
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    );

    var total =
      this.state.reviews.length > 0 ? (
        <span>
          {`${this.state.reviews.length} reviews, sorted by `}
          {dropDown}
        </span>
      ) : (
        <div></div>
      );

    var moreReviews =
      this.state.display.length < this.state.reviews.length ? (
        <button className={styles.reviewButtons} onClick={this.getMore}>
          MORE REVIEWS
        </button>
      ) : (
        <div></div>
      );

    return (
      <div>
        {total}
        <div className={styles.reviewsList}>{reviews}</div>
        {moreReviews}
        <AddReview
          name={this.props.name}
          meta={this.props.meta}
        />
      </div>
    );
  }
}

export default ReviewsList;
